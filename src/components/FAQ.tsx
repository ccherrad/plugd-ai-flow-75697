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
        "PLUGD.AI is an AI-first workflow automation and audit platform that brings intelligence to complex business processes. We're starting with procurement — automating everything from invoice processing and 3-way matching to anomaly detection and compliance tracking — but our platform is designed to expand to any workflow where automation and audit intelligence add value.",
      value: "item-1",
    },
    {
      question: "How does the AI-powered anomaly detection work?",
      answer:
        "Our AI automatically analyzes every invoice and purchase order, comparing prices across vendors, flagging duplicates, detecting pricing variances, and identifying potential compliance issues. The system learns from your data to continuously improve accuracy and catch issues before they become costly problems.",
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
      question: "What makes PLUGD.AI different from traditional workflow tools?",
      answer:
        "While traditional tools focus on automating data capture, PLUGD.AI automates understanding. We don't just record transactions—we explain them, compare patterns across your organization, flag anomalies in real-time, and learn from your data to prevent future errors. We bring audit intelligence to business workflows. Plus, our platform is designed to grow with you across multiple workflows, not just one vertical.",
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
      question: "Will you expand beyond procurement?",
      answer:
        "Absolutely. Procurement is our first workflow because it perfectly demonstrates the value of AI-powered audit intelligence. But the same principles apply to expense management, contract lifecycle, compliance workflows, and more. We'll expand based on client needs and feedback — you help us decide what comes next.",
      value: "item-9",
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
