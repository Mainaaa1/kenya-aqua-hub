import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 700 000 000", "+254 722 000 000"],
      description: "Mon-Fri 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["info@kenyapoolshop.co.ke", "sales@kenyapoolshop.co.ke"],
      description: "We respond within 4 hours"
    },
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: ["Mombasa Road, Industrial Area", "Nairobi, Kenya"],
      description: "Mon-Sat 8:00 AM - 5:00 PM"
    },
    {
      icon: Clock,
      title: "Emergency Service",
      details: ["24/7 Emergency Repairs", "Pool & Sauna Maintenance"], 
      description: "Available for existing customers"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pool-teal rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-pool-teal/30 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-pool-teal rounded-full text-white text-sm font-medium mb-6 shadow-lg">
            💬 Let's Start Your Project
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a personalized consultation 
            and detailed project quote. No obligations, just expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm" data-aos="slide-right">
            <CardHeader>
              <CardTitle className="text-2xl">Request a Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pool-installation">Swimming Pool Installation</SelectItem>
                      <SelectItem value="sauna-spa">Sauna & Spa Solutions</SelectItem>
                      <SelectItem value="fountain">Custom Fountains</SelectItem>
                      <SelectItem value="maintenance">Maintenance & Repair</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    placeholder="Tell us about your project, space dimensions, timeline, and any specific requirements..."
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-pool-teal text-white border-0 py-3 text-lg font-semibold"
                  size="lg"
                >
                  Get My Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6" data-aos="slide-left">
            <div className="bg-gradient-to-br from-primary to-pool-teal rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Why Choose Kenya PoolShop?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                    <span>15+ years of experience in aquatic installations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span>Licensed and insured professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span>Lifetime warranty on installations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <span>24/7 emergency repair service</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-gradient-to-br from-primary/10 to-pool-teal/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                          ))}
                          <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;