import { motion } from "framer-motion";
import { FaRupeeSign, FaClipboardCheck, FaListOl } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const MPFunds = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "MP Local Area Development Funds",
      mr: "एमपी स्थानिक क्षेत्र विकास निधी",
    },
    guidelinesTitle: {
      en: "Guidelines",
      mr: "मार्गदर्शक तत्त्वे",
    },
    guidelines: [
      {
        title: {
          en: "Eligibility",
          mr: "पात्रता",
        },
        points: {
          en: [
            "Only public works projects eligible",
            "No private land acquisition",
            "Maximum 10% for administrative expenses",
          ],
          mr: [
            "फक्त सार्वजनिक बांधकाम प्रकल्प पात्र",
            "खाजगी जमीन संपादन नाही",
            "प्रशासकीय खर्चासाठी जास्तीत जास्त 10%",
          ],
        },
      },
      {
        title: {
          en: "Approval Process",
          mr: "मंजुरी प्रक्रिया",
        },
        points: {
          en: [
            "90-day mandatory approval timeline",
            "Technical scrutiny by planning officer",
            "DPC final approval required",
          ],
          mr: [
            "90-दिवसांची अनिवार्य मंजुरी मुदत",
            "नियोजन अधिकाऱ्याद्वारे तांत्रिक तपासणी",
            "DPC ची अंतिम मंजुरी आवश्यक",
          ],
        },
      },
      {
        title: {
          en: "Implementation",
          mr: "अंमलबजावणी",
        },
        points: {
          en: [
            "Execution through concerned departments",
            "Quarterly progress reports mandatory",
            "Social audit for works above ₹25 lakhs",
          ],
          mr: [
            "संबंधित विभागांद्वारे अंमलबजावणी",
            "तिमाही प्रगती अहवाल अनिवार्य",
            "25 लाख रुपयांपेक्षा जास्त कामांसाठी सामाजिक ऑडिट",
          ],
        },
      },
    ],
    projectsTitle: {
      en: "Approved Projects List (2023-24)",
      mr: "मंजूर प्रकल्प यादी (2023-24)",
    },
    projects: [
      {
        id: "MP-2023-112",
        name: {
          en: "School Building Renovation - Yaval",
          mr: "शाळा इमारत नूतनीकरण - यवळ",
        },
        amount: "₹50,00,000",
        status: {
          en: "Completed",
          mr: "पूर्ण",
        },
        mla: {
          en: "Smt. Meena Deshmukh",
          mr: "सौ. मीना देशमुख",
        },
      },

      {
        id: "MP-2023-095",
        name: {
          en: "Community Hall - Bhusawal",
          mr: "सामुदायिक भवन - भुसावळ",
        },
        amount: "₹40,00,000",
        status: {
          en: "Ongoing",
          mr: "चालू",
        },
        mla: {
          en: "Shri. Prakash Pawar",
          mr: "श्री. प्रकाश पवार",
        },
      },
    ],
    notesTitle: {
      en: "Important Notes",
      mr: "महत्त्वाची सूचना",
    },
    notes: {
      en: [
        "All proposals must be submitted through the online portal",
        "90-day approval timeline strictly enforced",
        "Fund utilization certificates must be submitted within 3 months of completion",
        "Photographic evidence of works mandatory",
      ],
      mr: [
        "सर्व प्रस्ताव ऑनलाइन पोर्टलद्वारे सादर करणे आवश्यक",
        "90-दिवसांची मंजुरी मुदत काटेकोरपणे लागू",
        "पूर्ण झाल्यानंतर 3 महिन्यांत निधी वापर प्रमाणपत्र सादर करणे आवश्यक",
        "कामांचा फोटोग्राफिक पुरावा अनिवार्य",
      ],
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

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaClipboardCheck className="mr-2" />{" "}
            {getText(content.guidelinesTitle)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.guidelines.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="text-lg font-medium text-blue-800 mb-3">
                  {getText(section.title)}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {getText(section.points).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
              <FaListOl className="mr-2" /> {getText(content.projectsTitle)}
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      {language === "mr" ? "प्रकल्प आयडी" : "Project ID"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      {language === "mr" ? "प्रकल्प नाव" : "Project Name"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      {language === "mr" ? "रक्कम" : "Amount"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      {language === "mr" ? "स्थिती" : "Status"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      MLA/MP
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {content.projects.map((project, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-blue-50 transition"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {getText(project.name)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {project.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            project.status.en === "Completed"
                              ? "bg-green-100 text-green-800"
                              : project.status.en === "Ongoing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {getText(project.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(project.mla)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            {getText(content.notesTitle)}
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {getText(content.notes).map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MPFunds;
