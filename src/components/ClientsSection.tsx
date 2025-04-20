
import { Building, Construction, MapPin, Flag } from "lucide-react";

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
          <div className="inline-block bg-roadpro-yellow px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              Who We Serve
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Organizations Across Abu Dhabi
          </h2>
          <p className="text-roadpro-gray text-lg">
            We provide tailored traffic management solutions for various sectors and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-roadpro-yellow transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-roadpro-yellow flex items-center justify-center mb-6">
                <client.icon className="w-8 h-8 text-roadpro-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {client.type}
              </h3>
              <p className="text-gray-300">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
            <p className="text-gray-300 mb-6">
              Join the growing list of organizations that trust RoadPro for their traffic management needs. We offer customized solutions for every sector.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-roadpro-yellow text-roadpro-black font-medium rounded-full hover:bg-white transition-colors"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
