import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload, MessageSquare, BookOpen, Layers } from "lucide-react";
import LoopingViewportVideo from "@/components/LoopingViewportVideo";
import Seo from "@/components/Seo";

const features = [
  {
    icon: Upload,
    title: "Upload anything",
    description: "PDFs, notes, slides, and research papers. Drop them in.",
  },
  {
    icon: MessageSquare,
    title: "Ask natural language questions",
    description: "Query your material in plain English. Get cited answers.",
  },
  {
    icon: BookOpen,
    title: "Cited, grounded responses",
    description:
      "Every answer references your sources. No hallucinated knowledge.",
  },
  {
    icon: Layers,
    title: "Persistent context",
    description:
      "Build long‑term understanding across sessions. Context never resets.",
  },
];

const audiences = [
  { label: "University students", detail: "Study smarter with your own material" },
  { label: "Researchers", detail: "Query papers and build connections across literature" },
  { label: "Knowledge workers", detail: "Navigate complex internal documentation" },
  { label: "Teams", detail: "Share context across large internal document sets" },
];

const differentiators = [
  "Not a chat assistant. It reads your documents, not the open web.",
  "Not generic web search. Answers are grounded in your sources.",
  "Context persists. Your understanding compounds over time.",
  "Runs on local‑first inference. Your data stays yours.",
];

const Learning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Knolink — Learning"
        description="Knolink is a calm learning workspace to collect, connect, and return to what you’re learning over time, without losing context."
        canonicalPath="/learning"
      />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-foreground leading-[1.12] mb-6 fade-in">
              Your Documents. One Brain.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 fade-in-delayed">
              An AI workspace that reads, remembers, and reasons over your
              material.
            </p>
            <div className="fade-in-delayed-2">
              <Link to="/learning/start">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-sm font-medium"
                >
                  Start
                </Button>
              </Link>
            </div>
          </div>

          <div className="container mx-auto max-w-3xl mt-16 fade-in-delayed-2">
            <div className="bg-card border border-border/60 shadow-soft rounded-2xl overflow-hidden">
              <LoopingViewportVideo
                src="/learn.mp4"
                ariaLabel="Learning motion video"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* What It Does */}
        <section className="py-20 md:py-28 px-6 border-t border-border/40">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-12 text-center">
              What it does
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-card rounded-2xl p-8 border border-border/60 shadow-soft"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 md:py-28 px-6 border-t border-border/40">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-12 text-center">
              Who it's for
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {audiences.map((a) => (
                <div key={a.label} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-base font-medium text-foreground">
                      {a.label}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {a.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It's Different */}
        <section className="py-20 md:py-28 px-6 border-t border-border/40">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-12 text-center">
              Why it's different
            </h2>
            <ul className="space-y-4">
              {differentiators.map((d, i) => (
                <li
                  key={i}
                  className="text-muted-foreground text-sm md:text-base leading-relaxed pl-5 border-l-2 border-primary/30"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 border-t border-border/40">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Upload your first document and see the difference.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="rounded-full px-8 text-sm font-medium"
              >
                Start Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Learning;
