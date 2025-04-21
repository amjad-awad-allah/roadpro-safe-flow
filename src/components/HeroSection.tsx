
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrafficCone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  // Parallax effect on image based on mouse move (desktop only)
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleParallax = (e: MouseEvent) => {
      if (!imgRef.current) return;
      const {
        innerWidth,
        innerHeight
      } = window;
      const moveX = (e.clientX - innerWidth / 2) / innerWidth * 20;
      const moveY = (e.clientY - innerHeight / 2) / innerHeight * 20;
      imgRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.06)`;
    };
    const resetParallax = () => {
      if (imgRef.current) imgRef.current.style.transform = "translate3d(0,0,0) scale(1)";
    };
    window.addEventListener("mousemove", handleParallax);
    window.addEventListener("mouseleave", resetParallax);
    return () => {
      window.removeEventListener("mousemove", handleParallax);
      window.removeEventListener("mouseleave", resetParallax);
    };
  }, []);

  const headingRef = useScrollAnimation<HTMLHeadingElement>({ 
    delay: 200, 
    animation: 'animate-fade-in-scroll' 
  });
  const descriptionRef = useScrollAnimation<HTMLParagraphElement>({ 
    delay: 400, 
    animation: 'animate-fade-in-scroll' 
  });
  const buttonsRef = useScrollAnimation<HTMLDivElement>({ 
    delay: 600, 
    animation: 'animate-fade-in-scroll' 
  });
  const imageRef = useScrollAnimation<HTMLDivElement>({ 
    delay: 300, 
    animation: 'animate-zoom-in-on-scroll' 
  });
  const coneRef = useScrollAnimation<HTMLDivElement>({ 
    delay: 500, 
    animation: 'animate-slide-in-left' 
  });

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-[100px] pb-10 bg-roadpro-lightgray transition-spacing">
      {/* Decorative cone left */}
      <div 
        ref={coneRef}
        className="absolute left-0 top-12 z-0 pointer-events-none select-none hidden md:block"
      >
        <TrafficCone className="text-roadpro-yellow drop-shadow-xl animate-float-slower" size={54} />
      </div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full flex justify-center order-2 md:order-1" ref={imageRef}>
          <div className="relative w-full max-w-xl flex items-center">
            <img 
              ref={imgRef} 
              alt="RoadPro team working on a traffic solution" 
              className="w-full aspect-square max-w-xl rounded-2xl shadow-2xl border-8 border-white object-cover block bg-white 
                transition-transform duration-1000" 
              src="/lovable-uploads/2c60c704-4e64-4ceb-a808-2dfe5dd85255.jpg" 
              style={{
                minHeight: "260px",
                background: "#F1F0FB"
              }} 
            />
          </div>
        </div>
        
        <div className="space-y-7 text-center md:text-left flex flex-col items-center md:items-start order-1 md:order-2">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-roadpro-black leading-tight">
            Enhancing Public Safety
            <br className="hidden md:block" />
            & Smooth Traffic Flow
          </h1>
          
          <p ref={descriptionRef} className="text-lg md:text-xl text-roadpro-gray max-w-xl">
            Innovative solutions for traffic diversions, lane closures, and street safety—expertly delivered by RoadPro.
          </p>
          
          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <Button className="bg-roadpro-yellow text-roadpro-black text-lg px-7 py-5 rounded-xl shadow-xl
                hover:bg-roadpro-black hover:text-roadpro-yellow transition-all hover-glow hover:scale-105 font-poppins
                animate-soft-pulse focus:outline-none focus:ring-4 focus:ring-roadpro-yellow/70
                [animation-duration:2.7s] glowing-cta">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-roadpro-black text-roadpro-black text-lg px-7 py-5 hover:bg-roadpro-black hover:text-white transition-all rounded-xl font-poppins shadow-md glowing-outline-cta">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
