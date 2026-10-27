import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  category: string;
  summary: string;
  minutes?: number;
  featured: boolean;
  /** Set for articles published elsewhere (e.g. LinkedIn): the card links out. */
  external?: string;
  /** Markdown body, empty for external posts. */
  body: string;
};

const dir = path.join(process.cwd(), "content", "insights");

function toIso(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

export function getPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(dir, file), "utf8"),
      );
      const body = content.trim();
      const words = body.split(/\s+/).filter(Boolean).length;
      const minutes =
        typeof data.minutes === "number"
          ? data.minutes
          : words > 0
            ? Math.max(1, Math.round(words / 200))
            : undefined;
      const post: Post = {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title),
        date: toIso(data.date),
        category: String(data.category ?? "Insights"),
        summary: String(data.summary ?? ""),
        minutes,
        featured: data.featured === true,
        external: data.external ? String(data.external) : undefined,
        body,
      };
      return { post, draft: data.draft === true };
    })
    .filter((x) => !x.draft)
    .map((x) => x.post)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug && !p.external);
}

export function renderMarkdown(body: string): string {
  return marked.parse(body, { async: false }) as string;
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function postHref(p: Post): string {
  return p.external ?? `/insights/${p.slug}/`;
}
