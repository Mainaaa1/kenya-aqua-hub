import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Pool Skimmer",
      category: "Pool Equipment",
      price: "KES 15,500",
      originalPrice: "KES 18,000",
      rating: 4.8,
      reviews: 24,
      image: "/placeholder.svg",
      description: "High-performance automatic pool skimmer with advanced filtration system",
      features: ["Automatic operation", "Easy maintenance", "Durable materials"],
      badge: "Best Seller"
    },
    {
      id: 2, 
      name: "Pool Chemical Test Kit",
      category: "Maintenance",
      price: "KES 3,200",
      originalPrice: null,
      rating: 4.6,
      reviews: 18,
      image: "/placeholder.svg",
      description: "Complete water testing kit for pH, chlorine, and alkalinity levels",
      features: ["Accurate readings", "Easy to use", "Professional grade"],
      badge: null
    },
    {
      id: 3,
      name: "LED Pool Light Set",
      category: "Lighting",
      price: "KES 28,000", 
      originalPrice: "KES 35,000",
      rating: 4.9,
      reviews: 31,
      image: "/placeholder.svg",
      description: "Color-changing LED lights with remote control and smartphone app",
      features: ["RGB colors", "Remote control", "Waterproof IP68"],
      badge: "New Arrival"
    },
    {
      id: 4,
      name: "Pool Vacuum Cleaner",
      category: "Cleaning", 
      price: "KES 45,000",
      originalPrice: null,
      rating: 4.7,
      reviews: 12,
      image: "/placeholder.svg",
      description: "Robotic pool cleaner with intelligent navigation and debris collection",
      features: ["Automatic cleaning", "Smart navigation", "Large debris capacity"],
      badge: null
    },
    {
      id: 5,
      name: "Sauna Heater 6kW",
      category: "Sauna Equipment",
      price: "KES 65,000",
      originalPrice: "KES 75,000", 
      rating: 4.5,
      reviews: 8,
      image: "/placeholder.svg",
      description: "Professional-grade electric sauna heater suitable for 4-6 person saunas",
      features: ["6kW power", "Digital controls", "Safety certified"],
      badge: "Professional"
    },
    {
      id: 6,
      name: "Water Feature Pump",
      category: "Fountain Equipment",
      price: "KES 12,800",
      originalPrice: null,
      rating: 4.4,
      reviews: 15,
      image: "/placeholder.svg", 
      description: "High-efficiency submersible pump for fountains and water features",
      features: ["Variable flow", "Energy efficient", "Quiet operation"],
      badge: null
    }
  ];

  return (
    <section id="products" className="py-20 bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-pool-teal/20 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-right">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pool-teal/10 to-primary/10 rounded-full text-pool-teal text-sm font-medium mb-6">
            🛒 Premium Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pool & Spa Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality equipment and accessories to keep your pool, sauna, and water features 
            running smoothly. Professional-grade products at competitive prices.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden border-0 shadow-md bg-white/90 backdrop-blur-sm"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {product.badge && (
                  <Badge 
                    className="absolute top-3 left-3 bg-gradient-to-r from-primary to-pool-teal text-white border-0"
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardDescription className="text-xs font-medium text-primary mb-1">
                      {product.category}
                    </CardDescription>
                    <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-foreground">{product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </div>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-primary to-pool-teal text-white border-0"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="zoom-in-up">
          <div className="bg-gradient-to-br from-secondary/80 to-accent/80 rounded-2xl p-8 backdrop-blur-sm border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-pool-teal/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">Need Something Specific?</h3>
              <p className="text-xl text-muted-foreground mb-6">
                Can't find what you're looking for? Contact us for custom products and bulk orders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-pool-teal text-white border-0 hover:scale-105 transition-all duration-300"
                >
                  Contact for Custom Orders
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-white border-primary"
                >
                  View Full Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;