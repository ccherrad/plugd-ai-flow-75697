import { Scan, DollarSign, Clock, AlertTriangle, FileWarning } from "lucide-react";

const Vision = () => {
  const painPoints = [
    {
      icon: Scan,
      title: "Document Chaos",
      description: "Documents scattered across emails, folders, and systems with no central hub."
    },
    {
      icon: FileWarning,
      title: "Manual Data Entry",
      description: "Hours spent manually extracting data from PDFs and entering it into systems."
    },
    {
      icon: DollarSign,
      title: "Human Errors",
      description: "Typos, duplicates, and missed details that lead to costly mistakes."
    },
    {
      icon: Clock,
      title: "Approval Bottlenecks",
      description: "Documents stuck in approval limbo, delaying payments and operations."
    },
    {
      icon: AlertTriangle,
      title: "No Visibility",
      description: "Can't easily reconcile, monitor spending, or catch anomalies in real-time."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Challenge Finance Teams Face
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Finance teams drown in documents across procurement, compliance, and operations. Manual processing leads to errors, delays, and regulatory risks. Every workflow suffers from the same fundamental problem.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl font-semibold text-foreground mb-8 text-center">
            Here's what manual document processing looks like today:
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
            The result? Finance teams spend 60-70% of their time on manual document processing instead of strategic analysis.
          </p>
          <p className="text-base text-muted-foreground mt-4">
            We built PLUGD.AI to fix this — a central hub where documents flow in, get intelligently processed, and feed the insights you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;