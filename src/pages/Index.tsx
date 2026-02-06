import Navigation from "@/components/Navigation";
import HomepageHero from "@/components/HomepageHero";
import ProductSplit from "@/components/ProductSplit";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HomepageHero />
        <ProductSplit />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
