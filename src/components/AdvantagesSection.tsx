
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { LinkesAndPathes   } from "@/utils/LinkesAndPathes"; // لو بنفس المستوى

const AdvantagesSection = () => {
  const {
    t,
    language
  } = useLanguage();
  const titleRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 100
  });
  const textRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-slide-in-left',
    delay: 200
  });
  const imageRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-slide-in-right',
    delay: 300
  });
  const mobileCardRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 400
  });

  // Define advantages with their respective translation keys
  const advantages = [{
    titleKey: "advantages.experience.title",
    descriptionKey: "advantages.experience.description"
  }, {
    titleKey: "advantages.compliance.title",
    descriptionKey: "advantages.compliance.description"
  }, {
    titleKey: "advantages.responsive.title",
    descriptionKey: "advantages.responsive.description"
  }, {
    titleKey: "advantages.equipment.title",
    descriptionKey: "advantages.equipment.description"
  }, {
    titleKey: "advantages.affordability.title",
    descriptionKey: "advantages.affordability.description"
  }];
  const advantageRefs = advantages.map((_, index) => {
    return useScrollAnimation<HTMLDivElement>({
      animation: 'animate-fade-in-scroll',
      delay: 200 + index * 100
    });
  });
  return <section id="advantages" className="section-padding bg-white">
      <div className="container">
        {/* Center-aligned section title */}
        <div className="text-center mb-12" ref={titleRef}>
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4 font-poppins">
            <span className="text-sm font-medium text-roadpro-black">
              {t("nav.whyus")}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-roadpro-black font-poppins md:text-4xl">
            {t("advantages.title")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* TEXT left */}
          <div ref={textRef}>
            <p className="text-roadpro-gray text-lg mb-10 font-poppins max-w-lg">
              {t("advantages.subtitle")}
            </p>
            <div className="space-y-5">
              {advantages.map((advantage, index) => <div key={index} ref={advantageRefs[index]} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-roadpro-yellow flex items-center justify-center shadow-md animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-roadpro-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black font-poppins mb-1 transition-colors group-hover:text-roadpro-yellow">
                      {t(advantage.titleKey)}
                    </h3>
                    <p className="text-roadpro-gray font-poppins">{t(advantage.descriptionKey)}</p>
                  </div>
                </div>)}
            </div>
          </div>
          
          {/* IMAGE right - updated to match About Us section image styling */}
          <div ref={imageRef} className="relative">
            <img alt="Road Shield Solutions professional vehicle" src={LinkesAndPathes.bg1} />
            <div className="absolute -right-7 -bottom-7 w-36 h-36 bg-roadpro-ybackgroundImagesellow/20 rounded-full -z-10"></div>
            <div className="absolute -left-7 -top-7 w-20 h-20 border-4 border-roadpro-yellow rounded-full -z-10"></div>
            
            {/* Card: Your Safety, Our Priority - visible on XL, with updated positioning */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="text-roadpro-black text-sm italic">
                {language === "en" ? "Your Safety, Our Priority - Every solution prioritizes worker, driver & pedestrian safety." : "سلامتك، أولويتنا - كل حلولنا تضع في أولوياتها سلامة العمال والسائقين والمشاة."}
              </p>
              <p className="text-right text-roadpro-yellow font-semibold mt-2">
                {language === "en" ? "- Road Shield Solutions Team" : "- فريق رود شيلد سوليوشنز"}
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile card updated to match styling */}
        <div ref={mobileCardRef} className="block md:hidden max-w-sm mx-auto mt-10 bg-white p-6 rounded-xl shadow-xl relative z-10">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/5 rounded-xl -z-10"></div>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-roadpro-yellow flex items-center justify-center">
              <Check className="w-6 h-6 text-roadpro-black" />
            </div>
            <h4 className="text-lg font-bold text-roadpro-black">
              {language === "en" ? "Your Safety, Our Priority" : "سلامتك، أولويتنا"}
            </h4>
          </div>
          <p className="text-roadpro-gray">
            {language === "en" ? "Every solution prioritizes worker, driver & pedestrian safety." : "كل حلولنا تضع في أولوياتها سلامة العمال والسائقين والمشاة."}
          </p>
        </div>
      </div>
    </section>;
};
export default AdvantagesSection;
