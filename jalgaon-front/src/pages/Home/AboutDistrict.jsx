import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner } from "react-icons/fa";

const AboutDistrict = () => {
  const { language, content, fetchContent } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [districtData, setDistrictData] = useState(null);

  useEffect(() => {
    const fetchDistrictData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jalgaonback.demovoting.com/api/districts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch district data");
        }
        const data = await response.json();
        setDistrictData(data[0]); // Assuming you want the first district
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDistrictData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading About Jalgaon District...</p>
        </div>
      </div>
    );
  if (error)
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  if (!districtData)
    return <div className="text-center py-12">No data available</div>;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8">
          {districtData.name[language]}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 ">
              {districtData.description[language]}
            </p>
            {/* <div className="grid grid-cols-2 gap-4">
              {districtData.stats[language].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-semibold text-gray-800">{stat.title}</h4>
                  <p className="text-blue-600 font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </div> */}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              // src={districtData.image || Banner1}
              src={districtData.image}
              alt={districtData.name[language]}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDistrict;
