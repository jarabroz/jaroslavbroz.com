# Adding an insight (blog post)

Posts are Markdown files in `content/insights/`. The file name becomes the address:
`content/insights/my-post.md` → `https://jaroslavbroz.com/insights/my-post/`

## A post written on this site

Create `content/insights/my-post.md`:

```md
---
title: "My post title"
date: 2026-11-05
category: "AI in engineering"
summary: "One or two sentences shown on the cards and in search results."
featured: false
---
Write the article here in Markdown.

## A heading

Paragraphs, **bold**, [links](https://example.com), lists and code blocks work.
```

- `category` creates the filter buttons automatically (use the same spelling to group posts).
- `featured: true` puts the post in the large "Featured" slot (the newest featured post wins; with none, the newest post is shown).
- Reading time is calculated from the text. Set `minutes: 9` to override it.
- `draft: true` hides a post until you remove the line. See `_example-post.md`.

## An article published elsewhere (e.g. LinkedIn)

Same front matter plus `external`, and no text below it. The card links out:

```md
---
title: "Article title"
date: 2026-11-05
category: "AI in engineering"
summary: "Short description."
external: "https://www.linkedin.com/pulse/..."
---
```

## Publishing

```bash
git add content/insights
git commit -m "New insight: My post title"
git push
```

Cloudflare rebuilds the site automatically; it is live about two minutes later.
The RSS feed at `/feed.xml` updates itself.

## Preview locally

```bash
npm run build
npx serve out
```
