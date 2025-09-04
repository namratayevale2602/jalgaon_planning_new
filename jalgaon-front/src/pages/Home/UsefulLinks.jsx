import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Award,
  Landmark,
  FileSearch,
  Home,
  Scale,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const UsefulLinks = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState({
    title: {
      en: "Useful Links",
      mr: "उपयुक्त दुवे",
    },
    quickLinksData: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(
          "https://jalgaonback.demovoting.com/api/useful-links"
        );
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Error fetching useful links:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, [language]);

  const iconComponents = {
    FileText,
    Users,
    Award,
    Landmark,
    FileSearch,
    Home,
    Scale,
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading useful links...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          {getText(content.title)}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.quickLinksData.map((link, index) => {
            const IconComponent = iconComponents[link.icon];
            const linkText = getText(link, true);
            return (
              <motion.a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg text-center transition-all duration-300 border border-gray-200 hover:border-pink-200 flex flex-col items-center h-full"
              >
                <div className="text-pink-900 mb-4 group-hover:text-pink-800 bg-pink-50 p-3 rounded-full">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {linkText.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {linkText.description}
                </p>
                <span className="mt-4 text-pink-900 text-sm font-medium hover:underline">
                  {language === "en" ? "Visit Link" : "दुवा भेट द्या"} →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
