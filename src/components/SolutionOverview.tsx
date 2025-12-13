import { TrendingUp, BarChart3, Zap, Target } from "lucide-react";

const SolutionOverview = () => {
  const whyNow = [
    {
      icon: TrendingUp,
      stat: "France's 2026",
      label: "e-invoicing mandate accelerates the need for automation"
    },
    {
      icon: BarChart3,
      stat: "73% of CFOs",
      label: "plan to invest in AI-driven spend control"
    },
    {
      icon: Zap,
      stat: "70-80% faster",
      label: "processing times with AI invoice matching"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Why Now Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Now
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {whyNow.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="mb-6 inline-flex">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">{item.stat}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 mb-16">
          <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
            The opportunity is massive — and we're building the engine that powers it.
          </p>
          <p className="text-base text-muted-foreground mt-4">
            Starting with procurement because it showcases the perfect storm of regulatory pressure, AI readiness, and clear ROI. But the platform we're building works for any workflow.
          </p>
        </div>

        {/* Our Edge Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Edge
            </h2>
          </div>

          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 p-4 bg-primary/10 rounded-xl">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Traditional tools automate data capture — <strong className="text-foreground">we automate understanding</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Our platform doesn't just record transactions — it explains them, compares patterns across your organization, flags anomalies in real time, and learns from your data to prevent future errors.
                </p>
                <p className="text-xl font-bold text-foreground">
                  In short: we bring audit intelligence to business workflows.
                </p>
                <p className="text-base text-muted-foreground mt-4 italic">
                  Starting with procurement workflows, expanding based on your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
