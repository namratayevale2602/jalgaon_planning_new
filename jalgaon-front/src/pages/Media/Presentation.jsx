import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaFilePowerpoint,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const PresentationGallery = () => {
  const { language } = useLanguage();
  const [selectedPresentation, setSelectedPresentation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Bilingual content
  const content = {
    title: {
      en: "Presentation",
      mr: "प्रेझेंटेशन",
    },
    description: {
      en: "Explore our collection of informative presentations on various topics.",
      mr: "विविध विषयांवर माहितीपट प्रेझेंटेशनचा संग्रह पाहा.",
    },
    viewButton: {
      en: "View Presentation",
      mr: "प्रेझेंटेशन पहा",
    },
    downloadButton: {
      en: "Download",
      mr: "डाउनलोड करा",
    },
    presentationCounter: {
      en: "Presentation {current} of {total}",
      mr: "प्रेझेंटेशन {current} पैकी {total}",
    },
    presentations: [
      {
        id: 1,
        title: {
          en: "Annual Development Plan",
          mr: "वार्षिक विकास योजना",
        },
        description: {
          en: "Overview of district development projects and budget allocation",
          mr: "जिल्हा विकास प्रकल्प आणि अर्थसंकल्प वाटपाचा आढावा",
        },
        thumbnail: "/ppt-thumbnails/plan-thumb.jpg",
        fileUrl: "/presentations/annual-plan.pptx",
        fileSize: "2.4 MB",
      },
      {
        id: 2,
        title: {
          en: "Infrastructure Projects",
          mr: "पायाभूत सुविधा प्रकल्प",
        },
        description: {
          en: "Current and upcoming infrastructure development in the district",
          mr: "जिल्ह्यातील चालू आणि आगामी पायाभूत सुविधा विकास",
        },
        thumbnail: "/ppt-thumbnails/infra-thumb.jpg",
        fileUrl: "/presentations/infrastructure.pptx",
        fileSize: "3.1 MB",
      },
      {
        id: 3,
        title: {
          en: "Education Initiatives",
          mr: "शैक्षणिक उपक्रम",
        },
        description: {
          en: "Programs and schemes for educational development",
          mr: "शैक्षणिक विकासासाठीची कार्यक्रमे आणि योजना",
        },
        thumbnail: "/ppt-thumbnails/edu-thumb.jpg",
        fileUrl: "/presentations/education-initiatives.pptx",
        fileSize: "1.8 MB",
      },
      {
        id: 4,
        title: {
          en: "Health Services",
          mr: "आरोग्य सेवा",
        },
        description: {
          en: "Overview of healthcare facilities and programs",
          mr: "आरोग्यसेवा सुविधा आणि कार्यक्रमांचा आढावा",
        },
        thumbnail: "/ppt-thumbnails/health-thumb.jpg",
        fileUrl: "/presentations/health-services.pptx",
        fileSize: "2.7 MB",
      },
      {
        id: 5,
        title: {
          en: "Agricultural Schemes",
          mr: "कृषी योजना",
        },
        description: {
          en: "Government schemes for farmers and agricultural development",
          mr: "शेतकऱ्यांसाठीच्या सरकारी योजना आणि कृषी विकास",
        },
        thumbnail: "/ppt-thumbnails/agri-thumb.jpg",
        fileUrl: "/presentations/agriculture-schemes.pptx",
        fileSize: "2.1 MB",
      },
      {
        id: 6,
        title: {
          en: "Water Conservation",
          mr: "जलसंधारण",
        },
        description: {
          en: "Initiatives for water conservation and management",
          mr: "जलसंधारण आणि व्यवस्थापनासाठीचे उपक्रम",
        },
        thumbnail: "/ppt-thumbnails/water-thumb.jpg",
        fileUrl: "/presentations/water-conservation.pptx",
        fileSize: "3.5 MB",
      },
      {
        id: 7,
        title: {
          en: "Women Empowerment",
          mr: "महिला सक्षमीकरण",
        },
        description: {
          en: "Programs for women's development and empowerment",
          mr: "महिला विकास आणि सक्षमीकरणासाठीची कार्यक्रमे",
        },
        thumbnail: "/ppt-thumbnails/women-thumb.jpg",
        fileUrl: "/presentations/women-empowerment.pptx",
        fileSize: "1.9 MB",
      },
      {
        id: 8,
        title: {
          en: "Digital Initiatives",
          mr: "डिजिटल उपक्रम",
        },
        description: {
          en: "Digital transformation projects in the district",
          mr: "जिल्ह्यातील डिजिटल परिवर्तन प्रकल्प",
        },
        thumbnail: "/ppt-thumbnails/digital-thumb.jpg",
        fileUrl: "/presentations/digital-initiatives.pptx",
        fileSize: "2.3 MB",
      },
    ],
  };

  const getText = (item, isPresentation = false) => {
    if (isPresentation) {
      return {
        title: item.title[language] || item.title.en,
        description: item.description[language] || item.description.en,
      };
    }
    return item[language] || item.en;
  };

  const openPresentation = (presentation, index) => {
    setSelectedPresentation(presentation);
    setCurrentIndex(index);
  };

  const closePresentation = () => {
    setSelectedPresentation(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        currentIndex === 0
          ? content.presentations.length - 1
          : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === content.presentations.length - 1
          ? 0
          : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedPresentation(content.presentations[newIndex]);
  };

  const handleViewPresentation = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName || "presentation.pptx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
          <p className="text-gray-600 mb-8">{getText(content.description)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {content.presentations.map((presentation, index) => {
            const presentationText = getText(presentation, true);
            return (
              <motion.div
                key={presentation.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => openPresentation(presentation, index)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={presentation.thumbnail}
                    alt={presentationText.title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <FaFilePowerpoint className="text-white text-5xl opacity-80" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {presentationText.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {presentationText.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    {presentation.fileSize}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Presentation Modal */}
        {selectedPresentation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closePresentation}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-200 transition"
                onClick={closePresentation}
              >
                <FaTimes className="text-gray-800 text-xl" />
              </button>

              <div className="flex items-center justify-between absolute w-full top-1/2 transform -translate-y-1/2 z-10 px-4">
                <button
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("prev");
                  }}
                >
                  <FaChevronLeft className="text-gray-800 text-xl" />
                </button>
                <button
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("next");
                  }}
                >
                  <FaChevronRight className="text-gray-800 text-xl" />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="max-h-[60vh] overflow-hidden flex items-center justify-center bg-gray-100">
                  <img
                    src={selectedPresentation.thumbnail}
                    alt={getText(selectedPresentation, true).title}
                    className="w-full h-full object-contain max-h-[60vh]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {getText(selectedPresentation, true).title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {getText(selectedPresentation, true).description}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <button
                      onClick={() =>
                        handleViewPresentation(selectedPresentation.fileUrl)
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 transition"
                    >
                      <FaFilePowerpoint />
                      {getText(content.viewButton)}
                    </button>
                    <button
                      onClick={() =>
                        handleDownload(
                          selectedPresentation.fileUrl,
                          selectedPresentation.title.en + ".pptx"
                        )
                      }
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center gap-2 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {getText(content.downloadButton)}
                    </button>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    {getText(content.presentationCounter)
                      .replace("{current}", currentIndex + 1)
                      .replace("{total}", content.presentations.length)}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PresentationGallery;
