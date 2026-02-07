import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About — Altair Axis"
        description="Altair Axis is a research and product lab focused on infrastructure and tools that support how people think, learn, and build."
        canonicalPath="/about"
      />
      <Navigation />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[900px]">
            <header className="mb-16 md:mb-20">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase mb-4">
                About Altair Axis
              </p>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15]">
                A research and product lab.
              </h1>
            </header>

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                Introduction
              </h2>
              <p>
                We are a research and product lab focused on the design and
                development of infrastructure and tools that support how people
                think, learn, and build.
              </p>
              <p>
                Our work spans systems, products, and the spaces between them,
                where design decisions shape behavior over time.
              </p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                Thought before execution
              </h2>
              <p>We begin with questions, not solutions.</p>
              <p>
                Much of what we explore never becomes a product. Some ideas take
                years to mature. We believe this slowness is necessary, not as a
                constraint, but as a condition for care.
              </p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                Design as responsibility
              </h2>
              <p>Design is not how something appears.</p>
              <p>
                It is how something behaves, how it endures, and how it respects
                the person using it.
              </p>
              <p>
                We are interested in clarity over novelty, restraint over excess,
                and systems that explain themselves through use rather than
                instruction.
              </p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                Quiet systems
              </h2>
              <p>The most important systems are rarely visible.</p>
              <p>
                We design infrastructure that is predictable, composed, and
                dependable, not because it is impressive, but because it allows
                other things to exist without friction.
              </p>
              <p>When infrastructure works well, it disappears.</p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                From research to reality
              </h2>
              <p>Some of our work becomes products. Some remains exploratory.</p>
              <p>
                Knolink and Apolemia emerged from research into continuity,
                locality, and calm systems, ideas we continue to refine through
                use, iteration, and study.
              </p>
              <p>Products are not endpoints. They are conversations.</p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">
                Principles
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>Care over speed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>Clarity over scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>Longevity over novelty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>Thoughtful constraint over abundance</span>
                </li>
              </ul>
              <p>These principles guide decisions large and small.</p>
            </section>

            <div className="h-14 md:h-16" />

            <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-base font-medium text-foreground">Closing</h2>
              <p>We are not interested in building everything.</p>
              <p>
                We are interested in building a few things well, and understanding
                why they matter.
              </p>
              <p className="text-xs text-muted-foreground pt-6 border-t border-border/40">
                Altair Axis is based on the belief that good tools begin with
                good thinking.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;