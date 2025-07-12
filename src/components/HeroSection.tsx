
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";
import { LinkesAndPathes   } from "@/utils/LinkesAndPathes"; // لو بنفس المستوى

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

  // Make sure video plays on iOS Safari and other browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties programmatically
      video.playsInline = true;
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.controls = false;
      
      // Force play after video loads
      const handleCanPlay = () => {
        video.play().catch(error => {
          console.log("Video autoplay failed:", error);
          // Fallback: try to play on any user interaction
          const playOnInteraction = () => {
            video.play().catch(e => console.log("Manual play failed:", e));
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        });
      };

      const handleLoadedData = () => {
        if (video.paused) {
          handleCanPlay();
        }
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      
      // Try to play immediately if video is already loaded
      if (video.readyState >= 3) {
        handleCanPlay();
      }

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Screen Background Video */}
      <div className="fixed inset-0 w-full h-full -z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
          poster="/lovable-uploads/9e739e81-95a6-45a7-ba5b-c2ddca0e411e.jpg"
        >
          <source 
           src={LinkesAndPathes.videoHome}
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
