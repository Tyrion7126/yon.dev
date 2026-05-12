// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: "https://yoonion.vercel.app/",
  integrations: [
    react(),
    sitemap(),
    favicons({
      name: "Yon",
      short_name: "Yon",
      input: {
        favicons: ["public/favicon.png"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
