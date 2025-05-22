
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
const AboutSection = () => {
  const {
    t,
    language
  } = useLanguage();
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
  return <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">{t("nav.about")}</span>
          </div>
          <h2 className="text-4xl font-bold text-roadpro-black mb-4 md:text-4xl">
            {t("about.title")}
          </h2>
          <p className="text-roadpro-gray text-lg max-w-3xl mx-auto">
            {t("about.company")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <div className="border-l-4 border-roadpro-yellow pl-4">
              <h3 className="text-2xl font-semibold text-roadpro-black mb-2">{t("about.mission.title")}</h3>
              <ul className="text-roadpro-gray list-disc pl-5 space-y-2">
                <li>{t("about.mission.item1")}</li>
                <li>{t("about.mission.item2")}</li>
                <li>{t("about.mission.item3")}</li>
                <li>{t("about.mission.item4")}</li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <img src="https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/imges/bg-5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJpbWdlcy9iZy01LndlYnAiLCJpYXQiOjE3NDc3NDY4NzAsImV4cCI6MjM3ODQ2Njg3MH0.Mca5SsMzwMX5iGLNXQOF-dJjWhJgEBJvlL8Xk0nispU" alt="Road Shield Solutions team at work" className="w-full h-auto rounded-2xl shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="text-roadpro-black text-sm italic">
                {language === "en" ? "Safety isn't expensive, it's priceless. We ensure every road project prioritizes the safety of all users." : "السلامة ليست مكلفة، بل هي لا تقدر بثمن. نحن نضمن أن كل مشروع طرق يعطي الأولوية لسلامة جميع المستخدمين."}
              </p>
              <p className="text-right text-roadpro-yellow font-semibold mt-2">
                {language === "en" ? "- Road Shield Solutions Leadership" : "- قيادة رود شيلد سوليوشنز"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
