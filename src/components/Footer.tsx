import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter. You'll receive updates about our services and offers.",
      });
      setEmail("");
    }
  };

  const handleSocialClick = (platform: string) => {
    toast({
      title: "Coming Soon",
      description: `Follow us on ${platform} - Our social media pages are coming soon!`,
    });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        "Swimming Pool Installation",
        "Sauna & Spa Solutions", 
        "Custom Fountains",
        "Maintenance & Repair",
        "Emergency Service"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Projects",
        "Testimonials",
        "Careers",
        "Contact"
      ]
    },
    {
      title: "Support",
      links: [
        "Product Catalog",
        "Warranty Information",
        "Maintenance Tips",
        "FAQs",
        "Service Booking"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }, 
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-pool-teal">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest pool maintenance tips, new product announcements, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-pool-blue-dark">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Kenya PoolShop</h2>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Kenya's premier pool, sauna, and fountain specialists. For over 15 years, 
              we've been creating stunning aquatic experiences for homes and businesses 
              across the country.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>info@kenyapoolshop.co.ke</span>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
                <span>Mombasa Road, Industrial Area<br />Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.label)}
                    aria-label={social.label}
                    className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Kenya PoolShop. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;