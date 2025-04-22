
import { useEffect, useRef } from "react";
import { CarFront, Layers, Construction, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CarFront,
    title: "Traffic Management Solutions",
    description: "Comprehensive traffic flow management during road works, construction, and public events with ITC-compliant planning and implementation.",
    delay: 0
  },
  {
    icon: Layers,
    title: "Lane Closure Equipment",
    description: "State-of-the-art equipment for safe and efficient lane closures, including barriers, cones, and advanced warning signage.",
    delay: 100
  },
  {
    icon: Construction,
    title: "Street Closure Management",
    description: "Complete management of temporary street closures for construction, events, and emergencies with minimal disruption to daily traffic.",
    delay: 200
  },
  {
    icon: MapPin,
    title: "Specialized Equipment (TMA)",
    description: "Truck Mounted Attenuators and other specialized safety equipment to protect workers and the public in high-risk traffic zones.",
    delay: 300
  }
];

const ServicesSection = () => {
  const titleRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll',
    delay: 100
  });
  
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Number(entry.target.getAttribute('data-delay')) || 0);
        }
      });
    }, { threshold: 0.1 });
    
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-roadpro-lightgray">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4 leading-tight">
            Innovative Traffic Management Services
          </h2>
          <p className="text-roadpro-gray text-lg leading-relaxed">
            Delivering cutting-edge solutions for urban mobility and road safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                data-delay={service.delay}
                className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300
                  hover:translate-y-[-10px] hover:shadow-xl border-b-4 border-transparent 
                  hover:border-roadpro-yellow animate-fade-in-scroll"
              >
                <div className="w-16 h-16 bg-roadpro-yellow/20 rounded-full flex items-center justify-center mb-6
                    transition-shadow animate-soft-pulse">
                  <Icon className="w-8 h-8 text-roadpro-yellow transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-roadpro-black mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-roadpro-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="ghost" size="sm" className="text-roadpro-black hover:text-roadpro-yellow px-0 group">
                  Learn More 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1 transition-transform group-hover:translate-x-1">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
