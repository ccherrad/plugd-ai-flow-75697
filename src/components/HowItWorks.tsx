import { Upload, Tags, FileSearch, CheckCircle, Database, LineChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Ingest Documents",
      description: "Upload manually or configure channels to automatically consume documents from emails, ERPs, and other systems."
    },
    {
      icon: Tags,
      title: "2. Classify & Route",
      description: "AI automatically classifies each document type (invoice, PO, contract, receipt) and routes to the right workflow."
    },
    {
      icon: FileSearch,
      title: "3. Extract Information",
      description: "Intelligent extraction pulls all key data — vendor details, amounts, line items, dates — with high accuracy."
    },
    {
      icon: CheckCircle,
      title: "4. Approval Workflows",
      description: "Different document types flow through configured approval chains before being finalized."
    },
    {
      icon: Database,
      title: "5. Build Your Catalog",
      description: "Approved documents feed a unified catalog of products, purchases, vendors, and transactions."
    },
    {
      icon: LineChart,
      title: "6. Reconcile & Monitor",
      description: "Use the catalog to reconcile invoices, monitor spending, detect anomalies, and gain financial visibility."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            The Document Intelligence Pipeline
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How PLUGD.AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From document ingestion to actionable insights — here's the complete flow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative z-10 mb-6 inline-flex">
                  <div className="p-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                    <step.icon className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
