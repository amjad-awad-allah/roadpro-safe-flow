
import { useState } from "react";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("en");
  
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
    // In a full implementation, this would trigger language context changes
  };
  
  return (
    <div className="fixed top-24 right-6 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="bg-white/80 backdrop-blur-sm hover:bg-white"
      >
        {language === "en" ? "العربية" : "English"}
      </Button>
    </div>
  );
};

export default LanguageToggle;
