import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle2, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(218,45%,13%),hsl(218,45%,20%))]" />
      
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in-up">
            Transform Procurement from Chaos to Control
          </h1>
          <p className="mb-10 text-lg text-primary-foreground/90 md:text-xl lg:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            AI-powered procure-to-pay automation that takes you from RFP to reconciliation—eliminating manual work, ensuring compliance, and saving costs at every step
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-transform">
              Watch Demo
            </Button>
          </div>

          {/* Workflow Diagram */}
          <div className="relative mx-auto max-w-5xl mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <WorkflowStep icon={FileText} label="RFP & Sourcing" delay="0s" />
              <WorkflowArrow />
              <WorkflowStep icon={FileText} label="Contract Management" delay="0.5s" />
              <WorkflowArrow />
              <WorkflowStep icon={FileText} label="Purchase Orders" delay="1s" />
              <WorkflowArrow />
              <WorkflowStep icon={FileText} label="Invoice Processing" delay="1.5s" />
              <WorkflowArrow />
              <WorkflowStep icon={CreditCard} label="Payment" delay="2s" />
              <WorkflowArrow />
              <WorkflowStep icon={CheckCircle2} label="Reconciliation" delay="2.5s" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const WorkflowStep = ({ icon: Icon, label, delay }: { icon: any, label: string, delay: string }) => (
  <div className="flex flex-col items-center gap-3 animate-float" style={{ animationDelay: delay }}>
    <div className="p-4 bg-primary-foreground/10 rounded-xl border border-primary-foreground/20 backdrop-blur-sm">
      <Icon className="h-6 w-6 text-primary-foreground" />
    </div>
    <span className="text-xs font-medium text-primary-foreground/90 text-center max-w-[100px]">{label}</span>
  </div>
);

const WorkflowArrow = () => (
  <ArrowRight className="hidden md:block h-5 w-5 text-primary-foreground/40 flex-shrink-0" />
);

export default Hero;
