import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

const CONFIG_KEY = "live-seo-config";
const AUTH_KEY = "admin-passcode-hash";
const INITIAL_PASSCODE = "jexora2026";

async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function getScopedStore(context: Context) {
  const isProd = context.deploy?.context === "production";
  const storeName = isProd ? "jexora-seo-live" : "jexora-seo-preview";
  return getStore({ name: storeName, consistency: "strong" });
}

async function verifyPasscode(
  supplied: string,
  store: ReturnType<typeof getStore>
): Promise<boolean> {
  if (!supplied) return false;
  const envPass = Netlify.env.get("SEO_ADMIN_PASSCODE");
  if (envPass && envPass.trim()) {
    return supplied === envPass.trim();
  }
  const storedHash = await store.get(AUTH_KEY);
  const suppliedHash = await sha256(supplied);
  if (storedHash) {
    return suppliedHash === storedHash;
  }
  const initialHash = await sha256(INITIAL_PASSCODE);
  return suppliedHash === initialHash;
}

export default async (req: Request, context: Context) => {
  const store = getScopedStore(context);

  if (req.method === "GET") {
    try {
      const saved = await store.get(CONFIG_KEY, { type: "json" });
      return Response.json(
        { ok: true, source: saved ? "cloud" : "default", config: saved || null },
        {
          status: 200,
          headers: {
            "Cache-Control": "no-store, max-age=0",
          },
        }
      );
    } catch (err) {
      return Response.json(
        { ok: false, error: "Failed to read live SEO config", detail: String(err) },
        { status: 500 }
      );
    }
  }

  if (req.method === "POST") {
    try {
      const passcode = (req.headers.get("x-seo-passcode") || "").trim();
      const valid = await verifyPasscode(passcode, store);
      if (!valid) {
        return Response.json(
          { ok: false, error: "Invalid SEO Admin passcode." },
          { status: 401 }
        );
      }

      const payload = await req.json();

      if (payload && payload.action === "verify") {
        return Response.json({ ok: true, authenticated: true }, { status: 200 });
      }

      if (payload && payload.action === "change_passcode") {
        if (Netlify.env.get("SEO_ADMIN_PASSCODE")) {
          return Response.json(
            {
              ok: false,
              error:
                "Passcode is managed via Netlify Environment Variable SEO_ADMIN_PASSCODE.",
            },
            { status: 400 }
          );
        }
        const nextPass = String(payload.newPasscode || "").trim();
        if (nextPass.length < 4) {
          return Response.json(
            { ok: false, error: "New passcode must be at least 4 characters." },
            { status: 400 }
          );
        }
        await store.set(AUTH_KEY, await sha256(nextPass));
        return Response.json(
          { ok: true, message: "Cloud admin passcode updated." },
          { status: 200 }
        );
      }

      if (payload && payload.action === "reset") {
        await store.delete(CONFIG_KEY);
        return Response.json(
          { ok: true, message: "Live SEO config reset to defaults." },
          { status: 200 }
        );
      }

      const nextConfig = payload && payload.config ? payload.config : payload;
      if (!nextConfig || typeof nextConfig !== "object" || !nextConfig.pages) {
        return Response.json(
          { ok: false, error: "Invalid SEO config payload." },
          { status: 400 }
        );
      }

      await store.setJSON(CONFIG_KEY, nextConfig);
      return Response.json(
        {
          ok: true,
          savedAt: new Date().toISOString(),
          message: "SEO config published live globally.",
        },
        { status: 200 }
      );
    } catch (err) {
      return Response.json(
        { ok: false, error: "Failed to save live SEO config", detail: String(err) },
        { status: 500 }
      );
    }
  }

  return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
};

export const config: Config = {
  path: "/api/seo-config",
  method: ["GET", "POST"],
};
