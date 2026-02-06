import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotebookConnectionsIllustration from "@/components/NotebookConnectionsIllustration";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="container mx-auto max-w-2xl">
          <header className="text-center">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4 fade-in">
              A place where thinking stays connected.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 fade-in-delayed">
              Knolink helps you keep ideas, notes, and references in one continuous
              space — without breaking your flow.
            </p>
          </header>

          <div className="fade-in-delayed-2">
            <div className="bg-card border border-border/60 shadow-soft rounded-2xl p-6 sm:p-8">
              <NotebookConnectionsIllustration
                variant="how"
                className="w-full h-auto"
              />
            </div>
          </div>

          <section className="mt-14 md:mt-16">
            <div className="space-y-10">
              <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border/60 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-medium text-primary">01</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-foreground tracking-tight mb-2">
                      Start with what you have.
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Write notes, paste text, save links, or collect ideas as
                      they come. Nothing needs to be organized first.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border/60 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-medium text-primary">02</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-foreground tracking-tight mb-2">
                      Things naturally relate.
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      As your work grows, connections form between notes, topics,
                      and sources. Knolink keeps them close — without folders or
                      rigid structure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border/60 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-medium text-primary">03</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-foreground tracking-tight mb-2">
                      Pick up where you left off.
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Weeks or months later, your thinking is still intact. You
                      don’t start over. You continue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
