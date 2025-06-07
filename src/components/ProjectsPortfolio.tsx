
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { X, ArrowRight, MapPin, Calendar, Users, Award } from "lucide-react";

const ProjectsPortfolio = () => {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const sectionRef = useScrollAnimation({ animation: 'animate-fade-in-scroll' });

  // Project data based on Road Shield Solutions capabilities
  const projects = [
    {
      id: 1,
      title: {
        en: "Abu Dhabi Metro Construction Traffic Management",
        ar: "إدارة المرور لمشروع مترو أبوظبي"
      },
      preview: {
        en: "Comprehensive traffic diversion and safety management for major metro construction",
        ar: "إدارة شاملة لتحويل المرور والسلامة لمشروع مترو رئيسي"
      },
      category: {
        en: "Infrastructure",
        ar: "البنية التحتية"
      },
      location: {
        en: "Abu Dhabi, UAE",
        ar: "أبوظبي، الإمارات"
      },
      duration: {
        en: "24 months",
        ar: "24 شهر"
      },
      teamSize: {
        en: "15 specialists",
        ar: "15 متخصص"
      },
      description: {
        en: "Successfully managed traffic flow during the construction of Abu Dhabi's metro system. Our team implemented comprehensive Traffic Management Plans (TMP) across 12 major intersections, ensuring minimal disruption to daily commuters while maintaining the highest safety standards. The project included 24/7 monitoring, emergency response protocols, and coordination with multiple stakeholders including Abu Dhabi Municipality, Police, and construction contractors.",
        ar: "أدرنا بنجاح تدفق المرور أثناء إنشاء نظام مترو أبوظبي. نفذ فريقنا خططاً شاملة لإدارة المرور عبر 12 تقاطعاً رئيسياً، مما ضمن الحد الأدنى من الاضطراب للمسافرين اليوميين مع الحفاظ على أعلى معايير السلامة. شمل المشروع مراقبة على مدار الساعة وبروتوكولات الاستجابة للطوارئ والتنسيق مع أصحاب المصلحة المتعددين."
      },
      image: "https://res.cloudinary.com/digkc9b40/image/upload/v1748961439/img-6_v77xkk.png",
      achievements: [
        {
          en: "Zero major accidents during construction period",
          ar: "صفر حوادث كبيرة خلال فترة الإنشاء"
        },
        {
          en: "95% traffic flow efficiency maintained",
          ar: "الحفاظ على 95٪ من كفاءة تدفق المرور"
        },
        {
          en: "ITC compliance certification achieved",
          ar: "تم الحصول على شهادة الامتثال لمعايير ITC"
        }
      ]
    },
    {
      id: 2,
      title: {
        en: "Corniche Road Expansion Safety Management",
        ar: "إدارة السلامة لتوسعة طريق الكورنيش"
      },
      preview: {
        en: "Lane closure and traffic redirection for major coastal highway expansion",
        ar: "إغلاق الحارات وإعادة توجيه المرور لتوسعة الطريق الساحلي الرئيسي"
      },
      category: {
        en: "Road Construction",
        ar: "إنشاء الطرق"
      },
      location: {
        en: "Abu Dhabi Corniche",
        ar: "كورنيش أبوظبي"
      },
      duration: {
        en: "18 months",
        ar: "18 شهر"
      },
      teamSize: {
        en: "12 specialists",
        ar: "12 متخصص"
      },
      description: {
        en: "Managed complex traffic operations during the expansion of Abu Dhabi's iconic Corniche Road. Our comprehensive approach included implementing smart traffic light systems, deploying Truck Mounted Attenuators (TMA), and creating alternative route plans. The project required careful coordination with tourism authorities to minimize impact on recreational activities while ensuring construction worker safety.",
        ar: "أدرنا عمليات مرور معقدة أثناء توسعة طريق كورنيش أبوظبي الشهير. شمل نهجنا الشامل تنفيذ أنظمة إشارات مرور ذكية ونشر مخففات الصدمات المحمولة على الشاحنات وإنشاء خطط طرق بديلة. تطلب المشروع تنسيقاً دقيقاً مع سلطات السياحة لتقليل التأثير على الأنشطة الترفيهية مع ضمان سلامة عمال الإنشاء."
      },
      image: "https://res.cloudinary.com/digkc9b40/image/upload/v1748961438/img-4_ur3cvx.png",
      achievements: [
        {
          en: "Maintained tourist access throughout construction",
          ar: "الحفاظ على وصول السياح طوال فترة الإنشاء"
        },
        {
          en: "30% reduction in average travel time",
          ar: "تقليل 30٪ في متوسط وقت السفر"
        },
        {
          en: "100% compliance with environmental regulations",
          ar: "امتثال 100٪ للوائح البيئية"
        }
      ]
    },
    {
      id: 3,
      title: {
        en: "Formula 1 Abu Dhabi Grand Prix Traffic Control",
        ar: "التحكم المروري لجائزة أبوظبي الكبرى للفورمولا 1"
      },
      preview: {
        en: "Event-based traffic management for major international sporting event",
        ar: "إدارة المرور القائمة على الأحداث للحدث الرياضي الدولي الكبير"
      },
      category: {
        en: "Event Management",
        ar: "إدارة الفعاليات"
      },
      location: {
        en: "Yas Island, Abu Dhabi",
        ar: "جزيرة ياس، أبوظبي"
      },
      duration: {
        en: "6 weeks",
        ar: "6 أسابيع"
      },
      teamSize: {
        en: "25 specialists",
        ar: "25 متخصص"
      },
      description: {
        en: "Orchestrated traffic management for one of the world's most prestigious racing events. Our team handled the complex logistics of managing over 50,000 spectators' movement while maintaining emergency access routes. We implemented dynamic traffic control systems, coordinated with international security teams, and ensured seamless integration with public transportation systems.",
        ar: "نظمنا إدارة المرور لواحد من أشهر أحداث السباق في العالم. تعامل فريقنا مع اللوجستيات المعقدة لإدارة حركة أكثر من 50,000 متفرج مع الحفاظ على طرق الوصول للطوارئ. نفذنا أنظمة تحكم مرور ديناميكية ونسقنا مع فرق الأمن الدولية وضمنا التكامل السلس مع أنظمة النقل العام."
      },
      image: "https://res.cloudinary.com/digkc9b40/image/upload/v1748961437/img-3_bvfhnz.png",
      achievements: [
        {
          en: "Zero traffic incidents during race weekend",
          ar: "صفر حوادث مرور خلال عطلة نهاية أسبوع السباق"
        },
        {
          en: "Average evacuation time reduced by 40%",
          ar: "متوسط وقت الإخلاء انخفض بنسبة 40٪"
        },
        {
          en: "International safety standards exceeded",
          ar: "تم تجاوز معايير السلامة الدولية"
        }
      ]
    },
    {
      id: 4,
      title: {
        en: "Smart City Infrastructure Integration",
        ar: "تكامل البنية التحتية للمدينة الذكية"
      },
      preview: {
        en: "Advanced traffic technology implementation for smart city initiatives",
        ar: "تنفيذ تقنيات المرور المتقدمة لمبادرات المدينة الذكية"
      },
      category: {
        en: "Smart Technology",
        ar: "التكنولوجيا الذكية"
      },
      location: {
        en: "Multiple locations, Abu Dhabi",
        ar: "مواقع متعددة، أبوظبي"
      },
      duration: {
        en: "12 months",
        ar: "12 شهر"
      },
      teamSize: {
        en: "20 specialists",
        ar: "20 متخصص"
      },
      description: {
        en: "Pioneered the integration of IoT-enabled traffic management systems across Abu Dhabi's key districts. Our solution includes real-time traffic monitoring, adaptive signal control, and predictive analytics for congestion management. The project supports Abu Dhabi's vision of becoming a leading smart city by 2030, with sustainable and efficient transportation solutions.",
        ar: "رائدنا في تكامل أنظمة إدارة المرور المدعومة بإنترنت الأشياء عبر المناطق الرئيسية في أبوظبي. يشمل حلولنا مراقبة المرور في الوقت الفعلي والتحكم التكيفي في الإشارات والتحليلات التنبؤية لإدارة الازدحام. يدعم المشروع رؤية أبوظبي لتصبح مدينة ذكية رائدة بحلول 2030."
      },
      image: "https://res.cloudinary.com/digkc9b40/image/upload/v1748961437/img-2_upsy1p.png",
      achievements: [
        {
          en: "25% improvement in traffic flow efficiency",
          ar: "تحسن 25٪ في كفاءة تدفق المرور"
        },
        {
          en: "Real-time monitoring system implemented",
          ar: "تم تنفيذ نظام مراقبة في الوقت الفعلي"
        },
        {
          en: "Carbon footprint reduced by 15%",
          ar: "انخفض البصمة الكربونية بنسبة 15٪"
        }
      ]
    }
  ];

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

  const ProjectModal = () => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-roadpro-black">
          {currentProject?.title[language]}
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        <img 
          src={currentProject?.image} 
          alt={currentProject?.title[language]}
          className="w-full h-64 object-cover rounded-lg"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-roadpro-yellow" />
            <div>
              <p className="text-sm text-gray-600">{language === "en" ? "Location" : "الموقع"}</p>
              <p className="font-medium">{currentProject?.location[language]}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-roadpro-yellow" />
            <div>
              <p className="text-sm text-gray-600">{language === "en" ? "Duration" : "المدة"}</p>
              <p className="font-medium">{currentProject?.duration[language]}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-roadpro-yellow" />
            <div>
              <p className="text-sm text-gray-600">{language === "en" ? "Team" : "الفريق"}</p>
              <p className="font-medium">{currentProject?.teamSize[language]}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-roadpro-yellow" />
            <div>
              <p className="text-sm text-gray-600">{language === "en" ? "Category" : "الفئة"}</p>
              <p className="font-medium">{currentProject?.category[language]}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-roadpro-black">
            {language === "en" ? "Project Description" : "وصف المشروع"}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {currentProject?.description[language]}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-roadpro-black">
            {language === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}
          </h3>
          <ul className="space-y-2">
            {currentProject?.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-roadpro-yellow rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{achievement[language]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DialogContent>
  );

  const ProjectDrawer = () => (
    <DrawerContent className="max-h-[90vh]">
      <DrawerHeader>
        <DrawerTitle className="text-xl font-bold text-roadpro-black">
          {currentProject?.title[language]}
        </DrawerTitle>
      </DrawerHeader>
      
      <div className="px-4 pb-4 space-y-4 overflow-y-auto">
        <img 
          src={currentProject?.image} 
          alt={currentProject?.title[language]}
          className="w-full h-48 object-cover rounded-lg"
        />
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-roadpro-yellow" />
            <div>
              <p className="text-xs text-gray-600">{language === "en" ? "Location" : "الموقع"}</p>
              <p className="text-sm font-medium">{currentProject?.location[language]}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-roadpro-yellow" />
            <div>
              <p className="text-xs text-gray-600">{language === "en" ? "Duration" : "المدة"}</p>
              <p className="text-sm font-medium">{currentProject?.duration[language]}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-roadpro-black">
            {language === "en" ? "Description" : "الوصف"}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {currentProject?.description[language]}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-roadpro-black">
            {language === "en" ? "Achievements" : "الإنجازات"}
          </h3>
          <ul className="space-y-1">
            {currentProject?.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-roadpro-yellow rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{achievement[language]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DrawerContent>
  );

  return (
    <section id="projects-portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            {language === "en" ? "Project Portfolio" : "محفظة المشاريع"}
          </h2>
          <p className="text-roadpro-gray text-lg max-w-3xl mx-auto">
            {language === "en" 
              ? "Discover our successful traffic management and road safety implementations across Abu Dhabi's key infrastructure projects" 
              : "اكتشف تنفيذنا الناجح لإدارة المرور وسلامة الطرق عبر مشاريع البنية التحتية الرئيسية في أبوظبي"}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(255, 214, 0, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
              onClick={() => openProject(project.id)}
            >
              <Card className="overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title[language]}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-roadpro-yellow text-roadpro-black px-3 py-1 rounded-full text-sm font-medium">
                      {project.category[language]}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-roadpro-black mb-2 line-clamp-2">
                    {project.title[language]}
                  </h3>
                  <p className="text-roadpro-gray mb-4 line-clamp-3">
                    {project.preview[language]}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={14} />
                      <span>{project.location[language]}</span>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-1 text-roadpro-yellow font-medium"
                    >
                      <span className="text-sm">
                        {language === "en" ? "View Details" : "عرض التفاصيل"}
                      </span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal/Drawer for project details */}
        <AnimatePresence>
          {isModalOpen && currentProject && (
            <>
              {isMobile ? (
                <Drawer open={isModalOpen} onOpenChange={closeProject}>
                  <ProjectDrawer />
                </Drawer>
              ) : (
                <Dialog open={isModalOpen} onOpenChange={closeProject}>
                  <ProjectModal />
                </Dialog>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
