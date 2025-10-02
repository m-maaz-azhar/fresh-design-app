import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Rana's Restaurant Order Booking System",
    category: "Mobile Application",
    description: "A comprehensive restaurant order booking system with real-time table reservations, menu browsing, and order management. Features include user authentication, payment integration, and admin dashboard for restaurant management.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    year: "2024"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Website Development",
    description: "Modern e-commerce platform with advanced filtering, payment gateway integration, and inventory management. Built with scalable architecture to handle high traffic loads.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Express.js", "PostgreSQL", "Stripe"],
    year: "2023"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Graphic Designing",
    description: "Complete brand identity package including logo design, color palette, typography, and marketing materials for a tech startup. Created cohesive visual language across all touchpoints.",
    image: "/api/placeholder/600/400",
    technologies: ["Adobe Illustrator", "Figma", "Photoshop"],
    year: "2024"
  },
  {
    id: 4,
    title: "3D Product Visualization",
    category: "3D Modeling & Animation",
    description: "High-quality 3D product renders and animations for furniture e-commerce. Created photorealistic visualizations that increased conversion rates by 45%.",
    image: "/api/placeholder/600/400",
    technologies: ["Blender", "Cinema 4D", "After Effects"],
    year: "2023"
  },
  {
    id: 5,
    title: "Digital Marketing Campaign",
    category: "Digital Marketing & SEO",
    description: "Comprehensive digital marketing strategy that increased organic traffic by 300% and improved search rankings. Included SEO optimization, content marketing, and social media campaigns.",
    image: "/api/placeholder/600/400",
    technologies: ["Google Analytics", "SEMrush", "WordPress", "Social Media"],
    year: "2024"
  }
];

const PortfolioSection = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="min-h-screen flex relative bg-background" id="portfolio">
      {/* Left side - Portfolio Info */}
      <div className="w-full lg:w-1/2 bg-background p-8 lg:p-12 xl:p-16">
        {/* Vertical line on left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent"></div>
        
        <div className="max-w-2xl">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              OUR PORTFOLIO
            </h2>
            <p className="text-xl text-muted-foreground">
              /2020-2025
            </p>
          </div>

          {/* Portfolio Navigation */}
          <div className="space-y-6">
            {portfolioItems.map((item, index) => (
              <button
                key={item.id}
                className={`w-full text-left cursor-pointer transition-all duration-300 ${
                  index === activeItem ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
                onClick={() => setActiveItem(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveItem(index);
                  }
                }}
              >
                <div className="border-l-4 border-primary/20 hover:border-primary pl-6 py-4 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                      index === activeItem ? "text-primary" : "text-foreground"
                    }`}>
                      {item.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{item.category}</p>
                  
                  {/* Show description only for active item */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    index === activeItem ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={`${item.id}-tech-${techIndex}`}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Hire Us Button */}
          <div className="mt-16">
            <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                HIRE US
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full lg:w-1/2 relative overflow-hidden bg-black">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeItem ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Placeholder for the restaurant image - you can replace with actual images */}
            <div className="w-full h-full bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 flex items-center justify-center">
              {index === 0 ? (
                // Restaurant project mockup
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 bg-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Restaurant App</h3>
                  <p className="text-orange-200">Order & Booking System</p>
                </div>
              ) : (
                // Generic project placeholder
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 bg-primary/60 rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.category}</p>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}

        {/* Project Category Badge */}
        <div className="absolute top-8 right-8 z-10">
          <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {portfolioItems[activeItem].category}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="absolute bottom-8 right-8 z-10">
          <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;