import { Target, CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="py-20 relative" id="process">
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

        <div className="max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-32">
            {/* Text Content - Left */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold mb-1">Step 1</p>
                  <h3 className="text-3xl font-bold text-primary">Discovery & Strategy</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                We dive deep into your business goals, target audience, and market landscape to craft a strategic roadmap that drives measurable results. By aligning every decision with your vision
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">Key Deliverables</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pl-7">
                  <div className="flex items-start space-x-2">
                    <span className="text-muted-foreground">• Market Research</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-muted-foreground">• Technical Audit</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-muted-foreground">• User Personas</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-muted-foreground">• Project Roadmap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card - Right */}
            <div className="bg-primary rounded-3xl p-12 flex flex-col items-center justify-center aspect-square shadow-2xl">
              <div className="w-32 h-32 rounded-full border-8 border-primary-foreground flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full border-8 border-primary-foreground flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground"></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl font-bold text-primary-foreground mb-2">01</div>
                <p className="text-primary-foreground/90 text-lg">1-2 weeks</p>
              </div>
            </div>
          </div>

          {/* Vertical connector line */}
          <div className="flex justify-center mb-32">
            <div className="w-px h-24 bg-gradient-to-b from-muted to-transparent"></div>
          </div>

          {/* Step 2 - Reversed Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Card - Left */}
            <div className="bg-primary rounded-3xl p-12 flex flex-col items-center justify-center aspect-square shadow-2xl order-2 md:order-1">
              <div className="w-32 h-32 rounded-full border-8 border-primary-foreground flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full border-8 border-primary-foreground flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground"></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl font-bold text-primary-foreground mb-2">01</div>
                <p className="text-primary-foreground/90 text-lg">1-2 weeks</p>
              </div>
            </div>

            {/* Text Content - Right */}
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold mb-1">Step 1</p>
                  <h3 className="text-3xl font-bold text-primary">Discovery & Strategy</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                We dive deep into your business goals, target audience, and market landscape to craft a strategic roadmap that drives measurable results. By aligning every decision with your vision
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">Key Deliverables</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pl-7">
                  <div className="flex items-start space-x-2">
                    <span className="text-muted-foreground">• Market Research</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-muted-foreground">• Technical Audit</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-muted-foreground">• User Personas</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-muted-foreground">• Project Roadmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
