import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import KeyFeatures from "@/components/KeyFeatures";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import UseCases from "@/components/UseCases";
import Technology from "@/components/Technology";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <KeyFeatures />
      <HowItWorks />
      <Results />
      <UseCases />
      <Technology />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
