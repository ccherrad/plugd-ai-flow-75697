import { ShoppingCart, Shield, Home } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Workflow {
  icon: any;
  title: string;
  description: string;
  documents: string[];
  useCases: string[];
}

const Workflows = () => {
  const workflows: Workflow[] = [
    {
      icon: ShoppingCart,
      title: "Procurement",
      description: "Automate invoice processing, purchase order matching, and vendor management",
      documents: ["Invoices", "Purchase Orders", "Contracts", "Receipts"],
      useCases: [
        "3-way matching (PO, receipt, invoice)",
        "Automated invoice approval workflows",
        "Vendor catalog management",
        "Spend monitoring and reconciliation"
      ]
    },
    {
      icon: Shield,
      title: "KYC & AML",
      description: "Streamline customer onboarding and compliance verification",
      documents: ["ID Documents", "Proof of Address", "Bank Statements", "Compliance Forms"],
      useCases: [
        "Automated identity verification",
        "Document classification and extraction",
        "Compliance workflow automation",
        "Audit trail and reporting"
      ]
    },
    {
      icon: Home,
      title: "Mortgage",
      description: "Accelerate mortgage processing with intelligent document handling",
      documents: ["Application Forms", "Income Verification", "Property Documents", "Credit Reports"],
      useCases: [
        "Application document processing",
        "Income and employment verification",
        "Automated document checklist validation",
        "Faster approval cycles"
      ]
    }
  ];

  return (
    <section id="workflows" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            Use Cases
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Workflows We're Automating
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our document intelligence platform adapts to different finance workflows. Here are the first three we're tackling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {workflows.map((workflow, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="mb-4 inline-flex">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <workflow.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{workflow.title}</CardTitle>
                <CardDescription className="text-base">
                  {workflow.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Document Types
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {workflow.documents.map((doc, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    What We Automate
                  </h4>
                  <ul className="space-y-2">
                    {workflow.useCases.map((useCase, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More workflows coming based on client needs.{" "}
            <a href="mailto:hello@stckd.ai" className="text-primary hover:underline font-medium">
              Tell us what you need
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflows;
