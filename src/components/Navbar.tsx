import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routeList = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#workflows", label: "Workflows" },
    { href: "#team", label: "Team" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md backdrop-blur-sm">
      <a href="/" className="font-bold text-lg flex items-center">
        <img src={logo} alt="PLUGD.AI" className="h-8" />
      </a>

      {/* Mobile Menu */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <img src={logo} alt="PLUGD.AI" className="h-8" />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 mt-8">
              {routeList.map(({ href, label }) => (
                <Button
                  key={label}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={href}>{label}</a>
                </Button>
              ))}
            </div>
            <div className="mt-auto">
              <Button className="w-full bg-cta hover:bg-cta/90 text-cta-foreground" asChild>
                <a href="https://dev.plugd.space/" target="_blank" rel="noopener noreferrer">
                  Get Early Access
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-6">
        {routeList.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="hidden lg:flex">
        <Button className="bg-cta hover:bg-cta/90 text-cta-foreground" asChild>
          <a href="https://dev.plugd.space/" target="_blank" rel="noopener noreferrer">
            Get Early Access
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
