import { motion } from "framer-motion";
import { FaBullseye, FaChartLine, FaHandsHelping } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const Objectives = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Objectives",
      mr: "उद्दिष्टे",
    },
    vision: {
      title: {
        en: "Vision Statement",
        mr: "दृष्टी विधान",
      },
      statement: {
        en: '"To achieve comprehensive and sustainable development of Jalgaon district through participatory planning, optimal resource utilization, and effective implementation of development programs."',
        mr: '"सहभागी नियोजन, इष्टतम संसाधन वापर आणि विकास कार्यक्रमांच्या प्रभावी अंमलबजावणीद्वारे जळगाव जिल्ह्याचा सर्वसमावेशक आणि शाश्वत विकास साध्य करणे."',
      },
    },
    objectivesTitle: {
      en: "Key Objectives",
      mr: "मुख्य उद्दिष्टे",
    },
    objectives: [
      {
        title: {
          en: "Integrated Planning",
          mr: "समन्वित नियोजन",
        },
        description: {
          en: "Consolidate plans of Panchayats and Municipalities for balanced development",
          mr: "संतुलित विकासासाठी पंचायत आणि नगरपालिकांच्या योजना एकत्रित करणे",
        },
        icon: <FaChartLine className="text-blue-600 text-2xl" />,
      },
      {
        title: {
          en: "Resource Optimization",
          mr: "संसाधन ऑप्टिमायझेशन",
        },
        description: {
          en: "Ensure efficient utilization of available resources and funds",
          mr: "उपलब्ध संसाधने आणि निधीचा कार्यक्षम वापर सुनिश्चित करणे",
        },
        icon: <FaBullseye className="text-blue-600 text-2xl" />,
      },
      {
        title: {
          en: "Public Participation",
          mr: "सार्वजनिक सहभाग",
        },
        description: {
          en: "Involve citizens in the planning process through consultations",
          mr: "सल्लामसलत द्वारे नागरिकांना नियोजन प्रक्रियेत सामील करणे",
        },
        icon: <FaHandsHelping className="text-blue-600 text-2xl" />,
      },
      {
        title: {
          en: "Sustainable Development",
          mr: "शाश्वत विकास",
        },
        description: {
          en: "Promote environmentally sustainable development practices",
          mr: "पर्यावरणीयदृष्ट्या शाश्वत विकास पद्धतींना प्रोत्साहन देणे",
        },
        icon: <FaChartLine className="text-blue-600 text-2xl" />,
      },
    ],
    strategicGoals: {
      title: {
        en: "Strategic Goals",
        mr: "रणनीतिक ध्येये",
      },
      items: {
        en: [
          "Prepare integrated district development plans annually",
          "Ensure convergence of various government schemes",
          "Monitor and evaluate plan implementation",
          "Address regional disparities in development",
          "Promote transparency and accountability in planning process",
        ],
        mr: [
          "दरवर्षी समन्वित जिल्हा विकास योजना तयार करणे",
          "विविध सरकारी योजनांचा एकत्रित वापर सुनिश्चित करणे",
          "योजना अंमलबजावणीचे निरीक्षण आणि मूल्यांकन करणे",
          "विकासातील प्रादेशिक विषमता दूर करणे",
          "नियोजन प्रक्रियेत पारदर्शकता आणि जबाबदारी प्रोत्साहित करणे",
        ],
      },
    },
  };

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
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          {getText(content.vision.title)}
        </h2>
        <p className="text-gray-700 mb-4">
          {getText(content.vision.statement)}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {getText(content.objectivesTitle)}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {content.objectives.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-start"
          >
            <div className="bg-blue-100 p-2 rounded-full mr-4">{item.icon}</div>
            <div>
              <h3 className="text-xl font-medium text-blue-700 mb-2">
                {getText(item.title)}
              </h3>
              <p className="text-gray-600">{getText(item.description)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          {getText(content.strategicGoals.title)}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {getText(content.strategicGoals.items).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Objectives;
