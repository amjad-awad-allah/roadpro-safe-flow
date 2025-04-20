
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 bg-roadpro-lightgray overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
        <svg
          className="absolute top-20 right-0 h-[90%] w-1/2 text-roadpro-yellow opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="absolute bottom-0 right-0 w-full h-[40%] bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
          <div className="inline-block bg-roadpro-yellow px-4 py-1 rounded-full">
            <span className="text-sm font-medium text-roadpro-black">
              Traffic Management Experts in Abu Dhabi
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-roadpro-black leading-tight">
            Enhancing Public Safety & Smooth Traffic Flow
          </h1>
          <p className="text-lg md:text-xl text-roadpro-gray max-w-2xl">
            Innovative Solutions for Traffic Diversions, Lane Closures, and Street Safety
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-roadpro-yellow text-roadpro-black text-lg px-6 py-6 hover:bg-roadpro-black hover:text-roadpro-yellow transition-colors">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-roadpro-black text-roadpro-black text-lg px-6 py-6 hover:bg-roadpro-black hover:text-white transition-colors">
              Contact Us
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-r from-roadpro-black/70 to-roadpro-black/20"></div>
            <img
              src="https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Traffic management solution"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 text-white font-medium">
                <span className="inline-block w-3 h-3 bg-roadpro-yellow rounded-full"></span>
                <span>Trusted by government agencies across UAE</span>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-roadpro-yellow rounded-full -z-10"></div>
          <div className="absolute -left-8 -top-8 w-24 h-24 border-4 border-roadpro-yellow rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
