import { getPosts, postHref } from "@/lib/insights";

export const dynamic = "force-static";

const SITE = "https://jaroslavbroz.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = getPosts()
    .map((p) => {
      const link = p.external ?? `${SITE}${postHref(p)}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${esc(link)}</link>
      <guid>${esc(link)}</guid>
      <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Jaroslav Broz: Insights</title>
    <link>${SITE}/insights/</link>
    <description>Writing on trustworthy AI for engineering, APIs, MCP and automating structural workflows.</description>
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
