import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact — Altair Axis"
        description="Get in touch with Altair Axis. We’re open to thoughtful conversations about research, infrastructure, learning systems, or collaboration."
        canonicalPath="/contact"
      />
      <Navigation />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[720px]">
            <header className="mb-12 md:mb-14">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15] fade-in">
                Get in touch
              </h1>
              <div className="mt-6 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed fade-in-delayed">
                <p>
                  We’re open to thoughtful conversations about research,
                  infrastructure, learning systems, or collaboration.
                </p>
                <p>
                  If you’re reaching out with care, you’re in the right place.
                </p>
              </div>
            </header>

            <section className="border-t border-border/40 pt-10 space-y-10">
              <div className="fade-in-delayed">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Email
                </p>
                <a
                  href="mailto:hello@altairaxis.co.za"
                  className="mt-3 block text-base md:text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                  hello@altairaxis.co.za
                </a>
                <p className="mt-2 text-xs text-muted-foreground">
                  We read everything. Replies may take time.
                </p>
              </div>

              <div className="fade-in-delayed">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Elsewhere
                </p>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  We share updates and writing occasionally.
                </p>

                <div className="mt-6 space-y-3 text-sm md:text-base">
                  <a
                    href="https://www.instagram.com/altairaxis"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Instagram: Altair Axis
                  </a>
                  <a
                    href="https://www.linkedin.com/company/altair-axis"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn: Altair Axis
                  </a>
                  <a
                    href="https://x.com/altairaxis"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    X: Altair Axis
                  </a>
                  <a
                    href="https://x.com/apolemialabs"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    X: Apolemia Labs
                  </a>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-8 border-t border-border/40 fade-in-delayed">
                Altair Axis values clarity, patience, and thoughtful work.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;