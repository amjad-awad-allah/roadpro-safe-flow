
import { LinkesAndPathes, CertificateLinks } from "@/utils/LinkesAndPathes";

export interface Project {
  id: number;
  title: { en: string; ar: string };
  preview: { en: string; ar: string };
  category: { en: string; ar: string };
  location: { en: string; ar: string };
  duration: { en: string; ar: string };
  teamSize: { en: string; ar: string };
  technologies: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  partnerLogo: string;
  projectDate: { month: { en: string; ar: string }; year: string };
  achievements: Array<{ en: string; ar: string }>;
}

export interface Certificate {
  id: number;
  title: string;
  subtitle: { en: string; ar: string };
  issueDate: string;
  expiryDate: string;
  registrationNumber: string;
  scope: { en: string[]; ar: string[] };
  pdfLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "Abu Dhabi Metro Construction Traffic Management",
      ar: "إدارة المرور لمشروع مترو أبوظبي"
    },
    preview: {
      en: "Comprehensive traffic diversion and safety management for major metro construction phases",
      ar: "إدارة شاملة لتحويل المرور والسلامة لمراحل إنشاء مترو رئيسي"
    },
    category: {
      en: "Infrastructure Development",
      ar: "تطوير البنية التحتية"
    },
    location: {
      en: "Abu Dhabi, UAE",
      ar: "أبوظبي، الإمارات"
    },
    duration: {
      en: "24 months",
      ar: "24 شهر"
    },
    teamSize: {
      en: "15 traffic specialists",
      ar: "15 متخصص مرور"
    },
    technologies: {
      en: "Smart Traffic Signals, TMA Systems, ITC Compliance Monitoring",
      ar: "إشارات المرور الذكية، أنظمة TMA، مراقبة الامتثال لمعايير ITC"
    },
    description: {
      en: "Successfully managed complex traffic operations during the construction of Abu Dhabi's metro system. Our comprehensive Traffic Management Plan (TMP) covered 12 major intersections, ensuring minimal disruption to daily commuters while maintaining the highest safety standards. The project included 24/7 monitoring systems, emergency response protocols, and seamless coordination with Abu Dhabi Municipality, Police, and construction contractors. We implemented adaptive traffic signal control, deployed Truck Mounted Attenuators (TMA), and created alternative route plans that maintained traffic flow efficiency throughout the construction period.",
      ar: "أدرنا بنجاح عمليات مرور معقدة أثناء إنشاء نظام مترو أبوظبي. غطت خطة إدارة المرور الشاملة 12 تقاطعاً رئيسياً، مما ضمن الحد الأدنى من الاضطراب للمسافرين اليوميين مع الحفاظ على أعلى معايير السلامة. شمل المشروع أنظمة مراقبة على مدار الساعة وبروتوكولات الاستجابة للطوارئ والتنسيق السلس مع بلدية أبوظبي والشرطة ومقاولي الإنشاء."
    },
    image: LinkesAndPathes.clientLogo1,
    partnerLogo: LinkesAndPathes.clientLogo1,
    projectDate: {
      month: { en: "April", ar: "أبريل" },
      year: "2025"
    },
    achievements: [
      {
        en: "Zero major traffic accidents during 24-month construction period",
        ar: "صفر حوادث مرور كبيرة خلال فترة الإنشاء البالغة 24 شهراً"
      },
      {
        en: "95% traffic flow efficiency maintained throughout construction",
        ar: "الحفاظ على 95٪ من كفاءة تدفق المرور طوال فترة الإنشاء"
      },
      {
        en: "Full ITC compliance certification achieved for all phases",
        ar: "تم الحصول على شهادة الامتثال الكاملة لمعايير ITC لجميع المراحل"
      },
      {
        en: "Emergency response time reduced by 30% through optimized routing",
        ar: "تم تقليل وقت الاستجابة للطوارئ بنسبة 30٪ من خلال التوجيه المحسن"
      }
    ]
  },
  {
    id: 2,
    title: {
      en: "Corniche Road Expansion Safety Management",
      ar: "إدارة السلامة لتوسعة طريق الكورنيش"
    },
    preview: {
      en: "Advanced lane closure and traffic redirection for coastal highway expansion project",
      ar: "إغلاق متقدم للحارات وإعادة توجيه المرور لمشروع توسعة الطريق الساحلي"
    },
    category: {
      en: "Road Construction",
      ar: "إنشاء الطرق"
    },
    location: {
      en: "Abu Dhabi Corniche",
      ar: "كورنيش أبوظبي"
    },
    duration: {
      en: "18 months",
      ar: "18 شهر"
    },
    teamSize: {
      en: "12 safety specialists",
      ar: "12 متخصص سلامة"
    },
    technologies: {
      en: "Variable Message Signs, Truck Mounted Attenuators, Smart Barriers",
      ar: "لافتات الرسائل المتغيرة، مخففات الصدمات المحمولة على الشاحنات، الحواجز الذكية"
    },
    description: {
      en: "Orchestrated comprehensive traffic operations during the expansion of Abu Dhabi's iconic Corniche Road. Our innovative approach included implementing intelligent traffic light systems, deploying state-of-the-art Truck Mounted Attenuators (TMA), and creating dynamic alternative route plans. The project required meticulous coordination with tourism authorities to minimize impact on recreational activities while ensuring absolute construction worker safety. We utilized advanced Variable Message Signs (VMS) and smart barrier systems to maintain optimal traffic flow during peak tourist seasons.",
      ar: "نظمنا عمليات مرور شاملة أثناء توسعة طريق كورنيش أبوظبي الشهير. شمل نهجنا المبتكر تنفيذ أنظمة إشارات مرور ذكية ونشر مخففات صدمات متطورة محمولة على الشاحنات وإنشاء خطط طرق بديلة ديناميكية. تطلب المشروع تنسيقاً دقيقاً مع سلطات السياحة لتقليل التأثير على الأنشطة الترفيهية مع ضمان السلامة المطلقة لعمال الإنشاء."
    },
    image: LinkesAndPathes.clientLogo2,
    partnerLogo: LinkesAndPathes.clientLogo2,
    projectDate: {
      month: { en: "September", ar: "سبتمبر" },
      year: "2024"
    },
    achievements: [
      {
        en: "Tourist access maintained throughout 18-month construction period",
        ar: "تم الحفاظ على وصول السياح طوال فترة الإنشاء البالغة 18 شهراً"
      },
      {
        en: "30% reduction in average travel time through optimized routing",
        ar: "تقليل 30٪ في متوسط وقت السفر من خلال التوجيه المحسن"
      },
      {
        en: "100% compliance with environmental regulations",
        ar: "امتثال 100٪ للوائح البيئية"
      },
      {
        en: "Award for Outstanding Traffic Management Excellence",
        ar: "جائزة التميز المتفوق في إدارة المرور"
      }
    ]
  },
  {
    id: 3,
    title: {
      en: "Formula 1 Abu Dhabi Grand Prix Traffic Control",
      ar: "التحكم المروري لجائزة أبوظبي الكبرى للفورمولا 1"
    },
    preview: {
      en: "Large-scale event traffic management for prestigious international racing championship",
      ar: "إدارة المرور واسعة النطاق لبطولة السباق الدولية المرموقة"
    },
    category: {
      en: "Event Management",
      ar: "إدارة الفعاليات"
    },
    location: {
      en: "Yas Island, Abu Dhabi",
      ar: "جزيرة ياس، أبوظبي"
    },
    duration: {
      en: "6 weeks intensive planning + event execution",
      ar: "6 أسابيع تخطيط مكثف + تنفيذ الحدث"
    },
    teamSize: {
      en: "25 event specialists",
      ar: "25 متخصص فعاليات"
    },
    technologies: {
      en: "Dynamic Traffic Control, Emergency Response Systems, Crowd Management Technology",
      ar: "التحكم الديناميكي في المرور، أنظمة الاستجابة للطوارئ، تقنيات إدارة الحشود"
    },
    description: {
      en: "Executed flawless traffic management for one of the world's most prestigious racing events. Our expert team handled the intricate logistics of managing over 50,000 spectators' movement while maintaining critical emergency access routes. We implemented cutting-edge dynamic traffic control systems, coordinated seamlessly with international security teams, and ensured perfect integration with public transportation systems. The project included real-time crowd monitoring, predictive traffic flow analysis, and adaptive signal management to handle the massive influx and exodus of race attendees.",
      ar: "نفذنا إدارة مرور مثالية لواحد من أشهر أحداث السباق في العالم. تعامل فريق الخبراء لدينا مع اللوجستيات المعقدة لإدارة حركة أكثر من 50,000 متفرج مع الحفاظ على طرق الوصول الحيوية للطوارئ. نفذنا أنظمة تحكم مرور ديناميكية متطورة ونسقنا بسلاسة مع فرق الأمن الدولية وضمنا التكامل المثالي مع أنظمة النقل العام."
    },
    image: LinkesAndPathes.clientLogo3,
    partnerLogo: LinkesAndPathes.clientLogo3,
    projectDate: {
      month: { en: "November", ar: "نوفمبر" },
      year: "2024"
    },
    achievements: [
      {
        en: "Zero traffic incidents during race weekend with 50,000+ attendees",
        ar: "صفر حوادث مرور خلال عطلة نهاية أسبوع السباق مع أكثر من 50,000 حاضر"
      },
      {
        en: "Average evacuation time reduced by 40% compared to previous years",
        ar: "متوسط وقت الإخلاء انخفض بنسبة 40٪ مقارنة بالسنوات السابقة"
      },
      {
        en: "International safety standards exceeded by 150%",
        ar: "تم تجاوز معايير السلامة الدولية بنسبة 150٪"
      },
      {
        en: "Recognition from FIA for Outstanding Traffic Management",
        ar: "اعتراف من الاتحاد الدولي للسيارات للإدارة المرورية المتميزة"
      }
    ]
  },
  {
    id: 4,
    title: {
      en: "Smart City Infrastructure Integration",
      ar: "تكامل البنية التحتية للمدينة الذكية"
    },
    preview: {
      en: "Next-generation traffic technology implementation for Abu Dhabi's smart city vision",
      ar: "تنفيذ تقنيات المرور من الجيل التالي لرؤية أبوظبي كمدينة ذكية"
    },
    category: {
      en: "Smart Technology",
      ar: "التكنولوجيا الذكية"
    },
    location: {
      en: "Multiple districts, Abu Dhabi",
      ar: "مناطق متعددة، أبوظبي"
    },
    duration: {
      en: "12 months ongoing",
      ar: "12 شهر مستمر"
    },
    teamSize: {
      en: "20 technology specialists",
      ar: "20 متخصص تكنولوجيا"
    },
    technologies: {
      en: "IoT Sensors, AI Traffic Analytics, Cloud-based Control Systems",
      ar: "أجهزة استشعار إنترنت الأشياء، تحليلات المرور بالذكاء الاصطناعي، أنظمة التحكم السحابية"
    },
    description: {
      en: "Pioneered the integration of next-generation IoT-enabled traffic management systems across Abu Dhabi's key districts. Our revolutionary solution encompasses real-time traffic monitoring, AI-powered adaptive signal control, and predictive analytics for comprehensive congestion management. The project directly supports Abu Dhabi's ambitious vision of becoming a global leading smart city by 2030, featuring sustainable and highly efficient transportation solutions. We deployed thousands of smart sensors, implemented machine learning algorithms for traffic prediction, and created a centralized command center for unified traffic management.",
      ar: "رائدنا في تكامل أنظمة إدارة المرور المدعومة بإنترنت الأشياء من الجيل التالي عبر المناطق الرئيسية في أبوظبي. يشمل حلولنا الثوري مراقبة المرور في الوقت الفعلي والتحكم التكيفي في الإشارات المدعوم بالذكاء الاصطناعي والتحليلات التنبؤية لإدارة الازدحام الشاملة. يدعم المشروع مباشرة رؤية أبوظبي الطموحة لتصبح مدينة ذكية رائدة عالمياً بحلول 2030."
    },
    image: LinkesAndPathes.clientLogo4,
    partnerLogo: LinkesAndPathes.clientLogo4,
    projectDate: {
      month: { en: "March", ar: "مارس" },
      year: "2025"
    },
    achievements: [
      {
        en: "25% improvement in overall traffic flow efficiency across all monitored areas",
        ar: "تحسن 25٪ في كفاءة تدفق المرور الإجمالية عبر جميع المناطق المراقبة"
      },
      {
        en: "Real-time monitoring system deployed across 50+ intersections",
        ar: "تم نشر نظام مراقبة في الوقت الفعلي عبر أكثر من 50 تقاطع"
      },
      {
        en: "Carbon footprint reduced by 15% through optimized traffic patterns",
        ar: "انخفضت البصمة الكربونية بنسبة 15٪ من خلال أنماط المرور المحسنة"
      },
      {
        en: "First smart city traffic system to achieve full AI integration in the region",
        ar: "أول نظام مرور للمدينة الذكية يحقق التكامل الكامل للذكاء الاصطناعي في المنطقة"
      }
    ]
  },
  {
    id: 5,
    title: {
      en: "Traffic Diversions for Landscape Maintenance Project",
      ar: "تحويلات المرور لمشروع صيانة المناظر الطبيعية"
    },
    preview: {
      en: "Strategic traffic management for high-profile landscape maintenance in Saadiyat Island",
      ar: "إدارة المرور الاستراتيجية لصيانة المناظر الطبيعية في جزيرة السعديات"
    },
    category: {
      en: "Road Diversion",
      ar: "تحويل الطرق"
    },
    location: {
      en: "Saadiyat Island, Abu Dhabi",
      ar: "جزيرة السعديات، أبوظبي"
    },
    duration: {
      en: "2 months",
      ar: "شهرين"
    },
    teamSize: {
      en: "8 traffic specialists",
      ar: "8 متخصصين مرور"
    },
    technologies: {
      en: "TMA Systems, Advanced Signage, Real-time Safety Control",
      ar: "أنظمة TMA، لافتات متقدمة، التحكم الأمني في الوقت الفعلي"
    },
    description: {
      en: "Successfully executed comprehensive traffic diversions for critical landscape maintenance operations in Saadiyat Island's high-profile cultural district. Our specialized team deployed Truck Mounted Attenuators (TMA), implemented dynamic signage systems, and provided continuous on-site safety control in full collaboration with ITC authorities. The project required meticulous planning to maintain access to major cultural institutions while ensuring worker safety and minimal disruption to residents and tourists in this prestigious area.",
      ar: "نفذنا بنجاح تحويلات مرور شاملة لعمليات صيانة المناظر الطبيعية الحيوية في المنطقة الثقافية المرموقة بجزيرة السعديات. نشر فريقنا المتخصص مخففات الصدمات المحمولة على الشاحنات ونفذ أنظمة لافتات ديناميكية ووفر تحكماً أمنياً مستمراً في الموقع بالتعاون الكامل مع سلطات ITC."
    },
    image: LinkesAndPathes.clientLogo5,
    partnerLogo: LinkesAndPathes.clientLogo5,
    projectDate: {
      month: { en: "April", ar: "أبريل" },
      year: "2025"
    },
    achievements: [
      {
        en: "Zero disruption to major cultural institutions during maintenance period",
        ar: "صفر اضطراب للمؤسسات الثقافية الكبرى خلال فترة الصيانة"
      },
      {
        en: "100% ITC compliance maintained throughout all operations",
        ar: "تم الحفاظ على امتثال 100٪ لمعايير ITC طوال جميع العمليات"
      },
      {
        en: "Tourist access preserved with alternative routing solutions",
        ar: "تم الحفاظ على وصول السياح من خلال حلول التوجيه البديلة"
      },
      {
        en: "Advanced TMA deployment reduced work zone incidents by 95%",
        ar: "نشر TMA المتقدم قلل حوادث منطقة العمل بنسبة 95٪"
      }
    ]
  },
  {
    id: 6,
    title: {
      en: "AL FARIS Heavy Load Movement - KIZAD to Ruwais",
      ar: "حركة الأحمال الثقيلة AL FARIS - من كيزاد إلى الرويس"
    },
    preview: {
      en: "First-of-its-kind reverse-direction highway diversion for oversized cargo transport",
      ar: "أول تحويل طريق سريع عكسي الاتجاه لنقل البضائع كبيرة الحجم"
    },
    category: {
      en: "Logistics Transport",
      ar: "النقل اللوجستي"
    },
    location: {
      en: "KIZAD to Ruwais Highway",
      ar: "طريق كيزاد - الرويس السريع"
    },
    duration: {
      en: "2 weeks intensive planning + execution",
      ar: "أسبوعين تخطيط مكثف + تنفيذ"
    },
    teamSize: {
      en: "18 logistics specialists",
      ar: "18 متخصص لوجستي"
    },
    technologies: {
      en: "Real-time GPS Monitoring, Advanced Route Planning, Highway Closure Systems",
      ar: "مراقبة GPS في الوقت الفعلي، تخطيط الطرق المتقدم، أنظمة إغلاق الطرق السريعة"
    },
    description: {
      en: "Pioneered the Emirate's first reverse-direction highway diversion for AL FARIS's oversized cargo movement from KIZAD Industrial Zone to Ruwais. This groundbreaking operation required unprecedented coordination with multiple authorities, advanced safety protocols, and real-time monitoring systems. Our expert team developed innovative traffic management solutions, implemented comprehensive safety measures, and executed flawless logistics coordination that set new standards for heavy transport operations in the UAE.",
      ar: "رائدنا في أول تحويل طريق سريع عكسي الاتجاه في الإمارة لحركة البضائع كبيرة الحجم لشركة AL FARIS من المنطقة الصناعية كيزاد إلى الرويس. تطلبت هذه العملية الرائدة تنسيقاً غير مسبوق مع سلطات متعددة وبروتوكولات أمان متقدمة وأنظمة مراقبة في الوقت الفعلي."
    },
    image: LinkesAndPathes.clientLogo6,
    partnerLogo: LinkesAndPathes.clientLogo6,
    projectDate: {
      month: { en: "April", ar: "أبريل" },
      year: "2025"
    },
    achievements: [
      {
        en: "First successful reverse-direction highway operation in the UAE",
        ar: "أول عملية طريق سريع عكسية الاتجاه ناجحة في الإمارات"
      },
      {
        en: "Zero safety incidents during complex oversized transport",
        ar: "صفر حوادث أمان خلال النقل المعقد كبير الحجم"
      },
      {
        en: "Real-time monitoring reduced transport time by 40%",
        ar: "المراقبة في الوقت الفعلي قللت وقت النقل بنسبة 40٪"
      },
      {
        en: "Established new protocols for future heavy transport operations",
        ar: "وضع بروتوكولات جديدة لعمليات النقل الثقيل المستقبلية"
      }
    ]
  },
  {
    id: 7,
    title: {
      en: "KABRI LLC Night Construction Support",
      ar: "دعم الإنشاءات الليلية KABRI LLC"
    },
    preview: {
      en: "24/7 TMA deployment and traffic teams for critical nighttime infrastructure projects",
      ar: "نشر TMA ومداف مرور على مدار الساعة لمشاريع البنية التحتية الليلية الحيوية"
    },
    category: {
      en: "Night Operations",
      ar: "العمليات الليلية"
    },
    location: {
      en: "Multiple sites, Abu Dhabi",
      ar: "مواقع متعددة، أبوظبي"
    },
    duration: {
      en: "Ongoing since March 2025",
      ar: "مستمر منذ مارس 2025"
    },
    teamSize: {
      en: "12 night shift specialists",
      ar: "12 متخصص نوبة ليلية"
    },
    technologies: {
      en: "High-Visibility TMA Units, LED Warning Systems, Night Vision Safety Equipment",
      ar: "وحدات TMA عالية الرؤية، أنظمة تحذير LED، معدات السلامة للرؤية الليلية"
    },
    description: {
      en: "Providing comprehensive nighttime traffic support for KABRI LLC's critical infrastructure projects through specialized TMA vehicle deployment and highly trained traffic management teams. Our 24/7 operations ensure maximum visibility and worker safety during complex nighttime construction activities. The project features advanced LED warning systems, strategic positioning of safety equipment, and continuous coordination with construction crews to maintain optimal safety standards throughout extended night work periods.",
      ar: "نوفر دعماً مرورياً ليلياً شاملاً لمشاريع البنية التحتية الحيوية لشركة KABRI LLC من خلال نشر مركبات TMA المتخصصة وفرق إدارة المرور المدربة تدريباً عالياً. تضمن عملياتنا على مدار الساعة أقصى رؤية وسلامة للعمال أثناء أنشطة الإنشاء الليلية المعقدة."
    },
    image: LinkesAndPathes.clientLogo7,
    partnerLogo: LinkesAndPathes.clientLogo7,
    projectDate: {
      month: { en: "March", ar: "مارس" },
      year: "2025"
    },
    achievements: [
      {
        en: "100% safety record maintained across all night operations",
        ar: "تم الحفاظ على سجل أمان 100٪ عبر جميع العمليات الليلية"
      },
      {
        en: "Advanced LED systems improved visibility by 300% during night work",
        ar: "أنظمة LED المتقدمة حسنت الرؤية بنسبة 300٪ أثناء العمل الليلي"
      },
      {
        en: "Zero work zone incidents reported since project inception",
        ar: "صفر حوادث منطقة عمل تم الإبلاغ عنها منذ بداية المشروع"
      },
      {
        en: "24/7 response capability established for emergency situations",
        ar: "تم إنشاء قدرة استجابة على مدار الساعة للحالات الطارئة"
      }
    ]
  },
  {
    id: 8,
    title: {
      en: "AL NUBANI Ongoing Traffic Support",
      ar: "الدعم المروري المستمر AL NUBANI"
    },
    preview: {
      en: "Continuous traffic management for dynamic construction zones under flexible long-term agreement",
      ar: "إدارة مرور مستمرة لمناطق الإنشاء الديناميكية تحت اتفاقية مرنة طويلة الأمد"
    },
    category: {
      en: "Site Operations",
      ar: "عمليات الموقع"
    },
    location: {
      en: "Multiple construction sites, Abu Dhabi",
      ar: "مواقع إنشاء متعددة، أبوظبي"
    },
    duration: {
      en: "Long-term ongoing since January 2025",
      ar: "طويل الأمد مستمر منذ يناير 2025"
    },
    teamSize: {
      en: "15 flexible deployment specialists",
      ar: "15 متخصص نشر مرن"
    },
    technologies: {
      en: "Mobile TMA Units, Flexible Deployment Systems, Dynamic Site Management",
      ar: "وحدات TMA متنقلة، أنظمة النشر المرنة، إدارة الموقع الديناميكية"
    },
    description: {
      en: "Delivering comprehensive and adaptive traffic support for AL NUBANI's dynamic construction operations through our innovative flexible deployment model. This long-term partnership involves daily assessment and strategic positioning of TMA vehicles and trained traffic crews to match the evolving needs of multiple active construction zones. Our responsive approach ensures continuous safety coverage while adapting to changing project requirements and site conditions.",
      ar: "نقدم دعماً مرورياً شاملاً وتكيفياً لعمليات الإنشاء الديناميكية لشركة AL NUBANI من خلال نموذج النشر المرن المبتكر. تتضمن هذه الشراكة طويلة الأمد تقييماً يومياً وتموضعاً استراتيجياً لمركبات TMA وطاقم المرور المدرب لمطابقة الاحتياجات المتطورة لمناطق الإنشاء النشطة المتعددة."
    },
    image: LinkesAndPathes.clientLogo8,
    partnerLogo: LinkesAndPathes.clientLogo8,
    projectDate: {
      month: { en: "January", ar: "يناير" },
      year: "2025"
    },
    achievements: [
      {
        en: "Flexible deployment model increased operational efficiency by 45%",
        ar: "نموذج النشر المرن زاد الكفاءة التشغيلية بنسبة 45٪"
      },
      {
        en: "Multi-site coordination maintains consistent safety standards",
        ar: "التنسيق متعدد المواقع يحافظ على معايير السلامة المتسقة"
      },
      {
        en: "Daily assessment protocol ensures optimal resource allocation",
        ar: "بروتوكول التقييم اليومي يضمن التخصيص الأمثل للموارد"
      },
      {
        en: "Long-term partnership model reduces project costs by 30%",
        ar: "نموذج الشراكة طويلة الأمد يقلل تكاليف المشروع بنسبة 30٪"
      }
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: {
      en: "Quality Management System",
      ar: "نظام إدارة الجودة"
    },
    issueDate: "03 July 2025",
    expiryDate: "02 July 2028",
    registrationNumber: "FQC/Q/3197/AE",
    scope: {
      en: [
        "Road Maintenance",
        "Main Roads, Streets and Related Works Contracting",
        "Onshore and Offshore Oil and Gas Fields and Facilities Services",
        "Road Painting and Other Marking Works",
        "Roads and Bridges Management and Operation"
      ],
      ar: [
        "صيانة الطرق",
        "مقاولات الطرق الرئيسية والشوارع والأعمال ذات الصلة",
        "خدمات حقول النفط والغاز البرية والبحرية والمرافق",
        "أعمال طلاء الطرق وأعمال العلامات الأخرى",
        "إدارة وتشغيل الطرق والجسور"
      ]
    },
    pdfLink: CertificateLinks.iso9001
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    subtitle: {
      en: "Environmental Management System",
      ar: "نظام الإدارة البيئية"
    },
    issueDate: "03 July 2025",
    expiryDate: "02 July 2028",
    registrationNumber: "FQC/Q/3198/AE",
    scope: {
      en: [
        "Road Maintenance",
        "Roads & Bridges Management and Operation",
        "Oil & Gas Fields and Facilities Services",
        "Road Markings and Signage"
      ],
      ar: [
        "صيانة الطرق",
        "إدارة وتشغيل الطرق والجسور",
        "خدمات حقول النفط والغاز والمرافق",
        "علامات الطرق واللافتات"
      ]
    },
    pdfLink: CertificateLinks.iso14001
  },
  {
    id: 3,
    title: "ISO 45001:2018",
    subtitle: {
      en: "Occupational Health & Safety Management System",
      ar: "نظام إدارة الصحة والسلامة المهنية"
    },
    issueDate: "03 July 2025",
    expiryDate: "02 July 2028",
    registrationNumber: "FQC/Q/3199/AE",
    scope: {
      en: [
        "Road Maintenance",
        "Main Roads and Related Works",
        "Health and Safety Services in Oil & Gas Fields",
        "Bridge Management & Road Painting"
      ],
      ar: [
        "صيانة الطرق",
        "الطرق الرئيسية والأعمال ذات الصلة",
        "خدمات الصحة والسلامة في حقول النفط والغاز",
        "إدارة الجسور وطلاء الطرق"
      ]
    },
    pdfLink: CertificateLinks.iso45001
  },
  {
    id: 4,
    title: "ISO 41001:2018",
    subtitle: {
      en: "Facility Management System",
      ar: "نظام إدارة المرافق"
    },
    issueDate: "03 July 2025",
    expiryDate: "02 July 2028",
    registrationNumber: "FQC/Q/3200/AE",
    scope: {
      en: [
        "Operation and Maintenance of Infrastructure Facilities",
        "Facility Services for Roads, Bridges, and Oil/Gas Fields"
      ],
      ar: [
        "تشغيل وصيانة مرافق البنية التحتية",
        "خدمات المرافق للطرق والجسور وحقول النفط والغاز"
      ]
    },
    pdfLink: CertificateLinks.iso41001
  }
];
