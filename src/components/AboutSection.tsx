
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
            <span className="text-sm font-medium text-roadpro-black">About RoadPro</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            Abu Dhabi's Premier Road Safety Partner
          </h2>
          <p className="text-roadpro-gray text-lg max-w-3xl mx-auto">
            Delivering innovative and sustainable traffic management solutions since 2015
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <div className="border-l-4 border-roadpro-yellow pl-4">
              <h3 className="text-2xl font-semibold text-roadpro-black mb-2">Our Vision</h3>
              <p className="text-roadpro-gray">
                To lead the road safety industry with innovative solutions and reliable services, 
                becoming the gold standard for traffic management in the UAE.
              </p>
            </div>
            
            <div className="border-l-4 border-roadpro-yellow pl-4">
              <h3 className="text-2xl font-semibold text-roadpro-black mb-2">Our Mission</h3>
              <p className="text-roadpro-gray">
                To provide safe and efficient traffic management systems, ensuring the well-being of all 
                road users while contributing to the smart city vision of Abu Dhabi.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-roadpro-black mb-3">International Compliance</h3>
              <p className="text-roadpro-gray">
                All our operations, equipment, and services comply with International Traffic Control (ITC) 
                standards, ensuring the highest levels of safety and efficiency.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/3c252bc4-7b3a-40df-9c24-5e12127748a3.jpg" 
              alt="RoadPro team at work" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="text-roadpro-black text-sm italic">
                "Safety isn't expensive, it's priceless. We ensure every road project prioritizes the safety of all users."
              </p>
              <p className="text-right text-roadpro-yellow font-semibold mt-2">- RoadPro Leadership</p>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-roadpro-yellow mb-2">8+</div>
            <div className="text-roadpro-black">Years of Experience</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-roadpro-yellow mb-2">100+</div>
            <div className="text-roadpro-black">Completed Projects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-roadpro-yellow mb-2">50+</div>
            <div className="text-roadpro-black">Professional Team</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-roadpro-yellow mb-2">30+</div>
            <div className="text-roadpro-black">Corporate Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
