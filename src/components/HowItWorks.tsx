import { Upload, Brain, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Receive documents via email, upload, or API integration",
      visual: "Documents flying into the system"
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Our AI handles the heavy lifting—classifying documents, extracting key data, and validating against catalogs and POs—while you stay in control",
      visual: "Brain/AI icon with data fields being populated"
    },
    {
      icon: CheckCircle2,
      title: "Review & Approve",
      description: "Smart routing ensures the right team members review items that need attention, while routine matches flow through based on your approval rules",
      visual: "Checkmarks and payment confirmation"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From Invoice Upload to Payment in Minutes, Not Days
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                
                <div className="relative z-10 mb-6 inline-flex">
                  <div className="p-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                    <step.icon className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
