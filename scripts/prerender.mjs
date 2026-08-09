// Builds a fully static version of the site for GitHub Pages.
// 1. Serves the production build locally (wrangler, matching the real server runtime)
// 2. Crawls every route and saves the rendered HTML
// 3. Copies client assets and downloads Lovable-hosted images so the site is self-contained
// 4. Rewrites absolute URLs when the site is served from a subpath (project Pages site)
//
// Output: dist/pages  (ready to upload to GitHub Pages)
import { spawn } from "node:child_process";
import { cp, mkdir, writeFile, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const PORT = Number(process.env.PRERENDER_PORT || 4178);
const OUT = path.resolve("dist/pages");
const ASSET_ORIGIN =
  process.env.ASSET_ORIGIN || "https://id-preview--902b8934-d73b-4e1a-a1d4-f19a32758a68.lovable.app";

// e.g. "/new-era-party-rental/" for https://<user>.github.io/new-era-party-rental/
const RAW_BASE = process.env.VITE_PAGES_BASE || "/";
const BASE = RAW_BASE === "/" ? "/" : `/${RAW_BASE.replace(/^\/|\/$/g, "")}/`;
const basePrefix = BASE === "/" ? "" : BASE.slice(0, -1); // "" or "/new-era-party-rental"

const ROUTES = ["/", "/about", "/rentals", "/gallery", "/quote", "/contact", "/sitemap.xml"];

const server = spawn(
  "npx",
  ["wrangler", "dev", "--port", String(PORT), "--ip", "127.0.0.1", "--local"],
  { cwd: path.resolve("dist"), stdio: "inherit" },
);

const origin = `http://127.0.0.1:${PORT}`;

async function waitForServer() {
  for (let i = 0; i < 90; i++) {
    try {
      const res = await fetch(`${origin}/`);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("Local server did not start in time");
}

async function copyLovableAssets() {
  const dir = path.resolve("src/assets");
  let entries = [];
  try {
    entries = (await readdir(dir)).filter((f) => f.endsWith(".asset.json"));
  } catch {
    return;
  }
  for (const entry of entries) {
    const meta = JSON.parse(await readFile(path.join(dir, entry), "utf8"));
    if (!meta.url) continue;
    const dest = path.join(OUT, meta.url.replace(/^\//, ""));
    const res = await fetch(`${ASSET_ORIGIN}${meta.url}`);
    if (!res.ok) throw new Error(`Failed to download asset ${meta.url}: ${res.status}`);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  }
  console.log(`downloaded ${entries.length} image assets`);
}

// Prefix root-absolute asset URLs with the Pages subpath.
const REWRITE = /(["'(=])\/(assets\/|__l5e\/|favicon\.png|robots\.txt)/g;

async function rewriteTree(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await rewriteTree(full);
      continue;
    }
    if (!/\.(html|js|mjs|css|xml|json|map)$/.test(entry.name)) continue;
    const text = await readFile(full, "utf8");
    let next = text.replace(REWRITE, `$1${basePrefix}/$2`);
    if (entry.name.endsWith(".html")) {
      // Internal links must match the client router's basepath.
      for (const route of ROUTES.filter((r) => !r.endsWith(".xml"))) {
        const target = route === "/" ? `${basePrefix}/` : `${basePrefix}${route}`;
        next = next
          .split(`href="${route}"`)
          .join(`href="${target}"`)
          .split(`action="${route}"`)
          .join(`action="${target}"`);
      }
    }
    if (next !== text) await writeFile(full, next);
  }
}

try {
  await waitForServer();

  await cp("dist/client", OUT, { recursive: true });

  for (const route of ROUTES) {
    const url = `${origin}${route}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to prerender ${route}: ${res.status}`);
    const body = await res.text();
    const file = route.endsWith(".xml")
      ? path.join(OUT, route)
      : path.join(OUT, route === "/" ? "index.html" : `${route}/index.html`);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, body);
    console.log(`prerendered ${route}`);
  }

  await copyLovableAssets();

  if (basePrefix) {
    await rewriteTree(OUT);
    console.log(`rewrote asset URLs for base ${BASE}`);
  }

  // SPA fallback so deep links / refreshes work on GitHub Pages.
  await writeFile(path.join(OUT, "404.html"), await readFile(path.join(OUT, "index.html")));
  const customDomain = (process.env.PAGES_CUSTOM_DOMAIN || "").trim();
  if (customDomain) {
    await writeFile(path.join(OUT, "CNAME"), `${customDomain}\n`);
    console.log(`wrote CNAME for ${customDomain}`);
  }
  // Serve files/folders that start with "_".
  await writeFile(path.join(OUT, ".nojekyll"), "");
  await stat(path.join(OUT, "index.html"));
  console.log(`Static site ready in dist/pages (base: ${BASE})`);
} finally {
  server.kill("SIGTERM");
}
