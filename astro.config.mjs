import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
//import UnoCSS from 'unocss/astro';

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [solidJs(), mdx(), 
  //UnoCSS({
    // injectReset: true
  //}),
   prefetch()]
});
