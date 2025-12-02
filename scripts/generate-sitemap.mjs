import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Définir les routes statiques principales du site (ajouter si nouvelles pages)
const routes = [
  "/",
  "/a-propos",
  "/actions",
  "/debats",
  "/ressources",
  "/capsules-video",
  "/capsules-video/vote-16-ans",
  "/capsules-video/ecologie-politique",
  "/capsules-video/liberte-expression",
  "/createurs",
  "/contact",
  "/citoyennete-guadeloupe",
  "/ressources/annuaire-associations-guadeloupe",
  "/mentions-legales",
  "/politique-confidentialite",
  "/cookies",
];

const baseUrl = process.env.SITE_BASE_URL || "https://citoyenaction.fr";
const lastmod = new Date().toISOString().split("T")[0];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
  routes
    .map(
      (r) =>
        `\n  <url><loc>${baseUrl}${r}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${
          r === "/" ? "1.0" : "0.6"
        }</priority></url>`
    )
    .join("") +
  "\n</urlset>\n";

writeFileSync(resolve("public", "sitemap.xml"), xml, "utf-8");
console.log("✅ sitemap.xml généré (routes:", routes.length, ")");
