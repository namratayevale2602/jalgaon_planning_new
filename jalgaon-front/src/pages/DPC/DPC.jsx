import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

const DPC = () => {
  const { language } = useLanguage();
  const [data, setData] = useState({
    documents: {
      title: "",
      items: [],
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/dpc-documents?lang=${language}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching DPC documents:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">
            {language === "mr"
              ? "नियोजन समिती नियम आणि कायदे लोड होत आहेत..."
              : "Loading Planning Committee Rules & Act..."}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600">
          {language === "mr" ? "त्रुटी: " : "Error: "}
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-6 md:py-8"
      >
        {/* Documents Section */}
        <motion.section
          variants={itemVariants}
          className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold border-b border-pink-200 pb-2 mb-3 md:mb-4">
            {data.documents.title}
          </h2>
          <div className="space-y-2 md:space-y-3">
            {data.documents.items.map((doc, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm md:text-base"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {/* Use the appropriate name based on the language */}
                {language === "mr" && doc.name_mr ? doc.name_mr : doc.name}
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default DPC;
