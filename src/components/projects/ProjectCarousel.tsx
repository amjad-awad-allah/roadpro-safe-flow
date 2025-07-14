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
    delay: 4000, 
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    stopOnFocusIn: false
  });
  
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    dragFree: true,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
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