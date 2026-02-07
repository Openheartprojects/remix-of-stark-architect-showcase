import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const KnolinkStart = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Knolink — Start"
        description="Welcome to Knolink. A place to collect, connect, and return to what you’re learning, without forcing structure or losing context."
        canonicalPath="/learning/start"
      />
      <Navigation />
      <main className="px-6 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[720px] md:min-h-[calc(100vh-320px)] md:flex md:flex-col md:justify-center">
            <header className="fade-in">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15]">
                Welcome to Knolink
              </h1>
              <div className="mt-6 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Knolink is a place to collect, connect, and return to what
                  you’re learning — without forcing structure or losing context.
                </p>
                <p>It’s designed to grow with you over time.</p>
                <p>Pause here. Let that land.</p>
              </div>
            </header>

            <div className="h-10 md:h-12" />

            <div className="fade-in-delayed">
              <div className="mx-auto max-w-[520px]">
                <svg
                  viewBox="0 0 520 170"
                  className="w-full h-auto text-muted-foreground/70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M70 48c32-18 76-20 120-8 20 6 38 14 54 24 16-10 34-18 54-24 44-12 88-10 120 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M90 56v74c0 10 7 18 17 20 42 8 84 3 123-14 11-5 24-5 35 0 39 17 81 22 123 14 10-2 17-10 17-20V56"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M155 76h86M155 96h98M155 116h72"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                  <path
                    d="M355 76h-86M355 96h-98M355 116h-72"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                  <path
                    d="M418 120l26 26M430 114l22 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                  <path
                    d="M92 138c-18 8-33 10-46 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>
              </div>
            </div>

            <div className="h-10 md:h-12" />

            <section className="space-y-5 fade-in-delayed">
              <h2 className="text-base font-medium text-foreground">
                What You Can Do Here
              </h2>
              <div className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>With Knolink, you can:</p>
                <p>write notes as they come</p>
                <p>connect ideas naturally</p>
                <p>return to previous thinking without starting over</p>
                <p>There’s nothing to set up first. You begin where you are.</p>
              </div>
            </section>

            <div className="h-10 md:h-12" />

            <section className="space-y-5 fade-in-delayed">
              <h2 className="text-base font-medium text-foreground">Who It’s For</h2>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Knolink is used by students, researchers, and writers who value
                  continuity over speed.
                </p>
                <p>
                  It works best when used regularly — and quietly — alongside
                  your existing work.
                </p>
              </div>
            </section>

            <div className="h-10 md:h-12" />

            <section className="space-y-6 fade-in-delayed">
              <h2 className="text-base font-medium text-foreground">
                Getting Started
              </h2>

              <div className="space-y-4">
                <div>
                  <Link to="/contact" className="inline-block w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 text-sm font-medium w-full sm:w-auto"
                    >
                      Create an account
                    </Button>
                  </Link>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Start with an email. No commitments.
                  </p>
                </div>

                <div>
                  <Link to="/contact" className="inline-block w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 text-sm font-medium w-full sm:w-auto"
                    >
                      Sign in
                    </Button>
                  </Link>
                  <p className="mt-2 text-xs text-muted-foreground">
                    For returning users.
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-6 border-t border-border/40">
                Knolink stores your work privately and keeps it available when
                you return. You can leave at any time. Your notes remain yours.
              </p>
            </section>

            <footer className="mt-12 pt-8 border-t border-border/40 text-sm text-muted-foreground fade-in-delayed">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  to="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/research"
                  className="hover:text-foreground transition-colors"
                >
                  Research
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KnolinkStart;
