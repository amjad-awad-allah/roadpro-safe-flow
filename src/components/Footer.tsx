import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
const Footer = () => {
  const {
    language
  } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      history.replaceState(null, null, `#${sectionId}`);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    history.replaceState(null, null, "#home");
  };

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <footer className="bg-roadpro-black text-white pt-16 pb-8 relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <a href="#home" onClick={e => {
              e.preventDefault();
              scrollToTop();
            }} className="inline-block">
                <img alt="Road Shield Solutions" className="h-20 w-auto object-contain" src="/lovable-uploads/f2840b7c-c72b-4909-8bb1-8beb815734b1.png" />
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              {language === "en" ? "Professional traffic management and consultancy services committed to ensuring public safety and maintaining efficient traffic flow." : "خدمات إدارة المرور والاستشارات المهنية الملتزمة بضمان السلامة العامة والحفاظ على تدفق مروري فعال."}
            </p>
            
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" onClick={e => {
                e.preventDefault();
                scrollToTop();
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Home" : "الرئيسية"}
                </a>
              </li>
              <li>
                <a href="#about" onClick={e => {
                e.preventDefault();
                scrollToSection("about");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "About" : "من نحن"}
                </a>
              </li>
              <li>
                <a href="#services" onClick={e => {
                e.preventDefault();
                scrollToSection("services");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Services" : "خدماتنا"}
                </a>
              </li>
              <li>
                <a href="#advantages" onClick={e => {
                e.preventDefault();
                scrollToSection("advantages");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Why Choose Us" : "لماذا نحن"}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={e => {
                e.preventDefault();
                scrollToSection("contact");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Contact Us" : "اتصل بنا"}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === "en" ? "Services" : "الخدمات"}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" onClick={e => {
                e.preventDefault();
                scrollToSection("services");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Traffic Management Planning" : "تخطيط إدارة المرور"}
                </a>
              </li>
              <li>
                <a href="#services" onClick={e => {
                e.preventDefault();
                scrollToSection("services");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Consultancy and Advisory" : "الاستشارات والدعم الفني"}
                </a>
              </li>
              <li>
                <a href="#services" onClick={e => {
                e.preventDefault();
                scrollToSection("services");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Traffic Diversion Solutions" : "حلول تحويلات المرور"}
                </a>
              </li>
              <li>
                <a href="#services" onClick={e => {
                e.preventDefault();
                scrollToSection("services");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Lane Closure Equipment" : "معدات إغلاق الحارات"}
                </a>
              </li>
              <li>
                <a href="#services" onClick={e => {
                e.preventDefault();
                scrollToSection("services");
              }} className="text-gray-300 hover:text-roadpro-yellow transition-colors">
                  {language === "en" ? "Street Control Systems" : "أنظمة تحكم الشوارع"}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === "en" ? "Contact Us" : "اتصل بنا"}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3 h-3 text-roadpro-black" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-0.5">
                    {language === "en" ? "Location" : "الموقع"}
                  </h4>
                  <span className="text-xs text-gray-300">
                    {language === "en" ? "Abu Dhabi, Mussafah Industrial Area, M45" : "أبوظبي، المصفح المنطقة الصناعية، M45"}
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 text-roadpro-black" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-0.5">
                    {language === "en" ? "Mobile" : "الجوال"}
                  </h4>
                  <a href="tel:+971562107006" className="text-xs text-gray-300 hover:text-roadpro-yellow transition-colors">
                    +971 56 210 7006
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 text-roadpro-black" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-0.5">
                    {language === "en" ? "Landline" : "الهاتف الثابت"}
                  </h4>
                  <a href="tel:+97126447786" className="text-xs text-gray-300 hover:text-roadpro-yellow transition-colors">
                    +971 2 644 7786
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 text-roadpro-black" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-0.5">
                    {language === "en" ? "Email" : "البريد الإلكتروني"}
                  </h4>
                  <a href="mailto:info@roadshield.ae" className="text-xs text-gray-300 hover:text-roadpro-yellow transition-colors">
                    info@roadshield.ae
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Road Shield Solutions - Traffic Management & Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      {showScrollTop && <button onClick={scrollToTop} className="fixed bottom-6 left-6 z-50 bg-roadpro-yellow text-roadpro-black p-3 rounded-full shadow-lg 
            hover:scale-110 transition-all duration-300 hover:shadow-xl" aria-label="Back to top">
          <ArrowUp size={24} />
        </button>}
    </footer>;
};
export default Footer;