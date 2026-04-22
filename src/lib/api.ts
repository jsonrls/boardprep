export type ApiError = {
  message?: string;
  status?: number;
};

const baseUrl =
  (import.meta as any).env?.VITE_API_URL?.toString?.() ||
  "http://localhost:5050/api";

export const apiBaseUrl = baseUrl.replace(/\/+$/, "");

async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${apiBaseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    credentials: "include",
  });

  if (!res.ok) {
    let payload: any = undefined;
    try {
      payload = await res.json();
    } catch {
      // ignore
    }
    const err: ApiError = {
      status: res.status,
      message: payload?.message || res.statusText || "Request failed",
    };
    throw err;
  }

  return (await res.json()) as T;
}

export function apiGet<T>(path: string, init?: RequestInit) {
  return apiRequest<T>(path, { ...init, method: "GET" });
}

export function apiPost<T>(path: string, body?: unknown, init?: RequestInit) {
  return apiRequest<T>(path, {
    ...init,
    method: "POST",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

