/**
 * Build-time renderer. Runs after `vite build` and the SSR bundle build, and turns the
 * single-page shell into one static HTML document per route, each with its own title,
 * description, canonical, Open Graph tags and JSON-LD.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// React and react-router must be in production mode before they are first required, or
// every <Link> emits a useLayoutEffect warning that buries real render failures.
process.env.NODE_ENV = "production";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const dist = join(root, "dist");
const shellPath = join(dist, "index.html");

if (!existsSync(shellPath)) {
  throw new Error(`Missing ${shellPath}. Run "vite build" before prerendering.`);
}

const shell = readFileSync(shellPath, "utf8");
if (!shell.includes('<div id="root"></div>')) {
  throw new Error(
    `${shellPath} has no empty <div id="root">. Run "vite build" first — a filled shell is the output of a previous prerender, not a source.`,
  );
}
const site = JSON.parse(readFileSync(join(root, "src/data/site.json"), "utf8"));
const { renderRoute } = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const escText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => escText(s).replace(/"/g, "&quot;");

function absoluteUrl(route) {
  if (route === "/") return `${site.siteUrl}/`;
  return `${site.siteUrl}/${route.replace(/^\//, "")}`;
}

/**
 * Set one value inside a single head tag, inserting the tag when the shell omits it and
 * failing loudly on duplicates — a silently wrong head is the whole point of this build step.
 */
function setTag(html, { tag, attr, key, value, where }) {
  const open = new RegExp(`<${tag}\\b[^>]*?${attr}="${esc(key)}"[^>]*?>`, "s");
  const found = html.match(new RegExp(open.source, "gs")) || [];
  if (found.length > 1) {
    throw new Error(`${where}: expected at most 1 <${tag} ${attr}="${key}">, found ${found.length}`);
  }
  if (found.length === 0) {
    const tagName = tag === "link" ? "link" : "meta";
    const valueAttr = tag === "link" ? "href" : "content";
    return html.replace(
      "</head>",
      `    <${tagName} ${attr}="${esc(key)}" ${valueAttr}="${escAttr(value)}" />\n  </head>`,
    );
  }
  const valueAttr = tag === "link" ? "href" : "content";
  const valueRe = new RegExp(`\\b${valueAttr}="[^"]*"`, "s");
  if (!valueRe.test(found[0])) {
    throw new Error(`${where}: <${tag} ${attr}="${key}"> has no ${valueAttr} attribute to rewrite`);
  }
  return html.replace(open, (m) => m.replace(valueRe, () => `${valueAttr}="${escAttr(value)}"`));
}

function applyPage(html, route) {
  const page = site.pages[route];
  const url = absoluteUrl(route);
  const where = page.file;

  const titleRe = /<title>[^<]*<\/title>/;
  if (!titleRe.test(html)) throw new Error(`${where}: no <title> to rewrite`);
  let out = html.replace(titleRe, () => `<title>${escText(page.title)}</title>`);

  const pairs = [
    { tag: "meta", attr: "name", key: "description", value: page.description },
    { tag: "meta", attr: "property", key: "og:title", value: page.title },
    { tag: "meta", attr: "property", key: "og:description", value: page.description },
    { tag: "meta", attr: "property", key: "og:url", value: url },
    { tag: "meta", attr: "property", key: "og:image", value: absoluteUrl("/img/og-image.jpg") },
    { tag: "meta", attr: "name", key: "twitter:image", value: absoluteUrl("/img/og-image.jpg") },
    { tag: "meta", attr: "name", key: "twitter:title", value: page.title },
    { tag: "meta", attr: "name", key: "twitter:description", value: page.description },
    { tag: "link", attr: "rel", key: "canonical", value: url },
  ];
  for (const pair of pairs) out = setTag(out, { ...pair, where });
  return out;
}

function renderShell(route) {
  const body = renderRoute(route);
  if (body.length < 500) throw new Error(`${route}: route rendered to ${body.length} characters`);
  return shell.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
}

function write(relPath, html) {
  const target = join(dist, relPath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html, "utf8");
  return target;
}

const routes = Object.keys(site.pages).filter((k) => k !== "404");
const written = [];

for (const route of routes) {
  written.push(write(site.pages[route].file, applyPage(renderShell(route), route)));
}

const notFound = applyPage(renderShell("/no-such-page"), "404").replace(
  "</head>",
  `    <meta name="robots" content="noindex, follow" />\n  </head>`,
);
written.push(write(site.pages["404"].file, notFound));

const lastmod = new Date().toISOString().slice(0, 10);
const urls = routes.map(absoluteUrl);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
written.push(write("sitemap.xml", sitemap));

console.log(`prerender: ${routes.length} routes + 404 + sitemap.xml written`);
for (const f of written) console.log(`  ${f.slice(root.length + 1)}`);
