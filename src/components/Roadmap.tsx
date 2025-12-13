import { CheckCircle2, Clock } from "lucide-react";

const Roadmap = () => {
  const builtFeatures = [
    "Invoice & contract upload and storage",
    "AI-powered data extraction from invoices",
    "3-way matching (PO, receipt, invoice)",
    "Basic approval workflows",
    "Vendor and catalog management"
  ];

  const comingSoon = [
    "Multi-level approval routing by spend thresholds",
    "Real-time spend analytics and budget tracking",
    "ERP integrations (SAP, Oracle, NetSuite, QuickBooks)",
    "Contract renewal alerts and compliance tracking",
    "Mobile app for on-the-go approvals"
  ];

  return (
    <section id="roadmap" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            MVP Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what we've built and where we're headed. Join us early and help shape what comes next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Already Built */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Already Built</h3>
            </div>
            <ul className="space-y-3">
              {builtFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming Soon */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cta/10 rounded-lg">
                <Clock className="h-6 w-6 text-cta" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Coming Soon</h3>
            </div>
            <ul className="space-y-3">
              {comingSoon.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Early adopters get a say in what we prioritize next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;