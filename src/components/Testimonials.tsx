import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  comment: string;
  rating: number;
  avatar?: string;
}

const Testimonials = () => {
  // TODO: Replace with real testimonials from your early users
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      comment:
        "STCKD.AI has completely transformed how we handle procurement. The AI-powered anomaly detection caught pricing errors that saved us thousands in the first month alone.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Logistics Inc",
      comment:
        "The 3-way matching automation is a game changer. What used to take our team days now happens instantly, with better accuracy than manual reviews.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      name: "Emma Rodriguez",
      role: "Procurement Manager",
      company: "Manufacturing Co",
      comment:
        "Finally, a procurement tool that actually understands our workflows. The AI insights have helped us negotiate better contracts and identify cost savings opportunities.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="container py-24 sm:py-32 bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Our Early Users Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join the growing community of finance and operations leaders who are transforming their procurement process with AI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-muted/50 dark:bg-card hover:shadow-lg transition-shadow"
          >
            <CardContent className="pt-6 pb-0">
              {renderStars(testimonial.rating)}
              <p className="mt-4 text-muted-foreground leading-relaxed">
                "{testimonial.comment}"
              </p>
            </CardContent>

            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* CTA for early adopters */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          Want to share your experience?{" "}
          <a
            href="mailto:hello@stckd.ai"
            className="text-primary hover:underline font-medium"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
