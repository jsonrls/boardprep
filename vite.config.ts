import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  // The SSR bundle is only a temporary prerendering input. Copying the public
  // directory into it duplicates every static asset and can create sync-file
  // conflicts on macOS/iCloud-backed workspaces.
  publicDir: isSsrBuild ? false : "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://boardprep-backend.vercel.app",
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyRequest) => {
            proxyRequest.removeHeader("origin");
          });
        },
      },
    },
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: isSsrBuild
        ? {
            entryFileNames: "entry-server.mjs",
          }
        : {
            manualChunks: {
              vendor: ["react", "react-dom", "react-router-dom"],
              ui: ["@radix-ui/react-dialog", "@radix-ui/react-select"],
            },
          },
    },
  },
}));
