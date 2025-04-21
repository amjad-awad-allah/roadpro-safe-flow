
import { Button } from "@/components/ui/button";
import { ArrowRight, TrafficCone } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center pt-[95px] pb-10 bg-roadpro-lightgray"
    >
      {/* Decorative cone left */}
      <div className="absolute left-0 top-12 z-0 pointer-events-none select-none hidden md:block">
        <TrafficCone className="text-roadpro-yellow drop-shadow-xl animate-float" size={48} />
      </div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* IMAGE - Prominent, never covered */}
        <div className="w-full flex justify-center z-10 order-2 md:order-1">
          <img
            alt="RoadPro team working on a traffic solution"
            className="w-full max-w-xl rounded-2xl shadow-2xl border-8 border-white object-cover block bg-white aspect-square"
            src="/lovable-uploads/2c60c704-4e64-4ceb-a808-2dfe5dd85255.jpg"
            style={{
              minHeight: "260px",
              background: "#F1F0FB",
            }}
          />
        </div>
        {/* TEXT Content */}
        <div className="space-y-7 text-center md:text-left flex flex-col items-center md:items-start order-1 md:order-2">
          <div className="inline-block bg-roadpro-yellow px-5 py-2 rounded-full animate-fade-in-up text-roadpro-black font-poppins text-base font-semibold shadow-lg tracking-wide mb-2">
            Road Safety Experts in Abu Dhabi
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-roadpro-black leading-tight animate-fade-in-up font-poppins mb-3">
            Enhancing Public Safety
            <br className="hidden md:block" />
            & Smooth Traffic Flow
          </h1>
          <p className="text-lg md:text-xl text-roadpro-gray max-w-xl animate-fade-in-up font-poppins mb-4">
            Innovative solutions for traffic diversions, lane closures, and street safety—expertly delivered by RoadPro.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up">
            <Button className="bg-roadpro-yellow text-roadpro-black text-lg px-7 py-5 rounded-xl shadow-xl hover:bg-roadpro-black hover:text-roadpro-yellow transition-all hover-glow hover:scale-105 animate-soft-pulse font-poppins">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-roadpro-black text-roadpro-black text-lg px-7 py-5 hover:bg-roadpro-black hover:text-white transition-all rounded-xl font-poppins shadow-md">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
