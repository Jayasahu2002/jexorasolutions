import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

const DEFAULT_SITE_URL = "https://jexorasolutions.com";
const DEFAULT_ROUTES: Array<{ route: string; changefreq: string; priority: string }> = [
  { route: "/", changefreq: "weekly", priority: "1.0" },
  { route: "/services", changefreq: "monthly", priority: "0.9" },
  { route: "/industries", changefreq: "monthly", priority: "0.8" },
  { route: "/blog", changefreq: "weekly", priority: "0.85" },
  { route: "/faq", changefreq: "monthly", priority: "0.8" },
  { route: "/about", changefreq: "monthly", priority: "0.8" },
  { route: "/contact", changefreq: "monthly", priority: "0.9" },
  { route: "/blog/aeo-geo-ai-search-guide-2026", changefreq: "monthly", priority: "0.75" },
  { route: "/blog/google-meta-click-to-whatsapp-funnel", changefreq: "monthly", priority: "0.75" },
  { route: "/blog/conversion-engineered-landing-page-patterns", changefreq: "monthly", priority: "0.75" },
  { route: "/blog/short-form-reels-three-second-hook-playbook", changefreq: "monthly", priority: "0.75" },
  { route: "/blog/restaurants-hotels-local-seo-direct-bookings", changefreq: "monthly", priority: "0.75" },
  { route: "/blog/global-consultation-funnels-high-trust-brands", changefreq: "monthly", priority: "0.75" },
];

export default async (_req: Request, context: Context) => {
  const isProd = context.deploy?.context === "production";
  const storeName = isProd ? "jexora-seo-live" : "jexora-seo-preview";
  let saved: any = null;

  try {
    const store = getStore({ name: storeName, consistency: "strong" });
    saved = await store.get("live-seo-config", { type: "json" });
  } catch (_) {
    saved = null;
  }

  const baseUrl = String(saved?.siteUrl || DEFAULT_SITE_URL).replace(/\/+$/, "");
  let urlsXml = "";

  if (saved && saved.pages && typeof saved.pages === "object") {
    urlsXml = Object.keys(saved.pages)
      .filter((route) => {
        const p = saved.pages[route];
        return route !== "/seo-admin" && !String(p?.robots || "").includes("noindex");
      })
      .map((route) => {
        const p = saved.pages[route] || {};
        const loc = route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`;
        return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${p.changefreq || "monthly"}</changefreq>\n    <priority>${p.priority || "0.8"}</priority>\n  </url>`;
      })
      .join("\n");
  } else {
    urlsXml = DEFAULT_ROUTES.map((item) => {
      const loc = item.route === "/" ? `${baseUrl}/` : `${baseUrl}${item.route}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${item.changefreq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`;
    }).join("\n");
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
};

export const config: Config = {
  path: "/sitemap.xml",
  method: ["GET"],
};
