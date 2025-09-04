import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaTree,
  FaWater,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner } from "react-icons/fa";

const TourismDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const [spot, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourismSpot = async () => {
      try {
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/tourism/spots/${slug}`
        );
        const data = await response.json();

        if (response.ok && data.success) {
          setSpot(data.data);
          setError(null);
        } else {
          // Handle API error responses more robustly
          if (data.detail) {
            if (typeof data.detail === "object" && data.detail !== null) {
              // If detail is an object, try to extract a message
              const errorMessage =
                data.detail.message ||
                data.detail.msg ||
                data.detail.error ||
                "Tourism spot not found";
              setError(String(errorMessage));
            } else {
              setError(String(data.detail));
            }
          } else if (data.message) {
            setError(String(data.message));
          } else {
            setError("Tourism spot not found");
          }
        }
      } catch (err) {
        setError("Error fetching tourism spot");
      } finally {
        setLoading(false);
      }
    };

    fetchTourismSpot();
  }, [slug]);

  const getText = (item) => {
    if (item === null || item === undefined) {
      return "";
    }

    if (Array.isArray(item)) {
      return item;
    }

    if (typeof item === "object") {
      // Handle error objects first to prevent rendering them
      if (item.detail || item.error || item.message) {
        return "";
      }

      // Handle multi-language objects
      if (item[language] !== undefined) {
        return item[language];
      }
      if (item.en !== undefined) {
        return item.en;
      }
      // If it's an object with 'item' property
      if (item.item !== undefined) {
        return item.item;
      }
      // For any other object, return empty string to avoid rendering objects
      return "";
    }

    return String(item);
  };

  const getArrayContent = (content) => {
    if (!content) return [];

    const result = getText(content);

    if (Array.isArray(result)) {
      // Process each item in the array to extract the actual text
      return result
        .map((item) => {
          if (typeof item === "object" && item !== null) {
            const text = getText(item);
            // If we still get an object, return empty string
            return typeof text === "object" ? "" : text;
          }
          return item;
        })
        .filter((item) => item && item.trim() !== "");
    }

    // If it's a string, try to split by newlines or return as single item array
    if (typeof result === "string") {
      return result.split("\n").filter((item) => item.trim() !== "");
    }

    // Fallback to empty array
    return [];
  };

  const getDescription = (description) => {
    if (!description) return "";
    const result = getText(description);
    return result || "";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading tourism spots...</p>
        </div>
      </div>
    );
  }

  if (error || !spot) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {language === "en"
            ? "Tourism spot not found"
            : "पर्यटन स्थळ सापडले नाही"}
        </h1>
        <p className="text-red-600 mb-4">{error}</p>
        <Link
          to="/tourism"
          className="mt-4 inline-flex items-center text-pink-600"
        >
          <FaArrowLeft className="mr-2" />
          {language === "en" ? "Back to Tourism" : "पर्यटन पृष्ठावर परत"}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/tourism"
          className="inline-flex items-center text-pink-900 hover:text-pink-800 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          {language === "en" ? "Back to Tourism" : "पर्यटन पृष्ठावर परत"}
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={spot.image}
              alt={getText(spot.title)}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-xs font-medium">
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
              <span className="flex items-center">
                <FaUsers className="mr-1" />
                {language === "en" ? "Visitors:" : "पर्यटक:"}{" "}
                {spot.stats?.visitors || "N/A"}
              </span>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1" />
                {language === "en" ? "Established:" : "स्थापना:"}{" "}
                {spot.stats?.established || "N/A"}
              </span>
              <span className="flex items-center">
                {spot.type === "nature" ? (
                  <FaTree className="mr-1" />
                ) : spot.type === "commercial" ? (
                  <FaShoppingCart className="mr-1" />
                ) : spot.type === "religious" ? (
                  <FaMapMarkerAlt className="mr-1" />
                ) : (
                  <FaWater className="mr-1" />
                )}
                {spot.stats?.location || getText(spot.title)}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {getText(spot.title)}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose max-w-none text-gray-700 mb-8"
            >
              <p className="text-lg mb-6">{getDescription(spot.description)}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language === "en" ? "Key Features" : "मुख्य वैशिष्ट्ये"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {getArrayContent(spot.content).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>

            {spot.development && (
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">
                  {language === "en"
                    ? "Development Initiatives"
                    : "विकास उपक्रम"}
                </h3>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    {language === "en"
                      ? "Recent Investments"
                      : "अलीकडील गुंतवणूक"}
                  </h4>
                  <p className="text-pink-900 font-medium">
                    {language === "en" ? "Budget:" : "अर्थसंकल्प:"}{" "}
                    {spot.development?.budget || "N/A"}
                  </p>
                </div>

                <h4 className="font-medium text-gray-800 mb-2">
                  {language === "en" ? "Ongoing Projects" : "चालू प्रकल्प"}
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {getArrayContent(spot.development?.projects).map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TourismDetail;
