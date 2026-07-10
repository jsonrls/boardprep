import { apiPost } from "./api";

const VISITOR_ID_STORAGE_KEY = "bp_visitor_id";
const UTM_ATTRIBUTION_STORAGE_KEY = "bp_utm_attribution";
/** Last non-direct social attribution window (Phase 2). */
const ATTRIBUTION_WINDOW_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const SUPPORTED_UTM_SOURCES = new Set(["instagram", "facebook"]);
const SUPPORTED_UTM_MEDIUMS = new Set(["social"]);
/** Client-side guard against double-fires from React re-renders / double clicks. */
const CLIENT_CONVERSION_DEDUPE_MS = 2_000;

const allowedHosts = new Set(["www.myboardprep.org", "myboardprep.org"]);
const localHosts = new Set(["localhost", "127.0.0.1"]);

let cachedVisitorId: string | null = null;
let hasLoadedVisitorId = false;
const recentClientConversions = new Map<string, number>();

/**
 * Current conversion types (Phase 2).
 * TODO(future-deep-attribution): drills_signup | app_registration after platform revamps.
 * Drills and app events today are CTA click-intent only — not verified registrations/installs.
 */
export type ConversionType = "enrollment" | "drills_click" | "app_download_click";

/** Reserved for future deep attribution — never sent by BoardPrep public tracking yet. */
export type FutureConversionType = "drills_signup" | "app_registration";

type TrackVisitPayload = {
  path: string;
  search?: string;
  referrer?: string;
};

type TrackConversionPayload = {
  type?: ConversionType;
  examType?: string;
  referrer?: string;
};

export type SocialUtmAttribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

type VisitEventPayload = {
  visitorId: string;
  path: string;
  search: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

type StoredUtmAttribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  timestamp: number;
};

const fallbackUuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = Math.floor(Math.random() * 16);
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });

const createVisitorId = () =>
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : fallbackUuid();

function getOrCreateVisitorId() {
  if (cachedVisitorId) {
    return cachedVisitorId;
  }

  if (!hasLoadedVisitorId) {
    hasLoadedVisitorId = true;
    try {
      const saved = window.localStorage.getItem(VISITOR_ID_STORAGE_KEY)?.trim();
      if (saved) {
        cachedVisitorId = saved;
        return saved;
      }
    } catch {
      // Ignore storage access errors and fall back to an in-memory identifier.
    }
  }

  const nextVisitorId = createVisitorId();
  cachedVisitorId = nextVisitorId;

  try {
    window.localStorage.setItem(VISITOR_ID_STORAGE_KEY, nextVisitorId);
  } catch {
    // Ignore storage write errors and rely on the cached in-memory identifier.
  }

  return nextVisitorId;
}

function getCampaignFields(search: string) {
  const searchParams = new URLSearchParams(search.startsWith("?") ? search : search ? `?${search}` : "");

  const utmSource = searchParams.get("utm_source")?.trim().toLowerCase() || undefined;
  const utmMedium = searchParams.get("utm_medium")?.trim().toLowerCase() || undefined;
  const utmCampaign = searchParams.get("utm_campaign")?.trim() || undefined;

  return { utmSource, utmMedium, utmCampaign };
}

function isSupportedSocialAttribution(
  utmSource: string | undefined,
  utmMedium: string | undefined,
  utmCampaign: string | undefined
): utmSource is string {
  return Boolean(
    utmSource &&
      utmMedium &&
      utmCampaign &&
      SUPPORTED_UTM_SOURCES.has(utmSource.toLowerCase()) &&
      SUPPORTED_UTM_MEDIUMS.has(utmMedium.toLowerCase())
  );
}

function saveUtmAttribution(utmSource: string, utmMedium: string, utmCampaign: string): void {
  if (!isSupportedSocialAttribution(utmSource, utmMedium, utmCampaign)) {
    return;
  }

  try {
    const attribution: StoredUtmAttribution = {
      utmSource: utmSource.toLowerCase(),
      utmMedium: utmMedium.toLowerCase(),
      utmCampaign,
      timestamp: Date.now(),
    };
    window.localStorage.setItem(UTM_ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Ignore storage write errors
  }
}

function getStoredUtmAttribution(): SocialUtmAttribution | null {
  try {
    const stored = window.localStorage.getItem(UTM_ATTRIBUTION_STORAGE_KEY);
    if (!stored) return null;

    const attribution: StoredUtmAttribution = JSON.parse(stored);
    const age = Date.now() - attribution.timestamp;

    // Attribution window: 30 days
    if (age > ATTRIBUTION_WINDOW_MS) {
      window.localStorage.removeItem(UTM_ATTRIBUTION_STORAGE_KEY);
      return null;
    }

    if (
      !isSupportedSocialAttribution(
        attribution.utmSource,
        attribution.utmMedium,
        attribution.utmCampaign
      )
    ) {
      window.localStorage.removeItem(UTM_ATTRIBUTION_STORAGE_KEY);
      return null;
    }

    return {
      utmSource: attribution.utmSource,
      utmMedium: attribution.utmMedium,
      utmCampaign: attribution.utmCampaign,
    };
  } catch {
    return null;
  }
}

/**
 * Read current social attribution (URL first, then 30-day stored last social).
 * Used for conversion payloads and future Drills UTM handoff (Option A).
 */
export function getActiveSocialAttribution(): SocialUtmAttribution | null {
  if (typeof window === "undefined") return null;

  const fromUrl = getCampaignFields(window.location.search || "");
  if (
    isSupportedSocialAttribution(fromUrl.utmSource, fromUrl.utmMedium, fromUrl.utmCampaign)
  ) {
    return {
      utmSource: fromUrl.utmSource!,
      utmMedium: fromUrl.utmMedium!,
      utmCampaign: fromUrl.utmCampaign!,
    };
  }

  return getStoredUtmAttribution();
}

/**
 * Append BoardPrep social UTM params to an outbound URL (e.g. Drills).
 * TODO(future-deep-attribution): Drills should persist these and emit drills_signup.
 * Never blocks navigation if URL parsing fails.
 */
export function withSocialAttribution(href: string): string {
  const attribution = getActiveSocialAttribution();
  if (!attribution) return href;

  try {
    const url = new URL(href, window.location.origin);
    if (!url.searchParams.get("utm_source")) {
      url.searchParams.set("utm_source", attribution.utmSource);
    }
    if (!url.searchParams.get("utm_medium")) {
      url.searchParams.set("utm_medium", attribution.utmMedium);
    }
    if (!url.searchParams.get("utm_campaign")) {
      url.searchParams.set("utm_campaign", attribution.utmCampaign);
    }
    return url.toString();
  } catch {
    return href;
  }
}

function shouldSkipClientConversion(type: ConversionType): boolean {
  const now = Date.now();
  const last = recentClientConversions.get(type);
  if (last !== undefined && now - last < CLIENT_CONVERSION_DEDUPE_MS) {
    return true;
  }
  recentClientConversions.set(type, now);
  return false;
}

const isDevTrackingEnabled = () => {
  const raw = import.meta.env.VITE_ENABLE_VISIT_TRACKING_DEV;
  if (raw === true || raw === 1) return true;
  if (typeof raw !== "string") return false;
  const normalized = raw.trim().toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes";
};

export async function trackVisit(payload: TrackVisitPayload): Promise<void> {
  const host = window.location.hostname.toLowerCase();
  const allowDevTracking = isDevTrackingEnabled();
  const isLocalDevHost = localHosts.has(host);
  const isAllowedProdHost = allowedHosts.has(host);

  if (!import.meta.env.PROD && !(allowDevTracking && isLocalDevHost)) {
    return;
  }

  if (!isAllowedProdHost && !(allowDevTracking && isLocalDevHost)) {
    return;
  }

  const path = payload.path.trim();
  if (!path.startsWith("/")) return;

  const search = payload.search?.trim() || "";
  const campaignFields = getCampaignFields(search);

  // Persist last non-direct social UTM attribution across navigation (30-day window).
  if (
    isSupportedSocialAttribution(
      campaignFields.utmSource,
      campaignFields.utmMedium,
      campaignFields.utmCampaign
    )
  ) {
    saveUtmAttribution(
      campaignFields.utmSource,
      campaignFields.utmMedium,
      campaignFields.utmCampaign
    );
  }

  const body: VisitEventPayload = {
    visitorId: getOrCreateVisitorId(),
    path,
    search,
    referrer: payload.referrer,
    ...campaignFields,
  };

  try {
    await apiPost("/public/visit", body);
  } catch (error) {
    if (!import.meta.env.PROD) {
      console.warn("[visit-tracker] failed to submit visit", {
        error,
        path,
        host,
      });
    }
    // Best effort only. Analytics failures should never affect UX.
  }
}

export async function trackConversion(payload: TrackConversionPayload): Promise<void> {
  const host = window.location.hostname.toLowerCase();
  const allowDevTracking = isDevTrackingEnabled();
  const isLocalDevHost = localHosts.has(host);
  const isAllowedProdHost = allowedHosts.has(host) || host.endsWith(".vercel.app");

  if (!import.meta.env.PROD && !(allowDevTracking && isLocalDevHost)) {
    return;
  }

  if (!isAllowedProdHost && !(allowDevTracking && isLocalDevHost)) {
    return;
  }

  const type: ConversionType = payload.type || "enrollment";

  // Fire-and-forget path must never block CTA navigation; also ignore rapid duplicates.
  if (shouldSkipClientConversion(type)) {
    return;
  }

  const search = window.location.search || "";
  const campaignFields = getCampaignFields(search);

  // Prefer current URL UTMs when present; otherwise fall back to stored social attribution.
  const storedAttribution = getStoredUtmAttribution();
  const finalUtmSource = campaignFields.utmSource || storedAttribution?.utmSource;
  const finalUtmMedium = campaignFields.utmMedium || storedAttribution?.utmMedium;
  const finalUtmCampaign = campaignFields.utmCampaign || storedAttribution?.utmCampaign;

  const body = {
    visitorId: getOrCreateVisitorId(),
    type,
    examType: payload.examType,
    referrer: payload.referrer,
    utmSource: finalUtmSource,
    utmMedium: finalUtmMedium,
    utmCampaign: finalUtmCampaign,
  };

  try {
    await apiPost("/public/conversion", body, { keepalive: true });
  } catch (error) {
    if (!import.meta.env.PROD) {
      console.warn("[visit-tracker] failed to submit conversion", {
        error,
        type: payload.type,
        examType: payload.examType,
        host,
      });
    }
    // Best effort only. Analytics failures should never affect UX.
  }
}
