import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiImage,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner } from "react-icons/fa";

const Schemedetail = () => {
  const { language } = useLanguage();
  const { schemeSlug } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scheme, setScheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScheme = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/schemes/${schemeSlug}`,
          {
            headers: {
              "Accept-Language": language,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch scheme details");
        }

        const data = await response.json();
        setScheme(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching scheme:", err);
      } finally {
        setLoading(false);
      }
    };

    if (schemeSlug) {
      fetchScheme();
    }
  }, [schemeSlug, language]);

  const downloadDocument = async (document, index) => {
    try {
      // For external URLs, open in new tab
      window.open(document.url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error accessing document:", error);
    }
  };

  const getCategoryName = (categoryId) => {
    const categories = {
      1: { en: "DISTRICT ANNUAL PLAN", mr: "जिल्हा वार्षिक योजना" },
      2: {
        en: "MLA Local Development Program",
        mr: "आमदार स्थानिक विकास कार्यक्रम",
      },
      3: {
        en: "MP Local Area Development Program",
        mr: "खासदार स्थानिक क्षेत्र विकास कार्यक्रम",
      },
      4: {
        en: "HILLY REGION DEVELOPMENT PROGRAM",
        mr: "डोंगरी विभाग विकास कार्यक्रम",
      },
      5: { en: "HUMAN DEVELOPMENT", mr: "मानवी विकास" },
      6: { en: "MINORITY SCHEMES", mr: "अल्पसंख्याक योजना" },
      7: { en: "OTHER SCHEMES", mr: "इतर योजना" },
    };

    return (
      categories[categoryId]?.[language] ||
      categories[categoryId]?.en ||
      "Unknown Category"
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading scheme details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!scheme) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        {language === "mr" ? "प्रकल्प सापडला नाही" : "Scheme not found"}
      </div>
    );
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Extract details from the API response
  const details = scheme.details
    ? scheme.details.map((item) => item.detail)
    : [];

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center text-pink-900 hover:text-pink-800 mb-6 transition-colors duration-200"
          whileHover={{ x: -5 }}
        >
          <FiArrowLeft className="mr-2" />
          {language === "mr" ? "मागे जा" : "Go Back"}
        </motion.button>

        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative group overflow-hidden">
              <img
                src={scheme.image}
                alt={scheme.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Image+Not+Found";
                }}
              />
              <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <FiImage className="text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-4xl" />
              </div>
            </div>

            <div className="md:w-1/2 p-8">
              {/* <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {getCategoryName(scheme.category_id)}
                </span>
              </div> */}

              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {scheme.name}
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {scheme.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {language === "mr" ? "प्रकल्प तपशील" : "Scheme Highlights"}
                </h3>
                <ul className="space-y-3">
                  {details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documents Section */}
        {scheme.documents &&
          scheme.documents.items &&
          scheme.documents.items.length > 0 && (
            <motion.section
              variants={itemVariants}
              className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-semibold text-pink-900 border-b border-pink-200 pb-3 mb-4">
                {scheme.documents.title}
              </h2>
              <div className="space-y-3">
                {scheme.documents.items.map((doc, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    onClick={() => downloadDocument(doc, index)}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center flex-1">
                      <FiExternalLink className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 group-hover:text-pink-700 font-medium">
                        {doc.name}
                      </span>
                    </div>
                    {/* <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                      External Link
                    </span> */}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(false);
                  }}
                  className="text-white hover:text-gray-300 text-2xl bg-black bg-opacity-50 rounded-full p-2"
                  aria-label={language === "mr" ? "बंद करा" : "Close"}
                >
                  &times;
                </button>
              </div>

              <img
                src={scheme.image}
                alt={scheme.name}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Schemedetail;
