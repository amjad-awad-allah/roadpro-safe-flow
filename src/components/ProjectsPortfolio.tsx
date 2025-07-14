
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dialog } from "@/components/ui/dialog";
import { Drawer } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { ProjectModal } from "./projects/ProjectModal";
import { ProjectDrawer } from "./projects/ProjectDrawer";
import { CompactProjectCard } from "./projects/CompactProjectCard";
import { ProjectCarousel } from "./projects/ProjectCarousel";
import { CertificateCard } from "./projects/CertificateCard";
import { projects, certificates } from "./projects/projectsData";

const ProjectsPortfolio = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const sectionRef = useScrollAnimation({ animation: 'animate-fade-in-scroll' }) as React.RefObject<HTMLDivElement>;
  
  // Check if screen is mobile (≤768px)
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Autoplay plugin only for mobile screens
  const autoplayPlugin = Autoplay({ 
    delay: 4000, 
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnFocusIn: false
  });
  
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      duration: 30,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 },
        '(min-width: 1024px)': { slidesToScroll: 1 }
      }
    },
    // Only add autoplay for mobile screens
    isMobileScreen ? [autoplayPlugin] : []
  );

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const currentProject = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects-portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              {language === "en" ? "Portfolio" : "المحفظة"}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-roadpro-black mb-4 md:text-4xl">
            {language === "en" ? "Our Projects" : "مشاريعنا"}
          </h2>
          <p className="text-roadpro-gray text-lg max-w-3xl mx-auto">
            {language === "en" 
              ? "Showcasing our flagship infrastructure and road safety projects that define excellence in traffic management across Abu Dhabi" 
              : "عرض مشاريعنا الرائدة في البنية التحتية وسلامة الطرق التي تحدد التميز في إدارة المرور عبر أبوظبي"}
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <ProjectCarousel>
          {projects.map((project) => (
            <CompactProjectCard
              key={project.id}
              project={project}
              onClick={openProject}
            />
          ))}
        </ProjectCarousel>

        {/* Modal/Drawer for project details */}
        <AnimatePresence>
          {isModalOpen && currentProject && (
            <>
              {isMobile ? (
                <Drawer open={isModalOpen} onOpenChange={closeProject}>
                  <ProjectDrawer project={currentProject} />
                </Drawer>
              ) : (
                <Dialog open={isModalOpen} onOpenChange={closeProject}>
                  <ProjectModal project={currentProject} />
                </Dialog>
              )}
            </>
          )}
        </AnimatePresence>

        {/* Certificates Section */}
        <div id="certifications" className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
              {language === "en" ? "Our Certifications" : "شهاداتنا"}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "en" 
                ? "Quality assurance through internationally recognized certifications and standards" 
                : "ضمان الجودة من خلال الشهادات والمعايير المعترف بها دولياً"}
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Mobile swipe hint */}
            {isMobileScreen && (
              <div className="text-center mb-4">
                <p className="text-sm text-gray-500">
                  {language === "en" ? "Swipe to navigate" : "اسحب للتنقل"}
                </p>
              </div>
            )}

            {/* Embla Carousel */}
            <div 
              className="overflow-hidden" 
              ref={emblaRef}
            >
              <div className="flex gap-6">
                {certificates.map((certificate, index) => (
                  <CertificateCard
                    key={certificate.id}
                    certificate={certificate}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
