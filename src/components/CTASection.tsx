import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Lock, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Discover How Much Smarter Procurement Can Be
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Upload your first invoice — and see anomalies appear instantly
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sign-up Form */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-6">Get Early Access</h3>
              <form className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Full Name" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Input 
                  type="email" 
                  placeholder="Work Email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Input 
                  type="text" 
                  placeholder="Company Name" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Request Access
                </Button>
                <p className="text-xs text-primary-foreground/70 text-center">
                  Join the early adopter program. Limited spots available.
                </p>
              </form>
            </div>

            {/* Demo Booking */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-6">Talk to Us</h3>
              <div className="space-y-6">
                <p className="text-primary-foreground/90">
                  Schedule a personalized demo and discover how our AI-first platform can transform your procurement process.
                </p>
                <ul className="space-y-3">
                  {[
                    "See instant anomaly detection in action",
                    "Learn how to save hours per invoice",
                    "Explore cross-site spend intelligence",
                    "Discuss your specific use case"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Shield className="h-5 w-5" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Lock className="h-5 w-5" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Globe className="h-5 w-5" />
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
