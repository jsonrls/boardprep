import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { trackVisit } from "./lib/visitTracker";
import { ClientAppRoutes } from "./routes/ClientAppRoutes";

const browserQueryClient = new QueryClient();

const VisitTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const track = () => {
      void trackVisit({
        path: location.pathname,
        search: location.search,
        referrer: document.referrer || undefined,
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(track, { timeout: 3_000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(track, 1_500);
    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.search]);

  return null;
};

type AppProvidersProps = {
  children: ReactNode;
  helmetContext?: Record<string, unknown>;
  queryClient?: QueryClient;
};

export const AppProviders = ({
  children,
  helmetContext,
  queryClient = browserQueryClient,
}: AppProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider context={helmetContext}>{children}</HelmetProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <VisitTracker />
      <ClientAppRoutes />
      <Analytics />
    </BrowserRouter>
  </AppProviders>
);

export default App;
