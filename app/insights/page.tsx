import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { InsightsList, type CardPost } from "../components/InsightsList";
import { formatDate, getPosts, postHref } from "@/lib/insights";

const NEWSLETTER = "https://www.linkedin.com/newsletters/the-bro%C5%BE-code-7425515013760598016/";
const LINKEDIN = "https://www.linkedin.com/in/jaroslav-broz";

export const metadata: Metadata = {
  title: "Insights | Jaroslav Broz",
  description:
    "Writing on trustworthy AI for engineering, RFEM 6 APIs, MCP and automating structural workflows.",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
};

export default function InsightsPage() {
  const posts = getPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const cards: CardPost[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    dateLabel: formatDate(p.date),
    category: p.category,
    summary: p.summary,
    minutes: p.minutes,
    href: postHref(p),
    external: Boolean(p.external),
  }));

  return (
    <>
      <SiteHeader />
      <main>
        <div className="hero-bg">
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pt-44">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Insights
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              Field notes from AI in structural engineering
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Practical writing on trustworthy AI, APIs, MCP and automating
              structural workflows. No hype, just implementation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a href={NEWSLETTER} className="font-semibold text-accent hover:underline">
                Subscribe to The Brož Code →
              </a>
              <a href="/feed.xml" className="text-muted hover:text-foreground">
                RSS feed
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24">
          {featured && (
            <section aria-labelledby="featured" className="-mt-4">
              <h2 id="featured" className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Featured
              </h2>
              <a
                href={postHref(featured)}
                {...(featured.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="glass mt-4 block rounded-3xl p-8 transition-colors hover:border-accent sm:p-12"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {featured.category}
                </p>
                <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{featured.summary}</p>
                <p className="mt-6 text-sm text-muted">
                  {formatDate(featured.date)}
                  {featured.minutes ? ` · ${featured.minutes} min read` : ""}
                  <span className="ml-4 font-semibold text-accent">
                    {featured.external ? "Read on LinkedIn ↗" : "Read →"}
                  </span>
                </p>
              </a>
            </section>
          )}

          <section aria-labelledby="all" className="mt-16">
            <h2 id="all" className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              All articles
            </h2>
            <InsightsList posts={cards} />
          </section>

          <section className="mt-20 rounded-3xl border border-border bg-surface p-8 sm:p-12">
            <h2 className="text-2xl font-semibold tracking-tight">Get new insights first</h2>
            <p className="mt-3 max-w-xl text-muted">
              New pieces go out in my newsletter on LinkedIn first. Follow me there to get
              them as they are published.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <a href={NEWSLETTER} className="rounded-full bg-foreground px-5 py-2.5 text-background hover:opacity-90">
                Subscribe on LinkedIn
              </a>
              <a href={LINKEDIN} className="rounded-full border border-border px-5 py-2.5 hover:border-accent">
                Follow me
              </a>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
