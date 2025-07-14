
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: number;
  title: { en: string; ar: string };
  preview: { en: string; ar: string };
  category: { en: string; ar: string };
  location: { en: string; ar: string };
  duration: { en: string; ar: string };
  teamSize: { en: string; ar: string };
  technologies: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  achievements: Array<{ en: string; ar: string }>;
}

interface ProjectCardProps {
  project: Project;
  onClick: (projectId: number) => void;
  variants: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, variants }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      variants={variants}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        boxShadow: "0 25px 50px rgba(255, 214, 0, 0.25), 0 8px 25px rgba(0, 0, 0, 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer group"
      onClick={() => onClick(project.id)}
    >
      <Card className="overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full group-hover:border-roadpro-yellow/30 group-hover:border-2 flex flex-col">
        <div className="relative flex-shrink-0">
          <div className="aspect-[16/10] overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title[language]}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-roadpro-yellow to-roadpro-yellow/90 text-roadpro-black px-3 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-roadpro-yellow/20">
              {project.category[language]}
            </span>
          </div>
        </div>
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-roadpro-black mb-3 line-clamp-2 leading-tight group-hover:text-roadpro-black/90 transition-colors min-h-[3.5rem]">
              {project.title[language]}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-3 text-base leading-relaxed min-h-[4.5rem]">
              {project.preview[language]}
            </p>
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4">
            <div className="flex items-center gap-3 text-gray-500">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-roadpro-yellow/10 transition-colors duration-300 flex-shrink-0">
                <MapPin size={16} className="text-roadpro-yellow" />
              </div>
              <span className="text-sm font-medium line-clamp-1">{project.location[language]}</span>
            </div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-roadpro-yellow font-semibold group-hover:text-roadpro-black transition-colors duration-300 flex-shrink-0"
            >
              <span className="text-sm">
                {language === "en" ? "View Details" : "عرض التفاصيل"}
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
