import { FileSearch, FileCheck, ShoppingCart, Receipt, Banknote, CheckCheck } from "lucide-react";

const SolutionOverview = () => {
  const phases = [
    {
      icon: FileSearch,
      title: "Sourcing",
      items: [
        "Calls for Proposal management",
        "Vendor evaluation workflows",
        "Automated proposal review"
      ]
    },
    {
      icon: FileCheck,
      title: "Contracting",
      items: [
        "AI-powered contract analysis",
        "Automated compliance checks",
        "Smart approval routing",
        "Contract catalog management"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Ordering",
      items: [
        "Purchase order creation and matching",
        "Catalog management",
        "Automated PO-to-contract validation"
      ]
    },
    {
      icon: Receipt,
      title: "Invoicing",
      items: [
        "AI invoice extraction (100% accuracy)",
        "3-way matching automation",
        "Exception handling workflows"
      ]
    },
    {
      icon: Banknote,
      title: "Payment & Reconciliation",
      items: [
        "Payment processing integration",
        "Automated reconciliation",
        "Discrepancy detection",
        "Audit-ready reporting"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From Invoice to Payment. Fully Automated.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
            
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className={`relative mb-12 lg:mb-16 ${
                  index % 2 === 0 ? 'lg:pr-[50%]' : 'lg:pl-[50%] lg:text-right'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background" />
                
                <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-shrink-0 p-4 bg-primary/10 rounded-xl">
                      <phase.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                        Phase {index + 1}: {phase.title}
                      </h3>
                      <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCheck className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
