import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
} from "react-icons/fa";

const TourismCarousel = ({ spots }) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getText = (item) => {
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  const getDescription = (spot) => {
    const description = getText(spot.description);
    if (!description) return "";
    return description.length > 150
      ? description.substring(0, 150) + "..."
      : description;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === spots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? spots.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!spots || spots.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">
          {language === "en"
            ? "No tourism spots available"
            : "पर्यटन स्थळे उपलब्ध नाहीत"}
        </p>
      </div>
    );
  }

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {language === "en" ? "Featured Destinations" : "विशेष स्थळे"}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {spots.map((spot, index) => (
            <div
              key={spot.id || index}
              className="w-full flex-shrink-0 relative"
            >
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={spot.image}
                  alt={getText(spot.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-pink-900 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {spot.type === "religious"
                        ? language === "en"
                          ? "Religious"
                          : "धार्मिक"
                        : spot.type === "nature"
                        ? language === "en"
                          ? "Nature"
                          : "निसर्ग"
                        : spot.type === "educational"
                        ? language === "en"
                          ? "Educational"
                          : "शैक्षणिक"
                        : language === "en"
                        ? "Commercial"
                        : "वाणिज्यिक"}
                    </span>
                    {/* <div className="flex items-center bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm">{spot.rating || "4.5/5"}</span>
                    </div> */}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {getText(spot.title)}
                  </h3>

                  <div className="flex items-center mb-4 text-gray-200">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="text-sm">
                      {spot.location || getText(spot.title)}
                    </span>
                  </div>

                  <p className="text-gray-200 mb-6 line-clamp-2">
                    {getDescription(spot)}
                  </p>

                  <Link
                    to={`/tourism/${spot.slug}`}
                    className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    {language === "en" ? "Explore Now" : "आता एक्सप्लोर करा"}
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {spots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismCarousel;
