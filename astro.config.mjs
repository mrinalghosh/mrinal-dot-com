// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config

// Only serve under the /mrinal-dot-com/ subpath for the production build
// (that's where GitHub Pages hosts it). In `astro dev` NODE_ENV is
// "development", so local dev stays at the root — http://localhost:4321/.
// `astro build` and `astro preview` set NODE_ENV=production, matching Pages.
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  // When you move to a custom domain: set `site` to that domain and DELETE
  // the `base` line (paths resolve at the root and withBase() becomes a no-op).
  site: 'https://mrinalghosh.github.io',
  base: isProd ? '/mrinal-dot-com' : '/',
});
