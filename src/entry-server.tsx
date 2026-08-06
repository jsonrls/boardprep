import { QueryClient } from "@tanstack/react-query";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import { AppProviders } from "./App";
import { StaticAppRoutes } from "./routes/StaticAppRoutes";
import { PRERENDER_ROUTES } from "./seo/routes";

export const prerenderRoutes = PRERENDER_ROUTES;

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  const appHtml = renderToString(
    <AppProviders helmetContext={helmetContext} queryClient={queryClient}>
      <StaticRouter location={url}>
        <StaticAppRoutes />
      </StaticRouter>
    </AppProviders>,
  );

  const helmet = helmetContext.helmet;
  const head = [
    helmet?.title?.toString(),
    helmet?.priority?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
  ]
    .filter(Boolean)
    .join("\n");

  return {
    appHtml,
    head,
    htmlAttributes: helmet?.htmlAttributes?.toString() ?? 'lang="en-PH"',
    bodyAttributes: helmet?.bodyAttributes?.toString() ?? "",
  };
}
