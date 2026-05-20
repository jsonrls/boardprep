import { apiPost } from "./api";

const VISITOR_ID_STORAGE_KEY = "bp_visitor_id";
const allowedHosts = new Set(["www.myboardprep.org", "myboardprep.org"]);
const localHosts = new Set(["localhost", "127.0.0.1"]);

let cachedVisitorId: string | null = null;
let hasLoadedVisitorId = false;

type TrackVisitPayload = {
  path: string;
  search?: string;
  referrer?: string;
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
  const searchParams = new URLSearchParams(search);

  return {
    utmSource: searchParams.get("utm_source")?.trim() || undefined,
    utmMedium: searchParams.get("utm_medium")?.trim() || undefined,
    utmCampaign: searchParams.get("utm_campaign")?.trim() || undefined,
  };
}

const isDevTrackingEnabled = () => {
  const raw = import.meta.env.VITE_ENABLE_VISIT_TRACKING_DEV;
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
  const body: VisitEventPayload = {
    visitorId: getOrCreateVisitorId(),
    path,
    search,
    referrer: payload.referrer,
    ...getCampaignFields(search),
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
