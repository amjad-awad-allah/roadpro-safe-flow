
import { MapPin, Phone, Mail, TrafficCone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-roadpro-lightgray">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black font-poppins">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4 font-poppins">
            Contact Information
          </h2>
          <p className="text-roadpro-gray text-lg font-poppins">
            Reach out for inquiries or to discuss your traffic management needs. We respond quickly!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact details and map */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white p-8 rounded-2xl mb-8 shadow-xl border border-roadpro-lightgray">
              <div className="space-y-8 font-poppins">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-roadpro-black animate-float" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">Our Location</h3>
                    <p className="text-roadpro-gray">
                      Al Falah Street, Abu Dhabi, UAE<br />
                      P.O. Box 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-roadpro-black animate-float" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">Phone</h3>
                    <p className="text-roadpro-gray">
                      +971 2 123 4567<br />
                      Customer Support: +971 2 765 4321
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0 shadow-lg animate-soft-pulse group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-roadpro-black animate-float" style={{ animationDelay: "0.8s" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1 font-poppins">Email</h3>
                    <p className="text-roadpro-gray">
                      info@roadpro-abudhabi.com<br />
                      sales@roadpro-abudhabi.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[240px] md:h-[300px] hover:shadow-2xl transition-shadow duration-300 bg-white border border-roadpro-lightgray flex items-center justify-center">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up hover:shadow-2xl transition-all duration-300 font-poppins border border-roadpro-lightgray flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-roadpro-black mb-6 font-poppins">Send Us a Message</h3>
            <form className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-roadpro-gray font-poppins">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-roadpro-gray font-poppins">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  Company Name
                </label>
                <Input
                  placeholder="Enter your company"
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  Phone Number
                </label>
                <Input
                  placeholder="Enter your phone"
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-roadpro-gray font-poppins">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your requirements"
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow rounded-lg transition-all"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-4 bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-transform hover:scale-105 hover:shadow-lg hover-glow shadow rounded-xl text-lg py-6 font-poppins"
              >
                Get a Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
