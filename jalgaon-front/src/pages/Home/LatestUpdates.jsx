import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const LatestUpdates = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Bilingual content
  const content = {
    title: {
      en: "Latest Updates",
      mr: "नवीनतम अद्यतने",
    },
    viewAll: {
      en: "View All",
      mr: "सर्व पहा",
    },
    readMore: {
      en: "Read More",
      mr: "अधिक वाचा",
    },
    updatesData: [
      {
        id: 1,
        title: {
          en: "District Annual Plan 2023-24 Approved",
          mr: "जिल्हा वार्षिक योजना 2023-24 मंजूर",
        },
        date: "15 March 2023",
        summary: {
          en: "The District Planning Committee has approved the annual development plan for the fiscal year 2023-24 with a budget of ₹250 crores.",
          mr: "जिल्हा नियोजन समितीने 250 कोटी रुपयांच्या बजेटसह 2023-24 च्या आर्थिक वर्षासाठी वार्षिक विकास योजना मंजूर केली आहे.",
        },
      },
      {
        id: 2,
        title: {
          en: "District Annual Plan 2023-24 Approved",
          mr: "जिल्हा वार्षिक योजना 2023-24 मंजूर",
        },
        date: "15 March 2023",
        summary: {
          en: "The District Planning Committee has approved the annual development plan for the fiscal year 2023-24 with a budget of ₹250 crores.",
          mr: "जिल्हा नियोजन समितीने 250 कोटी रुपयांच्या बजेटसह 2023-24 च्या आर्थिक वर्षासाठी वार्षिक विकास योजना मंजूर केली आहे.",
        },
      },
      {
        id: 3,
        title: {
          en: "District Annual Plan 2023-24 Approved",
          mr: "जिल्हा वार्षिक योजना 2023-24 मंजूर",
        },
        date: "15 March 2023",
        summary: {
          en: "The District Planning Committee has approved the annual development plan for the fiscal year 2023-24 with a budget of ₹250 crores.",
          mr: "जिल्हा नियोजन समितीने 250 कोटी रुपयांच्या बजेटसह 2023-24 च्या आर्थिक वर्षासाठी वार्षिक विकास योजना मंजूर केली आहे.",
        },
      },
      {
        id: 4,
        title: {
          en: "District Annual Plan 2023-24 Approved",
          mr: "जिल्हा वार्षिक योजना 2023-24 मंजूर",
        },
        date: "15 March 2023",
        summary: {
          en: "The District Planning Committee has approved the annual development plan for the fiscal year 2023-24 with a budget of ₹250 crores.",
          mr: "जिल्हा नियोजन समितीने 250 कोटी रुपयांच्या बजेटसह 2023-24 च्या आर्थिक वर्षासाठी वार्षिक विकास योजना मंजूर केली आहे.",
        },
      },
      {
        id: 5,
        title: {
          en: "District Annual Plan 2023-24 Approved",
          mr: "जिल्हा वार्षिक योजना 2023-24 मंजूर",
        },
        date: "15 March 2023",
        summary: {
          en: "The District Planning Committee has approved the annual development plan for the fiscal year 2023-24 with a budget of ₹250 crores.",
          mr: "जिल्हा नियोजन समितीने 250 कोटी रुपयांच्या बजेटसह 2023-24 च्या आर्थिक वर्षासाठी वार्षिक विकास योजना मंजूर केली आहे.",
        },
      },
      {
        id: 6,
        title: {
          en: "District Annual Plan 2023-24 Approved",
          mr: "जिल्हा वार्षिक योजना 2023-24 मंजूर",
        },
        date: "15 March 2023",
        summary: {
          en: "The District Planning Committee has approved the annual development plan for the fiscal year 2023-24 with a budget of ₹250 crores.",
          mr: "जिल्हा नियोजन समितीने 250 कोटी रुपयांच्या बजेटसह 2023-24 च्या आर्थिक वर्षासाठी वार्षिक विकास योजना मंजूर केली आहे.",
        },
      },
    ],
  };

  const getText = (item, isUpdate = false) => {
    if (!item) return "";
    if (isUpdate) {
      return item.title?.[language] || item.title?.en || "";
    }
    return item[language] || item?.en || "";
  };

  // Get only the first 5 updates
  const latestUpdates = content.updatesData.slice(0, 5);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-800"
          >
            {getText(content.title)}
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/updates")} // Navigate to AllUpdates page
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            {getText(content.viewAll)}
            <ArrowRight className="ml-1" size={16} />
          </motion.button>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {latestUpdates.map((update) => (
            <motion.div
              key={update.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-all cursor-pointer"
              onClick={() => navigate(`/updates/${update.id}`)}
            >
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar size={16} className="mr-2" />
                <span className="text-xs md:text-sm">{update.date}</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-800">
                {getText(update, true)}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {getText(update.summary)}
              </p>
              <div className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                {getText(content.readMore)}
                <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestUpdates;
