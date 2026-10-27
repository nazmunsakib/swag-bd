<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="s">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>XML Sitemap | SWAG.bd</title>
        <style>
          :root { color-scheme: light; font-family: Arial, sans-serif; background: #f5f2ed; color: #211d19; }
          * { box-sizing: border-box; }
          body { margin: 0; padding: 48px 20px; }
          main { max-width: 1080px; margin: 0 auto; }
          .eyebrow { color: #9d563f; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
          h1 { margin: 12px 0; font-size: clamp(32px, 6vw, 54px); letter-spacing: -.04em; }
          .intro { max-width: 650px; color: #71695f; line-height: 1.6; }
          .count { display: inline-block; margin: 24px 0; padding: 10px 14px; border: 1px solid #ded8cf; background: #fff; font-size: 14px; }
          .table-wrap { overflow-x: auto; border: 1px solid #ded8cf; background: #fff; }
          table { width: 100%; border-collapse: collapse; text-align: left; }
          th, td { padding: 14px 16px; border-bottom: 1px solid #eeeae4; font-size: 13px; }
          th { background: #211d19; color: #fff; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
          tr:last-child td { border-bottom: 0; }
          td:first-child { min-width: 340px; overflow-wrap: anywhere; }
          a { color: #75402f; text-decoration: none; }
          a:hover { text-decoration: underline; }
          @media (max-width: 600px) { body { padding: 32px 14px; } th, td { padding: 12px; } td:first-child { min-width: 260px; } }
        </style>
      </head>
      <body>
        <main>
          <p class="eyebrow">SWAG.bd</p>
          <h1>XML Sitemap</h1>
          <p class="intro">This sitemap lists the pages available for search engines to crawl. Select a URL to open that page.</p>
          <p class="count"><strong><xsl:value-of select="count(s:urlset/s:url)" /></strong> URLs</p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last updated</th>
                  <th>Change frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc" /></a></td>
                    <td><xsl:value-of select="substring(s:lastmod, 1, 10)" /></td>
                    <td><xsl:value-of select="s:changefreq" /></td>
                    <td><xsl:value-of select="s:priority" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
