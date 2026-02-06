import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Globe } from "lucide-react";

const ProductSplit = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Learning Workspace */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/60 shadow-soft hover:shadow-card transition-shadow duration-300">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <FileText size={20} className="text-primary" />
            </div>

            <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-3">
              AI Learning That Understands Your Material
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Upload documents, lectures, or research. Ask questions. Build
              persistent context. Get answers grounded in your own sources.
            </p>

            <ul className="space-y-2.5 mb-8 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Document‑aware AI
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Persistent memory
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Built for students, researchers, and professionals
              </li>
            </ul>

            <Link to="/learning">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/80 px-0 text-sm font-medium"
              >
                Try the Learning Workspace →
              </Button>
            </Link>
          </div>

          {/* Distributed Inference */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/60 shadow-soft hover:shadow-card transition-shadow duration-300">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Globe size={20} className="text-primary" />
            </div>

            <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-3">
              Run AI Where It Matters
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Deploy low‑latency AI inference across distributed compute —
              closer to users, cheaper than centralized cloud.
            </p>

            <ul className="space-y-2.5 mb-8 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Inference‑only (not training)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Edge &amp; regional deployments
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Privacy‑preserving by design
              </li>
            </ul>

            <Link to="/inference">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/80 px-0 text-sm font-medium"
              >
                View the Inference Platform →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSplit;
