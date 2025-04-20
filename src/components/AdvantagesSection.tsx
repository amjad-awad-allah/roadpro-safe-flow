import { Check } from "lucide-react";
const advantages = [{
  title: "خبرة صناعية | Industry Experience",
  description: "أكثر من 15 سنة خبرة تخصصية وحلول سلامة طرق في الإمارات. Over 15 years of traffic management and road safety expertise in the UAE."
}, {
  title: "الإلتزام التنظيمي | Regulatory Compliance",
  description: "حلولنا متوافقة مع المعايير المحلية والدولية. All solutions strictly follow safety regulations."
}, {
  title: "تصاميم مبتكرة | Innovative Designs",
  description: "تصاميم هندسية مخصصة لكل مشروع. Custom engineered solutions for every unique project."
}, {
  title: "علاقات رسمية قوية | Strong ITC Relationships",
  description: "شراكات رسمية مع الجهات المختصة لضمان سرعة التنفيذ. Established authority partnerships for streamlined approvals."
}, {
  title: "سجل حافل بالنجاح | Proven Success Record",
  description: "مئات المشاريع المنجزة بأبوظبي والإمارات. Hundreds of completed projects across the UAE."
}];
const AdvantagesSection = () => {
  return <section id="advantages" className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4 font-poppins">
              <span className="text-sm font-medium text-roadpro-black">Why Choose Us | لماذا تختار RoadPro</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-6 font-poppins">
              Our Competitive Advantage | مميزاتنا التنافسية
            </h2>
            <p className="text-roadpro-gray text-lg mb-8 font-poppins">
              <span>
                Experts, innovation, and dedication for superior traffic management—what sets us apart:
              </span>
              <br />
              الخبرة، الابتكار، والإلتزام هي سر تفوقنا في إدارة المرور والسلامة.
            </p>
            <div className="space-y-4">
              {advantages.map((advantage, index) => <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-roadpro-yellow flex items-center justify-center shadow animate-soft-pulse">
                    <Check className="w-4 h-4 text-roadpro-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black font-poppins">
                      {advantage.title}
                    </h3>
                    <p className="text-roadpro-gray font-poppins">
                      {advantage.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Replaced image with mg as requested, always clear on all screens */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-square flex items-center justify-center border-8 border-white bg-white w-full max-w-md">
              <img alt="RoadPro Advantage Visual" src="/lovable-uploads/9e739e81-95a6-45a7-ba5b-c2ddca0e411e.jpg" className="w-full h-full p-4 bg-white object-fill" />
            </div>
            <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-roadpro-yellow/20 rounded-full -z-10"></div>
            <div className="absolute -left-6 -top-6 w-24 h-24 border-4 border-roadpro-yellow rounded-full -z-10"></div>
            {/* Card: Your Safety, Our Priority, overlays below/side for large, below for mobile */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden xl:block">
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
        <div className="block xl:hidden max-w-sm mx-auto mt-8 bg-white p-6 rounded-xl shadow-xl">
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
    </section>;
};
export default AdvantagesSection;