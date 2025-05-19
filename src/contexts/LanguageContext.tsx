
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Define the available languages and translation keys
export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object for both languages
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.equipment": "Equipment",
    "nav.clients": "Clients",
    "nav.contact": "Contact Us",
    "nav.whyus": "Why Us",
    "nav.sustainability": "Sustainability",
    "nav.language": "العربية",
    "nav.getquote": "Get a Quote",
    
    // Hero Section
    "hero.title": "Expert Traffic Management Solutions",
    "hero.subtitle": "Setting the standard for road safety and traffic management in Abu Dhabi with ITC-compliant solutions",
    "hero.button.explore": "Explore Our Services",
    "hero.button.contact": "Contact Us",
    
    // About Section
    "about.title": "Abu Dhabi's Premier Road Safety Partner",
    "about.subtitle": "Delivering innovative and sustainable traffic management solutions since 2015",
    "about.company": "Road Pro is a professional traffic management and consultancy service provider committed to ensuring public safety and maintaining efficient traffic flow. Our team of experts specializes in developing comprehensive traffic diversion plans and implementing road safety measures that comply with regulatory standards.",
    "about.vision.title": "Our Vision",
    "about.vision.description": "To lead the road safety industry with innovative solutions and reliable services, becoming the gold standard for traffic management in the UAE.",
    "about.mission.title": "Mission Statement",
    "about.mission.description": "Enhance public safety across all road types. Ensure smooth and uninterrupted traffic flow. Deliver innovative, regulation-compliant solutions. Specialize in traffic diversions, lane closures, and street control.",
    "about.mission.item1": "Enhance public safety across all road types.",
    "about.mission.item2": "Ensure smooth and uninterrupted traffic flow.",
    "about.mission.item3": "Deliver innovative, regulation-compliant solutions.",
    "about.mission.item4": "Specialize in traffic diversions, lane closures, and street control.",
    "about.compliance.title": "International Compliance",
    "about.compliance.description": "All our operations, equipment, and services comply with International Traffic Control (ITC) standards, ensuring the highest levels of safety and efficiency.",
    "about.stats.experience": "Years of Experience",
    "about.stats.projects": "Completed Projects",
    "about.stats.team": "Professional Team",
    "about.stats.clients": "Corporate Clients",
    
    // Services Section
    "services.title": "Traffic Management & Consultancy Services",
    "services.subtitle": "Professional services to ensure safety and efficiency in traffic management",
    "services.traffic.title": "Traffic Management Planning",
    "services.traffic.description": "Development of Traffic Management Plans (TMP) in compliance with ITC and UAE regulations. Full traffic scheme planning for construction sites, roadworks, and public events. Emergency response strategies and incident handling support. Assistance with permit acquisition and coordination with official entities.",
    "services.consultancy.title": "Consultancy and Advisory",
    "services.consultancy.description": "Expert consultation on safe and efficient traffic operations. Traffic flow analysis and congestion mitigation planning. Engineering support for layout and signage design. Preparation of Method Statements and Risk Assessments (MSRA). Submission-ready plans and documents for ITC and authority approvals.",
    "services.products.title": "Traffic Products and Services",
    "services.products.subtitle": "Quality equipment and solutions for effective traffic control",
    "services.diversion.title": "Traffic Diversion Solutions",
    "services.diversion.description": "Temporary and permanent road signs compliant with ITC standards. Durable cones and barriers for safe traffic redirection. Customized diversion plans tailored to project scope and location.",
    "services.lane.title": "Lane Closure Equipment",
    "services.lane.description": "Strategically placed, high-visibility lane closure signs. Certified safety barriers and delineators. Complete lane closure execution aligned with safety protocols.",
    "services.street.title": "Street Control Systems",
    "services.street.description": "Portable traffic lights for temporary setups. Pedestrian control equipment ensuring public safety. Customizable street control devices for special events or construction sites.",
    "services.button.more": "Learn More",
    
    // Projects Gallery
    "projects.title": "Featured Projects",
    "projects.subtitle": "Explore our successful traffic management implementations across Abu Dhabi",
    "projects.all": "All Projects",
    "projects.road": "Road Construction",
    "projects.events": "Events",
    "projects.infrastructure": "Infrastructure",
    "projects.button.view": "View All Projects",
    
    // Equipment Section
    "equipment.title": "State-of-the-Art Safety Equipment",
    "equipment.subtitle": "Our inventory of specialized traffic management equipment meets international safety standards",
    "equipment.certified": "ITC Certified",
    "equipment.compliance": "All equipment complies with International Traffic Control (ITC) standards and undergoes regular maintenance and safety inspections.",
    
    // Advantages Section
    "advantages.title": "Why Choose Road Pro",
    "advantages.subtitle": "We deliver excellence in every project",
    "advantages.experience.title": "Industry Experience",
    "advantages.experience.description": "Our team brings years of specialized knowledge in traffic management and road safety.",
    "advantages.compliance.title": "ITC Compliance",
    "advantages.compliance.description": "All our services meet International Traffic Control standards for maximum safety.",
    "advantages.customized.title": "Customized Solutions",
    "advantages.customized.description": "We design traffic management plans tailored to your specific project needs.",
    "advantages.responsive.title": "Responsive Team",
    "advantages.responsive.description": "Available 24/7 for emergency traffic management situations with rapid response.",
    "advantages.equipment.title": "Latest Equipment",
    "advantages.equipment.description": "Access to state-of-the-art traffic safety technology and equipment.",
    "advantages.affordability.title": "Competitive Pricing",
    "advantages.affordability.description": "Cost-effective solutions without compromising on quality or safety.",
    
    // Sustainability Section
    "sustainability.title": "Our Commitment to Sustainability",
    "sustainability.subtitle": "Creating safer roads with environmental responsibility",
    "sustainability.environment.title": "Environmental Stewardship",
    "sustainability.environment.description": "We minimize our carbon footprint by using energy-efficient equipment and sustainable materials.",
    "sustainability.innovation.title": "Innovative Practices",
    "sustainability.innovation.description": "Implementing eco-friendly technologies and processes in our operations.",
    "sustainability.community.title": "Community Focus",
    "sustainability.community.description": "Supporting local initiatives and contributing to the community's well-being.",
    
    // Contact Section
    "contact.title": "Contact Information",
    "contact.subtitle": "Reach out for inquiries or to discuss your traffic management needs",
    "contact.location.title": "Our Location",
    "contact.phone.title": "Phone",
    "contact.email.title": "Email",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company Name",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.button": "Get a Quote",
    
    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    
    // WhatsApp Button
    "whatsapp.message": "Hello Road Pro, I would like to inquire about your services."
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.projects": "مشاريعنا",
    "nav.equipment": "معداتنا",
    "nav.clients": "عملاؤنا",
    "nav.contact": "اتصل بنا",
    "nav.whyus": "لماذا نحن",
    "nav.sustainability": "الاستدامة",
    "nav.language": "English",
    "nav.getquote": "احصل على عرض سعر",
    
    // Hero Section
    "hero.title": "حلول إدارة حركة المرور المتخصصة",
    "hero.subtitle": "نضع المعايير لسلامة الطرق وإدارة حركة المرور في أبوظبي بحلول متوافقة مع معايير التحكم المروري الدولية",
    "hero.button.explore": "استكشف خدماتنا",
    "hero.button.contact": "اتصل بنا",
    
    // About Section
    "about.title": "الشريك الرائد في مجال سلامة الطرق في أبوظبي",
    "about.subtitle": "نقدم حلول إدارة حركة المرور المبتكرة والمستدامة منذ عام 2015",
    "about.company": "Road Pro هي شركة متخصصة في إدارة المرور والاستشارات، ملتزمة بتوفير أعلى مستويات السلامة العامة وضمان تدفق مروري فعال. فريقنا من الخبراء يركز على تطوير خطط شاملة لتحويلات المرور وتنفيذ إجراءات السلامة الطرقية التي تتماشى مع المعايير التنظيمية.",
    "about.vision.title": "رؤيتنا",
    "about.vision.description": "ريادة صناعة سلامة الطرق بحلول مبتكرة وخدمات موثوقة، لنصبح المعيار الذهبي لإدارة حركة المرور في الإمارات العربية المتحدة.",
    "about.mission.title": "الرسالة",
    "about.mission.description": "تعزيز السلامة العامة على جميع أنواع الطرق. ضمان سير مرور سلس وغير متقطع. تقديم حلول إبداعية تتماشى مع القوانين واللوائح. التركيز على تحويلات المرور، إغلاق الحارات، وتنظيم الشوارع.",
    "about.mission.item1": "تعزيز السلامة العامة على جميع أنواع الطرق.",
    "about.mission.item2": "ضمان سير مرور سلس وغير متقطع.",
    "about.mission.item3": "تقديم حلول إبداعية تتماشى مع القوانين واللوائح.",
    "about.mission.item4": "التركيز على تحويلات المرور، إغلاق الحارات، وتنظيم الشوارع.",
    "about.compliance.title": "الامتثال للمعايير الدولية",
    "about.compliance.description": "تتوافق جميع عملياتنا ومعداتنا وخدماتنا مع معايير التحكم المروري الدولية (ITC)، مما يضمن أعلى مستويات السلامة والكفاءة.",
    "about.stats.experience": "سنوات من الخبرة",
    "about.stats.projects": "مشاريع منجزة",
    "about.stats.team": "فريق محترف",
    "about.stats.clients": "عملاء الشركات",
    
    // Services Section
    "services.title": "خدمات إدارة المرور والاستشارات",
    "services.subtitle": "خدمات احترافية لضمان السلامة والكفاءة في إدارة حركة المرور",
    "services.traffic.title": "خدمات إدارة المرور",
    "services.traffic.description": "تطوير خطط إدارة المرور (TMP) التي تتماشى مع لوائح ITC والإمارات العربية المتحدة. التخطيط الكامل لخطط المرور لمواقع البناء، وأعمال الطرق، والأحداث العامة. استراتيجيات الاستجابة للطوارئ وإدارة الحوادث. المساعدة في الحصول على التراخيص والتنسيق مع الجهات الرسمية.",
    "services.consultancy.title": "الاستشارات والدعم الفني",
    "services.consultancy.description": "استشارات خبراء حول العمليات المرورية الآمنة والفعالة. تحليل تدفق المرور وتخطيط لتخفيف الاختناقات. دعم هندسي لتصميم المخططات والعلامات المرورية. إعداد بيانات الإجراءات والتحليلات (MSRA). خطط جاهزة للتقديم للحصول على الموافقات من ITC والجهات المعنية.",
    "services.products.title": "منتجات وخدمات المرور",
    "services.products.subtitle": "معدات وحلول عالية الجودة للتحكم الفعال في حركة المرور",
    "services.diversion.title": "حلول تحويلات المرور",
    "services.diversion.description": "علامات مرور مؤقتة ودائمة تتماشى مع معايير ITC. مخاريط وأسوار أمان متينة لتحويل حركة المرور بشكل آمن. خطط تحويل مرنة مصممة وفقًا لحدود المشروع والموقع.",
    "services.lane.title": "معدات إغلاق الحارات",
    "services.lane.description": "علامات إغلاق الحارات عالية المرئية. سياجات وألواح أمان معتمدة. تنفيذ كامل لإغلاق الحارات وفقًا لإجراءات السلامة.",
    "services.street.title": "أنظمة تحكم الشوارع",
    "services.street.description": "أضواء مرور قابلة للنقل للاستخدام المؤقت. معدات تحكم المشاة لضمان السلامة العامة. أجهزة تحكم شوارع قابلة للتخصيص للأحداث الخاصة أو مواقع البناء.",
    "services.button.more": "اعرف المزيد",
    
    // Projects Gallery
    "projects.title": "مشاريع مميزة",
    "projects.subtitle": "استكشف تنفيذنا الناجح لإدارة حركة المرور في جميع أنحاء أبوظبي",
    "projects.all": "جميع المشاريع",
    "projects.road": "إنشاء الطرق",
    "projects.events": "الفعاليات",
    "projects.infrastructure": "البنية التحتية",
    "projects.button.view": "عرض جميع المشاريع",
    
    // Equipment Section
    "equipment.title": "معدات السلامة المتطورة",
    "equipment.subtitle": "تلبي مجموعة معداتنا المتخصصة لإدارة حركة المرور المعايير الدولية للسلامة",
    "equipment.certified": "معتمد من ITC",
    "equipment.compliance": "تتوافق جميع المعدات مع معايير التحكم المروري الدولية (ITC) وتخضع لصيانة منتظمة وفحوصات السلامة.",
    
    // Advantages Section
    "advantages.title": "لماذا تختار رود برو",
    "advantages.subtitle": "نقدم التميز في كل مشروع",
    "advantages.experience.title": "خبراء ذو خبرة",
    "advantages.experience.description": "محترفون يتمتعون بخبرة عميقة في صناعة إدارة المرور.",
    "advantages.compliance.title": "التزام باللوائح",
    "advantages.compliance.description": "الالتزام بكافة المعايير المحلية والدولية للسلامة.",
    "advantages.customized.title": "حلول مخصصة",
    "advantages.customized.description": "نصمم خطط إدارة حركة المرور المصممة خصيصًا لاحتياجات مشروعك المحددة.",
    "advantages.responsive.title": "استجابة سريعة",
    "advantages.responsive.description": "تنفيذ سريع وتعامل استباقي مع المشاريع.",
    "advantages.equipment.title": "تنسيق قوي مع السلطات",
    "advantages.equipment.description": "تعاون وثيق مع الجهات الحكومية (ITC، الشرطة، البلديات).",
    "advantages.affordability.title": "سجل حافل بالإنجازات",
    "advantages.affordability.description": "سجل موثوق في إدارة السيناريوهات المرورية ذات الكثافة العالية.",
    
    // Sustainability Section
    "sustainability.title": "التزامنا بالاستدامة",
    "sustainability.subtitle": "إنشاء طرق أكثر أمانًا مع المسؤولية البيئية",
    "sustainability.environment.title": "الإشراف البيئي",
    "sustainability.environment.description": "نحن نقلل من بصمتنا الكربونية باستخدام معدات موفرة للطاقة ومواد مستدامة.",
    "sustainability.innovation.title": "ممارسات مبتكرة",
    "sustainability.innovation.description": "تنفيذ تقنيات وعمليات صديقة للبيئة في عملياتنا.",
    "sustainability.community.title": "التركيز على المجتمع",
    "sustainability.community.description": "دعم المبادرات المحلية والمساهمة في رفاهية المجتمع.",
    
    // Contact Section
    "contact.title": "معلومات الاتصال",
    "contact.subtitle": "تواصل معنا للاستفسارات أو لمناقشة احتياجاتك في إدارة حركة المرور",
    "contact.location.title": "موقعنا",
    "contact.phone.title": "الهاتف",
    "contact.email.title": "البريد الإلكتروني",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.company": "اسم الشركة",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.message": "الرسالة",
    "contact.form.button": "احصل على عرض سعر",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    
    // WhatsApp Button
    "whatsapp.message": "مرحبًا رود برو، أود الاستفسار عن خدماتكم."
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ 
  children 
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // Translate function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  // Set initial document direction and lang on mount
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === "ar" ? "rtl" : "ltr"} className={language === "ar" ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
