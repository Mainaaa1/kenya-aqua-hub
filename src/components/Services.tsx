import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves, Thermometer, Droplets, Wrench, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Pool Installation & Design",
      description: "Custom pool design and professional installation services for residential and commercial properties.",
      price: "From KES 150,000",
      features: ["Custom design consultation", "Professional installation", "Quality materials", "1-year warranty"],
      image: "/src/assets/service-installation.jpg"
    },
    {
      icon: Wrench,
      title: "Pool Maintenance", 
      description: "Regular cleaning, chemical balancing, and equipment maintenance to keep your pool crystal clear.",
      price: "From KES 8,500/month",
      features: ["Weekly cleaning", "Chemical balancing", "Equipment check", "Emergency support"],
      image: "/src/assets/service-maintenance.jpg"
    },
    {
      icon: Thermometer,
      title: "Sauna Installation",
      description: "Traditional and infrared sauna installation with premium Finnish materials and modern controls.",
      price: "From KES 95,000", 
      features: ["Finnish materials", "Professional installation", "Digital controls", "Health benefits"],
      image: "/src/assets/service-sauna.jpg"
    },
    {
      icon: Waves,
      title: "Water Features & Fountains",
      description: "Decorative fountains and water features to enhance your landscape and create tranquil environments.", 
      price: "From KES 45,000",
      features: ["Custom designs", "Professional installation", "LED lighting options", "Low maintenance"],
      image: "/src/assets/service-fountains.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary to-pool-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pool-teal to-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-pool-teal/10 rounded-full text-primary text-sm font-medium mb-6">
            🔧 Professional Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial design to ongoing maintenance, we provide comprehensive 
            aquatic solutions for residential and commercial properties across Kenya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 border border-primary/20 relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-xl font-bold text-white">{service.price}</div>
                  <div className="text-sm text-white/80">Starting price</div>
                </div>
              </div>
              
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-pool-teal/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 animate-pulse"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-pool-teal text-white border-0 hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-br from-secondary/80 to-accent/80 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-pool-teal/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-muted-foreground mb-6">
                Get a free consultation and personalized quote for your project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-pool-teal text-white border-0 hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Free Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-white border-primary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;