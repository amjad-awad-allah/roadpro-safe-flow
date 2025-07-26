
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import GoogleMap from "@/components/GoogleMap";
import { toast } from "@/hooks/use-toast";
import { LinkesAndPathes } from "@/utils/LinkesAndPathes";
const ContactSection = () => {
  const {
    t,
    language
  } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  // Office location coordinates for Abu Dhabi
  const officeLocation = {
    lat: 24.48475442926147,
    lng: 54.38270741104361
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: language === "en" ? "Message Sent!" : "تم إرسال الرسالة!",
        description: language === "en" ? "Thank you for contacting us. We'll get back to you soon." : "شكراً للتواصل معنا. سنرد عليك قريباً.",
        variant: "default"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
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
  return <section id="contact" ref={sectionRef} className="section-padding bg-roadpro-lightgray opacity-0 translate-y-8">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              {language === "en" ? "Get In Touch" : "تواصل معنا"}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-roadpro-black mb-4 leading-tight md:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="text-roadpro-gray text-lg leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location Card */}
              <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-roadpro-black animate-float" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">{t("contact.location.title")}</h3>
                    <p className="text-roadpro-gray text-sm">
                      {language === "en" ? "Abu Dhabi, Mussafah Industrial Area, M45" : "أبوظبي، المصفح المنطقة الصناعية، M45"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <a href="mailto:info@roadshield.ae" className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 block group hover:text-roadpro-yellow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-roadpro-black animate-float" style={{animationDelay: "0.45s"}} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins group-hover:text-roadpro-yellow transition-colors">{t("contact.email.title")}</h3>
                    <p className="text-roadpro-gray group-hover:text-roadpro-yellow transition-colors text-sm">info@roadshield.ae</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Phone numbers row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile Card */}
              <a href="tel:+971562107006" className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 block group hover:text-roadpro-yellow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-roadpro-black animate-float" style={{animationDelay: "0.15s"}} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins group-hover:text-roadpro-yellow transition-colors">
                      {language === "en" ? "Mobile" : "الجوال"}
                    </h3>
                    <p className="text-roadpro-gray group-hover:text-roadpro-yellow transition-colors text-sm">
                      +971 56 210 7006
                    </p>
                  </div>
                </div>
              </a>

              {/* Landline Card */}
              <a href="tel:+97126447786" className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 block group hover:text-roadpro-yellow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-roadpro-black animate-float" style={{animationDelay: "0.3s"}} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins group-hover:text-roadpro-yellow transition-colors">
                      {language === "en" ? "Landline" : "الهاتف الثابت"}
                    </h3>
                    <p className="text-roadpro-gray group-hover:text-roadpro-yellow transition-colors text-sm">
                      +971 2 644 7786
                    </p>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Google Map */}
            <div className="w-full h-[300px] cursor-pointer" onClick={() => window.open(LinkesAndPathes.googleMapsUrl, "_blank")}>
              <GoogleMap />
            </div>
          </div>

          {/* Contact Form - Send Us a Message */}
          {/* Temporarily hidden - can be restored anytime without affecting design */}
          {/* 
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-roadpro-black mb-6 leading-tight">
              {t("contact.form.title")}
            </h3>
            <form ref={formRef} className="space-y-7" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-roadpro-gray font-poppins">
                    {t("contact.form.name")}
                  </label>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder={language === "en" ? "Enter your name" : "أدخل اسمك"} className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-roadpro-gray font-poppins">
                    {t("contact.form.email")}
                  </label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={language === "en" ? "Enter your email" : "أدخل بريدك الإلكتروني"} className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  {t("contact.form.company")}
                </label>
                <Input name="company" value={formData.company} onChange={handleChange} placeholder={language === "en" ? "Enter your company" : "أدخل اسم شركتك"} className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow" />
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  {t("contact.form.phone")}
                </label>
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder={language === "en" ? "Enter your phone" : "أدخل رقم هاتفك"} className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow" />
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  {t("contact.form.message")}
                </label>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder={language === "en" ? "Tell us about your requirements" : "أخبرنا عن متطلباتك"} className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow focus:ring-2 focus:ring-roadpro-yellow/60 rounded-lg transition-all animate-input-glow" rows={4} required />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full mt-6 bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow
                  transition-all hover:scale-105 shadow-lg rounded-xl text-lg py-6 hover-glow">
                {isSubmitting ? language === "en" ? "Sending..." : "جاري الإرسال..." : t("contact.form.button")}
              </Button>
            </form>
          </div>
          */}
        </div>
      </div>
    </section>;
};
export default ContactSection;
