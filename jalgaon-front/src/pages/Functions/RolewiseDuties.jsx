import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUserShield,
  FaUserCog,
  FaFileAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaCar,
  FaUser,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";
import Document from "./document";

const RolewiseDuties = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Icon mapping
  const iconMap = {
    FaUserTie: <FaUserTie className="text-pink-900" size={20} />,
    FaFileAlt: <FaFileAlt className="text-pink-900" size={20} />,
    FaUserShield: <FaUserShield className="text-pink-900" size={20} />,
    FaChartLine: <FaChartLine className="text-pink-900" size={20} />,
    FaMoneyBillWave: <FaMoneyBillWave className="text-pink-900" size={20} />,
    FaUserCog: <FaUserCog className="text-pink-900" size={20} />,
    FaCar: <FaCar className="text-pink-900" size={20} />,
    FaUser: <FaUser className="text-pink-900" size={20} />,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/role-duties?lang=${language}`
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
        console.error("Error fetching role duties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  // Helper function to extract text from either format
  const extractItems = (items) => {
    if (!items) return [];

    // If items is an array of objects with 'duty' or 'authority' property
    if (
      Array.isArray(items) &&
      items.length > 0 &&
      typeof items[0] === "object"
    ) {
      if (items[0].hasOwnProperty("duty")) {
        return items.map((item) => item.duty);
      }
      if (items[0].hasOwnProperty("authority")) {
        return items.map((item) => item.authority);
      }
    }

    // If items is already a simple array
    return items;
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
          <p className="text-gray-600">Loading role duties...</p>
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
      <Document />;
      <div className="max-w-7xl mx-auto">
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
          {content.roles.map((role, index) => {
            // Extract duties and authority in the correct format
            const duties = extractItems(getText(role.duties));
            const authority = extractItems(getText(role.authority));

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-pink-100 p-3 rounded-full">
                      {iconMap[role.icon] || (
                        <FaUserTie className="text-pink-600" size={20} />
                      )}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {getText(role.position)}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        {language === "mr" ? "मुख्य कर्तव्ये" : "Key Duties"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {duties.map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-pink-700 mb-2">
                        {language === "mr"
                          ? "अधिकार आणि आधार"
                          : "Authority Basis"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {authority.map((auth, i) => (
                          <li key={i} className="text-sm">
                            {auth}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {getText(content.timeBoundActivities.title)}
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      {language === "mr" ? "क्रियाकलाप" : "Activity"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      {language === "mr" ? "कालावधी" : "Timeframe"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      {language === "mr" ? "जबाबदार" : "Responsible Officer"}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {content.timeBoundActivities.items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(item.activity)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(item.timeframe)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(item.responsible)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RolewiseDuties;
