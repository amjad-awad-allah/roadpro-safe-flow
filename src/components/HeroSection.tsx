import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const HeroSection = () => {
  const {
    t,
    language
  } = useLanguage();
  return <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/lovable-uploads/9e739e81-95a6-45a7-ba5b-c2ddca0e411e.jpg" alt="Road safety background" className="w-full h-full object-cover" />
      </div>

      {/* Content with Image Layout */}
      <div className="container mx-auto relative z-20 px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image in card */}
          <div className={`mx-auto lg:mx-0 max-w-xl rounded-3xl overflow-hidden shadow-2xl bg-white p-4 ${language === "ar" ? "lg:order-2" : ""}`}>
            <img alt="Highway interchange at night" src="/lovable-uploads/1e6af629-aeca-49b2-926c-35b435dcb626.jpg" className="w-full h-auto rounded-2xl object-fill" />
          </div>
          
          {/* Right side - Text content */}
          <div className={`text-white ${language === "ar" ? "lg:order-1 text-right" : ""}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-bottom [animation-delay:200ms]">
              {language === "en" ? <>
                  Enhancing Public Safety<br />
                  & Smooth Traffic Flow
                </> : <>
                  تعزيز السلامة العامة<br />
                  وانسيابية حركة المرور
                </>}
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-bottom [animation-delay:400ms]">
              {language === "en" ? "Innovative solutions for traffic diversions, lane closures, and street safety—expertly delivered by RoadPro." : "حلول مبتكرة لتحويلات المرور، وإغلاق المسارات، وسلامة الشوارع - يتم تقديمها باحترافية من قبل رود برو."}
            </p>
            <div className={`flex flex-wrap gap-4 animate-fade-in-bottom [animation-delay:600ms] ${language === "ar" ? "justify-end" : ""}`}>
              <Button variant="cta" size="lg" className="group">
                {language === "en" ? <>
                    Explore Our Services
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </> : <>
                    استكشف خدماتنا
                    <ArrowRight className="mr-2 transition-transform group-hover:-translate-x-1 rotate-180" />
                  </>}
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-roadpro-black">
                {language === "en" ? "Get a Quote" : "احصل على عرض سعر"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-roadpro-yellow/80">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-roadpro-black">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>;
};
export default HeroSection;