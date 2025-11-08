import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ProductPreview from "@/components/ProductPreview";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Vision />
      <ProductPreview />
      <Roadmap />
      <Team />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
