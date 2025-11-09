import { Heart } from "lucide-react";

const Team = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex p-3 bg-accent/10 rounded-full mb-6">
            <Heart className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built by People Who Automate for a Living
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We've spent years helping businesses streamline operations, cut costs, and eliminate manual workflows. Now we're building the tool we always wished existed.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 italic">
            "Every feature we ship is something we'd want to use ourselves. We're building stckd.ai transparently—one feature at a time, with real feedback from real users."
          </p>
          <div className="mt-8">
            <p className="text-sm font-medium text-foreground">— The stckd.ai Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;