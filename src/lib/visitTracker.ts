import { apiPost } from "./api";

type TrackVisitPayload = {
  path: string;
  referrer?: string;
};

export async function trackVisit(payload: TrackVisitPayload): Promise<void> {
  if (!import.meta.env.PROD) return;

  const host = window.location.hostname.toLowerCase();
  const allowedHosts = new Set(["www.myboardprep.org", "myboardprep.org"]);
  if (!allowedHosts.has(host)) return;

  try {
    await apiPost("/public/visit", payload);
  } catch {
    // Best effort only. Analytics failures should never affect UX.
  }
}
