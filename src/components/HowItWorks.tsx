import { Upload, Tags, FileSearch, CheckCircle, FolderTree, Sparkles, Bot, Users, MessageSquare, ThumbsUp, ThumbsDown, Edit3, Database, BarChart3, XCircle, Scan, Clock, AlertTriangle, FileWarning, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.svg";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Ingest Documents",
      description: "Upload documents manually through our intuitive interface, or configure automated channels to continuously consume documents from emails, ERPs, cloud storage, and other business systems.",
      features: [
        "Drag-and-drop file upload",
        "Email forwarding integration",
        "API connectors for ERPs (SAP, Oracle, NetSuite)",
        "Cloud storage sync (Google Drive, Dropbox, OneDrive)",
        "Scheduled batch imports"
      ],
      badge: "Multi-Channel",
      solves: {
        icon: Scan,
        problem: "Document Chaos",
        description: "Documents scattered across emails, folders, and systems with no central hub."
      }
    },
    {
      icon: Tags,
      title: "2. Classify & Route",
      description: "Our AI agents automatically analyze each document to identify its type, understand its purpose, and route it to the appropriate workflow with the correct approval chain.",
      features: [
        "AI-powered document type detection (invoices, POs, contracts, KYC forms, etc.)",
        "Intelligent workflow routing based on content and metadata",
        "Confidence scoring for classification decisions",
        "Learning from user corrections to improve accuracy",
        "Custom document types and routing rules"
      ],
      badge: "AI Agents",
      highlight: true,
      solves: {
        icon: DollarSign,
        problem: "Human Errors",
        description: "Typos, duplicates, and missed details that lead to costly mistakes."
      }
    },
    {
      icon: FileSearch,
      title: "3. Extract Information",
      description: "Specialized AI agents extract all relevant data fields with high precision, understanding document context, structure, and business logic to eliminate manual data entry.",
      features: [
        "Field-level extraction with confidence scores",
        "Table and line-item detection (invoice items, transaction lists)",
        "Relationship mapping (matching POs to invoices)",
        "Multi-language support",
        "Handwriting recognition for forms",
        "Validation against business rules"
      ],
      badge: "AI Agents",
      highlight: true,
      solves: {
        icon: FileWarning,
        problem: "Manual Data Entry",
        description: "Hours spent manually extracting data from PDFs and entering it into systems."
      }
    },
    {
      icon: Users,
      title: "4. Human-in-the-Loop Collaboration",
      description: "This is where humans maintain oversight while AI handles the heavy lifting. Our collaboration platform enables teams to review, approve, validate, comment, reject, and correct AI extractions — ensuring accuracy while eliminating repetitive data entry and time loss.",
      features: [
        "Real-time collaboration on the same document",
        "Inline commenting and discussion threads",
        "Approve/Reject workflows with reasons",
        "Correct AI extractions with visual feedback",
        "Configurable approval chains by role and amount",
        "Mobile-friendly review interface",
        "Email and Slack notifications",
        "Audit trail of all actions and decisions"
      ],
      badge: "Collaboration Hub",
      highlight: true,
      emphasis: "Human Oversight + AI Assistance",
      solves: {
        icon: Clock,
        problem: "Collaboration Nightmare & Approval Bottlenecks",
        description: "Teams rely on email threads and shared drives, with documents stuck in approval limbo."
      }
    },
    {
      icon: FolderTree,
      title: "5. Organize & Store",
      description: "Approved documents and their extracted data are automatically organized into structured, searchable repositories with full version control and audit trails.",
      features: [
        "Automatic tagging and categorization",
        "Full-text search across all documents",
        "Advanced filters (date range, amount, vendor, status)",
        "Version history and change tracking",
        "Secure cloud storage with encryption",
        "Role-based access control",
        "Retention policy management"
      ],
      badge: "Smart Catalog"
    },
    {
      icon: BarChart3,
      title: "6. Enable Insights & Analytics",
      description: "Transform organized document data into actionable intelligence with built-in analytics, reconciliation tools, compliance reporting, and operational dashboards.",
      features: [
        "Real-time dashboards (spend analysis, processing times, bottlenecks)",
        "Automated reconciliation (3-way matching, bank reconciliation)",
        "Compliance reports (SOX, audit trails, policy violations)",
        "Trend analysis and forecasting",
        "Custom report builder",
        "Export to BI tools (Tableau, Power BI)",
        "Anomaly detection and alerts"
      ],
      badge: "Intelligence",
      solves: {
        icon: AlertTriangle,
        problem: "No Visibility",
        description: "Can't easily reconcile, monitor spending, or catch anomalies in real-time."
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            The Document Intelligence Pipeline
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
            from chaos to control: how <img src={logo} alt="STCKD.AI" className="h-10 md:h-12 inline-block align-middle mx-2" /> works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every step in our AI-powered workflow tackles a specific challenge finance teams face — transforming manual document processing into intelligent automation with human oversight
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                step.highlight ? 'border-2 border-primary/50 bg-primary/5' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Badge */}
                  <div className="flex-shrink-0">
                    <div className="relative inline-flex">
                      <div className={`p-6 rounded-2xl shadow-lg ${
                        step.highlight
                          ? 'bg-gradient-to-br from-primary via-primary/90 to-accent'
                          : 'bg-gradient-to-br from-primary to-primary/80'
                      }`}>
                        <step.icon className="h-12 w-12 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <Badge variant={step.highlight ? "default" : "secondary"} className="w-fit">
                        {step.badge}
                      </Badge>
                    </div>

                    {/* Problem it solves */}
                    {step.solves && (
                      <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-destructive/10 rounded-lg">
                            <step.solves.icon className="h-5 w-5 text-destructive" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <XCircle className="h-4 w-4 text-destructive" />
                            <span className="text-sm font-bold text-destructive">Solves: {step.solves.problem}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.solves.description}</p>
                        </div>
                      </div>
                    )}

                    {step.emphasis && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border-l-4 border-accent rounded-r">
                        <Bot className="h-5 w-5 text-accent" />
                        <span className="font-semibold text-accent">{step.emphasis}</span>
                      </div>
                    )}

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Key Features:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {step.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              AI automates the repetitive work. Humans maintain control and oversight.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
