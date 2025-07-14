
import React from "react";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Calendar, Users, Award, Cog, Target, Lightbulb, CheckCircle } from "lucide-react";
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

interface ProjectModalProps {
  project: Project;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project }) => {
  const { language } = useLanguage();

  return (
    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl rounded-2xl border-0">
      <DialogHeader className="border-b border-gray-100 pb-6 mb-8 sticky top-0 bg-white z-10">
        <DialogTitle className="text-3xl font-bold text-roadpro-black leading-tight pr-8">
          {project.title[language]}
        </DialogTitle>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-roadpro-yellow/20 text-roadpro-black px-3 py-1 rounded-full text-sm font-semibold">
            {project.category[language]}
          </span>
        </div>
      </DialogHeader>
      
      <div className="space-y-8 pb-6">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title[language]}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        {/* Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border border-gray-100">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
              <MapPin size={18} className="text-roadpro-yellow" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-500 mb-1">{language === "en" ? "Location" : "الموقع"}</p>
              <p className="font-semibold text-roadpro-black text-base break-words">{project.location[language]}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
              <Calendar size={18} className="text-roadpro-yellow" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-500 mb-1">{language === "en" ? "Duration" : "المدة"}</p>
              <p className="font-semibold text-roadpro-black text-base break-words">{project.duration[language]}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
              <Users size={18} className="text-roadpro-yellow" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-500 mb-1">{language === "en" ? "Team" : "الفريق"}</p>
              <p className="font-semibold text-roadpro-black text-base break-words">{project.teamSize[language]}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
              <Award size={18} className="text-roadpro-yellow" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-500 mb-1">{language === "en" ? "Technologies" : "التقنيات"}</p>
              <p className="font-semibold text-roadpro-black text-base break-words">{project.technologies[language]}</p>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-roadpro-yellow/20 rounded-lg">
              <Cog size={20} className="text-roadpro-yellow" />
            </div>
            <h3 className="text-xl font-bold text-roadpro-black">
              {language === "en" ? "Technologies & Equipment" : "التقنيات والمعدات"}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies[language].split(', ').map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gradient-to-r from-roadpro-yellow/20 to-roadpro-yellow/10 text-roadpro-black rounded-full font-medium text-base border border-roadpro-yellow/30 shadow-sm hover:shadow-md transition-shadow"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-roadpro-yellow/20 rounded-lg">
              <Target size={20} className="text-roadpro-yellow" />
            </div>
            <h3 className="text-xl font-bold text-roadpro-black">
              {language === "en" ? "Project Overview" : "نظرة عامة على المشروع"}
            </h3>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-base font-medium">
              {project.description[language]}
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-roadpro-yellow/20 rounded-lg">
              <CheckCircle size={20} className="text-roadpro-yellow" />
            </div>
            <h3 className="text-xl font-bold text-roadpro-black">
              {language === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="p-1.5 bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <span className="text-gray-800 font-medium text-base leading-relaxed">{achievement[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
