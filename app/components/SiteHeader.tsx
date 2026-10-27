const nav = [
  ["About", "/#about"],
  ["Areas of Practice", "/#work"],
  ["Dlubal", "/#dlubal"],
  ["AI in Engineering", "/#ai"],
  ["Speaking", "/#speaking"],
  ["Insights", "/insights/"],
  ["Career", "/#career"],
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 px-4 pt-4">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="/" className="flex items-center gap-3 text-sm font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-xs font-bold text-background">
            JB
          </span>
          <span className="hidden sm:inline">Jaroslav Broz</span>
        </a>
        <nav className="hidden gap-5 text-sm text-muted lg:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/#contact"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
