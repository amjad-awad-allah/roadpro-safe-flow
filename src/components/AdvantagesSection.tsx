
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantages = [
  {
    title: "Experienced Professionals",
    description:
      "Professionals with deep industry knowledge and expertise.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Compliance with all local and international safety standards.",
  },
  {
    title: "Rapid Response",
    description:
      "Rapid deployment and responsive project handling.",
  },
  {
    title: "Strong Authority Coordination",
    description:
      "Strong coordination with local authorities (ITC, police, municipalities).",
  },
  {
    title: "Proven Track Record",
    description:
      "Proven track record in managing high-traffic scenarios.",
  },
];

const AdvantagesSection = () => {
  const titleRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll', 
    delay: 100 
  });
  
  const textRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-slide-in-left', 
    delay: 200 
  });
  
  const imageRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-slide-in-right', 
    delay: 300 
  });
  
  const mobileCardRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll', 
    delay: 400 
  });

  const advantageRefs = advantages.map((_, index) => {
    return useScrollAnimation<HTMLDivElement>({ 
      animation: 'animate-fade-in-scroll', 
      delay: 200 + (index * 100)
    });
  });

  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* TEXT left */}
          <div ref={textRef}>
            <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4 font-poppins">
              <span className="text-sm font-medium text-roadpro-black">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-6 font-poppins">
              Why Choose Road Pro
            </h2>
            <p className="text-roadpro-gray text-lg mb-10 font-poppins max-w-lg">
              We offer industry expertise, compliance, and responsiveness for your traffic management needs.
            </p>
            <div className="space-y-5">
              {advantages.map((advantage, index) => (
                <div key={index} ref={advantageRefs[index]} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-roadpro-yellow flex items-center justify-center shadow-md animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-roadpro-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black font-poppins mb-1 transition-colors group-hover:text-roadpro-yellow">
                      {advantage.title}
                    </h3>
                    <p className="text-roadpro-gray font-poppins">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* IMAGE right */}
          <div ref={imageRef} className="relative flex items-center justify-center w-full max-w-xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white w-full max-w-md">
              <img
                alt="Road Pro professional vehicle"
                src="/lovable-uploads/b28ade9e-f56c-4d8f-8891-c7ba2b8b00bf.png"
                className="w-full h-full object-cover bg-white p-2"
                style={{ minHeight: 200, minWidth: 220 }}
              />
            </div>
            <div className="absolute -right-7 -bottom-7 w-36 h-36 bg-roadpro-yellow/20 rounded-full -z-10"></div>
            <div className="absolute -left-7 -top-7 w-20 h-20 border-4 border-roadpro-yellow rounded-full -z-10"></div>
            
            {/* Card: Your Safety, Our Priority - visible on XL, below for mobile */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden xl:block relative z-10">
              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/5 rounded-xl -z-10"></div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-roadpro-yellow flex items-center justify-center">
                  <Check className="w-6 h-6 text-roadpro-black" />
                </div>
                <h4 className="text-lg font-bold text-roadpro-black">Your Safety, Our Priority</h4>
              </div>
              <p className="text-roadpro-gray">
                Every solution prioritizes worker, driver & pedestrian safety.
              </p>
            </div>
          </div>
        </div>
        
        {/* Card below on mobile for accessibility */}
        <div ref={mobileCardRef} className="block xl:hidden max-w-sm mx-auto mt-10 bg-white p-6 rounded-xl shadow-xl relative z-10">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/5 rounded-xl -z-10"></div>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-roadpro-yellow flex items-center justify-center">
              <Check className="w-6 h-6 text-roadpro-black" />
            </div>
            <h4 className="text-lg font-bold text-roadpro-black">Your Safety, Our Priority</h4>
          </div>
          <p className="text-roadpro-gray">
            Every solution prioritizes worker, driver & pedestrian safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
