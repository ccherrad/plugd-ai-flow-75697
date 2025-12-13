import { Scan, DollarSign, Clock, AlertTriangle, FileWarning } from "lucide-react";

const Vision = () => {
  const painPoints = [
    {
      icon: Scan,
      title: "Scattered Processes",
      description: "Scattered processes across sites and suppliers with no unified visibility."
    },
    {
      icon: FileWarning,
      title: "Invoice Overload",
      description: "Manual validation in Excel or ERP, invoice by invoice."
    },
    {
      icon: DollarSign,
      title: "Hidden Overcharges",
      description: "Different sites pay different prices for the same product."
    },
    {
      icon: Clock,
      title: "Repetitive Work",
      description: "1 hour or more wasted per invoice on checks and approvals."
    },
    {
      icon: AlertTriangle,
      title: "Audit Anxiety",
      description: "Inconsistent data, missed anomalies, and compliance risk."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Problem: Manual Workflows at Scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Teams across organizations spend countless hours on repetitive tasks, data validation, and error correction. We're starting with procurement — a workflow that perfectly illustrates these challenges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl font-semibold text-foreground mb-8 text-center">
            Here's what that looks like in procurement (our first workflow):
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-destructive/10 rounded-xl">
                    <point.icon className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-destructive/5 border border-destructive/10 rounded-2xl p-8 md:p-12">
          <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
            The result? Lost time, lost trust, and lost margins — all because business workflows remain reactive instead of intelligent.
          </p>
          <p className="text-base text-muted-foreground mt-4">
            These patterns repeat across every complex workflow. We're building the platform to fix them, one workflow at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;