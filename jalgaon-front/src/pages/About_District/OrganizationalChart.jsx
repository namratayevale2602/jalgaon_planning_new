import { motion } from "framer-motion";
import {
  FaUserTie,
  FaSitemap,
  FaUsers,
  FaTasks,
  FaCalendarAlt,
  FaFileAlt,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";

const OrganizationalChart = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jalgaonback.demovoting.com/api/organizational-chart"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error("Error fetching organizational chart data:", err);
        setError(err.message);

        // Fallback to default content if API fails
        setContent({
          title: {
            en: "Organizational Structure",
            mr: "संस्थात्मक रचना",
          },
          hierarchyTitle: {
            en: "Jalgaon District Planning Committee Hierarchy",
            mr: "जळगांव जिल्हा नियोजन समिती पदानुक्रम",
          },
          structure: [],
          decisionProcess: {
            title: {
              en: "Decision Making Process & Responsibilities",
              mr: "निर्णय प्रकिया व जबाबदाऱ्या",
            },
            subtitle: {
              en: "Development Plan Preparation Process",
              mr: "विकास आराखडा तयार करण्याची प्रक्रिया",
            },
            act: {
              en: "Related Act: District Planning Committee (Structure & Functions) Act 1998",
              mr: "संबंधित कायदा: जिल्हा नियोजन समिती (रचना व कामे) अधिनियम 1998",
            },
            process: [],
          },
          composition: {
            title: {
              en: "Key Responsibilities",
              mr: "मुख्य जबाबदाऱ्या",
            },
            items: [],
          },
          committees: {
            title: {
              en: "Governing References",
              mr: "शासकीय संदर्भ",
            },
            items: [],
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getText = (item) => {
    if (!item) return "";

    if (Array.isArray(item)) {
      return item[language] || item.en || "";
    }

    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || "";
    }

    return item;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading organizational data...</p>
        </div>
      </div>
    );
  }

  if (error && !content) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <h3 className="text-red-800 font-medium">Error loading data</h3>
          <p className="text-red-700 mt-1">{error}</p>
          <p className="text-red-700 mt-2">
            Please check if the backend server is running.
          </p>
        </div>
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
        <p className="text-3xl font-bold text-gray-800 mb-2">
          {getText(content.hierarchyTitle)}
        </p>
        <div className="border-b-2 border-pink-100 w-20 mb-6"></div>
      </motion.div>

      {/* Organizational Hierarchy Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        {/* <div className="flex items-center mb-4">
          <FaSitemap className="text-blue-600 text-2xl mr-3" />
          <h2 className="text-2xl font-semibold">
            {getText(content.hierarchyTitle)}
          </h2>
        </div> */}

        {content.structure && content.structure.length > 0 ? (
          <div className="space-y-4 pr-4">
            {content.structure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className=" pl-4 py-3 transition"
              >
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-full mr-4">
                    <FaUserTie className="text-pink-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-800">
                      {getText(item.level)}
                    </h3>
                    <p className="text-blue-900 font-medium">
                      {getText(item.name)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No organizational structure data available
          </div>
        )}
      </div>

      {/* Decision Making Process Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          {/* <FaCalendarAlt className="text-blue-600 text-2xl mr-3" /> */}
          <h2 className="text-2xl font-semibold ">
            {getText(content.decisionProcess.title)}
          </h2>
        </div>

        <h3 className="text-lg font-medium text-gray-800 mb-2">
          {getText(content.decisionProcess.subtitle)}
        </h3>
        <p className="text-gray-600 mb-4">
          {getText(content.decisionProcess.act)}
        </p>

        {content.decisionProcess.process &&
        content.decisionProcess.process.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
                    {language === "mr" ? "कामाचे स्वरुप" : "Work Type"}
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
                    {language === "mr" ? "कालावधी" : "Timeline"}
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
                    {language === "mr"
                      ? "जबाबदार अधिकारी"
                      : "Responsible Officer"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.decisionProcess.process.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-2 px-4 border-b border-gray-200">
                      {getText(item.workType)}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {getText(item.timeline)}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {getText(item.responsible)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No decision process data available
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizationalChart;
