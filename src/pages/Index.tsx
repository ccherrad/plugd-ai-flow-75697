import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflows from "@/components/Workflows";
import SolutionOverview from "@/components/SolutionOverview";
import HowItWorks from "@/components/HowItWorks";
import JoinTransformation from "@/components/JoinTransformation";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Workflows />
      <SolutionOverview />
      <JoinTransformation />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
