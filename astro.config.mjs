// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== "https://heredom.com.mx/style-guide/",
    }),
  ],
  site: "https://heredom.com.mx",
  trailingSlash: "always",
});
