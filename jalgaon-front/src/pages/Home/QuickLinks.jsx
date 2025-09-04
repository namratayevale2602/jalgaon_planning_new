import { motion } from "framer-motion";
import { FileText, Users, Award } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const QuickLinks = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Quick Links",
      mr: "द्रुत दुवे",
    },
    quickLinksData: [
      {
        title: {
          en: "RTI Portal",
          mr: "माहिती अधिकार पोर्टल",
        },
        icon: "FileText",
        description: {
          en: "Right to Information applications and status",
          mr: "माहिती अधिकार अर्ज आणि स्थिती",
        },
        link: "/rti-portal",
      },
      {
        title: {
          en: "Committees",
          mr: "समित्या",
        },
        icon: "Users",
        description: {
          en: "List of committees and members",
          mr: "समित्या आणि सदस्यांची यादी",
        },
        link: "/planningcommittee",
      },
      {
        title: {
          en: "Downloads",
          mr: "डाउनलोड",
        },
        icon: "FileText",
        description: {
          en: "Forms, reports and circulars",
          mr: "फॉर्म, अहवाल आणि परिपत्रके",
        },
        link: "/downloads",
      },
      {
        title: {
          en: "Reports",
          mr: "योजना",
        },
        icon: "Award",
        description: {
          en: "Current reports",
          mr: "अहवाल",
        },
        link: "/reports",
      },
    ],
  };

  const iconComponents = {
    FileText,
    Users,
    Award,
  };

  const getText = (item, isLink = false) => {
    if (isLink) {
      return {
        title: item.title[language] || item.title.en,
        description: item.description[language] || item.description.en,
      };
    }
    return item[language] || item.en;
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {getText(content.title)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.quickLinksData.map((link, index) => {
            const IconComponent = iconComponents[link.icon];
            const linkText = getText(link, true);
            return (
              <motion.a
                key={index}
                href={link.link}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 p-6 text-center hover:bg-blue-100 transition group"
              >
                <div className="text-blue-600 mb-4 flex justify-center group-hover:text-blue-800">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {linkText.title}
                </h3>
                <p className="text-gray-600">{linkText.description}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
