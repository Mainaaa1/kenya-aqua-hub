import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroPool from "@/assets/hero-pool.jpg";

const Hero = () => {
  const features = [
    "Professional Pool Installation",
    "Premium Sauna & Spa Solutions", 
    "Custom Fountain Design",
    "Maintenance & Repair Services"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroPool} 
          alt="Luxury swimming pool with crystal clear water" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pool-blue-dark/90 via-pool-blue-dark/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Kenya's Premier Pool & Spa Specialists
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-pool-blue to-pool-teal bg-clip-text text-transparent">
                Outdoor Space
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Expert pool installation, luxury saunas, and custom fountains. 
              Creating stunning aquatic experiences across Kenya for over 15 years.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-pool-teal mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pool-blue to-pool-teal text-white border-0 px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-pool-blue-dark px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;