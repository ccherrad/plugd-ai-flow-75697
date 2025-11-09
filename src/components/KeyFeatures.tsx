import { FileCheck, Building2, AlertTriangle, Bell, Plug, FileText } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Contract & Invoice Matching",
      description: "Compare every line, detect errors in seconds."
    },
    {
      icon: Building2,
      title: "Cross-Site Spend Intelligence",
      description: "See where and why your costs drift."
    },
    {
      icon: AlertTriangle,
      title: "AI-Driven Anomaly Detection",
      description: "Find overbilling and inconsistencies proactively."
    },
    {
      icon: Bell,
      title: "Automated Alerts & Reports",
      description: "Stay ahead of renewals, budgets, and audits."
    },
    {
      icon: Plug,
      title: "ERP Integration Ready",
      description: "Sync with Sage, SAP, Odoo, or Excel in minutes."
    },
    {
      icon: FileText,
      title: "Audit-Ready Records",
      description: "Every action logged for compliance and traceability."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Key Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to bring audit intelligence to procurement
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
