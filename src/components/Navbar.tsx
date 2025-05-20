import { useState, useEffect, useRef } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const {
    t,
    language,
    setLanguage
  } = useLanguage();
  const scrollTimeoutRef = useRef(null);

  const navLinks = [
    {
      href: "#home",
      text: language === "en" ? "Home" : "الرئيسية"
    },
    {
      href: "#about",
      text: language === "en" ? "About" : "من نحن"
    },
    {
      href: "#services",
      text: language === "en" ? "Services" : "خدماتنا"
    },
    {
      href: "#clients",
      text: language === "en" ? "Our Clients" : "عملاؤنا"
    },
    {
      href: "#advantages",
      text: language === "en" ? "Why Us" : "لماذا نحن"
    },
    {
      href: "#contact",
      text: language === "en" ? "Contact" : "اتصل بنا"
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };

  useEffect(() => {
    // Set initial active section based on URL hash or default to home
    const initialHash = window.location.hash || "#home";
    setActiveSection(initialHash);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const sections = [];
        navLinks.forEach(({ href }) => {
          const id = href.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const topPos = rect.top;
            const height = rect.height;
            const viewportHeight = window.innerHeight;
            const visibleHeight = Math.min(viewportHeight, Math.max(0, rect.bottom) - Math.max(0, rect.top));
            const visiblePercentage = visibleHeight / height;
            sections.push({
              id: href,
              topPos,
              visiblePercentage,
              weight: visiblePercentage * (1 - Math.max(0, topPos) / viewportHeight * 0.8)
            });
          }
        });

        sections.sort((a, b) => b.weight - a.weight);
        if (sections.length > 0 && sections[0].id !== activeSection) {
          setActiveSection(sections[0].id);
          history.replaceState(null, null, sections[0].id);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [navLinks]);

  const handleNavLinkClick = href => {
    setActiveSection(href);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins
        ${isScrolled ? "bg-white/90 shadow-lg py-2 backdrop-blur" : "bg-transparent py-4"}
      `}
      style={{ transitionProperty: "background,box-shadow,padding" }}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <img
            alt="Road Pro logo"
            style={{ maxHeight: 80 }}
            src="/lovable-uploads/35b1bbe8-5996-4036-98b9-683b31f9b17c.png"
            className="h-20 w-auto rounded-xl shadow-xl bg-white p-2 border border-gray-200 transition-all duration-300 group-hover:scale-105 object-contain"
          />
        </a>

        <DesktopMenu
          navLinks={navLinks}
          activeSection={activeSection}
          handleNavLinkClick={handleNavLinkClick}
          language={language}
          toggleLanguage={toggleLanguage}
        />

        <MobileMenu
          navLinks={navLinks}
          activeSection={activeSection}
          handleNavLinkClick={handleNavLinkClick}
          language={language}
          toggleLanguage={toggleLanguage}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
