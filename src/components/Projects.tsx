import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { toast } = useToast();

  const handleViewDetails = (projectTitle: string) => {
    toast({
      title: "Project Details",
      description: `Detailed information about "${projectTitle}" will be available soon. Contact us for more information.`,
    });
  };

  const projects = [
    {
      id: 1,
      title: "Luxury Resort Pool Complex",
      category: "pools",
      location: "Mombasa, Kenya",
      description: "50-meter infinity pool with underwater lighting and waterfall features for a 5-star resort.",
      image: "/placeholder.svg",
      tags: ["Infinity Pool", "Commercial", "LED Lighting"]
    },
    {
      id: 2,
      title: "Private Villa Sauna & Spa", 
      category: "saunas",
      location: "Nairobi Hills",
      description: "Custom Finnish sauna with relaxation area and outdoor hot tub for a luxury residential property.",
      image: "/placeholder.svg",
      tags: ["Finnish Sauna", "Hot Tub", "Residential"]
    },
    {
      id: 3,
      title: "Corporate Headquarters Fountain",
      category: "fountains", 
      location: "Westlands, Nairobi",
      description: "Modern geometric fountain design with programmable water jets and LED color changing system.",
      image: "/placeholder.svg",
      tags: ["Commercial", "LED System", "Modern Design"]
    },
    {
      id: 4,
      title: "Family Swimming Pool",
      category: "pools",
      location: "Karen, Nairobi", 
      description: "Family-friendly pool with shallow end, diving area, and integrated spa section.",
      image: "/placeholder.svg",
      tags: ["Family Pool", "Spa Integration", "Safety Features"]
    },
    {
      id: 5,
      title: "Hotel Wellness Center",
      category: "saunas",
      location: "Nakuru",
      description: "Complete wellness facility with steam room, dry sauna, and relaxation pools.",
      image: "/placeholder.svg",
      tags: ["Steam Room", "Wellness Center", "Commercial"]
    },
    {
      id: 6,
      title: "Garden Water Feature",
      category: "fountains",
      location: "Kilifi",
      description: "Natural stone fountain with koi pond integration and tropical landscaping.",
      image: "/placeholder.svg", 
      tags: ["Natural Stone", "Koi Pond", "Landscaping"]
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "pools", name: "Swimming Pools" },
    { id: "saunas", name: "Saunas & Spas" },
    { id: "fountains", name: "Fountains" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pool-teal/20 to-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-pool-teal/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-primary text-sm font-medium mb-6 shadow-sm">
            ✨ Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our portfolio of stunning aquatic installations across Kenya. 
            Each project showcases our commitment to quality, innovation, and exceptional design.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`transition-all duration-300 hover:scale-105 ${filter === category.id ? "bg-gradient-to-r from-primary to-pool-teal text-white border-0 shadow-lg" : "hover:border-primary hover:text-primary"}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group cursor-pointer hover:shadow-xl hover:-translate-y-3 transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-md"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-black"
                      onClick={() => handleViewDetails(project.title)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => {
              toast({
                title: "Full Portfolio Coming Soon",
                description: "Our complete project gallery will be available soon. Contact us to see more examples of our work.",
              });
            }}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;