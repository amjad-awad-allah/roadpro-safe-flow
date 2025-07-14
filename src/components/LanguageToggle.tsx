
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: string;
  toggleLanguage: () => void;
  isDesktop?: boolean;
  isMobileMenu?: boolean;
}

const LanguageToggle = ({
  language,
  toggleLanguage,
  isDesktop,
  isMobileMenu
}: LanguageToggleProps) => {
  if (isDesktop) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="bg-white/90 backdrop-blur-sm hover:bg-roadpro-yellow hover:text-roadpro-black flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ml-2"
      >
        <Globe size={16} />
        {language === "en" ? "العربية" : "English"}
      </Button>
    );
  }

  if (isMobileMenu) {
    return (
      <Button 
        onClick={toggleLanguage}
        className="w-full text-left justify-start py-3 mt-2 font-medium transition-all duration-300 text-lg rounded-lg px-4 hover:text-roadpro-yellow hover:bg-gray-100/80"
        variant="ghost"
      >
        <Globe size={20} className="mr-2" />
        {language === "en" ? "العربية" : "English"}
      </Button>
    );
  }

  // Default for mobile navigation toggle
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="bg-white/90 backdrop-blur-sm hover:bg-roadpro-yellow hover:text-roadpro-black shadow-md transition-all hover:scale-105 px-2 py-1"
    >
      <Globe size={16} />
      <span className="sr-only">{language === "en" ? "العربية" : "English"}</span>
    </Button>
  );
};

export default LanguageToggle;
