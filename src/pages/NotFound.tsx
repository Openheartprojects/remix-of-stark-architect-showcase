import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Not Found — Altair Axis"
        description="The page you’re looking for does not exist."
        noIndex
      />
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            404
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Page not found.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
