import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner } from "react-icons/fa";

const AboutDPC = () => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [aboutdpcData, setAboutDpcData] = useState(null);

  // Bilingual content for static text
  const content = {
    viewAll: {
      en: "View All Details",
      mr: "सर्व तपशील पहा",
    },
  };

  useEffect(() => {
    const fetchAboutDPCData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jalgaonback.demovoting.com/api/AboutDPC"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch About DPC data");
        }
        const data = await response.json();
        setAboutDpcData(data[0]); // Assuming you want the first item
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutDPCData();
  }, []);

  // Helper function to get text in current language
  const getText = (item, key = null) => {
    if (key && item && item[key]) {
      return item[key][language] || item[key].en;
    }
    if (item && typeof item === "object") {
      return item[language] || item.en;
    }
    return item;
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">
            Loading About District Planning Committee...
          </p>
        </div>
      </div>
    );
  if (error)
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  if (!aboutdpcData)
    return <div className="text-center py-12">No data available</div>;

  // Parse the description into paragraphs
  const descriptionText = getText(aboutdpcData, "description");
  const descriptionParagraphs = descriptionText
    ? descriptionText.split("\n").filter((para) => para.trim() !== "")
    : [];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={aboutdpcData.image}
              alt={getText(aboutdpcData, "name")}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {getText(aboutdpcData, "name")}
            </h2>

            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}

            <Link
              to="/organizationalChart"
              className="text-pink-900 hover:text-pink-800 font-medium flex items-center mt-6"
            >
              {getText(content.viewAll)}
              <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDPC;
