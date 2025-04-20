
import { Navigation, Shield, ClipboardList } from "lucide-react";

const ServicesSection = () => {
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

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            Innovative Traffic Management Services
          </h2>
          <p className="text-roadpro-gray text-lg">
            Delivering cutting-edge solutions for urban mobility and road safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up opacity-0"
                style={{ animationDelay: service.delay }}
              >
                <div className="w-16 h-16 bg-roadpro-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-roadpro-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-roadpro-black mb-3">
                  {service.title}
                </h3>
                <p className="text-roadpro-gray">
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
