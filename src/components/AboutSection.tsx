
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const titleRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 100
  });

  const contentRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 200
  });

  const statsRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 300
  });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">About Road Pro</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            Company Introduction
          </h2>
          <p className="text-roadpro-gray text-lg max-w-3xl mx-auto">
            Road Pro is a professional traffic management and consultancy service provider committed to ensuring public safety and maintaining efficient traffic flow. Our team of experts specializes in developing comprehensive traffic diversion plans and implementing road safety measures that comply with regulatory standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <div className="border-l-4 border-roadpro-yellow pl-4">
              <h3 className="text-2xl font-semibold text-roadpro-black mb-2">Mission Statement</h3>
              <ul className="text-roadpro-gray list-disc pl-5 space-y-2">
                <li>Enhance public safety across all road types.</li>
                <li>Ensure smooth and uninterrupted traffic flow.</li>
                <li>Deliver innovative, regulation-compliant solutions.</li>
                <li>Specialize in traffic diversions, lane closures, and street control.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-roadpro-yellow pl-4">
              <h3 className="text-2xl font-semibold text-roadpro-black mb-2">Our Approach</h3>
              <p className="text-roadpro-gray">
                We prioritize safety while ensuring efficient traffic management through comprehensive planning and implementation of regulatory-compliant solutions.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/3c252bc4-7b3a-40df-9c24-5e12127748a3.jpg" 
              alt="Road Pro team at work" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="text-roadpro-black text-sm italic">
                "Safety isn't expensive, it's priceless. We ensure every road project prioritizes the safety of all users."
              </p>
              <p className="text-right text-roadpro-yellow font-semibold mt-2">- Road Pro Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
