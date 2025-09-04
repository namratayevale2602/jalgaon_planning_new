import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const AllUpdates = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Same updates data as in LatestUpdates
  const updatesData = [
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
    // ... other update objects (include all updates here)
  ];

  const getText = (item, isUpdate = false) => {
    if (!item) return "";
    if (isUpdate) {
      return item.title?.[language] || item.title?.en || "";
    }
    return item[language] || item?.en || "";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-8 md:py-12"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            <span className="font-medium">
              {language === "mr" ? "मागे जा" : "Go Back"}
            </span>
          </motion.button>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {language === "mr" ? "सर्व अद्यतने" : "All Updates"}
          </h1>
        </div>

        {/* Updates list */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {updatesData.map((update) => (
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
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all cursor-pointer"
              onClick={() => navigate(`/updates/${update.id}`)}
            >
              <div className="flex items-center text-gray-500 mb-3">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">{update.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {getText(update, true)}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {getText(update.summary)}
              </p>
              <div className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                {language === "mr" ? "अधिक वाचा" : "Read More"}
                <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AllUpdates;
