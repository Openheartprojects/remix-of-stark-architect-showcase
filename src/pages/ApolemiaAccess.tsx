import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const DiagramFlow = () => {
  return (
    <svg
      viewBox="0 0 420 360"
      className="w-full h-auto text-muted-foreground"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Apolemia grid flow diagram"
      role="img"
    >
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="5"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10" fill="currentColor" opacity="0.55" />
        </marker>
      </defs>

      {[
        { y: 34, label: "Client" },
        { y: 92, label: "Apolemia Gateway" },
        { y: 150, label: "Scheduler" },
        { y: 208, label: "Node" },
        { y: 266, label: "Result" },
      ].map((n, i) => (
        <g key={n.label}>
          <rect
            x="70"
            y={n.y}
            width="280"
            height="44"
            rx="10"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity={i === 1 ? 0.9 : 0.75}
          />
          <text
            x="210"
            y={n.y + 27}
            textAnchor="middle"
            fontSize="13"
            fill="currentColor"
            opacity="0.9"
          >
            {n.label}
          </text>
          {i !== 4 ? (
            <path
              d={`M210 ${n.y + 44} V ${n.y + 58}`}
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.55"
              markerEnd="url(#arrow)"
            />
          ) : null}
        </g>
      ))}

      <path
        d="M70 318H350"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.18"
      />
      <text x="70" y="343" fontSize="11" fill="currentColor" opacity="0.5">
        Scheduling → isolated execution → result delivery
      </text>
    </svg>
  );
};

const DiagramWorker = () => {
  return (
    <svg
      viewBox="0 0 420 280"
      className="w-full h-auto text-muted-foreground"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Worker registration diagram"
      role="img"
    >
      <rect
        x="48"
        y="46"
        width="150"
        height="120"
        rx="12"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.75"
      />
      <text x="123" y="74" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.9">
        Worker
      </text>
      <text x="123" y="98" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.55">
        registers
      </text>
      <text x="123" y="120" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.55">
        advertises
      </text>
      <text x="123" y="142" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.55">
        executes
      </text>

      <rect
        x="238"
        y="46"
        width="134"
        height="120"
        rx="12"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.75"
      />
      <text x="305" y="74" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.9">
        Scheduler
      </text>

      <path
        d="M198 106H238"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M228 98L238 106L228 114"
        fill="currentColor"
        opacity="0.55"
      />

      <rect
        x="48"
        y="190"
        width="324"
        height="54"
        rx="12"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <text x="210" y="223" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.6">
        Each execution environment is destroyed after completion
      </text>
    </svg>
  );
};

const ApolemiaAccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Apolemia — Access"
        description="Connect compute to the Apolemia grid, or use the grid for inference workloads through a stable API. Clear requirements, constraints, and execution model."
        canonicalPath="/inference/access"
      />
      <Navigation />

      <main className="pt-28 pb-20 md:pt-32 md:pb-24 px-6">
        <div className="container mx-auto max-w-[1040px]">
          <header className="fade-in">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15]">
              Connect to the Apolemia grid
            </h1>
            <div className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-[72ch]">
              <p>
                Apolemia is a distributed compute platform for executing inference
                workloads across a global network of nodes.
              </p>
              <p className="mt-4">You can participate in two ways:</p>
              <div className="mt-4 space-y-2">
                <p>contribute compute to the grid</p>
                <p>use the grid to run inference workloads</p>
              </div>
              <p className="mt-4">Both are independent. Some do both.</p>
            </div>
          </header>

          <div className="h-12 md:h-16" />

          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
            <div className="md:col-span-7 space-y-12">
              <section className="space-y-4 fade-in-delayed">
                <h2 className="text-base font-medium text-foreground">The grid</h2>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    The Apolemia grid is a network of connected machines that
                    execute inference workloads on demand.
                  </p>
                  <p>Workloads are:</p>
                  <div className="space-y-2">
                    <p>scheduled based on availability and constraints</p>
                    <p>executed in isolated environments</p>
                    <p>returned without persistent state</p>
                  </div>
                  <p>
                    The grid powers Knolink and is available as shared
                    infrastructure.
                  </p>
                </div>
              </section>

              <section className="space-y-4 fade-in-delayed">
                <h2 className="text-base font-medium text-foreground">
                  Contribute compute
                </h2>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    You can connect a machine to the Apolemia grid by running the
                    official worker application.
                  </p>
                  <p>The worker:</p>
                  <div className="space-y-2">
                    <p>registers the machine with the scheduler</p>
                    <p>advertises available resources</p>
                    <p>executes workloads in isolation</p>
                    <p>reports health and availability</p>
                  </div>
                  <p>
                    Workloads have no access beyond their execution boundary.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Requirements
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <p>Supported OS: Windows, macOS, Linux</p>
                    <p>Network connectivity</p>
                    <p>Idle or allocatable compute resources</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="inline-block w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 text-sm font-medium w-full sm:w-auto"
                    >
                      Download the worker
                    </Button>
                  </Link>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Install the official Apolemia worker to connect your machine
                    to the grid.
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed pt-6 border-t border-border/40">
                  The worker does not retain workload data. Each execution
                  environment is destroyed after completion.
                </p>
              </section>

              <section className="space-y-4 fade-in-delayed">
                <h2 className="text-base font-medium text-foreground">
                  Run inference workloads
                </h2>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Developers can submit inference workloads to the Apolemia grid
                    through a stable API.
                  </p>
                  <p>To get started:</p>
                  <div className="space-y-2">
                    <p>1. create an account</p>
                    <p>2. generate an API key</p>
                    <p>3. submit workloads with defined constraints</p>
                  </div>
                  <p>
                    Apolemia handles scheduling, execution, and result delivery.
                  </p>
                </div>

                <div className="pt-2">
                  <Link to="/contact" className="inline-block w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 text-sm font-medium w-full sm:w-auto"
                    >
                      Get an API key
                    </Button>
                  </Link>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Access the grid programmatically.
                  </p>
                </div>
              </section>

              <section className="space-y-4 fade-in-delayed">
                <h2 className="text-base font-medium text-foreground">
                  Execution constraints
                </h2>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>Each workload can define constraints such as:</p>
                  <div className="space-y-2">
                    <p>latency targets</p>
                    <p>regional preferences</p>
                    <p>resource limits</p>
                  </div>
                  <p>
                    The scheduler uses these constraints to determine placement.
                  </p>
                  <p>
                    This allows inference to run closer to data sources and users
                    when possible.
                  </p>
                </div>
              </section>

              <section className="space-y-4 fade-in-delayed">
                <h2 className="text-base font-medium text-foreground">
                  Execution model
                </h2>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>Every workload:</p>
                  <div className="space-y-2">
                    <p>runs in isolation</p>
                    <p>has no access to previous executions</p>
                    <p>leaves no persistent state</p>
                  </div>
                  <p>Transport is encrypted. Execution boundaries are explicit.</p>
                </div>
              </section>

              <section className="space-y-4 fade-in-delayed">
                <h2 className="text-base font-medium text-foreground">Scope</h2>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>Apolemia is designed for inference execution.</p>
                  <p>It is not:</p>
                  <div className="space-y-2">
                    <p>a training platform</p>
                    <p>a general-purpose compute marketplace</p>
                    <p>a stateful runtime environment</p>
                  </div>
                </div>
              </section>

              <section className="pt-8 border-t border-border/40 space-y-5 fade-in-delayed">
                <div className="space-y-3">
                  <Link to="/contact" className="block w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 text-sm font-medium w-full sm:w-auto"
                    >
                      Download the worker
                    </Button>
                  </Link>
                  <Link to="/contact" className="block w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 text-sm font-medium w-full sm:w-auto"
                    >
                      Generate an API key
                    </Button>
                  </Link>
                </div>

                <div className="text-xs text-muted-foreground flex flex-wrap gap-x-6 gap-y-2">
                  <Link
                    to="/docs"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                  <Link
                    to="/status"
                    className="hover:text-foreground transition-colors"
                  >
                    Network status
                  </Link>
                  <Link
                    to="/research"
                    className="hover:text-foreground transition-colors"
                  >
                    Research
                  </Link>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed pt-6 border-t border-border/40">
                  Apolemia is shared infrastructure. Predictability matters more
                  than speed.
                </p>
              </section>
            </div>

            <aside className="md:col-span-5 md:sticky md:top-28 space-y-10 fade-in-delayed">
              <div className="border border-border/60 rounded-xl bg-background p-5">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Diagram
                </p>
                <p className="mt-2 text-sm text-foreground">The grid</p>
                <div className="mt-4">
                  <DiagramFlow />
                </div>
              </div>

              <div className="border border-border/60 rounded-xl bg-background p-5">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Diagram
                </p>
                <p className="mt-2 text-sm text-foreground">Worker connection</p>
                <div className="mt-4">
                  <DiagramWorker />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApolemiaAccess;
