import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const TourismGallery = () => {
  const { language } = useLanguage();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/tourism/gallery?lang=${language}`
        );
        const data = await response.json();

        if (data.success) {
          setImages(data.data);
        }
      } catch (err) {
        console.error("Error fetching gallery images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, [language]); // Added language dependency to refetch when language changes

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">
            {language === "mr" ? "गॅलरी लोड होत आहे..." : "Loading Gallery..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          {language === "mr" ? "आमची गॅलरी" : "Our Gallery"}
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500"
            >
              <img
                src={item.src}
                alt={
                  item.title[language] ||
                  item.title.en ||
                  `Gallery image ${index + 1}`
                }
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center p-4">
                <span className="text-white text-lg font-bold text-center">
                  {item.title[language] ||
                    item.title.en ||
                    `Location ${index + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismGallery;
