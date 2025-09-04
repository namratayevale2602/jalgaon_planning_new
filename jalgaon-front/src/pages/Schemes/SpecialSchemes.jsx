import { motion } from "framer-motion";
import { FaUmbrellaBeach, FaMountain, FaBuilding } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const SpecialSchemes = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Special Development Schemes",
      mr: "विशेष विकास योजना",
    },
    subtitle: {
      en: "Key initiatives for district development",
      mr: "जिल्हा विकासासाठी प्रमुख उपक्रम",
    },
    implementationStatus: {
      en: "Implementation Status",
      mr: "अंमलबजावणी स्थिती",
    },
    tableHeaders: {
      scheme: { en: "Scheme", mr: "योजना" },
      physicalProgress: { en: "Physical Progress", mr: "भौतिक प्रगती" },
      financialProgress: { en: "Financial Progress", mr: "आर्थिक प्रगती" },
      keyAchievements: { en: "Key Achievements", mr: "प्रमुख यश" },
    },
    schemes: [
      {
        name: {
          en: "Tourism Development Scheme",
          mr: "पर्यटन विकास योजना",
        },
        marathi: {
          en: "",
          mr: "पर्यटन विकास योजना",
        },
        icon: <FaUmbrellaBeach className="text-blue-600 text-2xl" />,
        description: {
          en: "Development of tourism infrastructure and promotion of local heritage",
          mr: "पर्यटन पायाभूत सुविधांचा विकास आणि स्थानिक वारसा प्रोत्साहन",
        },
        features: {
          en: [
            "Heritage site restoration",
            "Tourist facility development",
            "Local guide training",
            "Promotional campaigns",
          ],
          mr: [
            "वारसा स्थळ पुनर्संचयन",
            "पर्यटन सुविधा विकास",
            "स्थानिक मार्गदर्शक प्रशिक्षण",
            "जाहिरात मोहीम",
          ],
        },
        budget: {
          en: "₹15 Crores (2023-24)",
          mr: "१५ कोटी रुपये (२०२३-२४)",
        },
        progress: {
          physical: "65%",
          financial: {
            en: "₹9.75 Cr utilized (65%)",
            mr: "९.७५ कोटी वापरले (६५%)",
          },
          achievements: {
            en: "5 heritage sites restored, 3 new tourist facilities",
            mr: "५ वारसा स्थळे पुनर्संचयित, ३ नवीन पर्यटन सुविधा",
          },
        },
      },
      {
        name: {
          en: "Hilly Area Development Program",
          mr: "डोंगराळ भाग विकास कार्यक्रम",
        },
        marathi: {
          en: "",
          mr: "डोंगराळ भाग विकास कार्यक्रम",
        },
        icon: <FaMountain className="text-blue-600 text-2xl" />,
        description: {
          en: "Special development initiatives for hilly and tribal areas",
          mr: "डोंगराळ आणि आदिवासी भागांसाठी विशेष विकास उपक्रम",
        },
        features: {
          en: [
            "Road connectivity improvement",
            "Water conservation projects",
            "Tribal welfare initiatives",
            "Eco-tourism promotion",
          ],
          mr: [
            "रस्ते कनेक्टिव्हिटी सुधारणा",
            "जलसंधारण प्रकल्प",
            "आदिवासी कल्याण उपक्रम",
            "इको-टुरिझम प्रोत्साहन",
          ],
        },
        budget: {
          en: "₹25 Crores (2023-24)",
          mr: "२५ कोटी रुपये (२०२३-२४)",
        },
        progress: {
          physical: "45%",
          financial: {
            en: "₹11.25 Cr utilized (45%)",
            mr: "११.२५ कोटी वापरले (४५%)",
          },
          achievements: {
            en: "32 km roads improved, 15 water conservation projects",
            mr: "३२ किमी रस्ते सुधारित, १५ जलसंधारण प्रकल्प",
          },
        },
      },
      {
        name: {
          en: "Statutory Board Projects",
          mr: "वैधानिक मंडळ प्रकल्प",
        },
        marathi: {
          en: "",
          mr: "वैधानिक मंडळ प्रकल्प",
        },
        icon: <FaBuilding className="text-blue-600 text-2xl" />,
        description: {
          en: "Special projects implemented through various statutory boards",
          mr: "विविध वैधानिक मंडळांद्वारे अंमलात आणलेले विशेष प्रकल्प",
        },
        features: {
          en: [
            "MSEDCL infrastructure",
            "Water supply projects",
            "Public health initiatives",
            "Urban development works",
          ],
          mr: [
            "एमएसईडीसीएल पायाभूत सुविधा",
            "पाणीपुरवठा प्रकल्प",
            "सार्वजनिक आरोग्य उपक्रम",
            "शहरी विकास कामे",
          ],
        },
        budget: {
          en: "₹35 Crores (2023-24)",
          mr: "३५ कोटी रुपये (२०२३-२४)",
        },
        progress: {
          physical: "30%",
          financial: {
            en: "₹10.5 Cr utilized (30%)",
            mr: "१०.५ कोटी वापरले (३०%)",
          },
          achievements: {
            en: "2 new water supply projects, 5 urban development works",
            mr: "२ नवीन पाणीपुरवठा प्रकल्प, ५ शहरी विकास कामे",
          },
        },
      },
    ],
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
          <p className="text-lg text-gray-600 mb-2">
            {getText(content.subtitle)}
          </p>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {content.schemes.map((scheme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {scheme.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-700">
                      {getText(scheme.name)}
                    </h2>
                    {language === "mr" && (
                      <p className="text-sm text-gray-500">
                        {getText(scheme.marathi)}
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  {getText(scheme.description)}
                </p>

                <h3 className="font-medium text-gray-800 mb-2">
                  {language === "en" ? "Key Features:" : "मुख्य वैशिष्ट्ये:"}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  {getText(scheme.features).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">
                      {language === "en"
                        ? "Annual Budget:"
                        : "वार्षिक अर्थसंकल्प:"}
                    </span>{" "}
                    {getText(scheme.budget)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            {getText(content.implementationStatus)}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    {getText(content.tableHeaders.scheme)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    {getText(content.tableHeaders.physicalProgress)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    {getText(content.tableHeaders.financialProgress)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    {getText(content.tableHeaders.keyAchievements)}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {content.schemes.map((scheme, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {getText(scheme.name)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`${
                            index === 0
                              ? "bg-blue-600"
                              : index === 1
                              ? "bg-green-600"
                              : "bg-yellow-500"
                          } h-2.5 rounded-full`}
                          style={{ width: scheme.progress.physical }}
                        ></div>
                      </div>
                      <span className="mt-1 block">
                        {scheme.progress.physical}{" "}
                        {language === "en" ? "completed" : "पूर्ण"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {getText(scheme.progress.financial)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {getText(scheme.progress.achievements)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSchemes;
