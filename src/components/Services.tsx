import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceSauna from "@/assets/service-sauna.jpg";
import serviceFountains from "@/assets/service-fountains.jpg";

const Services = () => {
  const services = [
    {
      title: "Surface Cleaning",
      description: "Molestiae non recusandae neau em rerum hic tenetur a sapiente aut reiciendis voluptatibus.",
      image: serviceInstallation,
      features: ["Pool surface cleaning", "Debris removal", "Water testing"]
    },
    {
      title: "Renovations", 
      description: "Complete pool renovation services to transform your existing pool into a modern masterpiece.",
      image: serviceMaintenance,
      features: ["Pool resurfacing", "Equipment upgrades", "Design updates"]
    },
    {
      title: "Sauna & Spa",
      description: "Professional sauna installation and spa services for the ultimate relaxation experience.",
      image: serviceSauna,
      features: ["Sauna installation", "Spa maintenance", "Heat therapy systems"]
    },
    {
      title: "Fountain Design",
      description: "Custom fountain installations that add elegance and tranquility to your outdoor space.",
      image: serviceFountains,
      features: ["Custom design", "Water features", "Lighting systems"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-white">
      {/* Wave Shape Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20 md:h-32 rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pool-blue text-sm font-semibold uppercase tracking-wide mb-4">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Swimming Pool Facilities & Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pool-blue-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-yellow-accent rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-pool-blue rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-pool-blue rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="yellow-outline"
                    size="sm"
                    className="w-full font-semibold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;