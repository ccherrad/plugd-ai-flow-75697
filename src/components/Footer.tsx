import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">stckd.ai</h3>
          <p className="text-primary-foreground/80 text-sm mb-6">
            Building the future of procurement automation
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70 mb-8">
            <Mail className="h-4 w-4" />
            <a href="mailto:hello@stckd.ai" className="hover:text-primary-foreground transition-colors">
              hello@stckd.ai
            </a>
          </div>

          <div className="pt-6 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/50">
              © 2024 stckd.ai • Currently in MVP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
