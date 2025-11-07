import { Factory, Heart, ShoppingBag, Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCases = () => {
  const industries = [
    {
      id: "manufacturing",
      icon: Factory,
      name: "Manufacturing",
      description: "Manage complex supplier networks and multi-tier approvals",
      benefits: [
        "Handle high-volume purchase orders across global supply chains",
        "Automated compliance with industry regulations",
        "Real-time visibility into supplier performance",
        "Streamlined contract negotiations with multiple vendors"
      ]
    },
    {
      id: "healthcare",
      icon: Heart,
      name: "Healthcare",
      description: "Ensure compliance with regulatory requirements and vendor credentials",
      benefits: [
        "Automated verification of vendor certifications and licenses",
        "HIPAA-compliant document processing and storage",
        "Track medical supply contracts and expiration dates",
        "Audit trails for regulatory compliance"
      ]
    },
    {
      id: "retail",
      icon: ShoppingBag,
      name: "Retail",
      description: "Process high volumes of invoices with automated 3-way matching",
      benefits: [
        "Handle thousands of SKUs and supplier invoices",
        "Automated matching between POs, receipts, and invoices",
        "Seasonal demand forecasting integration",
        "Multi-location procurement coordination"
      ]
    },
    {
      id: "services",
      icon: Briefcase,
      name: "Professional Services",
      description: "Track project-based procurement and client billing",
      benefits: [
        "Project-specific purchase tracking and allocation",
        "Client billing integration with procurement data",
        "Consultant and contractor management",
        "Time and materials tracking"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Built for Every Industry
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="manufacturing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
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
