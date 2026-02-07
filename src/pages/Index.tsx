import Navigation from "@/components/Navigation";
import HomepageHero from "@/components/HomepageHero";
import ProductSplit from "@/components/ProductSplit";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Altair Axis — Local-first learning and distributed inference"
        description="Altair Axis builds Knolink and Apolemia: a learning workspace designed for continuity, and a distributed inference grid designed for locality, isolation, and predictable execution."
        canonicalPath="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Altair Axis",
            url: "https://altairaxis.co.za/",
            email: "hello@altairaxis.co.za",
            sameAs: [
              "https://www.instagram.com/altairaxis",
              "https://www.linkedin.com/company/altair-axis",
              "https://x.com/altairaxis",
              "https://x.com/apolemialabs",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Altair Axis",
            url: "https://altairaxis.co.za/",
          },
        ]}
      />
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
