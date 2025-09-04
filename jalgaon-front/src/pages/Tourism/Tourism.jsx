import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import TourismCarousel from "./TourismCarousel";
import TourismGallery from "./TourismGallery";
import { FaSpinner } from "react-icons/fa";

const TourismMain = () => {
  const { language } = useLanguage();
  const [tourismSpots, setTourismSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourismSpots = async () => {
      try {
        const response = await fetch(
          "https://jalgaonback.demovoting.com/api/tourism/spots"
        );
        const data = await response.json();

        if (data.success) {
          setTourismSpots(data.data);
        } else {
          setError("Failed to fetch tourism spots");
        }
      } catch (err) {
        setError("Error fetching tourism spots");
      } finally {
        setLoading(false);
      }
    };

    fetchTourismSpots();
  }, []);

  const getText = (item) => {
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
          <p className="text-gray-600">tourism spots...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        Error: {error}
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
        <TourismCarousel spots={tourismSpots} />
      </motion.div>
      <TourismGallery />
    </div>
  );
};

export default TourismMain;
