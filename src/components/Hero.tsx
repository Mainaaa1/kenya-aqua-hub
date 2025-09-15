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
          alt="Professional pool cleaning service with crystal clear water" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pool-blue-dark/85 via-pool-blue-dark/60 to-pool-blue/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl">
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Professional<br />
              <span className="text-white">Pool Cleaning</span><br />
              <span className="text-white">Service</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-xl leading-relaxed">
              Expert pool installation, luxury saunas, and custom fountains. Creating stunning aquatic experiences across Kenya.
            </p>

            {/* CTA Button */}
            <div className="mb-8 sm:mb-12">
              <Button 
                size="lg" 
                variant="yellow"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                MAKE APPOINTMENT
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer" 
             onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;