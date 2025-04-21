
import { useEffect, useRef } from "react";
import { Navigation, Shield, ClipboardList } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Navigation,
    title: "Traffic Diversion Solutions",
    description: "Expert management of traffic flow during road works and events.",
    delay: 0
  },
  {
    icon: Shield,
    title: "Safety Management",
    description: "Comprehensive safety protocols and risk mitigation strategies.",
    delay: 100
  },
  {
    icon: ClipboardList,
    title: "Traffic Planning",
    description: "Detailed traffic management and optimization plans.",
    delay: 200
  }
];

const ServicesSection = () => {
  const titleRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll',
    delay: 100
  });
  
  const card1Ref = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll', 
    delay: 200
  });
  
  const card2Ref = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll', 
    delay: 350
  });
  
  const card3Ref = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll', 
    delay: 500
  });

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const ref = index === 0 ? card1Ref : index === 1 ? card2Ref : card3Ref;
            
            return (
              <div
                key={index}
                ref={ref}
                className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300
                  hover:scale-105 hover:shadow-xl hover:shadow-roadpro-yellow/30 border-2 border-transparent"
              >
                <div className="w-16 h-16 bg-roadpro-yellow/20 rounded-full flex items-center justify-center mb-6
                    transition-shadow group-hover:shadow-roadpro-yellow/30 animate-soft-pulse">
                  <Icon className="w-9 h-9 text-roadpro-yellow transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-roadpro-black mb-4 leading-tight group-hover:text-roadpro-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-roadpro-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
