
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    
    // Show toast notification
    toast({
      title: language === "en" ? "تم تغيير اللغة" : "Language Changed",
      description: language === "en" ? "تم تبديل اللغة إلى العربية" : "Switched to English",
      duration: 3000,
    });
    
    // Update document direction
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };
  
  // Set initial document direction and lang on component mount
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);
  
  return (
    <div className="fixed top-24 right-6 z-50" style={language === "ar" ? { left: "24px", right: "auto" } : {}}>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="bg-white/90 backdrop-blur-sm hover:bg-white flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <Globe size={16} />
        {language === "en" ? "العربية" : "English"}
      </Button>
    </div>
  );
};

export default LanguageToggle;
