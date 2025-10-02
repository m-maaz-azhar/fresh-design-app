import { useState } from "react";
import serviceMobileDev from "@/assets/service-mobile-dev.jpg";
import serviceWebDev from "@/assets/service-web-dev.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import service3D from "@/assets/service-3d.jpg";
import serviceGraphic from "@/assets/service-graphic.jpg";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Mobile Apps That Users Love",
    description: "Turn Your Mobile App Idea Into A Reality With Our Expert Development Team. We Create iOS And Android Applications That Deliver Exceptional User Experiences And Drive Business Growth.",
    features: [
      "Native iOS And Android Development",
      "Cross-Platform Solutions (React Native, Flutter)",
      "UI/UX Design And Prototyping"
    ],
    image: serviceMobileDev
  },
  {
    id: 2,
    title: "Website Development",
    subtitle: "Modern & Scalable Web Solutions That Drive Success",
    description: "Turn Your Website Idea Into Reality With Our Expert Development Team. We Build Responsive, High-Performance Websites That Deliver Seamless User Experiences And Accelerate Business Growth.",
    features: [
      "Custom Web Application Development",
      "Front-End And Back-End Solutions (Vue, React, Node.Js)",
      "UI/UX Design And Prototyping"
    ],
    image: serviceWebDev
  },
  {
    id: 3,
    title: "Digital Marketing & SEO",
    subtitle: "Data-Driven Marketing Strategies That Deliver Results",
    description: "Amplify Your Online Presence With Our Comprehensive Digital Marketing Services. We Combine SEO, Content Marketing, And Analytics To Drive Traffic And Convert Visitors Into Customers.",
    features: [
      "Search Engine Optimization (SEO)",
      "Content Marketing & Social Media",
      "Analytics & Performance Tracking"
    ],
    image: serviceMarketing
  },
  {
    id: 4,
    title: "3D Modeling & Animation",
    subtitle: "Stunning 3D Visuals That Bring Your Ideas To Life",
    description: "Transform Your Concepts Into Immersive 3D Experiences. Our Expert Team Creates Detailed Models And Engaging Animations For Games, Products, And Architectural Visualization.",
    features: [
      "Product Visualization & Rendering",
      "Character & Environment Design",
      "Animation & Motion Graphics"
    ],
    image: service3D
  },
  {
    id: 5,
    title: "Graphic Designing",
    subtitle: "Creative Designs That Capture Attention & Build Brands",
    description: "Elevate Your Brand With Stunning Visual Identity. From Logos To Marketing Materials, We Create Designs That Resonate With Your Audience And Leave A Lasting Impression.",
    features: [
      "Brand Identity & Logo Design",
      "Marketing Materials & Collateral",
      "UI/UX Design For Digital Products"
    ],
    image: serviceGraphic
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const handleServiceClick = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section className="min-h-screen flex relative" id="services">
      {/* Left side - Image */}
      <div className="w-full lg:w-1/2 relative overflow-hidden bg-black">
        {activeService !== null ? (
          services.map((service, index) => (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeService ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/70 text-2xl font-semibold text-center">
              <div className="mb-4">Services Overview</div>
              <div className="text-lg">Click on a service to view details</div>
            </div>
          </div>
        )}
      </div>

      {/* Right side - Services Navigation */}
      <div 
        id="services-scroll-container"
        className="w-full lg:w-1/2 bg-background relative overflow-y-auto h-screen"
      >
        {/* Vertical line on right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent z-10"></div>

        <div className="p-8 lg:p-12 xl:p-16">
          <div className="sticky top-0 bg-background z-20 pb-8 mb-8">
            <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-4">
              SERVICES OVERVIEW
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => {
              const isActive = index === activeService;
              
              return (
                <div
                  key={service.id}
                  className={`border-b border-border last:border-b-0 transition-all duration-300 ${
                    isActive ? "bg-primary/5" : "bg-transparent"
                  }`}
                >
                  <button
                    className={`py-10 lg:py-12 w-full text-left hover:bg-primary/2 transition-colors duration-300 focus:outline-none focus:bg-primary/2`}
                    onClick={() => handleServiceClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleServiceClick(index);
                      }
                    }}
                  >
                    <h3
                      className={`text-3xl lg:text-4xl font-bold mb-6 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {service.title}
                      <span className={`ml-4 text-2xl transition-transform duration-300 ${
                        isActive ? "rotate-180" : "rotate-0"
                      }`}>
                        ▼
                      </span>
                    </h3>

                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                        isActive ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-6 pt-1">
                        <p className="text-xl font-semibold text-primary">
                          {service.subtitle}
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-3 pt-4">
                          {service.features.map((feature, idx) => (
                            <li key={`${service.id}-feature-${idx}`} className="flex items-start space-x-3">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-muted-foreground text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
