import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves, Thermometer, Droplets, Wrench, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Swimming Pool Installation",
      description: "Custom-designed swimming pools tailored to your space and style. From infinity pools to family-friendly designs.",
      features: ["Custom Design", "Premium Materials", "Professional Installation", "Lifetime Support"],
      price: "From KES 800,000",
      popular: true
    },
    {
      icon: Thermometer,
      title: "Sauna & Spa Solutions",
      description: "Luxury saunas and spa installations for the ultimate relaxation experience in your home or business.",
      features: ["Traditional & Infrared", "Custom Sizing", "Premium Woods", "Professional Setup"],
      price: "From KES 400,000",
      popular: false
    },
    {
      icon: Droplets,
      title: "Custom Fountains",
      description: "Stunning water features and fountains that add elegance and tranquility to any space.",
      features: ["Artistic Design", "Water Recycling", "LED Lighting", "Low Maintenance"],
      price: "From KES 150,000",
      popular: false
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance services to keep your pools, saunas, and fountains in perfect condition.",
      features: ["Regular Cleaning", "Equipment Service", "Chemical Balancing", "Emergency Repairs"],
      price: "From KES 15,000/month",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary to-pool-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pool-teal to-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-pool-teal/10 rounded-full text-primary text-sm font-medium mb-6">
            Professional Aquatic Solutions
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${service.popular ? 'border-primary shadow-md' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-pool-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-primary to-pool-teal rounded-full w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-pool-teal text-white border-0"
                      size="sm"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-r from-primary to-pool-teal rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-6 opacity-90">
                Get a free consultation and personalized quote for your project
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-pool-blue-dark hover:scale-105 transition-all duration-300"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;