import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bilingual content
  const content = {
    title: {
      en: "Our Gallery",
      mr: "आमची गॅलरी",
    },
    description: {
      en: "Explore our collection of images from various events and programs.",
      mr: "विविध कार्यक्रम आणि कार्यक्रमांमधील आमच्या प्रतिमांचा संग्रह पाहा.",
    },
    imageCounter: {
      en: "Image {current} of {total}",
      mr: "प्रतिमा {current} पैकी {total}",
    },
    loading: {
      en: "Loading gallery...",
      mr: "गॅलरी लोड होत आहे...",
    },
    error: {
      en: "Failed to load gallery. Please try again later.",
      mr: "गॅलरी लोड करण्यात अयशस्वी. कृपया नंतर पुन्हा प्रयत्न करा.",
    },
    noImages: {
      en: "No images available in this category.",
      mr: "या श्रेणीत कोणत्याही प्रतिमा उपलब्ध नाहीत.",
    },
  };

  // Fetch data from API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jalgaonback.demovoting.com/api/gallery"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          setCategories(data.data);
        } else {
          throw new Error("Failed to fetch gallery data");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching gallery data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const getText = (item, isImage = false) => {
    if (!item) return { title: "", description: "" };

    if (isImage) {
      return {
        title: item.title?.[language] || item.title?.en || "",
        description: item.description?.[language] || item.description?.en || "",
      };
    }
    return item[language] || item.en || "";
  };

  const openImage = (image, categoryId, imageIndex) => {
    setSelectedImage(image);
    setCurrentIndex(imageIndex);
    setCurrentCategory(categoryId);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setCurrentCategory(null);
  };

  const navigate = (direction) => {
    let newIndex;
    const category = categories.find((cat) => cat.id === currentCategory);
    const images = category?.images || [];

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }

    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">{getText(content.loading)}</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {getText(content.error)}
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
          >
            {language === "en" ? "Try Again" : "पुन्हा प्रयत्न करा"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-pink-100 w-20 mb-6 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {getText(content.description)}
          </p>
        </motion.div>

        {/* Separate sections for each category */}
        {categories.map((category) => (
          <section key={category.id} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {getText(category.title)}
              </h2>
              <div className="border-b-2 border-pink-100 w-16 mb-4 mx-auto"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {getText(category.description)}
              </p>
            </motion.div>

            {category.images && category.images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.images.map((image, imageIndex) => {
                  const imageText = getText(image, true);
                  return (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: imageIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                      onClick={() => openImage(image, category.id, imageIndex)}
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={image.url}
                          alt={imageText.title}
                          className="w-full h-full object-cover transition duration-300 hover:scale-105"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/300x200?text=Image+Not+Found";
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-100 rounded-lg">
                <p className="text-gray-500">{getText(content.noImages)}</p>
              </div>
            )}
          </section>
        ))}

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-200 transition"
                onClick={closeImage}
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
                <div className="max-h-[80vh] overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedImage.url}
                    alt={getText(selectedImage, true).title}
                    className="w-full h-full object-contain max-h-[80vh]"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                  />
                </div>
                <div className="p-6">
                  {/* <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {getText(selectedImage, true).title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {getText(selectedImage, true).description}
                  </p> */}
                  <div className="text-sm text-gray-500">
                    {getText(content.imageCounter)
                      .replace("{current}", currentIndex + 1)
                      .replace(
                        "{total}",
                        categories.find((cat) => cat.id === currentCategory)
                          ?.images.length || 0
                      )}
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

export default GalleryPage;
