import { Target, CheckCircle2, Palette, Code, Rocket } from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market landscape to craft a strategic roadmap that drives measurable results. By aligning every decision with your vision",
    icon: Target,
    duration: "1-2 weeks",
    deliverables: ["Market Research", "Technical Audit", "User Personas", "Project Roadmap"]
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Our creative team transforms your vision into stunning visual designs and interactive prototypes. We focus on user experience and brand consistency throughout the design process",
    icon: Palette,
    duration: "2-3 weeks",
    deliverables: ["Wireframes", "UI Design", "Style Guide", "Interactive Prototype"]
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "Building robust, scalable solutions using cutting-edge technologies. Our development process includes rigorous testing to ensure quality and performance across all platforms",
    icon: Code,
    duration: "4-6 weeks",
    deliverables: ["Frontend Development", "Backend Integration", "Quality Assurance", "Performance Testing"]
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support to help your digital solution thrive. Our team monitors performance and implements improvements based on real user data",
    icon: Rocket,
    duration: "1-2 weeks",
    deliverables: ["Deployment", "Training", "Monitoring", "Ongoing Support"]
  }
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveIcon = processSteps[activeStep].icon;

  return (
    <section className="py-20 relative min-h-screen flex items-center" id="process">
      {/* Vertical line on right */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that transforms ideas into successful digital solutions through collaboration and innovation
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-6 lg:text-right">
              <div className={`flex ${activeStep % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start space-x-4 lg:space-x-0 lg:space-x-reverse-4`}>
                <div className={`w-14 h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 ${activeStep % 2 === 0 ? 'lg:ml-4' : 'lg:mr-4'}`}>
                  <ActiveIcon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className={activeStep % 2 === 0 ? '' : 'lg:text-right'}>
                  <p className="text-sm text-primary font-semibold mb-1">Step {activeStep + 1}</p>
                  <h3 className="text-3xl font-bold text-primary">{processSteps[activeStep].title}</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {processSteps[activeStep].description}
              </p>

              <div className="space-y-4">
                <div className={`flex items-center space-x-2 ${activeStep % 2 === 0 ? 'lg:justify-end' : ''}`}>
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">Key Deliverables</span>
                </div>

                <div className={`grid grid-cols-2 gap-4 ${activeStep % 2 === 0 ? 'lg:text-right' : ''}`}>
                  {processSteps[activeStep].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-muted-foreground">• {item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Timeline/Scrollbar */}
            <div className="hidden lg:flex flex-col items-center justify-center py-8 px-8">
              <div className="relative h-[600px] flex items-center">
                {/* Background line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-muted"></div>
                
                {/* Active line */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 w-1 bg-primary transition-all duration-500"
                  style={{
                    height: `${((activeStep + 1) / processSteps.length) * 100}%`,
                    top: 0
                  }}
                ></div>

                {/* Step indicators */}
                <div className="relative flex flex-col justify-between h-full">
                  {processSteps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`group relative flex items-center justify-center transition-all duration-300 ${
                        index === activeStep ? 'scale-110' : 'hover:scale-105'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                        index <= activeStep 
                          ? 'bg-primary border-primary scale-125' 
                          : 'bg-background border-muted'
                      }`}></div>
                      
                      {/* Step number tooltip */}
                      <div className={`absolute left-8 whitespace-nowrap transition-opacity duration-300 ${
                        index === activeStep ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        <span className="text-xs font-semibold text-primary">0{step.id}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="bg-primary rounded-3xl p-12 flex flex-col items-center justify-center w-full max-w-md aspect-square shadow-2xl">
                <div className="w-32 h-32 rounded-full border-8 border-primary-foreground flex items-center justify-center mb-8">
                  <div className="w-20 h-20 rounded-full border-8 border-primary-foreground flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl font-bold text-primary-foreground mb-2">
                    0{activeStep + 1}
                  </div>
                  <p className="text-primary-foreground/90 text-lg">{processSteps[activeStep].duration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile step selector */}
          <div className="lg:hidden mt-12 flex justify-center space-x-4">
            {processSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-primary w-8' 
                    : 'bg-muted'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
