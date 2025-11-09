import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Users } from "lucide-react";

const EarlyAccess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Message */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent mb-6">
                <Users className="h-4 w-4" />
                Join the Pilot Program
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Become an Early Adopter
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're looking for forward-thinking procurement teams who want to test stckd.ai in their workflows. Get early access, share feedback, and help us build the future of procurement automation.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta mt-2" />
                  <p><strong className="text-foreground">Free during beta</strong> — no credit card required</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta mt-2" />
                  <p><strong className="text-foreground">Direct line to founders</strong> — your input shapes the product</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta mt-2" />
                  <p><strong className="text-foreground">Exclusive perks</strong> — locked-in pricing when we launch</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">Request Early Access</h3>
              <form className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company Inc."
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="use-case" className="text-sm font-medium text-foreground">What do you want to automate?</Label>
                  <Input
                    id="use-case"
                    type="text"
                    placeholder="Invoices, contracts, procurement..."
                    className="mt-1.5"
                  />
                </div>
                <Button className="w-full bg-cta hover:bg-cta/90 text-cta-foreground">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                We'll be in touch within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;