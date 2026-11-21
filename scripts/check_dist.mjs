/**
 * Gate check for the pre-rendered output in dist/: one JSON-LD graph per indexable
 * route, valid JSON, unique title/description/canonical, no AggregateRating, no dead
 * href="#", every referenced local asset present. Run after `npm run build`.
 */
import { readFileSync, existsSync, globSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.argv[2] ?? "dist";
const docs = [...globSync(`${ROOT}/**/index.html`), `${ROOT}/404.html`].filter(existsSync);

const problems = [];
const titles = new Map();
const descriptions = new Map();

for (const doc of docs) {
  const html = readFileSync(doc, "utf8");
  const text = html.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  // Meta tags in the source are wrapped across lines, so match whole tags then read attributes.
  const metas = [...html.matchAll(/<meta\b[\s\S]*?>/g)].map((m) => {
    const attr = (name) => m[0].match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`))?.[1] ?? "";
    return { key: attr("name") || attr("property"), content: attr("content") };
  });
  const meta = (key) => metas.find((m) => m.key === key)?.content ?? "";
  const description = meta("description");
  const robots = meta("robots");
  const canonical = html.match(/<link\b[\s\S]*?rel="canonical"[\s\S]*?href="([^"]*)"/)?.[1] ?? "";

  if (!title) problems.push(`${doc}: no <title>`);
  if (!description) problems.push(`${doc}: no meta description`);
  if (description.length > 160) problems.push(`${doc}: description ${description.length} chars (>160)`);
  if (!canonical) problems.push(`${doc}: no canonical`);
  for (const key of ["og:title", "og:description", "og:url", "og:image", "twitter:card"]) {
    if (!meta(key)) problems.push(`${doc}: no ${key}`);
  }
  if (canonical && description && meta("og:description") !== description) {
    problems.push(`${doc}: og:description differs from meta description`);
  }
  if (meta("og:title") && title && meta("og:title") !== title) {
    problems.push(`${doc}: og:title differs from <title>`);
  }
  titles.set(title, [...(titles.get(title) ?? []), doc]);
  descriptions.set(description, [...(descriptions.get(description) ?? []), doc]);

  const h1 = (html.match(/<h1\b/g) ?? []).length;
  if (h1 !== 1) problems.push(`${doc}: ${h1} <h1> elements (expected 1)`);

  const images = [...html.matchAll(/<img\b[^>]*>/g)];
  for (const img of images) {
    if (!/\balt="[^"]+"/.test(img[0])) problems.push(`${doc}: <img> without alt: ${img[0].slice(0, 80)}`);
    const src = img[0].match(/\bsrc="([^"]+)"/)?.[1] ?? "";
    if (src.startsWith("/") && !existsSync(join(ROOT, src))) problems.push(`${doc}: <img src="${src}"> missing in ${ROOT}`);
  }

  const dead = (html.match(/href="#"/g) ?? []).length;
  if (dead) problems.push(`${doc}: ${dead} placeholder href="#" links`);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const types = [];
  for (const block of blocks) {
    let data;
    try {
      data = JSON.parse(block[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"'));
    } catch (error) {
      problems.push(`${doc}: invalid JSON-LD (${error.message})`);
      continue;
    }
    types.push(...(data["@graph"] ?? [data]).map((n) => n["@type"]));
  }
  if (types.some((t) => /AggregateRating|^Review$/.test(String(t)))) {
    problems.push(`${doc}: structured data carries ratings/reviews`);
  }
  const is404 = doc.endsWith("404.html");
  if (!is404 && blocks.length !== 1) problems.push(`${doc}: ${blocks.length} JSON-LD blocks (expected 1)`);
  if (is404 && !/noindex/.test(robots)) problems.push(`${doc}: missing noindex (meta robots="${robots}")`);
  if (!is404 && /noindex/.test(robots)) problems.push(`${doc}: indexable page carries noindex`);

  console.log(
    `${doc.padEnd(34)} words=${String(words).padStart(4)} ld=[${types.sort().join(",")}]` +
      ` robots=${robots || "-"} title="${title}"`
  );
}

for (const [value, where] of titles) if (where.length > 1) problems.push(`duplicate title "${value}" in ${where.join(", ")}`);
for (const [value, where] of descriptions) if (where.length > 1) problems.push(`duplicate description "${value.slice(0, 40)}" in ${where.join(", ")}`);

const sitemapPath = join(ROOT, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  problems.push("no sitemap.xml");
} else {
  const urls = [...readFileSync(sitemapPath, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const url of urls) {
    const route = new URL(url).pathname;
    const file = route === "/" ? join(ROOT, "index.html") : join(ROOT, route.replace(/^\//, ""), "index.html");
    if (!existsSync(file)) problems.push(`sitemap lists ${route} but ${file} is missing`);
  }
  console.log(`sitemap.xml: ${urls.length} urls`);
}

const failed = new Set(problems.map((p) => p.split(":")[0]));
console.log(`\n${docs.length} documents | ${problems.length} problems${failed.size ? ` (${failed.size} files)` : ""}`);
for (const problem of problems) console.log(`  FAIL ${problem}`);
process.exit(problems.length ? 1 : 0);
