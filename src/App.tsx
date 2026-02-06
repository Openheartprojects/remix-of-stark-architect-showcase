import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Learning from "./pages/Learning";
import Inference from "./pages/Inference";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/inference" element={<Inference />} />
          <Route
            path="/how-it-works"
            element={
              <ComingSoon
                title="How It Works"
                description="Both products share one inference foundation. Details coming soon."
              />
            }
          />
          <Route
            path="/developers"
            element={
              <ComingSoon
                title="Developers"
                description="API documentation, SDKs, and deployment examples — coming soon."
              />
            }
          />
          <Route
            path="/research"
            element={
              <ComingSoon
                title="Research"
                description="Whitepapers, architecture notes, and experiments — coming soon."
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
