
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";
import { LinkesAndPathes } from "@/utils/LinkesAndPathes";
import { usePageLoadAnimation } from "@/hooks/usePageLoadAnimation";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Page load animations
  const titleRef = usePageLoadAnimation<HTMLHeadingElement>({ delay: 200 });
  const subtitleRef = usePageLoadAnimation<HTMLParagraphElement>({ delay: 400 });
  const buttonsRef = usePageLoadAnimation<HTMLDivElement>({ delay: 600 });

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
   <div className="absolute inset-0 w-full h-full overflow-hidden -z-1">
  <video
    ref={videoRef}
    autoPlay
    muted
    loop
    playsInline
    controls={false}
    preload="auto"
    className="w-full h-full object-cover"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  >
    <source src={LinkesAndPathes.videoHome} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black/50" />
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
