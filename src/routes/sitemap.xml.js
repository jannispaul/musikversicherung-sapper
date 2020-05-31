const fs = require("fs");

// const BASE_URL = "https://musikversicherung.com";
const pages = [""];

fs.readdirSync("./src/routes").forEach((file) => {
  file = file.split(".")[0];
  if (file.charAt(0) !== "_" && file !== "sitemap" && file !== "index") {
    pages.push(file);
  }
});

// const render = (pages) => `<?xml version="1.0" encoding="UTF-8" ?>
// <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
//   ${pages
//     .map(
//       (page) => `
//     <url><loc>${BASE_URL}/${page}</loc><priority>0.85</priority></url>
//   `
//     )
//     .join("\n")}

// </urlset>
// `;

// export function get(req, res, next) {
//   res.setHeader("Cache-Control", `max-age=0, s-max-age=${600}`); // 10 minutes
//   res.setHeader("Content-Type", "application/rss+xml");

//   const sitemap = render(pages);
//   res.end(sitemap);
// }

// import { getPosts } from "./_posts.js";
// import { siteUrl } from "../stores/_config.js";
let siteUrl = "https://musikversicherung.com";

const renderSitemapXml = (
  contextPaths
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${contextPaths
  .map(
    (path) => `
  <url>
    <loc>${siteUrl}/${path}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
`
  )
  .join("\n")}
</urlset>`;

export function get(req, res) {
  res.writeHead(200, {
    "Cache-Control": `public, max-age=0, s-max-age=${86400}, must-revalidate`, // 24h
    "Content-Type": "application/xml",
  });
  const feed = renderSitemapXml([...pages]);
  res.end(feed);
}
