
import { Check } from "lucide-react";

const advantages = [
  {
    title: "Industry Experience",
    description: "Over 15 years of specialized experience in traffic management and road safety solutions in the UAE.",
  },
  {
    title: "Regulatory Compliance",
    description: "All our solutions strictly adhere to local and international safety standards and regulations.",
  },
  {
    title: "Innovative Designs",
    description: "Custom engineered solutions that address the unique challenges of each project.",
  },
  {
    title: "Strong ITC Relationships",
    description: "Established partnerships with key traffic authorities for streamlined approvals and implementation.",
  },
  {
    title: "Proven Success Record",
    description: "Hundreds of successfully completed projects across Abu Dhabi and the wider UAE region.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-roadpro-black">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-6">
              Our Competitive Advantage
            </h2>
            <p className="text-roadpro-gray text-lg mb-8">
              At RoadPro, we combine expertise, innovation, and dedication to deliver superior traffic management solutions. Here's what sets us apart:
            </p>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-roadpro-yellow flex items-center justify-center">
                    <Check className="w-4 h-4 text-roadpro-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black">
                      {advantage.title}
                    </h3>
                    <p className="text-roadpro-gray">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
              <img
                src="/lovable-uploads/d0fdedde-4d38-45a4-86f3-d6acb78b3f99.png"
                alt="RoadPro competitive advantage visual"
                className="w-full h-full object-contain p-6 bg-white"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-roadpro-yellow/20 rounded-full -z-10"></div>
            <div className="absolute -left-6 -top-6 w-32 h-32 border-4 border-roadpro-yellow rounded-full -z-10"></div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-roadpro-yellow flex items-center justify-center">
                  <Check className="w-6 h-6 text-roadpro-black" />
                </div>
                <h4 className="text-lg font-bold text-roadpro-black">Your Safety, Our Priority</h4>
              </div>
              <p className="text-roadpro-gray">
                Every solution we design prioritizes the safety of workers, drivers, and pedestrians in and around traffic zones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

