import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  value: string;
}

const FAQ = () => {
  const faqList: FAQItem[] = [
    {
      question: "What is PLUGD.AI?",
      answer:
        "PLUGD.AI is a financial documents intelligence hub that assists and automates document processing for finance teams. We centralize financial documents across different workflows (procurement, compliance, operations), use AI to classify and extract information, manage approval workflows, and build unified catalogs that enable monitoring and reconciliation. Currently automating Procurement, KYC/AML, and Mortgage workflows.",
      value: "item-1",
    },
    {
      question: "How do documents get into the system?",
      answer:
        "You have two options: (1) Manual upload — drag and drop PDFs or images directly into PLUGD.AI, or (2) Automated channels — configure integrations to automatically consume documents from emails, ERPs, accounting systems, or cloud storage. Once in, our AI takes over the classification and extraction.",
      value: "item-2",
    },
    {
      question: "What stage is the product currently in?",
      answer:
        "We're currently in MVP stage and open for early adopters. We've already built core features including invoice upload, AI-powered data extraction, 3-way matching, basic approval workflows, and vendor management. We're actively developing advanced features like multi-level approvals, real-time analytics, and ERP integrations.",
      value: "item-3",
    },
    {
      question: "Do you integrate with existing ERP systems?",
      answer:
        "ERP integrations are on our roadmap and coming soon. We're planning support for SAP, Oracle, NetSuite, and QuickBooks. Early adopters will have priority access to these integrations and can help shape how they work.",
      value: "item-4",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "Very quickly! Our platform requires minimal setup—no complex ERP configuration needed. Most teams are up and running within a few clicks. Early adopters get white-glove onboarding support to ensure a smooth transition.",
      value: "item-5",
    },
    {
      question: "What makes PLUGD.AI different from OCR/extraction tools?",
      answer:
        "Most tools only extract data. PLUGD.AI manages the complete lifecycle: ingestion → classification → extraction → approval workflows → catalog building → reconciliation and monitoring. We don't just pull numbers from PDFs—we understand document types, route them through the right approvals, and build a unified catalog that reduces errors and gives you financial visibility.",
      value: "item-6",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We implement enterprise-grade security measures including encryption at rest and in transit, regular security audits, and compliance with industry standards. Your procurement data is sensitive, and we treat it with the highest level of security and confidentiality.",
      value: "item-7",
    },
    {
      question: "What support do early adopters get?",
      answer:
        "Early adopters receive priority support, direct access to our team, influence over our roadmap, and preferential pricing. You'll help shape the product and get access to new features before general availability. Most importantly, you'll influence which workflows we tackle next — we build based on real user needs, not assumptions.",
      value: "item-8",
    },
    {
      question: "What workflows do you support?",
      answer:
        "We currently automate three workflows: (1) Procurement - invoices, POs, contracts; (2) KYC/AML - identity verification, compliance documents; (3) Mortgage - applications, income verification, property documents. Each workflow gets the same document intelligence: ingest, classify, extract, approve, catalog, monitor. We add new workflows based on client demand.",
      value: "item-9",
    },
    {
      question: "How does the platform enable insights?",
      answer:
        "After documents are processed and approved, they're organized into structured repositories tailored to each workflow. For Procurement, this means catalogs for reconciliation and spend monitoring. For KYC/AML, it's compliance records and audit trails. For Mortgage, it's application tracking and verification status. Each workflow gets the intelligence it needs.",
      value: "item-10",
    },
  ];

  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 text-center">
        <h3 className="font-medium">
          Still have questions?{" "}
          <a
            href="mailto:hello@plugd.ai"
            className="text-primary hover:underline"
          >
            Contact us
          </a>
        </h3>
      </div>
    </section>
  );
};

export default FAQ;
