import { Upload, Brain, AlertCircle, BarChart3, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload or Connect",
      description: "Upload or connect your contracts, invoices, and purchase data."
    },
    {
      icon: Brain,
      title: "AI Extraction & Matching",
      description: "AI automatically extracts and matches every line item to the right contract or PO."
    },
    {
      icon: AlertCircle,
      title: "Instant Anomaly Detection",
      description: "Anomalies are flagged instantly — price variances, duplicates, missing clauses, or tax errors."
    },
    {
      icon: BarChart3,
      title: "Visual Intelligence",
      description: "Visual dashboards reveal trends, outliers, and opportunities to save."
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "All within a few clicks — no setup, no complex ERP configuration."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            Our Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Here's How It Works
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative z-10 mb-6 inline-flex">
                  <div className="p-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                    <step.icon className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
