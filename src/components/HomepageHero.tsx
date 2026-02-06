import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/illustration-hero.jpg";

const HomepageHero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-foreground leading-[1.12] mb-6 fade-in">
          Build, learn, and run AI&nbsp;—
          <br className="hidden sm:block" />
          without centralized cloud&nbsp;lock‑in.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 fade-in-delayed">
          A local‑first AI platform combining an intelligent learning workspace
          with a distributed inference network.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-delayed-2">
          <Link to="/learning">
            <Button size="lg" className="rounded-full px-8 text-sm font-medium">
              Explore Learning Tool
            </Button>
          </Link>
          <Link to="/inference">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-sm font-medium"
            >
              Explore Inference Network
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl mt-16 fade-in-delayed-2">
        <img
          src={heroIllustration}
          alt="Pages and blocks connecting together in a distributed network"
          className="w-full rounded-xl"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HomepageHero;
