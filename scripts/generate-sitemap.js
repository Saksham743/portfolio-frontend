import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://www.buildwithsaksham.com";
const TODAY = new Date().toISOString().split("T")[0];

const staticPages = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "services", priority: "0.9", changefreq: "weekly" },
  { path: "process", priority: "0.8", changefreq: "monthly" },
  { path: "workflows", priority: "0.8", changefreq: "monthly" },
  { path: "about", priority: "0.7", changefreq: "monthly" },
  { path: "resources", priority: "0.7", changefreq: "weekly" },
  { path: "faq", priority: "0.6", changefreq: "monthly" },
  { path: "contact", priority: "0.8", changefreq: "monthly" },
  { path: "privacy", priority: "0.3", changefreq: "yearly" },
  { path: "terms", priority: "0.3", changefreq: "yearly" },
];

const servicesFile = fs.readFileSync(
  path.resolve("src/data/services.ts"),
  "utf8"
);

const slugRegex = /slug:\s*"([^"]+)"/g;

const servicePages = [...servicesFile.matchAll(slugRegex)].map((match) => ({
  path: `services/${match[1]}`,
  priority: "0.8",
  changefreq: "monthly",
}));

const pages = [...staticPages, ...servicePages];

const duplicatePaths = pages.filter(
  (page, index) =>
    pages.findIndex((p) => p.path === page.path) !== index
);

if (duplicatePaths.length) {
  throw new Error(
    `Duplicate sitemap paths found: ${duplicatePaths
      .map((p) => p.path)
      .join(", ")}`
  );
}

const urls = pages
  .sort((a, b) => a.path.localeCompare(b.path))
  .map(({ path: pagePath, priority, changefreq }) => {
    const url = pagePath ? `${BASE_URL}/${pagePath}` : BASE_URL;

    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(
  path.resolve("public/sitemap.xml"),
  sitemap
);

console.log(`✅ Generated sitemap with ${pages.length} URLs`);