/**
 * Count the bracketed content placeholders actually rendered in the built site, so
 * docs/content-ledger.md can be checked rather than trusted. Run after `npm run build`.
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(resolve(dirname(fileURLToPath(import.meta.url)), ".."), "dist");

const files = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith(".html")) files.push(p);
  }
};
walk(dist);

const tally = new Map();
const where = new Map();
for (const file of files) {
  const visible = readFileSync(file, "utf8")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ");
  for (const match of visible.matchAll(/\[[^\]]{1,40}\]/g)) {
    const token = match[0];
    if (!/[A-Za-z]/.test(token)) continue;
    if (/px|var\(/.test(token)) continue;
    tally.set(token, (tally.get(token) || 0) + 1);
    if (!where.has(token)) where.set(token, new Set());
    where.get(token).add(file.slice(dist.length + 1));
  }
}

let total = 0;
for (const [token, count] of [...tally].sort((a, b) => b[1] - a[1])) {
  total += count;
  console.log(`${String(count).padStart(3)}  ${token.padEnd(32)}  ${[...where.get(token)].join(", ")}`);
}
console.log(`distinct=${tally.size} total=${total} documents=${files.length}`);
