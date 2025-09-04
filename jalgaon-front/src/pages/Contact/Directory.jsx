import { motion } from "framer-motion";
import {
  FaUserTie,
  FaPhone,
  FaEnvelope,
  FaRupeeSign,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";

const Directory = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/staff-members?lang=${language}`
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
        console.error("Error fetching staff members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  // Helper function to extract text from either format
  const extractResponsibilities = (responsibilities) => {
    if (!responsibilities) return [];

    // If responsibilities is an array of objects with 'responsibility' property
    if (
      Array.isArray(responsibilities) &&
      responsibilities.length > 0 &&
      typeof responsibilities[0] === "object" &&
      responsibilities[0].hasOwnProperty("responsibility")
    ) {
      return responsibilities.map((item) => item.responsibility);
    }

    // If responsibilities is already a simple array
    return responsibilities;
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
          <p className="text-gray-600">
            Loading Officers Duties and responsibilities...
          </p>
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
        <div className="text-gray-900">No content available</div>
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

        <div className="space-y-6">
          {content.staffMembers.map((staff, index) => {
            // Extract responsibilities in the correct format
            const responsibilities = extractResponsibilities(
              getText(staff.responsibilities)
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <div className="flex items-center">
                        {staff.photo ? (
                          <img
                            src={staff.photo}
                            alt={getText(staff.name)}
                            className="w-16 h-16 rounded-full object-cover mr-4"
                          />
                        ) : (
                          <div className="bg-pink-100 p-3 rounded-full mr-4">
                            <FaUserTie className="text-pink-900 text-2xl" />
                          </div>
                        )}
                        <div>
                          <h2 className="text-xl font-semibold text-gray-800">
                            {getText(staff.name)}
                          </h2>
                          <p className="text-pink-900">
                            {getText(staff.designation)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/3 border-l md:px-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-3">
                        {getText(content.contactTitle)}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <FaPhone className="text-gray-500 mr-2" />
                          <span className="text-gray-700">
                            {staff.contact.phone}
                          </span>
                        </div>

                        <div className="flex items-center">
                          <FaEnvelope className="text-gray-500 mr-2" />
                          <a
                            href={`mailto:${staff.contact.email}`}
                            className="text-pink-900 hover:underline"
                          >
                            {staff.contact.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/3 border-l md:px-6 mt-4 md:mt-0">
                      <h3 className="text-lg font-medium text-gray-800 mb-3">
                        {getText(content.responsibilitiesTitle)}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Directory;
