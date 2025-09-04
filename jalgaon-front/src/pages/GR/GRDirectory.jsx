import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import gr1 from "../../assets/GRpdf/17.07.2025 GR.pdf";
import gr2 from "../../assets/GRpdf/18.01.2010 GR.pdf";
import gr3 from "../../assets/GRpdf/Gr-13.03.2024.pdf";

// DPC Data in both English and Marathi
const dpcData = {
  en: {
    documents: {
      title: "Hilly Region Development Program",
      items: [
        {
          name: "Govt Decision No.Donvika-2021/ Q.No.58/ Ka.1481-A,Ministry",
          url: gr1,
        },
        {
          name: "Government Decision, No.-Donvika-2009/P.No.6/Ka. 1483, Ministry",
          url: gr2,
        },
        {
          name: "Govt Decision No: Domvika-2021/P.No.58/Ka-1481-A Ministry",
          url: gr3,
        },
      ],
    },
  },
  mr: {
    documents: {
      title: "डोंगरी विभाग विकास कार्यक्रम",
      items: [
        {
          name: "शासन निर्णय क्र.डोंविका-2021/ प्र.क्र.58/ का.1481-अ,मंत्रालय",
          url: gr1,
        },
        {
          name: "शासन निर्णय , क्रमांक-डोंविका-२००९/प्र.क्र .६/का. १४८३,मंत्रालय",
          url: gr2,
        },
        {
          name: "शासन निर्णय क्रमाांक: डोंविका-२०21/प्र.क्र.58/का-१४८१-अ मंत्रालय",
          url: gr3,
        },
      ],
    },
  },
};

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

const GRDirectory = () => {
  const { language } = useLanguage();
  const data = dpcData[language] || dpcData.en; // Fallback to English if language not found

  return (
    <div className="min-h-screen bg-gray-50">
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
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
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
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm md:text-base transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0"
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
                <span className="truncate">{doc.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default GRDirectory;
