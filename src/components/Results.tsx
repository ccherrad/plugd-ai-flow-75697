import { TrendingDown, Target, DollarSign, ShieldCheck } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      icon: TrendingDown,
      value: "90%",
      label: "Reduction in processing time"
    },
    {
      icon: Target,
      value: "99%",
      label: "Data extraction accuracy"
    },
    {
      icon: DollarSign,
      value: "$500K+",
      label: "Average annual savings per organization"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Audit compliance"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real Impact. Measurable Results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 text-center border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="mb-4 inline-flex p-4 bg-accent rounded-xl">
                <metric.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-foreground">
                {metric.value}
              </div>
              <div className="text-primary-foreground/80 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-6xl text-primary-foreground/40">"</div>
            <div>
              <p className="text-lg md:text-xl mb-4 text-primary-foreground/90 italic">
                PLUGD.AI transformed our procurement process. What used to take days now happens in minutes, with complete visibility and zero errors. Our team can finally focus on strategic work instead of pushing paper.
              </p>
              <div className="font-semibold text-primary-foreground">
                Sarah Johnson
              </div>
              <div className="text-sm text-primary-foreground/70">
                Director of Procurement, Enterprise Corp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
