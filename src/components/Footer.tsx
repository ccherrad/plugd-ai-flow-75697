import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.svg";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="container py-24 pb-16 sm:py-32 sm:pb-24">
      <div className="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Brand Section */}
          <div className="col-span-full xl:col-span-2">
            <a href="/" className="flex font-bold items-center">
              <img src={logo} alt="PLUGD.AI" className="h-9 w-9 mr-2" />
              <h3 className="text-2xl">PLUGD.AI</h3>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Financial documents intelligence hub for finance teams. Reduce errors, automate approvals, gain visibility.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <a href="#how-it-works" className="opacity-60 hover:opacity-100 text-sm">
              How It Works
            </a>
            <a href="#workflows" className="opacity-60 hover:opacity-100 text-sm">
              Workflows
            </a>
            <a href="#roadmap" className="opacity-60 hover:opacity-100 text-sm">
              Roadmap
            </a>
            <a
              href="https://dev.plugd.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 text-sm"
            >
              Live Demo
            </a>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <a href="#team" className="opacity-60 hover:opacity-100 text-sm">
              Team
            </a>
            <a href="mailto:hello@plugd.ai" className="opacity-60 hover:opacity-100 text-sm">
              Contact Us
            </a>
            <a href="#faq" className="opacity-60 hover:opacity-100 text-sm">
              FAQ
            </a>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <a
              href="https://dev.plugd.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 text-sm"
            >
              Early Access
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Connect</h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://linkedin.com/company/plugd-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ccherrad"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/plugd_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@plugd.ai"
                className="opacity-60 hover:opacity-100"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <section>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PLUGD.AI. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
