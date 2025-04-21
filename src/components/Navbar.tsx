import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrafficCone } from "lucide-react";
const navLinks = [{
  href: "#home",
  text: "Home"
}, {
  href: "#services",
  text: "Services"
}, {
  href: "#clients",
  text: "Clients"
}, {
  href: "#advantages",
  text: "Why Us"
}, {
  href: "#sustainability",
  text: "Sustainability"
}, {
  href: "#contact",
  text: "Contact"
}];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight active link by section in viewport
      const offsets = navLinks.map(({
        href
      }) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return {
          href,
          top: Infinity
        };
        return {
          href,
          top: el.getBoundingClientRect().top
        };
      });
      // Find section closest to top but not below halfway viewport
      const active = offsets.find(o => o.top > -window.innerHeight / 2) || offsets[offsets.length - 1];
      setActiveSection(active.href);
    };
    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 300);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins
        ${isScrolled ? "bg-white/90 shadow-lg py-2 backdrop-blur" : "bg-transparent py-4"}
      `} style={{
    transitionProperty: "background,box-shadow,padding"
  }}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <img alt="RoadPro logo" src="/lovable-uploads/0da8014e-7a3b-4ac3-8355-f7f00bf18dbd.png" className="h-14 w-auto rounded-xl shadow-xl bg-white p-2 border border-gray-200 object-cover transition-all duration-300 group-hover:scale-105" style={{
          maxHeight: 64
        }} />
          
          
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className={`font-medium relative transition-colors duration-200
                ${activeSection === link.href ? "text-roadpro-yellow font-semibold after:contents-[''] after:block after:w-full after:h-0.5 after:bg-roadpro-yellow after:rounded-full after:mt-1" : "hover:text-roadpro-yellow"}
              `} style={activeSection === link.href ? {
          borderBottom: "2.5px solid #FFD600",
          paddingBottom: 2
        } : undefined}>
              {link.text}
            </a>)}
        </nav>
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-roadpro-black shadow-md bg-white px-2 py-2 rounded-xl border border-roadpro-lightgray transition-all hover:scale-110 hover:shadow-roadpro-yellow" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 shadow-lg animate-fade-in-up rounded-b-xl border-t border-roadpro-lightgray z-50">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className={`py-2 font-medium transition-colors text-lg
                  ${activeSection === link.href ? "text-roadpro-yellow font-bold underline" : "hover:text-roadpro-yellow"}
                `} onClick={toggleMenu}>
                {link.text}
              </a>)}
            <Button className="w-full mt-2 bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-transform hover:scale-105 hover:shadow-lg hover-glow shadow rounded-lg text-base px-4 py-3 font-poppins glowing-cta">
              Get a Quote
            </Button>
          </div>
        </div>}
    </header>;
};
export default Navbar;