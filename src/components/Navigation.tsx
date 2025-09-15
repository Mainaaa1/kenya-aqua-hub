import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-pool-blue rounded mr-3 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-pool-blue-dark">AquaVibe Kenya</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-pool-blue px-2 py-2 text-sm font-medium uppercase tracking-wide transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <div className="w-6 h-6 bg-pool-blue rounded-full flex items-center justify-center">
                <Phone className="h-3 w-3 text-white" />
              </div>
              <span className="font-medium">+254 700 000 000</span>
            </div>
            <Button 
              variant="yellow"
              size="sm" 
              className="px-6 py-2 text-sm font-semibold uppercase tracking-wide rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              REQUEST A QUOTE
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-pool-blue block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>+254 700 000 000</span>
              </div>
              <div className="px-3">
                <Button 
                  variant="yellow"
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                >
                  REQUEST A QUOTE
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;