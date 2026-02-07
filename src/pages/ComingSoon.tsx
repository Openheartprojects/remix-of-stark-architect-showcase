import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { useLocation } from "react-router-dom";

interface ComingSoonProps {
  title: string;
  description: string;
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${title} — Altair Axis`}
        description={description}
        canonicalPath={location.pathname}
      />
      <Navigation />

      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.15] mb-4 fade-in">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 fade-in-delayed">
            {description}
          </p>
          <div className="fade-in-delayed-2">
            <Link to="/">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-sm font-medium"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
