import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.svg";

const Hero = () => {
  const scrollToLearnMore = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2">
              <Badge>New</Badge>
            </span>
            <span>Currently in MVP • Open for Early Adopters</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Your Financial Documents.{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Intelligently Managed.
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            A financial document intelligence hub that assists and automates to reduce human errors and manual burden across critical finance workflows.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button size="lg" className="w-5/6 md:w-auto font-bold group/arrow bg-cta hover:bg-cta/90 text-cta-foreground px-8" asChild>
              <a href="https://dev.stckd.space/" target="_blank" rel="noopener noreferrer">
                Join Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover/arrow:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="w-5/6 md:w-auto font-bold px-8"
              onClick={scrollToLearnMore}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Product Preview Image */}
        <div className="relative group mt-14 w-full">
          {/* Gradient shadow */}
          <div className="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full animate-pulse"></div>

          {/* Product Screenshot - using the existing ProductPreview as reference */}
          <div className="w-full md:w-[1200px] mx-auto rounded-lg relative border border-t-2 border-t-primary/30 overflow-hidden bg-card shadow-2xl">
            <div className="bg-background border-b border-border px-6 py-4 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm text-muted-foreground">
                STCKD.AI Dashboard
              </div>
            </div>

            {/* Screenshot placeholder - points to demo site */}
            <div className="aspect-video bg-gradient-to-br from-primary/5 via-accent/5 to-background flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <img src={logo} alt="STCKD.AI" className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Financial Documents Hub</h3>
                <p className="text-muted-foreground max-w-md">
                  Centralized platform for ingesting, classifying, extracting, and managing all your financial documents with AI assistance.
                </p>
                <Button className="bg-cta hover:bg-cta/90 text-cta-foreground" asChild>
                  <a href="https://dev.stckd.space/" target="_blank" rel="noopener noreferrer">
                    View Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Gradient effect at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
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
