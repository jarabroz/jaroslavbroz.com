"use client";

import { useState } from "react";

export type CardPost = {
  slug: string;
  title: string;
  dateLabel: string;
  category: string;
  summary: string;
  minutes?: number;
  href: string;
  external: boolean;
};

export function InsightsList({ posts }: { posts: CardPost[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by category">
        {categories.map((c) => {
          const count = c === "All" ? posts.length : posts.filter((p) => p.category === c).length;
          const on = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={on}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                on
                  ? "border-accent bg-accent/15 text-foreground"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {c} <span className="ml-1 font-mono text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {shown.map((p) => (
          <li key={p.slug}>
            <a
              href={p.href}
              {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass flex h-full flex-col rounded-2xl p-7 transition-colors hover:border-accent"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {p.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
              <p className="mt-5 flex items-center justify-between text-xs text-muted">
                <span>
                  {p.dateLabel}
                  {p.minutes ? ` · ${p.minutes} min read` : ""}
                </span>
                <span className="font-semibold text-accent">
                  {p.external ? "Read on LinkedIn ↗" : "Read →"}
                </span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
