# Logic

1. Set up tRPC using this [blog](https://invertase.io/blog/astro-trpc-v10/)
1. Set up nanostore & all the logic outside of components

# Design
1. Go through the next js frontend and copy the codes for now, will add optimisations later
1. Integrate vanilla UnoCSS (without presets version)
1. Try not to go for 

# Plugins
1. Always define your images using `<Image />` or `<Picture />` from `@astro/images` plugin
1. All the links u add, be sure to add `rel="prefetch"` in your `<a />` tags to prefetch links the time they appear on the screen to reduce loadtime
1. Add the URL property in `astro.config.mjs` for sitemaps and follow the further [instructions](https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage)
1. Use Unlighthouse feature to monitor performance as shown [here](https://youtu.be/0fONene3OIA)
