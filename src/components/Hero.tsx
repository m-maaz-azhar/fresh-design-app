import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-muted opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full border border-muted opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-muted opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight mb-12">
            Transforming Ideas Into
            <br />
            Powerful Digital Solutions
          </h1>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Lets spark something toghether
          </Button>
        </div>
      </div>

      {/* Vertical line on right */}
      <div className="absolute right-0 top-24 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent"></div>
    </section>
  );
};

export default Hero;
