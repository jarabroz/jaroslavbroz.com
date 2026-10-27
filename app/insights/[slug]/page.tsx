import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { formatDate, getPost, getPosts, renderMarkdown } from "@/lib/insights";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getPosts()
    .filter((p) => !p.external)
    .map((p) => ({ slug: p.slug }));
  // A static export needs at least one param; "_" 404s via notFound() below.
  return slugs.length > 0 ? slugs : [{ slug: "_" }];
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Jaroslav Broz`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      url: `https://jaroslavbroz.com/insights/${post.slug}/`,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <article className="hero-bg">
          <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 sm:pt-44">
            <a href="/insights/" className="text-sm text-muted hover:text-foreground">
              ← All insights
            </a>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {post.category}
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-muted">
              Jaroslav Broz · {formatDate(post.date)}
              {post.minutes ? ` · ${post.minutes} min read` : ""}
            </p>
            <div
              className="post-body mt-10"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
            />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
