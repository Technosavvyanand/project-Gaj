import fs from "fs"
import path from "path"

const ROOT = process.cwd()
const APP_DIR = path.join(ROOT, "app")
const PUBLIC_DIR = path.join(ROOT, "public")
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml")

const BASE_URL = "https://projectgaj.in"

const ignoredDirectories = new Set([
  "api",
])

const ignoredFiles = new Set([
  "layout.tsx",
  "layout.ts",
  "loading.tsx",
  "loading.ts",
  "error.tsx",
  "error.ts",
  "not-found.tsx",
  "not-found.ts",
  "page.tsx",
  "robots.ts",
  "sitemap.ts",
])

function getPages(dir, route = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const pages = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) continue

      // Ignore dynamic routes for now.
      if (entry.name.startsWith("[") || entry.name.startsWith("...")) {
        continue
      }

      // Route groups such as (marketing) don't appear in the URL.
      const nextRoute = entry.name.startsWith("(")
        ? route
        : `${route}/${entry.name}`

      pages.push(...getPages(fullPath, nextRoute))
      continue
    }

    if (!entry.isFile()) continue
    if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) continue

    const cleanRoute = route || "/"

    pages.push(cleanRoute)
  }

  return pages
}

const routes = [...new Set(getPages(APP_DIR))].sort()

const urls = routes
  .map((route) => {
    const url = route === "/"
      ? BASE_URL
      : `${BASE_URL}${route}`

    return `  <url>
    <loc>${url}</loc>
  </url>`
  })
  .join("\n")

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

fs.mkdirSync(PUBLIC_DIR, { recursive: true })
fs.writeFileSync(SITEMAP_PATH, sitemap)

console.log(`Generated sitemap with ${routes.length} page(s):`)
routes.forEach((route) => console.log(`  ${route}`))
console.log(`Sitemap: ${SITEMAP_PATH}`)