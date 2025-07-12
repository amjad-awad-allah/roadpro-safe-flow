import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { X, ArrowRight, MapPin, Calendar, Users, Award, FileText, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { LinkesAndPathes, CertificateLinks } from "@/utils/LinkesAndPathes";

const ProjectsPortfolio = () => {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const sectionRef = useScrollAnimation({ animation: 'animate-fade-in-scroll' }) as React.RefObject<HTMLDivElement>;
  
  // Embla Carousel for certificates with autoplay
  const autoplayPlugin = Autoplay({ 
    delay: 4000, 
    stopOnInteraction: false,  // Continue autoplay even after manual interaction
    stopOnMouseEnter: true,    // Pause on hover
    stopOnFocusIn: true
  });
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,  // Scroll one card at a time for smoother experience
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 },
        '(min-width: 1024px)': { slidesToScroll: 1 }
      }
    },
    [autoplayPlugin]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Handle hover pause/resume
  const handleMouseEnter = () => {
    if (autoplayPlugin) autoplayPlugin.stop();
  };

  const handleMouseLeave = () => {
    if (autoplayPlugin) autoplayPlugin.play();
  };

  // Updated project data based on Road Shield Solutions capabilities
  const projects = [
    {
      id: 1,
      title: {
        en: "Abu Dhabi Metro Construction Traffic Management",
        ar: "إدارة المرور لمشروع مترو أبوظبي"
      },
      preview: {
        en: "Comprehensive traffic diversion and safety management for major metro construction phases",
        ar: "إدارة شاملة لتحويل المرور والسلامة لمراحل إنشاء مترو رئيسي"
      },
      category: {
        en: "Infrastructure Development",
        ar: "تطوير البنية التحتية"
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
        en: "15 traffic specialists",
        ar: "15 متخصص مرور"
      },
      technologies: {
        en: "Smart Traffic Signals, TMA Systems, ITC Compliance Monitoring",
        ar: "إشارات المرور الذكية، أنظمة TMA، مراقبة الامتثال لمعايير ITC"
      },
      description: {
        en: "Successfully managed complex traffic operations during the construction of Abu Dhabi's metro system. Our comprehensive Traffic Management Plan (TMP) covered 12 major intersections, ensuring minimal disruption to daily commuters while maintaining the highest safety standards. The project included 24/7 monitoring systems, emergency response protocols, and seamless coordination with Abu Dhabi Municipality, Police, and construction contractors. We implemented adaptive traffic signal control, deployed Truck Mounted Attenuators (TMA), and created alternative route plans that maintained traffic flow efficiency throughout the construction period.",
        ar: "أدرنا بنجاح عمليات مرور معقدة أثناء إنشاء نظام مترو أبوظبي. غطت خطة إدارة المرور الشاملة 12 تقاطعاً رئيسياً، مما ضمن الحد الأدنى من الاضطراب للمسافرين اليوميين مع الحفاظ على أعلى معايير السلامة. شمل المشروع أنظمة مراقبة على مدار الساعة وبروتوكولات الاستجابة للطوارئ والتنسيق السلس مع بلدية أبوظبي والشرطة ومقاولي الإنشاء."
      },
      image: LinkesAndPathes.clientLogo1,
      achievements: [
        {
          en: "Zero major traffic accidents during 24-month construction period",
          ar: "صفر حوادث مرور كبيرة خلال فترة الإنشاء البالغة 24 شهراً"
        },
        {
          en: "95% traffic flow efficiency maintained throughout construction",
          ar: "الحفاظ على 95٪ من كفاءة تدفق المرور طوال فترة الإنشاء"
        },
        {
          en: "Full ITC compliance certification achieved for all phases",
          ar: "تم الحصول على شهادة الامتثال الكاملة لمعايير ITC لجميع المراحل"
        },
        {
          en: "Emergency response time reduced by 30% through optimized routing",
          ar: "تم تقليل وقت الاستجابة للطوارئ بنسبة 30٪ من خلال التوجيه المحسن"
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
        en: "Advanced lane closure and traffic redirection for coastal highway expansion project",
        ar: "إغلاق متقدم للحارات وإعادة توجيه المرور لمشروع توسعة الطريق الساحلي"
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
        en: "12 safety specialists",
        ar: "12 متخصص سلامة"
      },
      technologies: {
        en: "Variable Message Signs, Truck Mounted Attenuators, Smart Barriers",
        ar: "لافتات الرسائل المتغيرة، مخففات الصدمات المحمولة على الشاحنات، الحواجز الذكية"
      },
      description: {
        en: "Orchestrated comprehensive traffic operations during the expansion of Abu Dhabi's iconic Corniche Road. Our innovative approach included implementing intelligent traffic light systems, deploying state-of-the-art Truck Mounted Attenuators (TMA), and creating dynamic alternative route plans. The project required meticulous coordination with tourism authorities to minimize impact on recreational activities while ensuring absolute construction worker safety. We utilized advanced Variable Message Signs (VMS) and smart barrier systems to maintain optimal traffic flow during peak tourist seasons.",
        ar: "نظمنا عمليات مرور شاملة أثناء توسعة طريق كورنيش أبوظبي الشهير. شمل نهجنا المبتكر تنفيذ أنظمة إشارات مرور ذكية ونشر مخففات صدمات متطورة محمولة على الشاحنات وإنشاء خطط طرق بديلة ديناميكية. تطلب المشروع تنسيقاً دقيقاً مع سلطات السياحة لتقليل التأثير على الأنشطة الترفيهية مع ضمان السلامة المطلقة لعمال الإنشاء."
      },
      image: LinkesAndPathes.clientLogo2,
      achievements: [
        {
          en: "Tourist access maintained throughout 18-month construction period",
          ar: "تم الحفاظ على وصول السياح طوال فترة الإنشاء البالغة 18 شهراً"
        },
        {
          en: "30% reduction in average travel time through optimized routing",
          ar: "تقليل 30٪ في متوسط وقت السفر من خلال التوجيه المحسن"
        },
        {
          en: "100% compliance with environmental regulations",
          ar: "امتثال 100٪ للوائح البيئية"
        },
        {
          en: "Award for Outstanding Traffic Management Excellence",
          ar: "جائزة التميز المتفوق في إدارة المرور"
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
        en: "Large-scale event traffic management for prestigious international racing championship",
        ar: "إدارة المرور واسعة النطاق لبطولة السباق الدولية المرموقة"
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
        en: "6 weeks intensive planning + event execution",
        ar: "6 أسابيع تخطيط مكثف + تنفيذ الحدث"
      },
      teamSize: {
        en: "25 event specialists",
        ar: "25 متخصص فعاليات"
      },
      technologies: {
        en: "Dynamic Traffic Control, Emergency Response Systems, Crowd Management Technology",
        ar: "التحكم الديناميكي في المرور، أنظمة الاستجابة للطوارئ، تقنيات إدارة الحشود"
      },
      description: {
        en: "Executed flawless traffic management for one of the world's most prestigious racing events. Our expert team handled the intricate logistics of managing over 50,000 spectators' movement while maintaining critical emergency access routes. We implemented cutting-edge dynamic traffic control systems, coordinated seamlessly with international security teams, and ensured perfect integration with public transportation systems. The project included real-time crowd monitoring, predictive traffic flow analysis, and adaptive signal management to handle the massive influx and exodus of race attendees.",
        ar: "نفذنا إدارة مرور مثالية لواحد من أشهر أحداث السباق في العالم. تعامل فريق الخبراء لدينا مع اللوجستيات المعقدة لإدارة حركة أكثر من 50,000 متفرج مع الحفاظ على طرق الوصول الحيوية للطوارئ. نفذنا أنظمة تحكم مرور ديناميكية متطورة ونسقنا بسلاسة مع فرق الأمن الدولية وضمنا التكامل المثالي مع أنظمة النقل العام."
      },
      image: LinkesAndPathes.clientLogo3,
      achievements: [
        {
          en: "Zero traffic incidents during race weekend with 50,000+ attendees",
          ar: "صفر حوادث مرور خلال عطلة نهاية أسبوع السباق مع أكثر من 50,000 حاضر"
        },
        {
          en: "Average evacuation time reduced by 40% compared to previous years",
          ar: "متوسط وقت الإخلاء انخفض بنسبة 40٪ مقارنة بالسنوات السابقة"
        },
        {
          en: "International safety standards exceeded by 150%",
          ar: "تم تجاوز معايير السلامة الدولية بنسبة 150٪"
        },
        {
          en: "Recognition from FIA for Outstanding Traffic Management",
          ar: "اعتراف من الاتحاد الدولي للسيارات للإدارة المرورية المتميزة"
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
        en: "Next-generation traffic technology implementation for Abu Dhabi's smart city vision",
        ar: "تنفيذ تقنيات المرور من الجيل التالي لرؤية أبوظبي كمدينة ذكية"
      },
      category: {
        en: "Smart Technology",
        ar: "التكنولوجيا الذكية"
      },
      location: {
        en: "Multiple districts, Abu Dhabi",
        ar: "مناطق متعددة، أبوظبي"
      },
      duration: {
        en: "12 months ongoing",
        ar: "12 شهر مستمر"
      },
      teamSize: {
        en: "20 technology specialists",
        ar: "20 متخصص تكنولوجيا"
      },
      technologies: {
        en: "IoT Sensors, AI Traffic Analytics, Cloud-based Control Systems",
        ar: "أجهزة استشعار إنترنت الأشياء، تحليلات المرور بالذكاء الاصطناعي، أنظمة التحكم السحابية"
      },
      description: {
        en: "Pioneered the integration of next-generation IoT-enabled traffic management systems across Abu Dhabi's key districts. Our revolutionary solution encompasses real-time traffic monitoring, AI-powered adaptive signal control, and predictive analytics for comprehensive congestion management. The project directly supports Abu Dhabi's ambitious vision of becoming a global leading smart city by 2030, featuring sustainable and highly efficient transportation solutions. We deployed thousands of smart sensors, implemented machine learning algorithms for traffic prediction, and created a centralized command center for unified traffic management.",
        ar: "رائدنا في تكامل أنظمة إدارة المرور المدعومة بإنترنت الأشياء من الجيل التالي عبر المناطق الرئيسية في أبوظبي. يشمل حلولنا الثوري مراقبة المرور في الوقت الفعلي والتحكم التكيفي في الإشارات المدعوم بالذكاء الاصطناعي والتحليلات التنبؤية لإدارة الازدحام الشاملة. يدعم المشروع مباشرة رؤية أبوظبي الطموحة لتصبح مدينة ذكية رائدة عالمياً بحلول 2030."
      },
      image: LinkesAndPathes.clientLogo4,
      achievements: [
        {
          en: "25% improvement in overall traffic flow efficiency across all monitored areas",
          ar: "تحسن 25٪ في كفاءة تدفق المرور الإجمالية عبر جميع المناطق المراقبة"
        },
        {
          en: "Real-time monitoring system deployed across 50+ intersections",
          ar: "تم نشر نظام مراقبة في الوقت الفعلي عبر أكثر من 50 تقاطع"
        },
        {
          en: "Carbon footprint reduced by 15% through optimized traffic patterns",
          ar: "انخفضت البصمة الكربونية بنسبة 15٪ من خلال أنماط المرور المحسنة"
        },
        {
          en: "First smart city traffic system to achieve full AI integration in the region",
          ar: "أول نظام مرور للمدينة الذكية يحقق التكامل الكامل للذكاء الاصطناعي في المنطقة"
        }
      ]
    }
  ];

  // Certificate data
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015",
      subtitle: {
        en: "Quality Management System",
        ar: "نظام إدارة الجودة"
      },
      issueDate: "03 July 2025",
      expiryDate: "02 July 2028",
      registrationNumber: "FQC/Q/3197/AE",
      scope: {
        en: [
          "Road Maintenance",
          "Main Roads, Streets and Related Works Contracting",
          "Onshore and Offshore Oil and Gas Fields and Facilities Services",
          "Road Painting and Other Marking Works",
          "Roads and Bridges Management and Operation"
        ],
        ar: [
          "صيانة الطرق",
          "مقاولات الطرق الرئيسية والشوارع والأعمال ذات الصلة",
          "خدمات حقول النفط والغاز البرية والبحرية والمرافق",
          "أعمال طلاء الطرق وأعمال العلامات الأخرى",
          "إدارة وتشغيل الطرق والجسور"
        ]
      },
      pdfLink: CertificateLinks.iso9001
    },
    {
      id: 2,
      title: "ISO 14001:2015",
      subtitle: {
        en: "Environmental Management System",
        ar: "نظام الإدارة البيئية"
      },
      issueDate: "03 July 2025",
      expiryDate: "02 July 2028",
      registrationNumber: "FQC/Q/3198/AE",
      scope: {
        en: [
          "Road Maintenance",
          "Roads & Bridges Management and Operation",
          "Oil & Gas Fields and Facilities Services",
          "Road Markings and Signage"
        ],
        ar: [
          "صيانة الطرق",
          "إدارة وتشغيل الطرق والجسور",
          "خدمات حقول النفط والغاز والمرافق",
          "علامات الطرق واللافتات"
        ]
      },
      pdfLink: CertificateLinks.iso14001
    },
    {
      id: 3,
      title: "ISO 45001:2018",
      subtitle: {
        en: "Occupational Health & Safety Management System",
        ar: "نظام إدارة الصحة والسلامة المهنية"
      },
      issueDate: "03 July 2025",
      expiryDate: "02 July 2028",
      registrationNumber: "FQC/Q/3199/AE",
      scope: {
        en: [
          "Road Maintenance",
          "Main Roads and Related Works",
          "Health and Safety Services in Oil & Gas Fields",
          "Bridge Management & Road Painting"
        ],
        ar: [
          "صيانة الطرق",
          "الطرق الرئيسية والأعمال ذات الصلة",
          "خدمات الصحة والسلامة في حقول النفط والغاز",
          "إدارة الجسور وطلاء الطرق"
        ]
      },
      pdfLink: CertificateLinks.iso45001
    },
    {
      id: 4,
      title: "ISO 41001:2018",
      subtitle: {
        en: "Facility Management System",
        ar: "نظام إدارة المرافق"
      },
      issueDate: "03 July 2025",
      expiryDate: "02 July 2028",
      registrationNumber: "FQC/Q/3200/AE",
      scope: {
        en: [
          "Operation and Maintenance of Infrastructure Facilities",
          "Facility Services for Roads, Bridges, and Oil/Gas Fields"
        ],
        ar: [
          "تشغيل وصيانة مرافق البنية التحتية",
          "خدمات المرافق للطرق والجسور وحقول النفط والغاز"
        ]
      },
      pdfLink: CertificateLinks.iso41001
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
            {language === "en" ? "Technologies Used" : "التقنيات المستخدمة"}
          </h3>
          <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
            {currentProject?.technologies[language]}
          </p>
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
          <ul className="space-y-3">
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
            {language === "en" ? "Technologies" : "التقنيات"}
          </h3>
          <p className="text-xs text-gray-700 bg-gray-50 p-2 rounded">
            {currentProject?.technologies[language]}
          </p>
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
          <ul className="space-y-2">
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
            {language === "en" ? "Project Portfolio – Road Shield Solutions" : "محفظة المشاريع - حلول درع الطريق"}
          </h2>
          <p className="text-roadpro-gray text-lg max-w-3xl mx-auto">
            {language === "en" 
              ? "Showcasing our flagship infrastructure and road safety projects that define excellence in traffic management across Abu Dhabi" 
              : "عرض مشاريعنا الرائدة في البنية التحتية وسلامة الطرق التي تحدد التميز في إدارة المرور عبر أبوظبي"}
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

        {/* Certificates Section */}
        <div id="certifications" className="mt-24">{/* Added id for navigation */}
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
            {/* Navigation Arrows */}
            <div className="absolute -top-16 right-0 flex gap-2 z-10">
              <button
                onClick={scrollPrev}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-roadpro-yellow/10 border border-gray-100"
              >
                <ChevronLeft className="h-5 w-5 text-roadpro-black" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-roadpro-yellow/10 border border-gray-100"
              >
                <ChevronRight className="h-5 w-5 text-roadpro-black" />
              </button>
            </div>

            {/* Embla Carousel */}
            <div 
              className="overflow-hidden" 
              ref={emblaRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex gap-6">{/* Embla container */}
                {certificates.map((certificate, index) => (
                  <motion.div
                    key={certificate.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -8,
                      boxShadow: "0 25px 50px rgba(255, 214, 0, 0.25)"
                    }}
                    className="group flex-shrink-0 w-80" /* Fixed width for carousel */
                  >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden group-hover:border-roadpro-yellow/20 group-hover:border">
                  <CardContent className="p-8 h-full flex flex-col relative">
                    {/* Background gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-roadpro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-roadpro-yellow/20 to-roadpro-yellow/10 rounded-xl group-hover:from-roadpro-yellow/30 group-hover:to-roadpro-yellow/20 transition-all duration-500">
                          <Award className="h-7 w-7 text-roadpro-yellow" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-roadpro-black mb-1 group-hover:text-roadpro-black transition-colors">
                            {certificate.title}
                          </h4>
                          <p className="text-gray-600 text-sm font-medium leading-relaxed">
                            {certificate.subtitle[language]}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-500">
                            {language === "en" ? "Issue Date:" : "تاريخ الإصدار:"}
                          </span>
                          <span className="text-sm font-semibold text-roadpro-black">
                            {certificate.issueDate}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-500">
                            {language === "en" ? "Expiry Date:" : "تاريخ الانتهاء:"}
                          </span>
                          <span className="text-sm font-semibold text-roadpro-black">
                            {certificate.expiryDate}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-sm font-medium text-gray-500">
                            {language === "en" ? "Reg. No:" : "رقم التسجيل:"}
                          </span>
                          <span className="text-sm font-semibold text-roadpro-black">
                            {certificate.registrationNumber}
                          </span>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h5 className="text-sm font-bold text-roadpro-black mb-3">
                          {language === "en" ? "Scope:" : "النطاق:"}
                        </h5>
                        <ul className="text-xs text-gray-600 space-y-2">
                          {certificate.scope[language].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-roadpro-yellow rounded-full mt-1.5 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <motion.a
                          href={certificate.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 w-full justify-center bg-gradient-to-r from-roadpro-yellow to-roadpro-yellow/90 text-roadpro-black px-6 py-4 rounded-xl font-semibold hover:from-roadpro-yellow/90 hover:to-roadpro-yellow transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FileText className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span>{language === "en" ? "View Certificate" : "عرض الشهادة"}</span>
                          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </motion.a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
