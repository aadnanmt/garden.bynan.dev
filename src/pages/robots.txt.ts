import type { APIRoute } from 'astro'
import { SITE } from '@consts'

// build time only
// Astro calls GET at build,
// saves output as static robots.txt (output on dist/robots.txt)
// yupp, no runtime cost
// this file never runs on server
const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${new URL('sitemap-index.xml', SITE.URL).href}
`.trim()
export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
