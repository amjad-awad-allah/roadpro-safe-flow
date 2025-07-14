import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import useEmblaCarousel from 'embla-carousel-react';

interface Project {
  id: number;
  title: { en: string; ar: string };
  partnerLogo: string;
  projectDate: { month: { en: string; ar: string }; year: string };
  category: { en: string; ar: string };
}

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick: (projectId: number) => void;
  children: React.ReactNode;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ 
  projects, 
  onProjectClick, 
  children 
}) => {
  const { language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    dragFree: true,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black">
          {language === "en" ? "Our Projects" : "مشاريعنا"}
        </h2>
        
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollPrev}
            className="p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:border-roadpro-yellow/50 hover:bg-roadpro-yellow/5 transition-all duration-300 group"
          >
            <ChevronLeft size={20} className="text-gray-600 group-hover:text-roadpro-yellow transition-colors" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollNext}
            className="p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:border-roadpro-yellow/50 hover:bg-roadpro-yellow/5 transition-all duration-300 group"
          >
            <ChevronRight size={20} className="text-gray-600 group-hover:text-roadpro-yellow transition-colors" />
          </motion.button>
        </div>
      </div>

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