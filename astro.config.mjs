// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: "https://fiqri.dev",
  integrations: [
    react(),
    sitemap(),
    favicons({
      name: "Fiqri Syah Redha",
      short_name: "Fiqri",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
