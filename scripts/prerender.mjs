import { access, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import Beasties from "beasties";

const rootDir = process.cwd();
const clientDir = path.resolve(
  process.env.PRERENDER_CLIENT_DIR || path.join(rootDir, "dist"),
);
const serverDir = path.resolve(
  process.env.PRERENDER_SERVER_DIR || path.join(rootDir, ".ssr-build"),
);
const templatePath = path.join(clientDir, "index.html");

await access(templatePath);
const template = await readFile(templatePath, "utf8");
const beasties = new Beasties({
  path: clientDir,
  publicPath: "/",
  preload: "swap",
  noscriptFallback: true,
  compress: true,
  pruneSource: false,
  inlineFonts: true,
  // The font is already preloaded once in index.html; avoid duplicate hints.
  preloadFonts: false,
  logLevel: "warn",
});

const serverFiles = await readdir(serverDir);
const entryFile = serverFiles.find((file) => /^entry-server\.(m?js)$/.test(file));

if (!entryFile) {
  throw new Error(`Could not find the Vite SSR entry in ${serverDir}.`);
}

const serverEntry = await import(pathToFileURL(path.join(serverDir, entryFile)).href);
const { render, prerenderRoutes } = serverEntry;

function createDocument(url) {
  const { appHtml, head, htmlAttributes, bodyAttributes } = render(url);
  return template
    .replace(/<html[^>]*>/i, `<html ${htmlAttributes}>`)
    .replace(/<body[^>]*>/i, `<body${bodyAttributes ? ` ${bodyAttributes}` : ""}>`)
    .replace("</head>", `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

for (const route of prerenderRoutes) {
  const outputPath =
    route === "/"
      ? path.join(clientDir, "index.html")
      : path.join(clientDir, `${route.replace(/^\//, "")}.html`);

  await mkdir(path.dirname(outputPath), { recursive: true });
  const document = await beasties.process(createDocument(route));
  await writeFile(outputPath, document);
}

await writeFile(
  path.join(clientDir, "404.html"),
  await beasties.process(createDocument("/__not-found__")),
);

await writeFile(
  path.join(clientDir, "app-shell.html"),
  await beasties.process(template),
);

// The server bundle is a build-time implementation detail. Removing it keeps
// deploy artifacts lean and prevents duplicate public assets from accumulating.
if (serverDir === path.join(rootDir, ".ssr-build")) {
  await rm(serverDir, { recursive: true, force: true });
}
