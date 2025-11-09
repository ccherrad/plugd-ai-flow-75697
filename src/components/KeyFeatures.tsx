import { Brain, CheckCircle2, Database, Eye, Plug, Building2 } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Document Intelligence",
      description: "Automatically classify, extract, and validate data from contracts, invoices, and purchase orders with 99%+ accuracy"
    },
    {
      icon: CheckCircle2,
      title: "Smart Approval Workflows",
      description: "Configurable multi-level approvals with threshold rules, compliance gates, and automatic escalation"
    },
    {
      icon: Database,
      title: "Master Data Management",
      description: "Centralized supplier, contract, and product catalogs with real-time sync and deduplication"
    },
    {
      icon: Eye,
      title: "End-to-End Visibility",
      description: "Track every document from submission to payment with real-time status and audit trails"
    },
    {
      icon: Plug,
      title: "Seamless Integrations",
      description: "Connect with your ERP, accounting systems, and communication tools via API and channels"
    },
    {
      icon: Building2,
      title: "Multi-Organization Support",
      description: "Manage multiple entities, subsidiaries, or clients with isolated data and custom workflows"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Powered by AI. Built for Your Team.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade features that enhance your team's capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
