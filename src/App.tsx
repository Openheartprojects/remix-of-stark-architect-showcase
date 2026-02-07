import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Learning from "./pages/Learning";
import Inference from "./pages/Inference";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Research from "./pages/Research";
import Developers from "./pages/Developers";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import KnolinkStart from "./pages/KnolinkStart";
import ApolemiaAccess from "./pages/ApolemiaAccess";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/start" element={<KnolinkStart />} />
          <Route path="/inference" element={<Inference />} />
          <Route path="/inference/access" element={<ApolemiaAccess />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/developers" element={<Developers />} />
          <Route
            path="/research"
            element={<Research />}
          />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/privacy"
            element={
              <ComingSoon
                title="Privacy"
                description="A plain-language note on how Knolink stores and protects your work."
              />
            }
          />
          <Route
            path="/docs"
            element={
              <ComingSoon
                title="Documentation"
                description="Minimal references and examples for connecting to Apolemia."
              />
            }
          />
          <Route
            path="/status"
            element={
              <ComingSoon
                title="Network status"
                description="Operational status for gateways, schedulers, and nodes."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
