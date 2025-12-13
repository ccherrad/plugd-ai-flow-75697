import { TrendingUp, BarChart3, Zap, Target, Rocket, Shield } from "lucide-react";

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
        {/* Investment Opportunity Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Investment Opportunity
          </h2>
          <p className="text-xl text-muted-foreground">
            A perfect storm of regulatory mandates, AI adoption, and enterprise need
          </p>
        </div>

        {/* Market Timing Indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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

        {/* Market Opportunity */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="mb-6 inline-flex">
              <div className="p-5 bg-primary/10 rounded-xl">
                <Rocket className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              The Market Opportunity
            </h3>
            <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Every finance team needs a central hub for document intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From procurement to compliance to operations — the same AI-powered automation applies across all workflows, creating a massive addressable market.
            </p>
          </div>
        </div>

        {/* Competitive Positioning */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="mb-6 inline-flex">
              <div className="p-5 bg-primary/10 rounded-xl">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Our Competitive Edge
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                While competitors focus on data extraction, <strong className="text-foreground">we automate the entire document lifecycle</strong> — creating a defensible moat through comprehensive workflow integration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI doesn't just extract — it classifies, contextualizes, routes for approval, builds institutional knowledge, and enables real-time reconciliation and monitoring. This end-to-end approach creates switching costs and positions us as the platform of record.
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">
                We're building the financial document OS that enterprises will depend on.
              </p>
              <p className="text-base text-muted-foreground italic">
                Multi-workflow platform play with network effects and data advantages that compound over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
