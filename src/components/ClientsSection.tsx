
import { Building, Construction, MapPin, Flag, Route } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clients = [{
  type: "Government Agencies",
  description: "Partnering with municipal and federal agencies to implement traffic management solutions that enhance public safety.",
  icon: Building
}, {
  type: "Construction Companies",
  description: "Supporting construction projects with compliant traffic diversions and safety equipment for work zones.",
  icon: Construction
}, {
  type: "Event Organizers",
  description: "Managing traffic and pedestrian flow for large-scale events, ensuring smooth operations and public safety.",
  icon: Flag
}, {
  type: "Municipalities",
  description: "Collaborating with local governments on infrastructure projects and urban traffic management initiatives.",
  icon: MapPin
}];

const ClientsSection = () => {
  const titleRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll', 
    delay: 100 
  });
  const iconRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll', 
    delay: 300 
  });
  const ctaRef = useScrollAnimation<HTMLDivElement>({ 
    animation: 'animate-fade-in-scroll', 
    delay: 500 
  });

  const clientRefs = [
    useScrollAnimation<HTMLDivElement>({ animation: 'animate-slide-in-left', delay: 200 }),
    useScrollAnimation<HTMLDivElement>({ animation: 'animate-fade-in-scroll', delay: 300 }),
    useScrollAnimation<HTMLDivElement>({ animation: 'animate-fade-in-scroll', delay: 400 }),
    useScrollAnimation<HTMLDivElement>({ animation: 'animate-slide-in-right', delay: 500 })
  ];

  return (
    <section id="clients" className="section-padding bg-roadpro-black text-white">
      <div className="container">
        <div ref={titleRef} className="text-on-dark text-center max-w-3xl mx-auto mb-16 relative">
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40 rounded-xl -z-10"></div>
          
          <div className="inline-block bg-roadpro-yellow px-4 py-1 rounded-full mb-4 font-poppins relative z-10">
            <span className="text-sm font-medium text-roadpro-black">Who We Serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins relative z-10">
            Trusted by Organizations Across Abu Dhabi
          </h2>
          <p className="text-gray-200 text-lg font-poppins relative z-10">
            We provide tailored traffic management solutions for various sectors and industries.
            <br />
            حلول إدارة المرور تناسب مختلف القطاعات والجهات.
          </p>
        </div>
        
        {/* Parallax route icon here for engagement */}
        <div ref={iconRef} className="flex justify-center mb-8">
          <Route className="text-roadpro-yellow animate-float" size={40} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              ref={clientRefs[index]}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-roadpro-yellow transition-all duration-300 shadow-lg hover:shadow-roadpro-yellow/30 hover:scale-105 group" 
              tabIndex={0}
            >
              <div className="w-16 h-16 rounded-full bg-roadpro-yellow flex items-center justify-center mb-6 shadow group-hover:scale-110 transition-transform">
                <client.icon className="w-8 h-8 text-roadpro-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white font-poppins">
                {client.type}
              </h3>
              <p className="text-gray-300 font-poppins">
                {client.description}
              </p>
            </div>
          ))}
        </div>
        
        <div ref={ctaRef} className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg text-center max-w-3xl mx-auto relative">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl -z-10"></div>
          
          <h3 className="text-2xl font-bold mb-4 font-poppins relative z-10">Partner With Us </h3>
          <p className="text-gray-300 mb-6 font-poppins relative z-10">
            Join the growing list of organizations that trust RoadPro for their traffic management needs.
            <br />
            انضم إلى شركائنا في حلول إدارة المرور والسلامة.
          </p>
          <a href="#contact" className="inline-block px-8 py-3 bg-roadpro-yellow text-roadpro-black font-medium rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg font-poppins">
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
