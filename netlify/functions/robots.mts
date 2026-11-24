import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

const DEFAULT_ROBOTS =
  "User-agent: *\nAllow: /\nDisallow: /seo-admin\n\nSitemap: https://jexorasolutions.com/sitemap.xml\n";

export default async (_req: Request, context: Context) => {
  const isProd = context.deploy?.context === "production";
  const storeName = isProd ? "jexora-seo-live" : "jexora-seo-preview";
  let robotsText = DEFAULT_ROBOTS;

  try {
    const store = getStore({ name: storeName, consistency: "strong" });
    const saved: any = await store.get("live-seo-config", { type: "json" });
    if (saved && typeof saved.robotsRules === "string" && saved.robotsRules.trim()) {
      robotsText = saved.robotsRules.trim() + "\n";
    } else if (saved && saved.siteUrl) {
      const baseUrl = String(saved.siteUrl).replace(/\/+$/, "");
      robotsText = `User-agent: *\nAllow: /\nDisallow: /seo-admin\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
    }
  } catch (_) {}

  return new Response(robotsText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
};

export const config: Config = {
  path: "/robots.txt",
  method: ["GET"],
};
