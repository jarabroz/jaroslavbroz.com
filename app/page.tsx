const LINKEDIN = "https://www.linkedin.com/in/jaroslav-broz";
const GITHUB = "https://github.com/jarabroz";
const LINKTREE = "https://linktr.ee/jara.broz";

const nav = [
  ["About", "#about"],
  ["Areas of Practice", "#work"],
  ["Dlubal", "#dlubal"],
  ["AI in Engineering", "#ai"],
  ["Speaking", "#speaking"],
  ["Writing", "#writing"],
  ["Career", "#career"],
] as const;

const work = [
  {
    icon: "◈",
    title: "Trustworthy AI Assistants",
    text: "LLM assistants that help engineers create and check RFEM 6 models through conversation, grounded in Eurocode standards instead of guesses.",
  },
  {
    icon: "◎",
    title: "Verified Knowledge Systems",
    text: "Knowledge graphs combined with vector search, so AI answers come from verified engineering sources and can be traced back to them.",
  },
  {
    icon: "⌘",
    title: "APIs and Automation",
    text: "Python, C# and JavaScript APIs, cloud calculation and the Grasshopper link, built so engineers can automate and design parametrically.",
  },
];

const dlubal = [
  ["Technology and R&D", "Strategy, infrastructure and the AI features that ship in RFEM 6."],
  ["Developer Platform", "WebService API, Dev Docs for Python, C# and JavaScript, cloud calculation."],
  ["Integrations", "Grasshopper link, BIM interfaces and partnerships with universities such as ČVUT."],
  ["Self-hosted AI Infrastructure", "Vector search, knowledge graphs and CI/CD at scale."],
];

const ai = [
  {
    label: "Principle",
    title: "Engineering is where AI must be right.",
    text: "In most fields a wrong answer is an annoyance. In structural engineering mistakes are measured in steel and concrete. That is why I focus on grounding LLMs in standards and verified knowledge.",
  },
  {
    label: "Approach",
    title: "Hands-on, not from slides.",
    text: "I prototype, design infrastructure and write code myself. You cannot lead AI in engineering from slides alone, and engineers can tell the difference.",
  },
  {
    label: "Belief",
    title: "Computing reshapes engineering twice.",
    text: "Numerical methods were the first time computers changed structural engineering. AI is the second, and I am helping build it.",
  },
];

const stack = [
  ["Py", "Python", "Language"],
  ["C#", "C#", "Language"],
  ["TS", "TypeScript", "Language"],
  ["JS", "JavaScript", "Language"],
  ["Vu", "Vue.js", "Web"],
  ["R6", "RFEM 6", "Structural"],
  ["R9", "RSTAB 9", "Structural"],
  ["RW", "RWIND 3", "Structural"],
  ["Gh", "Grasshopper", "Parametric"],
  ["API", "REST / WebService API", "Platform"],
  ["MCP", "Model Context Protocol", "AI"],
  ["LLM", "LLMs and RAG", "AI"],
  ["KG", "Knowledge graphs", "AI"],
  ["VS", "Vector search", "AI"],
  ["CI", "CI/CD", "Dev"],
  ["Sc", "Scrum", "Process"],
] as const;

const talks = [
  "From numerical methods to AI: how computing keeps reshaping structural engineering",
  "Trustworthy AI for engineers: grounding LLMs in standards and verified knowledge",
  "Automating structural workflows with APIs, Python and Grasshopper",
];

const articles = [
  { date: "Oct 2026", title: "Structural Engineering Should Be About Engineering" },
  { date: "Apr 2026", title: "The Structural Engineer of Tomorrow Runs Code and Speaks with AI" },
  { date: "Feb 2026", title: "Dlubal API: Practical Use Cases and Key Benefits" },
  { date: "Feb 2026", title: "Integration of RFEM 6 into AI Applications via MCP Server" },
];

const career = [
  {
    years: "2024 – now",
    role: "Head of Technology",
    org: "Dlubal Software",
    text: "Leading technology and R&D, from infrastructure to the AI features that ship in RFEM 6. Led the team behind Innovation of the Year 2024 for AI integration in structural software.",
  },
  {
    years: "2021 – 2024",
    role: "Scrum Master, Software Analyst",
    org: "Dlubal Software",
    text: "Led the tribe behind the developer platform: WebService API, Dev Docs, cloud calculation, Grasshopper link and BIM interfaces.",
  },
  {
    years: "2011 – 2021",
    role: "Software Engineer to Product Manager to Team Leader",
    org: "SCIA (Nemetschek Group)",
    text: "From concrete design modules in SCIA Engineer to product strategy, and finally building the API/SDK team.",
  },
  {
    years: "2001 – 2011",
    role: "MSc and PhD, Structural Mechanics",
    org: "Czech Technical University in Prague",
    text: "Taught and researched numerical methods (FETI, DP-FETI), including research stays at the University of Edinburgh (EPCC).",
  },
];

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 px-4 pt-4">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold">
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
            href="#contact"
            className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main id="top">
        <div className="hero-bg relative overflow-hidden">
          {/* Steel frame drawing, decorative */}
          <svg
            className="absolute -right-24 top-10 h-[620px] w-[620px] text-accent opacity-[0.16] sm:right-0"
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden
          >
            <path d="M20 380V80M120 380V40M220 380V40M320 380V80M20 80L120 40L220 40L320 80" />
            {[80, 140, 200, 260, 320].map((y) => (
              <path key={y} d={`M20 ${y}H320`} />
            ))}
            <path d="M20 380L120 320L20 260L120 200L20 140L120 80M320 380L220 320L320 260L220 200L320 140L220 80M120 380L220 320L120 260L220 200L120 140L220 80" />
            <path d="M0 380H360" strokeWidth="2" />
          </svg>

          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-36 sm:pt-44 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-good">
                <span className="h-1.5 w-1.5 rounded-full bg-good" />
                Head of Technology · AI for engineering
              </span>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                Making AI
                <br />
                trustworthy enough
                <br />
                <span className="text-accent">for engineering.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg text-muted">
                Where mistakes are measured in steel and concrete. I spent almost
                20 years between structural engineering and software, and now I
                help build the AI that sits in between.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90"
                >
                  View my work →
                </a>
                <a
                  href="#contact"
                  className="glass rounded-full px-6 py-3 text-sm font-semibold hover:border-accent"
                >
                  Invite me to speak
                </a>
              </div>
            </div>

            <div className="glass w-full max-w-[17rem] rounded-3xl p-4 lg:ml-auto lg:w-80 lg:max-w-none lg:p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jaroslav.jpg"
                alt="Jaroslav Broz"
                width={400}
                height={400}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                Currently
              </p>
              <p className="mt-1 font-semibold">Head of Technology</p>
              <p className="text-sm text-muted">Dlubal Software · Prague</p>
            </div>
          </div>
        </div>

        <div className="border-y border-border bg-surface/60">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 text-center sm:grid-cols-4">
            {[
              ["20 yrs", "between engineering and software"],
              ["2024", "Innovation of the Year, AI integration"],
              ["3K+", "followers on LinkedIn"],
              ["PhD", "structural mechanics, ČVUT"],
            ].map(([n, l]) => (
              <div key={n}>
                <dt className="text-3xl font-semibold tracking-tight">{n}</dt>
                <dd className="mt-1 text-xs text-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Section
          id="about"
          eyebrow="About"
          title="Numerical methods were the first time computers changed structural engineering. AI is the second."
        >
          <div className="grid gap-8 text-muted md:grid-cols-2">
            <div className="space-y-4">
              <p>
                I started in structural mechanics: teaching and PhD research in
                numerical methods at ČVUT Prague. Then ten years at SCIA
                (Nemetschek Group), from software engineer to product manager to
                building its API/SDK team.
              </p>
              <p>
                Since 2021 I have been at Dlubal Software, the makers of RFEM,
                RSTAB and RWIND. First I built the developer platform, now I lead
                technology.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                I am still hands-on. I prototype, design infrastructure and write
                code myself, because you cannot lead AI in engineering from
                slides alone.
              </p>
              <p className="border-l-2 border-accent pl-4 text-foreground">
                The question that drives me: how do we make AI trustworthy enough
                for engineering?
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="work"
          eyebrow="Areas of practice"
          title="From verified knowledge to working assistants"
          intro="My work sits where structural engineering knowledge meets software and AI."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {work.map((w) => (
              <div
                key={w.title}
                className="glass rounded-2xl p-7 transition-colors hover:border-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-xl text-accent">
                  {w.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="dlubal"
          eyebrow="Dlubal Software"
          title="Leading technology behind RFEM, RSTAB and RWIND"
          intro="Since 2021 at Dlubal, building the developer platform and now leading technology and R&D."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {dlubal.map(([t, d]) => (
              <div key={t} className="glass rounded-2xl p-6">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="ai" eyebrow="AI in engineering" title="No hype, just implementation.">
          <div className="grid gap-4 md:grid-cols-3">
            {ai.map((a) => (
              <div key={a.label} className="rounded-2xl border border-border bg-surface p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {a.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow="My tech stack"
          title="The tools I build with every day"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {stack.map(([abbr, name, kind]) => (
              <div key={name} className="glass flex items-center gap-3 rounded-xl p-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 font-mono text-xs font-bold text-accent">
                  {abbr}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">{name}</span>
                  <span className="block text-[11px] uppercase tracking-wider text-muted">
                    {kind}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="speaking"
          eyebrow="Speaking"
          title="Invite me to your conference, university or meetup"
        >
          <ul className="space-y-3">
            {talks.map((t, i) => (
              <li key={t} className="glass flex gap-5 rounded-2xl p-5">
                <span className="font-mono text-accent">0{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Past stages include CADfórum and Dlubal Community Days, plus
            structural engineering conferences.
          </p>
        </Section>

        <Section
          id="writing"
          eyebrow="Writing"
          title="The Brož Code"
          intro="My newsletter on code, APIs, structural analysis and AI in engineering."
        >
          <ul className="divide-y divide-border border-y border-border">
            {articles.map((a) => (
              <li key={a.title}>
                <a
                  href={LINKEDIN}
                  className="flex flex-col gap-1 py-4 hover:text-accent sm:flex-row sm:gap-6"
                >
                  <span className="w-24 shrink-0 font-mono text-sm text-muted">{a.date}</span>
                  <span>{a.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={LINKEDIN} className="mt-6 inline-block text-sm text-accent hover:underline">
            Read more on LinkedIn →
          </a>
        </Section>

        <Section id="career" eyebrow="Career" title="From the lecture hall to the AI lab">
          <ol className="space-y-8 border-l border-border pl-6">
            {career.map((c) => (
              <li key={c.years} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                <p className="font-mono text-xs text-muted">{c.years}</p>
                <h3 className="mt-1 font-semibold">
                  {c.role} <span className="font-normal text-muted">· {c.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-muted">{c.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <section id="contact" className="scroll-mt-20 px-6 py-20">
          <div className="hero-bg mx-auto max-w-6xl rounded-3xl border border-border p-8 sm:p-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Let&apos;s work together
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Building something at the intersection of engineering and AI?
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Speaking invitations, collaboration on trustworthy AI for
              engineering and API questions are all welcome.
            </p>
            <div className="mt-8 grid gap-3 sm:max-w-xl">
              {[
                ["Best way to reach me", "Message me on LinkedIn", LINKEDIN],
                ["Code", "github.com/jarabroz", GITHUB],
                ["More links", "linktr.ee/jara.broz", LINKTREE],
              ].map(([k, v, href]) => (
                <a
                  key={k}
                  href={href}
                  className="glass flex items-center justify-between rounded-xl px-5 py-4 transition-colors hover:border-accent"
                >
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                      {k}
                    </span>
                    <span className="mt-0.5 block font-medium">{v}</span>
                  </span>
                  <span className="text-accent">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Jaroslav Broz. Views are my own.
      </footer>
    </>
  );
}
