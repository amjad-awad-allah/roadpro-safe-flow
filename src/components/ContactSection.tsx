
import { MapPin, Phone, Mail, TrafficCone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black font-poppins">
              Get In Touch | تواصل معنا
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4 font-poppins">
            Contact Information | معلومات الاتصال
          </h2>
          <p className="text-roadpro-gray text-lg font-poppins">
            Reach out for inquiries, quotes, or to discuss your traffic management needs. لا تتردد في التواصل معنا لأي استفسار أو عرض سعر.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact details and animated map icon */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-roadpro-lightgray p-8 rounded-2xl mb-8 shadow-md">
              <div className="space-y-6 font-poppins">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow">
                    <MapPin className="w-6 h-6 text-roadpro-black animate-float" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">Our Location | موقعنا</h3>
                    <p className="text-roadpro-gray">
                      Al Falah Street, Abu Dhabi, UAE<br />
                      P.O. Box 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow">
                    <Phone className="w-6 h-6 text-roadpro-black animate-float" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">Phone | الهاتف</h3>
                    <p className="text-roadpro-gray">
                      Main Office: +971 2 123 4567<br />
                      Customer Support: +971 2 765 4321
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow">
                    <Mail className="w-6 h-6 text-roadpro-black animate-float" style={{ animationDelay: '0.8s' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">Email | البريد الإلكتروني</h3>
                    <p className="text-roadpro-gray">
                      General: info@roadpro-abudhabi.com<br />
                      Sales: sales@roadpro-abudhabi.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Responsive map, always visible and never covered */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[240px] md:h-[300px] hover:shadow-2xl transition-shadow duration-300 bg-white border border-roadpro-lightgray flex items-center justify-center">
              {/* Example: OpenStreetMap iframe for mobile-friendly map visual */}
              <iframe
                title="RoadPro Abu Dhabi Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=54.3691%2C24.4672%2C54.3816%2C24.4802&amp;layer=mapnik"
                className="w-full h-full"
                style={{ border: 0, minHeight: 180 }}
                allowFullScreen
              />
            </div>
          </div>
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up hover:shadow-2xl transition-all duration-300 font-poppins" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-roadpro-black mb-6 font-poppins">Send Us a Message | أرسل رسالة</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-roadpro-gray font-poppins">Full Name | الاسم الكامل</label>
                  <Input 
                    placeholder="Enter your name | أدخل الاسم"
                    className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-roadpro-gray font-poppins">Email Address | البريد الإلكتروني</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email | أدخل البريد الإلكتروني" 
                    className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">Company Name | جهة العمل</label>
                <Input 
                  placeholder="Enter your company | جهة العمل"
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">Phone Number | رقم الهاتف</label>
                <Input 
                  placeholder="Enter your phone | رقم الهاتف"
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">Message | الرسالة</label>
                <Textarea 
                  placeholder="Tell us about your requirements | تفاصيل الطلب"
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full mt-4 bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-transform hover:scale-105 hover:shadow-lg hover-glow shadow rounded-xl text-lg py-6 font-poppins">
                Contact Us Now | تواصل الآن
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
