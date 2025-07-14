import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: number;
  title: { en: string; ar: string };
  partnerLogo: string;
  projectDate: { month: { en: string; ar: string }; year: string };
  category: { en: string; ar: string };
}

interface CompactProjectCardProps {
  project: Project;
  onClick: (projectId: number) => void;
}

export const CompactProjectCard: React.FC<CompactProjectCardProps> = ({ project, onClick }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        y: -5,
        boxShadow: "0 15px 30px rgba(255, 214, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer group flex-shrink-0"
      onClick={() => onClick(project.id)}
    >
      <Card className="w-80 h-96 bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 group-hover:border-roadpro-yellow/30 group-hover:border-2 overflow-hidden">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Partner Logo Section */}
          <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-roadpro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src={project.partnerLogo} 
              alt="Partner Logo"
              className="max-h-16 max-w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-roadpro-yellow/20 to-roadpro-yellow/10 text-roadpro-black px-3 py-1 rounded-full text-xs font-semibold border border-roadpro-yellow/30">
                  {project.category[language]}
                </span>
              </div>
              
              {/* Project Title */}
              <h3 className="text-lg font-bold text-roadpro-black mb-4 line-clamp-3 leading-tight group-hover:text-roadpro-black/90 transition-colors min-h-[4.5rem]">
                {project.title[language]}
              </h3>
            </div>
            
            {/* Date Section */}
            <div className="mt-auto">
              <div className="flex items-center gap-3 text-gray-600 p-3 bg-gray-50 rounded-lg group-hover:bg-roadpro-yellow/10 transition-colors duration-300">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-roadpro-yellow/20 transition-colors duration-300">
                  <Calendar size={16} className="text-roadpro-yellow" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-roadpro-black">
                    {project.projectDate.month[language]} {project.projectDate.year}
                  </span>
                  <span className="text-xs text-gray-500">
                    {language === "en" ? "Project Date" : "تاريخ المشروع"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};