import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Services = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jalgaonback.demovoting.com/api/schemes",
          {
            headers: {
              "Accept-Language": language,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch schemes");
        }

        const data = await response.json();
        setSchemes(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching schemes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, [language]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading schemes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
            {language === "en" ? "SCHEMES" : "योजना"}
          </h2>
        </div>

        {/* Auto Slider Section */}
        <div className="my-12">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {schemes.map((scheme) => (
              <SwiperSlide key={scheme.id}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all cursor-pointer h-full"
                  onClick={() => navigate(`/scheme/${scheme.slug}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={scheme.image}
                      alt={scheme.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Image+Not+Found";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {scheme.title}
                    </h3>
                    {scheme.description && (
                      <p className="text-gray-600 text-sm">
                        {scheme.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default Services;
