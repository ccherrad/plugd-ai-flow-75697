import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Workflows from "@/components/Workflows";
import SolutionOverview from "@/components/SolutionOverview";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <Workflows />
      <SolutionOverview />
      <HowItWorks />
      <Results />
      <Testimonials />
      <Roadmap />
      <Team />
      <FAQ />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
