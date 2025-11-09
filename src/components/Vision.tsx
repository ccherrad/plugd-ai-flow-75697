import { FileWarning, Zap, Target } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Procurement Problem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Procurement teams are stuck between legacy ERP systems and manual spreadsheets, wasting hours on invoice processing and contract review.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-destructive/10 rounded-xl">
                <FileWarning className="h-6 w-6 text-destructive" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Manual Invoice Processing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Teams spend hours manually reviewing invoices, checking against POs, and routing for approvals.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-muted rounded-xl">
                <Zap className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Contract Review Bottlenecks</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Legal and procurement teams struggle to track contract terms, renewals, and compliance requirements.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-muted rounded-xl">
                <Target className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Costly Errors</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Duplicate payments, missed discounts, and pricing errors drain budgets without visibility.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Vision: Intelligent Procurement
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            We're building a platform where invoices and contracts flow automatically from upload to payment—extracted, validated, matched to POs, routed for approval, and reconciled with zero manual effort.
          </p>
          <p className="text-sm text-muted-foreground italic">
            We're not just digitizing paperwork. We're rethinking how procurement gets done.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;