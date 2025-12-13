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
            The opportunity is massive — finance teams need a central hub for their documents.
          </p>
          <p className="text-base text-muted-foreground mt-4">
            Whether it's procurement, compliance, or operations — the same document intelligence applies across workflows.
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
                  Most tools just extract data — <strong className="text-foreground">we assist and automate the entire document lifecycle</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  From ingestion to insights: our AI classifies documents, extracts information with context, manages approvals, builds your catalog, and enables reconciliation and monitoring — all while reducing human errors and manual burden.
                </p>
                <p className="text-xl font-bold text-foreground">
                  In short: we're the financial documents hub your finance team needs.
                </p>
                <p className="text-base text-muted-foreground mt-4 italic">
                  Across procurement, compliance, and operational workflows.
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
