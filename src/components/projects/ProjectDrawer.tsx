
import React from "react";
import { motion } from "framer-motion";
import { DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { MapPin, Calendar, Users, Award, Cog, Target, CheckCircle } from "lucide-react";
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
  partnerLogo: string;
  projectDate: { en: string; ar: string };
  achievements: Array<{ en: string; ar: string }>;
}

interface ProjectDrawerProps {
  project: Project;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <DrawerContent className="max-h-[90vh] bg-white rounded-t-xl border-0">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 border-b border-gray-100">
          <DrawerHeader className="p-4 pb-3">
            <div className="flex items-start gap-3">
              <img 
                src={project.partnerLogo} 
                alt="Partner Logo"
                className="h-8 w-8 object-contain rounded-lg bg-gray-50 p-1 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gradient-to-r from-roadpro-yellow/20 to-roadpro-yellow/10 text-roadpro-black px-2 py-1 rounded-full text-xs font-semibold border border-roadpro-yellow/30">
                    {project.category[language]}
                  </span>
                </div>
                <DrawerTitle className="text-lg font-bold text-roadpro-black leading-tight text-left">
                  {project.title[language]}
                </DrawerTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar size={14} className="text-roadpro-yellow" />
                  <span className="text-xs font-medium text-gray-600">
                    {project.projectDate[language]}
                  </span>
                </div>
              </div>
            </div>
          </DrawerHeader>
        </div>
        
        <div className="p-4 space-y-4 overflow-y-auto">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div className="aspect-[16/9] h-48 overflow-hidden bg-gray-100">
              <img 
                src={project.image} 
                alt={project.title[language]}
                className="w-full h-full object-cover object-center"
                style={{ minHeight: '192px', maxHeight: '192px' }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
              <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
                <MapPin size={14} className="text-roadpro-yellow" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-500 mb-1">{language === "en" ? "Location" : "الموقع"}</p>
                <p className="font-semibold text-roadpro-black text-xs leading-tight">{project.location[language]}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
              <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
                <Users size={14} className="text-roadpro-yellow" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-500 mb-1">{language === "en" ? "Team" : "الفريق"}</p>
                <p className="font-semibold text-roadpro-black text-xs leading-tight">{project.teamSize[language]}</p>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg">
                <Target size={16} className="text-roadpro-yellow" />
              </div>
              <h3 className="text-base font-bold text-roadpro-black">
                {language === "en" ? "Project Overview" : "نظرة عامة على المشروع"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              {project.description[language]}
            </p>
          </div>

          {/* Technologies */}
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg">
                <Cog size={16} className="text-roadpro-yellow" />
              </div>
              <h3 className="text-base font-bold text-roadpro-black">
                {language === "en" ? "Technologies" : "التقنيات"}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies[language].split(', ').map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-gradient-to-r from-roadpro-yellow/20 to-roadpro-yellow/10 text-roadpro-black rounded-full font-medium text-xs border border-roadpro-yellow/30"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg">
                <CheckCircle size={16} className="text-roadpro-yellow" />
              </div>
              <h3 className="text-base font-bold text-roadpro-black">
                {language === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}
              </h3>
            </div>
            <div className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                  <div className="p-1 bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-green-600" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm leading-relaxed">{achievement[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </motion.div>
  );
};
