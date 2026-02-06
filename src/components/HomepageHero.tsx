import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoopingViewportVideo from "@/components/LoopingViewportVideo";

const HomepageHero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs text-muted-foreground fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              Local-first learning + distributed inference
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.35rem] font-medium tracking-tight text-foreground leading-[1.12] fade-in">
              Build, learn, and run AI
              <br className="hidden sm:block" />
              without centralized cloud lock-in.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed fade-in-delayed">
              A local first AI platform combining an intelligent learning
              workspace with a distributed inference network.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 fade-in-delayed-2">
              <Link to="/learning">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-sm font-medium w-full sm:w-auto"
                >
                  Explore Learning
                </Button>
              </Link>
              <Link to="/inference">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-sm font-medium w-full sm:w-auto"
                >
                  Explore Inference
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground fade-in-delayed-2">
              <div className="rounded-xl border border-border/60 bg-card px-4 py-3">
                <p className="text-foreground font-medium text-sm">Continuity</p>
                <p className="mt-1 text-xs leading-relaxed">
                  Return to ideas without rebuilding context.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card px-4 py-3">
                <p className="text-foreground font-medium text-sm">Locality</p>
                <p className="mt-1 text-xs leading-relaxed">
                  Run inference closer to where data lives.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card px-4 py-3">
                <p className="text-foreground font-medium text-sm">Calm systems</p>
                <p className="mt-1 text-xs leading-relaxed">
                  Powerful behavior without noisy interfaces.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center sm:justify-start gap-6 text-sm fade-in-delayed-2">
              <Link
                to="/how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                How it works
              </Link>
              <Link
                to="/research"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Research
              </Link>
              <Link
                to="/developers"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Developers
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 fade-in-delayed">
            <div className="bg-card border border-border/60 shadow-card rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-border/50 flex items-center justify-between">
                <p className="text-sm font-medium text-foreground tracking-tight">
                  System overview
                </p>
                <p className="text-xs text-muted-foreground">Looping preview</p>
              </div>
              <LoopingViewportVideo
                src="/0%20(4).mp4"
                ariaLabel="Altair Axis product motion video"
                className="w-full h-auto"
              />
              <div className="px-5 py-4 border-t border-border/50 grid sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  Local-first workflow
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  Distributed execution
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  Predictable behavior
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
