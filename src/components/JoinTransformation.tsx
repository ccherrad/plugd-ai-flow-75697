import { Rocket, Users, Zap, Target, Lightbulb, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const JoinTransformation = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Early Access",
      description: "Be among the first to experience PLUGD.AI and shape its development with your feedback."
    },
    {
      icon: Users,
      title: "Design Partner Program",
      description: "Work directly with our team to customize features for your specific workflows and needs."
    },
    {
      icon: Zap,
      title: "Priority Support",
      description: "Get dedicated onboarding assistance and direct access to our engineering team."
    },
    {
      icon: Award,
      title: "Founding Member Benefits",
      description: "Lock in special pricing and be recognized as a founding partner in our journey."
    },
    {
      icon: Lightbulb,
      title: "Co-Innovation",
      description: "Influence the product roadmap and help build the future of procurement automation."
    },
    {
      icon: Target,
      title: "Proven ROI Path",
      description: "We'll work together to measure and optimize the impact on your specific metrics."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Join the Transformation
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Be Part of the Procurement Revolution
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're building the future of procurement automation with AI. Join us as a design partner
            and help shape a solution that transforms how businesses handle financial documents,
            eliminate manual processing, and unlock unprecedented efficiency.
          </p>
        </div>

        {/* Early Access Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 inline-flex p-3 bg-primary/10 rounded-xl w-fit">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
            <CardContent className="pt-8 pb-8 text-center">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                Become a Design Partner
              </h4>
              <p className="text-lg mb-6 text-primary-foreground/90">
                We're looking for forward-thinking finance and operations leaders who want to
                revolutionize their procurement process. Get exclusive early access and help us
                build the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base px-8"
                  asChild
                >
                  <a href="#early-access">Apply for Early Access</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="mailto:hello@plugd.ai">Contact Our Team</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof Alternative */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Limited spots available for our design partner program
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinTransformation;
