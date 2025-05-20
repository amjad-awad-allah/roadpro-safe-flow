
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, `#${sectionId}`);
    }
  };

  // Make sure video plays on iOS Safari
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playsInline = true;
      video.muted = true;
      
      // Try to play the video after it's loaded
      const playVideo = () => {
        if (video.paused) {
          video.play().catch(error => {
            console.log("Video play error:", error);
          });
        }
      };
      
      video.addEventListener('loadeddata', playVideo);
      video.addEventListener('canplay', playVideo);
      
      // Try to play immediately in case the video is already loaded
      playVideo();

      return () => {
        video.removeEventListener('loadeddata', playVideo);
        video.removeEventListener('canplay', playVideo);
      };
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/lovable-uploads/9e739e81-95a6-45a7-ba5b-c2ddca0e411e.jpg" // Keep the original image as fallback
        >
          <source 
            src="https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/video/home--v.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJ2aWRlby9ob21lLS12Lm1wNCIsImlhdCI6MTc0NzczMjA0NSwiZXhwIjoyMzc4NDUyMDQ1fQ.4uXhcfD2Db3EdQlapmaGMWfqUyCFxNgG_HZGyalni7s" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content with Image Layout */}
      <div className="container mx-auto relative z-20 px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Right side - Text content */}
          <div
            className={`text-white ${
              language === "ar" ? "lg:order-1 text-right" : ""
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-bottom [animation-delay:200ms]">
              {language === "en" ? (
                <>Professional Traffic Management<br />& Consultancy Services</>
              ) : (
                <>
                  إدارة حركة المرور المهنية
                  <br />
                  وخدمات الاستشارات
                </>
              )}
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-bottom [animation-delay:400ms]">
              {language === "en"
                ? "Committed to ensuring public safety and maintaining efficient traffic flow with comprehensive solutions that comply with regulatory standards."
                : "ملتزمون بضمان السلامة العامة والحفاظ على تدفق مروري فعال من خلال حلول شاملة تتوافق مع المعايير التنظيمية."}
            </p>
            <div
              className={`flex flex-wrap gap-4 animate-fade-in-bottom [animation-delay:600ms] ${
                language === "ar" ? "justify-end" : ""
              }`}
            >
              <Button 
                variant="cta" 
                size="lg" 
                className="group"
                onClick={() => scrollToSection("services")}
              >
                {language === "en" ? (
                  <>
                    Explore Our Services
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <>
                    استكشف خدماتنا
                    <ArrowRight className="mr-2 transition-transform group-hover:-translate-x-1 rotate-180" />
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-roadpro-black"
                onClick={() => scrollToSection("contact")}
              >
                {language === "en" ? "Contact Us" : "اتصل بنا"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-roadpro-yellow/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-roadpro-black"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
