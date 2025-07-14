
import React from "react";
import { motion } from "framer-motion";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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

interface ProjectModalProps {
  project: Project;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl rounded-xl border-0 p-0 relative">
        {/* Header Section - Fixed positioning to avoid overlap */}
        <div className="sticky top-0 bg-white/98 backdrop-blur-md z-20 border-b border-gray-100 shadow-sm">
          <DialogHeader className="p-6 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="flex-shrink-0">
                    <img 
                      src={project.partnerLogo} 
                      alt="Partner Logo"
                      className="h-12 w-12 object-contain rounded-lg bg-gray-50 p-2 border border-gray-200"
                    />
                  </div>
                  <span className="bg-gradient-to-r from-roadpro-yellow/20 to-roadpro-yellow/10 text-roadpro-black px-3 py-1.5 rounded-full text-sm font-semibold border border-roadpro-yellow/30 flex-shrink-0">
                    {project.category[language]}
                  </span>
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-roadpro-black leading-tight mb-2">
                  {project.title[language]}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2 text-roadpro-yellow">
                  <Calendar size={18} />
                  <span className="text-base font-medium text-gray-600">
                    {project.projectDate[language]}
                  </span>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>
        
        <div className="relative z-10 p-6 space-y-8">
          {/* Project Image - Properly Centered and Responsive */}
          <div className="w-full flex justify-center items-center py-4">
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title[language]}
                  className="w-full h-full object-cover object-center"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    width: '100%',
                    height: '100%',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.objectFit = 'contain';
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl pointer-events-none" />
            </div>
          </div>
          
          {/* Info Grid - Better spacing and layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
            <div className="flex items-start gap-3 p-5 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-200">
              <div className="p-2.5 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
                <Calendar size={18} className="text-roadpro-yellow" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500 mb-1">{language === "en" ? "Project Status" : "حالة المشروع"}</p>
                <p className="font-semibold text-roadpro-black text-base leading-tight">{project.projectDate[language]}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-200">
              <div className="p-2.5 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
                <MapPin size={18} className="text-roadpro-yellow" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500 mb-1">{language === "en" ? "Location" : "الموقع"}</p>
                <p className="font-semibold text-roadpro-black text-base leading-tight">{project.location[language]}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-200">
              <div className="p-2.5 bg-roadpro-yellow/20 rounded-lg flex-shrink-0">
                <Users size={18} className="text-roadpro-yellow" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500 mb-1">{language === "en" ? "Team Size" : "حجم الفريق"}</p>
                <p className="font-semibold text-roadpro-black text-base leading-tight">{project.teamSize[language]}</p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-roadpro-yellow/20 rounded-lg">
                <Cog size={18} className="text-roadpro-yellow" />
              </div>
              <h3 className="text-lg font-bold text-roadpro-black">
                {language === "en" ? "Technologies & Equipment" : "التقنيات والمعدات"}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies[language].split(', ').map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-gradient-to-r from-roadpro-yellow/20 to-roadpro-yellow/10 text-roadpro-black rounded-full font-medium text-sm border border-roadpro-yellow/30"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-roadpro-yellow/20 rounded-lg">
                <Target size={18} className="text-roadpro-yellow" />
              </div>
              <h3 className="text-lg font-bold text-roadpro-black">
                {language === "en" ? "Project Overview" : "نظرة عامة على المشروع"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              {project.description[language]}
            </p>
          </div>

          {/* Key Achievements */}
          <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-roadpro-yellow/20 rounded-lg">
                <CheckCircle size={18} className="text-roadpro-yellow" />
              </div>
              <h3 className="text-lg font-bold text-roadpro-black">
                {language === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                  <div className="p-1 bg-green-100 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm leading-relaxed">{achievement[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </motion.div>
  );
};
