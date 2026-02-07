import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Careers — Altair Axis"
        description="Altair Axis is a small research and product lab. This page describes how we work and what matters, even when there are no open roles."
        canonicalPath="/careers"
      />
      <Navigation />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[880px]">
            <header className="mb-16 md:mb-20">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                Working here
              </h1>
            </header>

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                Introduction
              </h2>
              <p>Altair Axis is a small research and product lab.</p>
              <p>
                We work across infrastructure, learning systems, and design.
                Slowly, deliberately, and with care. The work requires focus,
                patience, and an ability to sit with ideas before acting on them.
              </p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">Approach</h2>
              <p>We keep teams small and responsibilities clear.</p>
              <p>
                Most work happens quietly. Long stretches of uninterrupted time
                are normal. Decisions are discussed thoroughly and made
                deliberately.
              </p>
              <p>
                We value people who can think independently and communicate
                clearly, in writing as much as in conversation.
              </p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                What matters
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>Taste and judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>Comfort with ambiguity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>Respect for craft</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>Care for long-term outcomes</span>
                </li>
              </ul>
              <p>We’re less interested in speed than in direction.</p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">Open roles</h2>
              <p>There are no open roles at the moment.</p>
              <p>
                We don’t hire on a schedule. When we do, roles are shaped around
                the work, not the other way around.
              </p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                Future opportunities
              </h2>
              <p>
                If you feel strongly aligned with how we think and work, you’re
                welcome to introduce yourself.
              </p>
              <p>A short note is enough.</p>
              <p>
                <a
                  href="mailto:hello@altairaxis.co.za"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  hello@altairaxis.co.za
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                Please don’t send résumés unless asked. A few thoughtful words
                are more useful.
              </p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">Closing</h2>
              <p>
                We believe good work takes time. And so does finding the right
                people to do it.
              </p>
              <p className="text-xs text-muted-foreground pt-6 border-t border-border/40">
                Altair Axis is built carefully, by a small group of people who
                care about what they make.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
