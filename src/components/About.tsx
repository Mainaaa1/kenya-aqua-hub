import { Award, Users, Clock, Wrench } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Trusted expertise in pool and sauna solutions"
    },
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers across Kenya"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support",
      description: "Round-the-clock maintenance services"
    },
    {
      icon: Wrench,
      number: "1000+",
      label: "Projects Completed",
      description: "Successful installations and renovations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/50 to-accent/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-primary/20 to-pool-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gradient-to-br from-pool-teal/20 to-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-pool-teal/10 rounded-full text-primary text-sm font-medium mb-6">
            🏢 About AquaVibe Kenya
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Trusted Pool & Spa Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, we've been Kenya's leading provider of premium pool, sauna, 
            and water feature solutions. From design to installation and maintenance, 
            we bring your aquatic dreams to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="slide-right">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Crafting Aquatic Excellence Since 2008
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  AquaVibe Kenya began with a simple vision: to bring world-class aquatic experiences 
                  to homes and businesses across Kenya. What started as a small family business has 
                  grown into the country's most trusted name in pool and spa solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team of certified professionals combines international expertise with local 
                  knowledge, ensuring every project meets the highest standards while adapting to 
                  Kenya's unique climate and requirements.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/20 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-2">Quality First</h4>
                <p className="text-sm text-muted-foreground">Premium materials and expert craftsmanship in every project</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-pool-teal/20 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-2">Local Expertise</h4>
                <p className="text-sm text-muted-foreground">Deep understanding of Kenya's climate and requirements</p>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6" data-aos="slide-left">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-primary to-pool-teal rounded-full">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-primary mb-2">{stat.label}</div>
                <p className="text-xs text-muted-foreground leading-tight">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-pool-teal/5 rounded-3xl border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To transform spaces with exceptional aquatic solutions that enhance lifestyle, 
              promote wellness, and create lasting memories for families and communities across Kenya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;