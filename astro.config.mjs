// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

const LIVE_URL="https://SanaChouikhi.github.io/Portfolio";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [react(), tailwind(), sitemap()],
  site:LIVE_URL,
});