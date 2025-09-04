import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaCheckCircle,
  FaUsersCog,
  FaCog,
  FaTasks,
  FaClipboardList,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";

const KeyResponsibilities = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Icon mapping
  const iconMap = {
    FaFileAlt: <FaFileAlt className="text-pink-900 text-2xl" />,
    FaCheckCircle: <FaCheckCircle className="text-pink-900 text-2xl" />,
    FaUsersCog: <FaUsersCog className="text-pink-900 text-2xl" />,
    FaCog: <FaCog className="text-pink-900 text-2xl" />,
    FaTasks: <FaTasks className="text-pink-900 text-2xl" />,
    FaClipboardList: <FaClipboardList className="text-pink-900 text-2xl" />,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/key-responsibilities`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (result.success) {
          setContent(result.data);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching key responsibilities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  // Helper function to extract text from either format
  const extractDetails = (details) => {
    if (!details) return [];

    // If details is an array of objects with 'detail' property
    if (
      Array.isArray(details) &&
      details.length > 0 &&
      typeof details[0] === "object" &&
      details[0].hasOwnProperty("detail")
    ) {
      return details.map((item) => item.detail);
    }

    // If details is already a simple array
    return details;
  };

  const getText = (item) => {
    if (!item) return "";

    if (Array.isArray(item)) {
      return item[language] || item.en || item;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading responsibilities...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-gray-600">No content available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-pink-100 w-20 mb-6"></div>
        </motion.div>

        <div className="space-y-8">
          {content.responsibilities.map((item, index) => {
            // Extract details in the correct format
            const details = extractDetails(getText(item.details));

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="bg-pink-100 p-3 rounded-full mb-4 md:mb-0 md:mr-6">
                      {iconMap[item.icon] || (
                        <FaFileAlt className="text-pink-600 text-2xl" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold">
                        {getText(item.title)}
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {getText(item.description)}
                      </p>

                      <h3 className="font-medium text-gray-800 mb-2">
                        {getText(content.dutiesTitle)}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* <div className="mt-8 bg-pink-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-pink-800 mb-3">
            {getText(content.legalBasis.title)}
          </h3>
          <p className="text-gray-700 mb-2">
            {getText(content.legalBasis.text1)}
          </p>
          <p className="text-gray-700">{getText(content.legalBasis.text2)}</p>
        </div> */}
      </div>
    </div>
  );
};

export default KeyResponsibilities;
