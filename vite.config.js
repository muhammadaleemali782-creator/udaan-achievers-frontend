import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon-192.png", "icon-512.png"],
      manifest: {
        name: "Udaan Achievers",
        short_name: "Udaan",
        description: "JEE, NEET and board exam coaching — live classes, tests and doubt support.",
        theme_color: "#1A1530",
        background_color: "#F9F8FF",
        display: "standalone",
        start_url: "/",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
        ],
      },
      workbox: {
        // Cache the app shell (JS/CSS/HTML/images) so the site opens even offline.
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
        runtimeCaching: [
          {
            // Cache API GET responses too: try the network first (for fresh
            // data), but if there's no connection, fall back to the last
            // response that was cached — so the site still shows data offline.
            urlPattern: ({ url }) => url.pathname.startsWith("/api/") || url.hostname.includes("onrender.com"),
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 7 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  build: {
    sourcemap: true,
  },
});
