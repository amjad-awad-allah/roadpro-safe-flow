
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
const equipment = [{
  name: "Truck Mounted Attenuator (TMA)",
  image: "/lovable-uploads/480795cd-6319-48a2-8143-80c77d1f2aa6.png",
  specs: ["NCHRP 350 TL-3 Compliant", "High-visibility LED arrow board", "Hydraulic lift system", "Energy-absorbing technology"],
  certified: true
}, {
  name: "Traffic Cones & Barriers",
  image: "/lovable-uploads/9e739e81-95a6-45a7-ba5b-c2ddca0e411e.jpg",
  specs: ["Reflective collars for high visibility", "PVC & rubber construction", "Wind-resistant design", "Various sizes available"],
  certified: true
}, {
  name: "Advanced Warning Signage",
  image: "/lovable-uploads/d0fdedde-4d38-45a4-86f3-d6acb78b3f99.png",
  specs: ["LED illumination", "Solar-powered options", "Remote operation capability", "Weather-resistant construction"],
  certified: true
}, {
  name: "Lane Closure Trailers",
  image: "/lovable-uploads/0da8014e-7a3b-4ac3-8355-f7f00bf18dbd.png",
  specs: ["Quick deployment system", "Integrated lighting", "Storage compartments", "Towable by standard vehicles"],
  certified: true
}];
const EquipmentSection = () => {
  const titleRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 100
  });
  const equipmentRefs = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 200
  });
  return <section id="equipment" className="section-padding bg-roadpro-lightgray">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              Our Equipment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-roadpro-black mb-4 leading-tight">
            State-of-the-Art Safety Equipment
          </h2>
          <p className="text-roadpro-gray text-lg leading-relaxed">
            Our inventory of specialized traffic management equipment meets international safety standards
          </p>
        </div>
        
        <div ref={equipmentRefs} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
              <div className="md:w-2/5 overflow-hidden">
                <img src={item.image} alt={item.name} style={{
              height: "100%",
              minHeight: "200px",
              objectFit: "cover"
            }} className="w-full h-full transition-transform duration-500 hover:scale-105 object-contain" />
              </div>
              <div className="md:w-3/5 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-roadpro-black">
                    {item.name}
                  </h3>
                  {item.certified && <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      ITC Certified
                    </Badge>}
                </div>
                <ul className="space-y-2 mb-4">
                  {item.specs.map((spec, i) => <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-roadpro-yellow mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-roadpro-gray">{spec}</span>
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
        
        <div className="mt-12 p-6 bg-roadpro-yellow/10 rounded-xl text-center">
          <p className="text-roadpro-black font-semibold text-lg">
            All equipment complies with International Traffic Control (ITC) standards and undergoes regular maintenance and safety inspections.
          </p>
        </div>
      </div>
    </section>;
};
export default EquipmentSection;
