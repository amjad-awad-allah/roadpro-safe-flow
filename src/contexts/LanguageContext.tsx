
import React, { createContext, useState, useContext, ReactNode } from "react";

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
    
    // Hero Section
    "hero.title": "Expert Traffic Management Solutions",
    "hero.subtitle": "Setting the standard for road safety and traffic management in Abu Dhabi with ITC-compliant solutions",
    "hero.button.explore": "Explore Our Services",
    "hero.button.contact": "Contact Us",
    
    // About Section
    "about.title": "Abu Dhabi's Premier Road Safety Partner",
    "about.subtitle": "Delivering innovative and sustainable traffic management solutions since 2015",
    "about.vision.title": "Our Vision",
    "about.vision.description": "To lead the road safety industry with innovative solutions and reliable services, becoming the gold standard for traffic management in the UAE.",
    "about.mission.title": "Our Mission",
    "about.mission.description": "To provide safe and efficient traffic management systems, ensuring the well-being of all road users while contributing to the smart city vision of Abu Dhabi.",
    "about.compliance.title": "International Compliance",
    "about.compliance.description": "All our operations, equipment, and services comply with International Traffic Control (ITC) standards, ensuring the highest levels of safety and efficiency.",
    "about.stats.experience": "Years of Experience",
    "about.stats.projects": "Completed Projects",
    "about.stats.team": "Professional Team",
    "about.stats.clients": "Corporate Clients",
    
    // Services Section
    "services.title": "Innovative Traffic Management Services",
    "services.subtitle": "Delivering cutting-edge solutions for urban mobility and road safety",
    "services.traffic.title": "Traffic Management Solutions",
    "services.traffic.description": "Comprehensive traffic flow management during road works, construction, and public events with ITC-compliant planning and implementation.",
    "services.lane.title": "Lane Closure Equipment",
    "services.lane.description": "State-of-the-art equipment for safe and efficient lane closures, including barriers, cones, and advanced warning signage.",
    "services.street.title": "Street Closure Management",
    "services.street.description": "Complete management of temporary street closures for construction, events, and emergencies with minimal disruption to daily traffic.",
    "services.equipment.title": "Specialized Equipment (TMA)",
    "services.equipment.description": "Truck Mounted Attenuators and other specialized safety equipment to protect workers and the public in high-risk traffic zones.",
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
    
    // WhatsApp Button
    "whatsapp.message": "Hello RoadPro, I would like to inquire about your services."
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
    
    // Hero Section
    "hero.title": "حلول إدارة حركة المرور المتخصصة",
    "hero.subtitle": "نضع المعايير لسلامة الطرق وإدارة حركة المرور في أبوظبي بحلول متوافقة مع معايير التحكم المروري الدولية",
    "hero.button.explore": "استكشف خدماتنا",
    "hero.button.contact": "اتصل بنا",
    
    // About Section
    "about.title": "الشريك الرائد في مجال سلامة الطرق في أبوظبي",
    "about.subtitle": "نقدم حلول إدارة حركة المرور المبتكرة والمستدامة منذ عام 2015",
    "about.vision.title": "رؤيتنا",
    "about.vision.description": "ريادة صناعة سلامة الطرق بحلول مبتكرة وخدمات موثوقة، لنصبح المعيار الذهبي لإدارة حركة المرور في الإمارات العربية المتحدة.",
    "about.mission.title": "مهمتنا",
    "about.mission.description": "توفير أنظمة آمنة وفعالة لإدارة حركة المرور، مع ضمان رفاهية جميع مستخدمي الطرق والمساهمة في رؤية المدينة الذكية لأبوظبي.",
    "about.compliance.title": "الامتثال للمعايير الدولية",
    "about.compliance.description": "تتوافق جميع عملياتنا ومعداتنا وخدماتنا مع معايير التحكم المروري الدولية (ITC)، مما يضمن أعلى مستويات السلامة والكفاءة.",
    "about.stats.experience": "سنوات من الخبرة",
    "about.stats.projects": "مشاريع منجزة",
    "about.stats.team": "فريق محترف",
    "about.stats.clients": "عملاء الشركات",
    
    // Services Section
    "services.title": "خدمات إدارة حركة المرور المبتكرة",
    "services.subtitle": "تقديم حلول متطورة للتنقل الحضري وسلامة الطرق",
    "services.traffic.title": "حلول إدارة حركة المرور",
    "services.traffic.description": "إدارة شاملة لتدفق حركة المرور أثناء أعمال الطرق والبناء والفعاليات العامة مع تخطيط وتنفيذ متوافق مع معايير التحكم المروري الدولية.",
    "services.lane.title": "معدات إغلاق المسارات",
    "services.lane.description": "معدات متطورة للإغلاق الآمن والفعال للمسارات، بما في ذلك الحواجز والمخاريط ولافتات التحذير المتقدمة.",
    "services.street.title": "إدارة إغلاق الشوارع",
    "services.street.description": "إدارة كاملة للإغلاق المؤقت للشوارع للبناء والفعاليات والطوارئ مع الحد الأدنى من الاضطراب لحركة المرور اليومية.",
    "services.equipment.title": "معدات متخصصة (TMA)",
    "services.equipment.description": "المخففات المثبتة على الشاحنات ومعدات السلامة المتخصصة الأخرى لحماية العمال والجمهور في مناطق حركة المرور عالية الخطورة.",
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
