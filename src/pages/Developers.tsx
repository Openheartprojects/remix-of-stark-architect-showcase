import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DiagramGridFlow = () => {
  return (
    <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-soft">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase mb-4">
        Request path
      </p>
      <svg
        viewBox="0 0 560 180"
        className="w-full h-auto"
        role="img"
        aria-label="Client to gateway to scheduler to node to result"
      >
        <defs>
          <style>
            {`.s { stroke: hsl(var(--foreground) / 0.28); stroke-width: 2; fill: none; }
               .b { fill: hsl(var(--background)); stroke: hsl(var(--border)); stroke-width: 2; }
               .t { fill: hsl(var(--foreground) / 0.72); font: 12px ui-sans-serif, system-ui, -apple-system, Segoe UI; }
               .a { fill: hsl(var(--primary) / 0.25); }
            `}
          </style>
        </defs>

        <circle cx="60" cy="90" r="18" className="a" />
        <rect x="30" y="70" width="60" height="40" rx="10" className="b" />
        <text x="60" y="95" textAnchor="middle" className="t">
          Client
        </text>

        <rect x="140" y="70" width="92" height="40" rx="10" className="b" />
        <text x="186" y="95" textAnchor="middle" className="t">
          Gateway
        </text>

        <rect x="270" y="70" width="108" height="40" rx="10" className="b" />
        <text x="324" y="95" textAnchor="middle" className="t">
          Scheduler
        </text>

        <rect x="416" y="70" width="64" height="40" rx="10" className="b" />
        <text x="448" y="95" textAnchor="middle" className="t">
          Node
        </text>

        <rect x="504" y="70" width="56" height="40" rx="10" className="b" />
        <text x="532" y="95" textAnchor="middle" className="t">
          Result
        </text>

        <path d="M92 90 H140" className="s" />
        <path d="M232 90 H270" className="s" />
        <path d="M378 90 H416" className="s" />
        <path d="M480 90 H504" className="s" />
      </svg>

      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        Monotone control plane. Locality-aware placement. No retained state by
        default.
      </p>
    </div>
  );
};

const DiagramNodeLifecycle = () => {
  return (
    <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-soft">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase mb-4">
        Execution model
      </p>
      <svg
        viewBox="0 0 560 210"
        className="w-full h-auto"
        role="img"
        aria-label="Isolated run lifecycle: start, execute, destroy"
      >
        <defs>
          <style>
            {`.s { stroke: hsl(var(--foreground) / 0.28); stroke-width: 2; fill: none; }
               .b { fill: hsl(var(--background)); stroke: hsl(var(--border)); stroke-width: 2; }
               .t { fill: hsl(var(--foreground) / 0.72); font: 12px ui-sans-serif, system-ui, -apple-system, Segoe UI; }
               .k { fill: hsl(var(--primary) / 0.22); }
            `}
          </style>
        </defs>

        <rect x="60" y="38" width="160" height="52" rx="12" className="b" />
        <text x="140" y="69" textAnchor="middle" className="t">
          Isolated env created
        </text>

        <rect x="250" y="38" width="160" height="52" rx="12" className="b" />
        <text x="330" y="69" textAnchor="middle" className="t">
          Inference executes
        </text>

        <rect x="440" y="38" width="160" height="52" rx="12" className="b" />
        <text x="520" y="69" textAnchor="middle" className="t">
          Environment destroyed
        </text>

        <path d="M220 64 H250" className="s" />
        <path d="M410 64 H440" className="s" />

        <rect x="60" y="126" width="540" height="56" rx="14" className="b" />
        <rect x="76" y="142" width="110" height="24" rx="10" className="k" />
        <text x="132" y="159" textAnchor="middle" className="t">
          Encrypted transport
        </text>
        <rect x="206" y="142" width="162" height="24" rx="10" className="k" />
        <text x="287" y="159" textAnchor="middle" className="t">
          No access to previous runs
        </text>
        <rect x="382" y="142" width="198" height="24" rx="10" className="k" />
        <text x="481" y="159" textAnchor="middle" className="t">
          Boundaries explicit by design
        </text>
      </svg>

      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        Each run is isolated, has no access to previous workloads, and is
        destroyed after completion.
      </p>
    </div>
  );
};

const Developers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[1040px]">
            <header className="pb-10 md:pb-12 border-b border-border/40">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase mb-3">
                Apolemia — Developers
              </p>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4">
                A distributed inference grid.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Apolemia is a global network for executing inference workloads
                across distributed compute — designed for locality, isolation,
                and predictable behavior.
                <br />
                <br />
                It powers Knolink and is available as infrastructure for other
                systems.
              </p>
            </header>

            <div className="mt-10 md:mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
              <div className="space-y-12">
                <section>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                    The Apolemia grid
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      The Apolemia grid is a network of connected compute nodes
                      capable of executing inference workloads.
                    </p>
                    <p>Nodes may exist across:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>universities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>research environments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>private infrastructure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>partner organizations</span>
                      </li>
                    </ul>
                    <p>
                      Workloads are scheduled dynamically based on availability,
                      constraints, and locality.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                    Using Apolemia for inference
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Developers can submit inference workloads to the Apolemia
                      grid through a stable API.
                    </p>
                    <p>Each workload specifies:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>input payload</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>
                          execution constraints (latency, locality, resource
                          limits)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>runtime parameters</span>
                      </li>
                    </ul>
                    <p>Apolemia handles:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>placement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>execution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>isolation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>result delivery</span>
                      </li>
                    </ul>
                    <p>
                      No state is retained beyond execution unless explicitly
                      configured.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                    Locality-aware execution
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Modern inference systems are often bottlenecked not by
                      compute, but by distance.
                    </p>
                    <p>
                      Apolemia treats locality as a first-class constraint:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>
                          workloads are routed closer to data sources where
                          possible
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>latency variability is reduced</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>network overhead is minimized</span>
                      </li>
                    </ul>
                    <p>This approach is particularly effective for:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>interactive systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>privacy-sensitive workloads</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>regionally constrained execution</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                    How Apolemia powers Knolink
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Knolink relies on Apolemia for inference execution across
                      its learning environment.
                    </p>
                    <p>This allows Knolink to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>execute workloads privately</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>avoid centralized bottlenecks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>
                          scale inference without coupling to a single provider
                        </span>
                      </li>
                    </ul>
                    <p>
                      Apolemia and Knolink are developed together but remain
                      architecturally decoupled.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                    Connecting a node to the grid
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Organizations and individuals can connect compute nodes to
                      the Apolemia grid.
                    </p>
                    <p>A node:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>registers with the scheduler</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>advertises capabilities and constraints</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>executes workloads in isolated environments</span>
                      </li>
                    </ul>
                    <p>
                      Nodes do not have access to workload context beyond
                      execution.
                    </p>
                    <p>Use cases:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>idle institutional compute</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>regional inference hubs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>private inference infrastructure</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                    Execution model
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>Each inference run:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>executes in an isolated environment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>has no access to previous workloads</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>is destroyed after completion</span>
                      </li>
                    </ul>
                    <p>Transport is encrypted.</p>
                    <p>Execution boundaries are explicit.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                    Interfaces
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>Apolemia exposes:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>a workload submission API</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>status and result retrieval</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>node registration and health reporting</span>
                      </li>
                    </ul>
                    <p>
                      The interface surface is intentionally small.
                    </p>
                    <p>SDKs:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>JavaScript</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>Python</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                    Ongoing research
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>Our work focuses on:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>scheduling across heterogeneous nodes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>
                          inference performance under locality constraints
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>predictable execution in distributed environments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>cost-efficient use of existing compute</span>
                      </li>
                    </ul>
                    <p>
                      Some findings are published on our Research page.
                    </p>
                  </div>
                </section>

                <section className="pt-2">
                  <div className="border-t border-border/40 pt-10">
                    <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-4">
                      Get started
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Documentation is available for developers integrating with
                      the grid or contributing compute.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/contact"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Read the documentation
                      </Link>
                      <Link
                        to="/"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Network status
                      </Link>
                      <Link
                        to="/research"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Research
                      </Link>
                    </div>
                    <p className="mt-8 text-xs text-muted-foreground">
                      Apolemia is infrastructure. Stability and clarity come
                      first.
                    </p>
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 h-fit">
                <DiagramGridFlow />
                <DiagramNodeLifecycle />

                <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-soft">
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase mb-3">
                    Design rules
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li>No marketing slogans</li>
                    <li>No performance claims without data</li>
                    <li>No glossy visuals</li>
                    <li>Diagrams must explain, not decorate</li>
                    <li>If it feels like a pitch, it’s wrong.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Developers;
