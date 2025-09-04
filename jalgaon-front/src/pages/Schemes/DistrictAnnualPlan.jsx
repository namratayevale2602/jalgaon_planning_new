import { motion } from "framer-motion";
import { FaCalendarAlt, FaFilePdf, FaChartLine } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const DistrictAnnualPlan = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "District Annual Plan",
      mr: "जिल्हा वार्षिक योजना",
    },
    currentPlan: {
      title: {
        en: "Current Year Plan (2023-2024)",
        mr: "चालू वर्षाची योजना (2023-2024)",
      },
      budgetLabel: {
        en: "Total Budget",
        mr: "एकूण अर्थसंकल्प",
      },
      focusLabel: {
        en: "Focus Sectors",
        mr: "लक्ष्य क्षेत्रे",
      },
      focusAreas: {
        en: [
          "Rural Infrastructure Development",
          "Education & Skill Development",
          "Healthcare Facilities",
          "Agricultural Support",
          "Tourism Promotion",
        ],
        mr: [
          "ग्रामीण पायाभूत सुविधा विकास",
          "शिक्षण आणि कौशल्य विकास",
          "आरोग्य सुविधा",
          "कृषी समर्थन",
          "पर्यटन प्रोत्साहन",
        ],
      },
      downloadText: {
        en: "Download Full Plan (PDF)",
        mr: "संपूर्ण योजना डाउनलोड करा (PDF)",
      },
    },
    archivesTitle: {
      en: "Plan Archives",
      mr: "योजना संग्रह",
    },
    viewDetails: {
      en: "View Details",
      mr: "तपशील पहा",
    },
    processTitle: {
      en: "Plan Preparation Process",
      mr: "योजना तयारी प्रक्रिया",
    },
    processSteps: [
      {
        title: {
          en: "Proposal Collection",
          mr: "प्रस्ताव संकलन",
        },
        description: {
          en: "Collect development proposals from Gram Panchayats and Municipalities",
          mr: "ग्रामपंचायत आणि नगरपालिकांकडून विकास प्रस्ताव गोळा करणे",
        },
      },
      {
        title: {
          en: "Priority Setting",
          mr: "प्राधान्यक्रम निश्चित करणे",
        },
        description: {
          en: "Identify priority sectors based on district needs assessment",
          mr: "जिल्ह्याच्या गरजा मूल्यांकनावर आधारित प्राधान्य क्षेत्रे ओळखणे",
        },
      },
      {
        title: {
          en: "Resource Allocation",
          mr: "संसाधन वाटप",
        },
        description: {
          en: "Allocate funds across sectors as per state guidelines",
          mr: "राज्य मार्गदर्शक तत्त्वांनुसार विविध क्षेत्रांमध्ये निधी वाटप करणे",
        },
      },
      {
        title: {
          en: "Approval",
          mr: "मंजुरी",
        },
        description: {
          en: "Submit final plan to District Planning Committee for approval",
          mr: "अंतिम योजना जिल्हा नियोजन समितीकडे मंजुरीसाठी सादर करणे",
        },
      },
      {
        title: {
          en: "Implementation",
          mr: "अंमलबजावणी",
        },
        description: {
          en: "Execute approved projects through line departments",
          mr: "मंजूर प्रकल्प संबंधित विभागांद्वारे अंमलात आणणे",
        },
      },
    ],
  };

  const currentPlanData = {
    year: "2023-2024",
    budget: "₹1,250 Crores",
    pdfLink: "#",
  };

  const archivedPlans = [
    { year: "2022-2023", budget: "₹1,100 Crores" },
    { year: "2021-2022", budget: "₹950 Crores" },
    { year: "2020-2021", budget: "₹850 Crores" },
    { year: "2019-2020", budget: "₹800 Crores" },
  ];

  const getText = (item) => {
    if (Array.isArray(item)) {
      return item[language] || item.en;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
              <FaCalendarAlt className="mr-2" />{" "}
              {getText(content.currentPlan.title)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">
                  {getText(content.currentPlan.budgetLabel)}
                </p>
                <p className="text-2xl font-bold text-gray-800">
                  {currentPlanData.budget}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700 font-medium">
                  {getText(content.currentPlan.focusLabel)}
                </p>
                <p className="text-lg font-medium text-gray-800">
                  {getText(content.currentPlan.focusAreas).length}{" "}
                  {language === "mr" ? "प्राधान्य क्षेत्रे" : "Priority Areas"}
                </p>
              </div>
            </div>

            <h3 className="font-medium text-gray-800 mb-2">
              {language === "mr"
                ? "मुख्य लक्ष्य क्षेत्रे:"
                : "Key Focus Areas:"}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
              {getText(content.currentPlan.focusAreas).map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>

            <a
              href={currentPlanData.pdfLink}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FaFilePdf className="mr-2" />{" "}
              {getText(content.currentPlan.downloadText)}
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {getText(content.archivesTitle)}
            </h2>
            <div className="space-y-3">
              {archivedPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b pb-3 last:border-b-0"
                >
                  <h3 className="font-medium text-gray-800">{plan.year}</h3>
                  <p className="text-sm text-gray-600">
                    {language === "mr" ? "अर्थसंकल्प:" : "Budget:"}{" "}
                    {plan.budget}
                  </p>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    {getText(content.viewDetails)}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaChartLine className="mr-2" /> {getText(content.processTitle)}
          </h2>

          <div className="relative">
            <div className="absolute left-4 h-full w-0.5 bg-blue-100 md:left-1/2 md:-ml-1"></div>

            <div className="space-y-8">
              {content.processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 p-4 rounded-lg shadow-sm border ${
                      index % 2 === 0
                        ? "md:mr-8 bg-blue-50 border-blue-100"
                        : "md:ml-8 bg-green-50 border-green-100"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          index % 2 === 0
                            ? "bg-blue-600 text-white"
                            : "bg-green-600 text-white"
                        } font-bold mr-3`}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {getText(step.title)}
                      </h3>
                    </div>
                    <p className="mt-2 text-gray-700 pl-11">
                      {getText(step.description)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistrictAnnualPlan;
