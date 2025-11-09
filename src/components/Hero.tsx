import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground animate-fade-in-up">
            Currently in MVP • Open for Early Adopters
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We're Building the Future of<br />Procurement Automation
          </h1>

          <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your AI procurement assistant that handles the heavy lifting from RFP to reconciliation—empowering your team to focus on strategic decisions while ensuring compliance and saving costs at every step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground text-base px-8 py-6">
              Join Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              Learn More
            </Button>
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
