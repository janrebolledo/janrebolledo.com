import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

export default defineConfig({
  site: "https://janrebolledo.com",
  integrations: [tailwind(), compress()],
  experimental: {
    assets: true,
  },
});
