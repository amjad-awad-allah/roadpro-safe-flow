
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileText, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Certificate {
  id: number;
  title: string;
  subtitle: { en: string; ar: string };
  issueDate: string;
  expiryDate: string;
  registrationNumber: string;
  scope: { en: string[]; ar: string[] };
  pdfLink: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        boxShadow: "0 25px 50px rgba(255, 214, 0, 0.25)"
      }}
      className="group flex-shrink-0 w-80"
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden group-hover:border-roadpro-yellow/20 group-hover:border">
        <CardContent className="p-8 h-full flex flex-col relative">
          {/* Background gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-roadpro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-roadpro-yellow/20 to-roadpro-yellow/10 rounded-xl group-hover:from-roadpro-yellow/30 group-hover:to-roadpro-yellow/20 transition-all duration-500">
                <Award className="h-7 w-7 text-roadpro-yellow" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-roadpro-black mb-1 group-hover:text-roadpro-black transition-colors">
                  {certificate.title}
                </h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">
                  {certificate.subtitle[language]}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-500">
                  {language === "en" ? "Issue Date:" : "تاريخ الإصدار:"}
                </span>
                <span className="text-sm font-semibold text-roadpro-black">
                  {certificate.issueDate}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-500">
                  {language === "en" ? "Expiry Date:" : "تاريخ الانتهاء:"}
                </span>
                <span className="text-sm font-semibold text-roadpro-black">
                  {certificate.expiryDate}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-gray-500">
                  {language === "en" ? "Reg. No:" : "رقم التسجيل:"}
                </span>
                <span className="text-sm font-semibold text-roadpro-black">
                  {certificate.registrationNumber}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h5 className="text-sm font-bold text-roadpro-black mb-3">
                {language === "en" ? "Scope:" : "النطاق:"}
              </h5>
              <ul className="text-xs text-gray-600 space-y-2">
                {certificate.scope[language].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-roadpro-yellow rounded-full mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <motion.a
                href={certificate.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full justify-center bg-gradient-to-r from-roadpro-yellow to-roadpro-yellow/90 text-roadpro-black px-6 py-4 rounded-xl font-semibold hover:from-roadpro-yellow/90 hover:to-roadpro-yellow transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span>{language === "en" ? "View Certificate" : "عرض الشهادة"}</span>
                <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
