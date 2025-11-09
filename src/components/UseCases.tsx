import { Hotel, Heart, Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCases = () => {
  const industries = [
    {
      id: "hospitality",
      icon: Hotel,
      name: "Hotels & Restaurants",
      description: "Seeking spend visibility across locations",
      benefits: [
        "Track pricing variances across multiple hotel or restaurant locations",
        "Compare supplier contracts and identify cost-saving opportunities",
        "Automate invoice matching for food, beverage, and supply orders",
        "Maintain audit trails for franchise or corporate compliance"
      ]
    },
    {
      id: "healthcare",
      icon: Heart,
      name: "Healthcare Networks",
      description: "Managing supplier and invoice complexity",
      benefits: [
        "Handle complex medical supply and pharmaceutical invoicing",
        "Ensure contract compliance across multiple facilities",
        "Detect pricing anomalies and duplicate charges",
        "Maintain regulatory compliance with detailed audit logs"
      ]
    },
    {
      id: "finance",
      icon: Briefcase,
      name: "Finance & Procurement Teams",
      description: "Who want smarter workflows without heavy ERP tools",
      benefits: [
        "Eliminate manual Excel-based invoice validation",
        "Get instant visibility into multi-site spending patterns",
        "Automate anomaly detection without complex system integration",
        "Make data-driven decisions with visual spend analytics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Who It's For
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="hospitality" className="w-full">
            <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3 mb-8">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex items-center gap-2"
                >
                  <industry.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{industry.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <div className="bg-card rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                        {industry.name}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {industry.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center text-sm font-bold">
                          ✓
                        </div>
                        <p className="text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
