
import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import GoogleMap from "@/components/GoogleMap";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        sectionRef.current.classList.add("animate-fade-in-contact");
        sectionRef.current.style.opacity = "1";
        sectionRef.current.style.transform = "translateY(0)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 200);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-roadpro-lightgray opacity-0 translate-y-8"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              {language === "en" ? "Get In Touch" : "تواصل معنا"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4 leading-tight">
            {t("contact.title")}
          </h2>
          <p className="text-roadpro-gray text-lg leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-8 font-poppins">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-roadpro-black animate-float" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">{t("contact.location.title")}</h3>
                    <p className="text-roadpro-gray">
                      {language === "en" ? "Al Falah Street, Abu Dhabi, UAE" : "شارع الفلاح، أبوظبي، الإمارات العربية المتحدة"}<br />
                      {language === "en" ? "P.O. Box 12345" : "صندوق بريد 12345"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-roadpro-black animate-float" style={{ animationDelay: "0.15s" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">{t("contact.phone.title")}</h3>
                    <p className="text-roadpro-gray">
                      +971 2 123 4567<br />
                      {language === "en" ? "Customer Support: +971 2 765 4321" : "خدمة العملاء: +971 2 765 4321"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-roadpro-black animate-float" style={{ animationDelay: "0.3s" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">{t("contact.email.title")}</h3>
                    <p className="text-roadpro-gray">
                      info@roadpro-abudhabi.com<br />
                      sales@roadpro-abudhabi.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="w-full h-[300px]">
              <GoogleMap height="300px" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-roadpro-black mb-6 leading-tight">
              {t("contact.form.title")}
            </h3>
            <form className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-roadpro-gray font-poppins">
                    {t("contact.form.name")}
                  </label>
                  <Input
                    placeholder={language === "en" ? "Enter your name" : "أدخل اسمك"}
                    className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-roadpro-gray font-poppins">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    type="email"
                    placeholder={language === "en" ? "Enter your email" : "أدخل بريدك الإلكتروني"}
                    className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  {t("contact.form.company")}
                </label>
                <Input
                  placeholder={language === "en" ? "Enter your company" : "أدخل اسم شركتك"}
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  {t("contact.form.phone")}
                </label>
                <Input
                  placeholder={language === "en" ? "Enter your phone" : "أدخل رقم هاتفك"}
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  placeholder={language === "en" ? "Tell us about your requirements" : "أخبرنا عن متطلباتك"}
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-6 bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow
                  transition-all hover:scale-105 shadow-lg rounded-xl text-lg py-6 hover-glow"
              >
                {t("contact.form.button")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
