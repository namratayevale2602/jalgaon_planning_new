import { motion } from "framer-motion";
import { FaHandsHelping, FaFileAlt, FaListUl } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const AreaDevelop = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Area Development Schemes",
      mr: "क्षेत्र विकास योजना",
    },
    guidelinesTitle: {
      en: "Key Schemes",
      mr: "मुख्य योजना",
    },
    guidelines: [
      {
        title: {
          en: "Educational Support",
          mr: "शैक्षणिक सहाय्य",
        },
        points: {
          en: [
            "Pre-Matric Scholarships for minorities",
            "Post-Matric Scholarships",
            "Merit-cum-Means based scholarships",
          ],
          mr: [
            "अल्पसंख्याकांसाठी प्री-मॅट्रिक शिष्यवृत्ती",
            "पोस्ट-मॅट्रिक शिष्यवृत्ती",
            "मेरिट-कम-मीन्स आधारित शिष्यवृत्ती",
          ],
        },
      },
      {
        title: {
          en: "Economic Empowerment",
          mr: "आर्थिक सक्षमीकरण",
        },
        points: {
          en: [
            "Skill development programs",
            "Micro-credit financing",
            "Subsidy for small businesses",
          ],
          mr: [
            "कौशल्य विकास कार्यक्रम",
            "सूक्ष्म-क्रेडिट वित्तपुरवठा",
            "लघु व्यवसायांसाठी अनुदान",
          ],
        },
      },
      {
        title: {
          en: "Infrastructure Development",
          mr: "पायाभूत सुविधा विकास",
        },
        points: {
          en: [
            "Construction of hostels for minority students",
            "Community centers in minority areas",
            "Upgradation of madrasas",
          ],
          mr: [
            "अल्पसंख्याक विद्यार्थ्यांसाठी छात्रावास बांधकाम",
            "अल्पसंख्याक क्षेत्रातील सामुदायिक केंद्रे",
            "मदरसा उन्नयन",
          ],
        },
      },
    ],
    projectsTitle: {
      en: "Available Schemes (2023-24)",
      mr: "उपलब्ध योजना (2023-24)",
    },
    projects: [
      {
        id: "MIN-EDU-045",
        name: {
          en: "Pre-Matric Scholarship",
          mr: "प्री-मॅट्रिक शिष्यवृत्ती",
        },
        amount: {
          en: "Up to ₹10,000/year",
          mr: "₹10,000/वर्ष पर्यंत",
        },
        status: {
          en: "Open",
          mr: "सुरू",
        },
        department: {
          en: "Minority Welfare Department",
          mr: "अल्पसंख्याक कल्याण विभाग",
        },
      },
      {
        id: "MIN-ECO-112",
        name: {
          en: "Skill Development Grant",
          mr: "कौशल्य विकास अनुदान",
        },
        amount: {
          en: "Up to ₹25,000",
          mr: "₹25,000 पर्यंत",
        },
        status: {
          en: "Open",
          mr: "सुरू",
        },
        department: {
          en: "MSME Department",
          mr: "सूक्ष्म, लघु व मध्यम उद्योग विभाग",
        },
      },
      {
        id: "MIN-INF-078",
        name: {
          en: "Hostel Construction Grant",
          mr: "छात्रावास बांधकाम अनुदान",
        },
        amount: {
          en: "Up to ₹50 lakhs",
          mr: "50 लाख रुपये पर्यंत",
        },
        status: {
          en: "Closed",
          mr: "बंद",
        },
        department: {
          en: "Minority Welfare Department",
          mr: "अल्पसंख्याक कल्याण विभाग",
        },
      },
    ],
    notesTitle: {
      en: "Application Process",
      mr: "अर्ज प्रक्रिया",
    },
    notes: {
      en: [
        "Applications accepted through online portal only",
        "Document verification at district office required",
        "Income certificate mandatory for all schemes",
        "Processing time: 30-45 days",
      ],
      mr: [
        "फक्त ऑनलाइन पोर्टलद्वारे अर्ज स्वीकारले जातात",
        "जिल्हा कार्यालयात कागदपत्र पडताळणी आवश्यक",
        "सर्व योजनांसाठी उत्पन्न प्रमाणपत्र अनिवार्य",
        "प्रक्रिया वेळ: 30-45 दिवस",
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
          <div className="border-b-2 border-purple-100 w-20 mb-6"></div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
            <FaHandsHelping className="mr-2" />{" "}
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
                <h3 className="text-lg font-medium text-purple-800 mb-3">
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
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
              <FaListUl className="mr-2" /> {getText(content.projectsTitle)}
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                      {language === "mr" ? "योजना आयडी" : "Scheme ID"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                      {language === "mr" ? "योजना नाव" : "Scheme Name"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                      {language === "mr" ? "रक्कम" : "Amount"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                      {language === "mr" ? "स्थिती" : "Status"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                      {language === "mr" ? "विभाग" : "Department"}
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
                      className="hover:bg-purple-50 transition"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {getText(project.name)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(project.amount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            project.status.en === "Open"
                              ? "bg-green-100 text-green-800"
                              : project.status.en === "Closed"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {getText(project.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(project.department)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
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

export default AreaDevelop;
