import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground font-medium">be the brand</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full border-4 border-primary"></div>
                  <div className="w-8 h-8 rounded-full border-4 border-primary -ml-4"></div>
                  <span className="ml-2 text-2xl font-bold text-primary">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary leading-none">Catalyst</span>
                  <span className="text-xs text-primary leading-none">Online</span>
                  <span className="text-xs text-primary leading-none">Solution</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-medium">we'll be the catalyst</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              ABOUT US
            </a>
            <a href="#services" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              SERVICES
            </a>
            <a href="#process" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              OUR PROCESS
            </a>
            <a href="#contact" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              CONTACT US
            </a>
          </div>

          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-2 font-semibold"
          >
            Let's Spark
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
