
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };
  
  return (
    <div className="fixed top-24 right-6 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="bg-white/90 backdrop-blur-sm hover:bg-white flex items-center gap-2 shadow-md"
      >
        <Globe size={16} />
        {language === "en" ? "العربية" : "English"}
      </Button>
    </div>
  );
};

export default LanguageToggle;
