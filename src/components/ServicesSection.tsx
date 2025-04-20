
import { Navigation, Shield, ClipboardList, TrafficCone, Signpost } from "lucide-react";

const services = [
  {
    icon: Navigation,
    title: "Traffic Diversion Solutions",
    description: "Expert management of traffic flow during road works and events.",
    delay: '0.2s'
  },
  {
    icon: Shield,
    title: "Safety Management",
    description: "Comprehensive safety protocols and risk mitigation strategies.",
    delay: '0.4s'
  },
  {
    icon: ClipboardList,
    title: "Traffic Planning",
    description: "Detailed traffic management and optimization plans.",
    delay: '0.6s'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4 font-poppins">
            <span className="text-sm font-medium text-roadpro-black">
              Our Expertise | خبراتنا
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4 font-poppins">
            Innovative Traffic Management Services | حلول مبتكرة لإدارة المرور
          </h2>
          <p className="text-roadpro-gray text-lg font-poppins">
            Delivering cutting-edge solutions for urban mobility and road safety.
            <br />
            تقديم حلول متطورة لحركة المرور وسلامة الطرق.
          </p>
        </div>
        {/* Parallax icons row above cards, only on desktop */}
        <div className="hidden md:flex justify-center gap-8 mb-10">
          <TrafficCone className="text-roadpro-yellow animate-float drop-shadow-lg" size={36} />
          <Signpost className="text-roadpro-black/50 animate-float" size={36} style={{ animationDelay: "1s" }} />
          <Navigation className="text-roadpro-yellow/70 animate-float" size={36} style={{ animationDelay: "2s" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-roadpro-yellow/60 hover:shadow-2xl animate-fade-in-up opacity-0 hover:border-roadpro-yellow border-2 border-transparent group"
                style={{ animationDelay: service.delay }}
              >
                <div className="w-16 h-16 bg-roadpro-yellow/20 rounded-full flex items-center justify-center mb-4 transition-shadow shadow group-hover:shadow-roadpro-yellow/30">
                  <Icon className="w-8 h-8 text-roadpro-yellow group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-roadpro-black mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-roadpro-gray font-poppins">
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
