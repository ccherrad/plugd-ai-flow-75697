import { FileWarning, Zap, Target } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Problem We're Solving
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Business documents live in silos. Data extraction is manual. Workflows are fragmented. There's a better way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-destructive/10 rounded-xl">
                <FileWarning className="h-6 w-6 text-destructive" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Manual Processes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Teams waste hours copying data from PDFs, chasing approvals, and reconciling documents across disconnected systems.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-muted rounded-xl">
                <Zap className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Slow to Scale</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              As businesses grow, document volume explodes—but workflows stay stuck in spreadsheets and email threads.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-muted rounded-xl">
                <Target className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">No Clear ROI</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Without centralized tracking or analytics, it's impossible to measure efficiency gains or cost savings.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Vision: Intelligent Workflows
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            PLUGD.AI is building a platform where documents flow automatically from upload to processing to action—powered by AI that learns your business rules and gets smarter over time.
          </p>
          <p className="text-sm text-muted-foreground italic">
            We're not just digitizing paperwork. We're rethinking how work gets done.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;