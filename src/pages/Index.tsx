import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Vision from "@/components/Vision";
import SolutionOverview from "@/components/SolutionOverview";
import HowItWorks from "@/components/HowItWorks";
import ProductPreview from "@/components/ProductPreview";
import Results from "@/components/Results";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Vision />
      <SolutionOverview />
      <HowItWorks />
      <ProductPreview />
      <Results />
      <Roadmap />
      <Team />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
