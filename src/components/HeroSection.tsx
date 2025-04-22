
import { Button } from "@/components/ui/button";
import { ArrowRight, CarFront } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/lovable-public-assets/roadpro-traffic.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <img 
            src="/lovable-uploads/2c60c704-4e64-4ceb-a808-2dfe5dd85255.jpg" 
            alt="Road safety workers" 
            className="w-full h-full object-cover" 
          />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-20 px-4 md:px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-bottom [animation-delay:200ms]">
            Expert Traffic Management Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-bottom [animation-delay:400ms]">
            Setting the standard for road safety and traffic management in Abu Dhabi with ITC-compliant solutions
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-bottom [animation-delay:600ms]">
            <Button variant="cta" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-roadpro-black">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-roadpro-yellow/80">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-roadpro-black"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
