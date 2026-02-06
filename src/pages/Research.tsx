import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type FeaturedEssay = {
  title: string;
  date: string;
  abstract: string;
};

type ResearchArea = {
  title: string;
  body: string;
  bullets?: string[];
};

type RecentWriting = {
  title: string;
  summary: string;
  date: string;
};

const featured: FeaturedEssay[] = [
  {
    title: "Continuity Over Completion",
    date: "Jan 2026",
    abstract:
      "Most learning tools optimize for completion: checklists, milestones, outcomes. But understanding rarely happens at the moment something is finished.\n\nIn this piece, we explore learning as a continuous process — where value comes from being able to return, reconnect, and extend previous thinking over time. We argue that tools should preserve context, not collapse it.",
  },
  {
    title: "Locality as a First-Class Constraint",
    date: "Dec 2025",
    abstract:
      "Cloud infrastructure has taught developers to think in terms of scale first and place second. This inversion has consequences: latency, cost, privacy, and control.\n\nWe examine distributed inference systems that prioritize locality — and why execution closer to where data lives changes both performance and system design.",
  },
  {
    title: "Calm Systems",
    date: "Nov 2025",
    abstract:
      "As software becomes more capable, it also becomes louder.\n\nThis essay looks at the idea of calm systems — tools and infrastructure that do more while demanding less attention. We explore how restraint in interfaces and predictability in systems can coexist with powerful underlying capabilities.",
  },
];

const areas: ResearchArea[] = [
  {
    title: "Learning Systems",
    body: "We study tools that support:",
    bullets: [
      "long-term understanding",
      "continuity of thought",
      "personal knowledge accumulation",
    ],
  },
  {
    title: "Distributed Compute",
    body: "Our work focuses on:",
    bullets: [
      "inference execution models",
      "scheduling and locality",
      "isolation and reliability in heterogeneous environments",
    ],
  },
  {
    title: "Infrastructure for Thinking Tools",
    body:
      "We explore the infrastructure required to support learning platforms at scale — where privacy, predictability, and cost matter as much as performance.",
  },
];

const writing: RecentWriting[] = [
  {
    title: "Why Most Knowledge Tools Break After a Semester",
    summary:
      "Tools fail when they optimize for short-term use rather than long-term return.",
    date: "Oct 2025",
  },
  {
    title: "Inference Is an Interface Problem",
    summary:
      "Execution speed matters less than how developers reason about constraints.",
    date: "Sep 2025",
  },
  {
    title: "The Cost of Stateless Learning",
    summary: "What happens when systems forget everything between sessions.",
    date: "Aug 2025",
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mx-auto max-w-[1000px]">
            <header className="pb-10 md:pb-12 border-b border-border/40">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                Research
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                We explore how people learn, think, and build — and the systems
                that support those processes at scale.
                <br />
                <br />
                Our work spans learning environments, distributed compute, and
                the infrastructure that quietly makes both possible.
              </p>
            </header>

            <section className="pt-10 md:pt-12">
              <h2 className="text-sm font-medium tracking-wide text-foreground/80 uppercase mb-6">
                Featured research
              </h2>

              <div className="divide-y divide-border/40 border-t border-b border-border/40">
                {featured.map((essay) => (
                  <article key={essay.title} className="py-7 sm:py-8">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-xl md:text-2xl font-medium text-foreground tracking-tight">
                        {essay.title}
                      </h3>
                      <p className="text-sm text-muted-foreground shrink-0">
                        {essay.date}
                      </p>
                    </div>
                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                      {essay.abstract}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="pt-12 md:pt-14">
              <h2 className="text-sm font-medium tracking-wide text-foreground/80 uppercase mb-6">
                Ongoing research areas
              </h2>

              <div className="space-y-10">
                {areas.map((area) => (
                  <div key={area.title}>
                    <h3 className="text-lg font-medium text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {area.body}
                    </p>

                    {area.bullets && (
                      <ul className="mt-4 space-y-2 text-sm md:text-base text-muted-foreground">
                        {area.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-12 md:pt-14">
              <h2 className="text-sm font-medium tracking-wide text-foreground/80 uppercase mb-6">
                Recent writing
              </h2>

              <div className="divide-y divide-border/40 border-t border-b border-border/40">
                {writing.map((w) => (
                  <article key={w.title} className="py-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base md:text-lg font-medium text-foreground">
                        {w.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground shrink-0">
                        {w.date}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {w.summary}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="pt-12 md:pt-14">
              <h2 className="text-sm font-medium tracking-wide text-foreground/80 uppercase mb-4">
                Research ethos
              </h2>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-4">
                <p>We publish selectively.</p>
                <p>Some work takes months to appear.</p>
                <p>Some ideas are never published at all.</p>
                <p>
                  We value clarity over novelty, and longevity over immediacy.
                </p>
              </div>
            </section>

            <section className="pt-12 md:pt-14">
              <h2 className="text-sm font-medium tracking-wide text-foreground/80 uppercase mb-4">
                Access &amp; updates
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                If you’re interested in our work, new writing is published here
                as it’s ready.
              </p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Subscribe to updates
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
