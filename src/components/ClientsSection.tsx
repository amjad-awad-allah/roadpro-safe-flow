
import { Building, Construction, MapPin, Flag, Route } from "lucide-react";

const clients = [
  {
    type: "Government Agencies",
    description: "Partnering with municipal and federal agencies to implement traffic management solutions that enhance public safety.",
    icon: Building,
  },
  {
    type: "Construction Companies",
    description: "Supporting construction projects with compliant traffic diversions and safety equipment for work zones.",
    icon: Construction,
  },
  {
    type: "Event Organizers",
    description: "Managing traffic and pedestrian flow for large-scale events, ensuring smooth operations and public safety.",
    icon: Flag,
  },
  {
    type: "Municipalities",
    description: "Collaborating with local governments on infrastructure projects and urban traffic management initiatives.",
    icon: MapPin,
  },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="section-padding bg-roadpro-black text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow px-4 py-1 rounded-full mb-4 font-poppins">
            <span className="text-sm font-medium text-roadpro-black">
              Who We Serve | عملاؤنا
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Trusted by Organizations Across Abu Dhabi | جهات تثق بنا
          </h2>
          <p className="text-roadpro-gray text-lg font-poppins">
            We provide tailored traffic management solutions for various sectors and industries.
            <br />
            حلول إدارة المرور تناسب مختلف القطاعات والجهات.
          </p>
        </div>
        {/* Parallax route icon here for engagement */}
        <div className="flex justify-center mb-8">
          <Route className="text-roadpro-yellow animate-float" size={40} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
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
        <div className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 font-poppins">Partner With Us | تواصل معنا كشريك</h3>
          <p className="text-gray-300 mb-6 font-poppins">
            Join the growing list of organizations that trust RoadPro for their traffic management needs.
            <br />
            انضم إلى شركائنا في حلول إدارة المرور والسلامة.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-roadpro-yellow text-roadpro-black font-medium rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg font-poppins"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
