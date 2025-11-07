import { Shield, Zap, Code, Lock, Users, Server } from "lucide-react";

const Technology = () => {
  const techFeatures = [
    { icon: Shield, label: "SOC 2 Type II certified security" },
    { icon: Zap, label: "99.9% uptime SLA" },
    { icon: Code, label: "RESTful API for custom integrations" },
    { icon: Lock, label: "Role-based access control" },
    { icon: Users, label: "Multi-tenant architecture" },
    { icon: Server, label: "Scalable cloud infrastructure" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Built for Scale
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {techFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-card-foreground">{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-8 shadow-xl border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-cta"></div>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">API Documentation</span>
                </div>
                
                <div className="font-mono text-sm space-y-2 text-card-foreground">
                  <div className="text-muted-foreground">// Initialize PLUGD.AI</div>
                  <div><span className="text-cta">const</span> plugd = <span className="text-accent">new</span> PLUGD{'({'}</div>
                  <div className="pl-4">apiKey: <span className="text-destructive">'your_api_key'</span>,</div>
                  <div className="pl-4">environment: <span className="text-destructive">'production'</span></div>
                  <div>{'});'}</div>
                  <div className="pt-4"></div>
                  <div className="text-muted-foreground">// Process invoice</div>
                  <div><span className="text-cta">const</span> result = <span className="text-accent">await</span> plugd</div>
                  <div className="pl-4">.invoices.<span className="text-accent">process</span>{'({'}</div>
                  <div className="pl-8">file: invoice_pdf,</div>
                  <div className="pl-8">autoApprove: <span className="text-cta">true</span></div>
                  <div className="pl-4">{'});'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
