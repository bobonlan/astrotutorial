import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://merry-manatee-576ec8.netlify.app/",
  integrations: [preact()]
});