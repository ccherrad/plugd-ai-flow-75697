import { FileWarning, AlertTriangle, DollarSign } from "lucide-react";

const ProblemStatement = () => {
  const painPoints = [
    {
      icon: FileWarning,
      title: "Manual Review Overload",
      description: "Hours spent reviewing contracts and invoices manually"
    },
    {
      icon: AlertTriangle,
      title: "Compliance Risks",
      description: "Compliance risks from missed approvals and contract terms"
    },
    {
      icon: DollarSign,
      title: "Budget Leaks",
      description: "Budget leaks from duplicate payments and pricing errors"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Procurement Teams Are Drowning in Manual Processes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-destructive/10 rounded-xl">
                  <point.icon className="h-8 w-8 text-destructive" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-foreground">
            There's a better way →
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
