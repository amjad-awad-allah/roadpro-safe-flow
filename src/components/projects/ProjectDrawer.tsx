
import React from "react";
import { DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { MapPin, Calendar, Cog, Target, CheckCircle } from "lucide-react";
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

interface ProjectDrawerProps {
  project: Project;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project }) => {
  const { language } = useLanguage();

  return (
    <DrawerContent className="max-h-[90vh] bg-white">
      <DrawerHeader className="border-b border-gray-100 pb-4">
        <DrawerTitle className="text-2xl font-bold text-roadpro-black leading-tight">
          {project.title[language]}
        </DrawerTitle>
      </DrawerHeader>
      
      <div className="px-4 pb-4 space-y-6 overflow-y-auto">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img 
            src={project.image} 
            alt={project.title[language]}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-roadpro-yellow/90 backdrop-blur-sm text-roadpro-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              {project.category[language]}
            </span>
          </div>
        </div>
        
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg">
              <MapPin size={14} className="text-roadpro-yellow" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 mb-0.5">{language === "en" ? "Location" : "الموقع"}</p>
              <p className="text-sm font-semibold text-roadpro-black">{project.location[language]}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg">
              <Calendar size={14} className="text-roadpro-yellow" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 mb-0.5">{language === "en" ? "Duration" : "المدة"}</p>
              <p className="text-sm font-semibold text-roadpro-black">{project.duration[language]}</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg">
              <Cog size={16} className="text-roadpro-yellow" />
            </div>
            <h3 className="font-bold text-roadpro-black text-base">
              {language === "en" ? "Technologies" : "التقنيات"}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies[language].split(', ').map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-roadpro-yellow/20 text-roadpro-black rounded-full text-xs font-medium border border-roadpro-yellow/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg">
              <Target size={16} className="text-roadpro-yellow" />
            </div>
            <h3 className="font-bold text-roadpro-black text-base">
              {language === "en" ? "Project Overview" : "نظرة عامة على المشروع"}
            </h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            {project.description[language]}
          </p>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-roadpro-yellow/20 rounded-lg">
              <CheckCircle size={16} className="text-roadpro-yellow" />
            </div>
            <h3 className="font-bold text-roadpro-black text-base">
              {language === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}
            </h3>
          </div>
          <div className="space-y-3">
            {project.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                <div className="p-0.5 bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                  <CheckCircle size={12} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-800 font-medium leading-relaxed">{achievement[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DrawerContent>
  );
};
