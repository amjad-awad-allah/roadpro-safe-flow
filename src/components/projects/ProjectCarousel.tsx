import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ProjectCarouselProps {
  children: React.ReactNode;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ 
  children 
}) => {
  const { language } = useLanguage();
  
  const autoplayPlugin = Autoplay({ 
    delay: 2000, 
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnFocusIn: false,
    playOnInit: true,
    jump: false,
  });
  
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    dragFree: false,
    skipSnaps: false,
    duration: 15,
    startIndex: 8, // Start from middle to enhance infinite effect
    watchDrag: false, // Disable drag to maintain smooth autoplay
  }, [autoplayPlugin]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {children}
        </div>
      </div>

      {/* Navigation Hint for Mobile */}
      <div className="text-center mt-6 md:hidden">
        <p className="text-sm text-gray-500">
          {language === "en" ? "Swipe to see more projects" : "اسحب لرؤية المزيد من المشاريع"}
        </p>
      </div>
    </div>
  );
};