import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Shield, DollarSign } from "lucide-react";
import LoopingViewportVideo from "@/components/LoopingViewportVideo";

const problems = [
  {
    icon: Zap,
    title: "Centralized GPU scarcity",
    description:
      "Demand for inference compute far exceeds centralized supply — wait lists, quotas, and outages.",
  },
  {
    icon: DollarSign,
    title: "High cloud inference costs",
    description:
      "Cloud GPU pricing is volatile and expensive at scale, especially for latency‑sensitive workloads.",
  },
  {
    icon: Shield,
    title: "Data locality & compliance",
    description:
      "Regulations and user expectations increasingly require data to stay within specific jurisdictions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Jobs are routed to available compute nodes",
    detail: "The network selects the optimal node based on proximity, load, and model availability.",
  },
  {
    number: "02",
    title: "Nodes execute inference workloads only",
    detail: "No training data moves through the network. Nodes run pre‑deployed models.",
  },
  {
    number: "03",
    title: "Results are returned securely",
    detail: "Encrypted responses are sent back to the requesting client with minimal latency.",
  },
];

const useCases = [
  "LLM inference",
  "Retrieval‑augmented generation",
  "Regional AI services",
];

const notList = [
  "Not for model training",
  "Not a crypto network",
  "Not speculative infrastructure",
];

const Inference = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-foreground leading-[1.12] mb-6 fade-in">
              Distributed AI Inference,
              <br className="hidden sm:block" />
              Without the Cloud&nbsp;Tax
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 fade-in-delayed">
              Execute AI models across a decentralized compute network optimized
              for latency, cost, and privacy.
            </p>
            <div className="fade-in-delayed-2">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-sm font-medium"
                >
                  Join the Network
                </Button>
              </Link>
            </div>
          </div>

          <div className="container mx-auto max-w-3xl mt-16 fade-in-delayed-2">
            <div className="bg-card border border-border/60 shadow-soft rounded-2xl overflow-hidden">
              <LoopingViewportVideo
                src="/Motion_Design_for_Distributed_Computing.mp4"
                ariaLabel="Motion design for distributed computing"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* What It Solves */}
        <section className="py-20 md:py-28 px-6 border-t border-border/40">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-12 text-center">
              What it solves
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="bg-card rounded-2xl p-8 border border-border/60 shadow-soft"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <p.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 px-6 border-t border-border/40">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-12 text-center">
              How it works
            </h2>
            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.number} className="flex gap-6 items-start">
                  <span className="text-3xl font-light text-primary/40 leading-none pt-1 shrink-0">
                    {s.number}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases + What It's Not */}
        <section className="py-20 md:py-28 px-6 border-t border-border/40">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-6">
                  What it's for
                </h2>
                <ul className="space-y-3">
                  {useCases.map((uc) => (
                    <li
                      key={uc}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-6">
                  What it's not
                </h2>
                <ul className="space-y-3">
                  {notList.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground pl-5 border-l-2 border-border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/70 mt-6 italic">
                  This honesty builds trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 border-t border-border/40">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-4">
              Ready to join?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contribute compute or deploy inference workloads.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="rounded-full px-8 text-sm font-medium"
              >
                Join the Network
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Inference;
