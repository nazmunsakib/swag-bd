import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const sitemapPath = fileURLToPath(new URL("../out/sitemap.xml", import.meta.url));
const stylesheetReference = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>';
let sitemap = await readFile(sitemapPath, "utf8");

if (!sitemap.includes(stylesheetReference)) {
  const declaration = sitemap.match(/^<\?xml[^?]*\?>/);
  if (!declaration) {
    throw new Error("Generated sitemap is missing its XML declaration");
  }

  const insertionPoint = declaration[0].length;
  sitemap = `${sitemap.slice(0, insertionPoint)}\n${stylesheetReference}${sitemap.slice(insertionPoint)}`;
  await writeFile(sitemapPath, sitemap);
}
