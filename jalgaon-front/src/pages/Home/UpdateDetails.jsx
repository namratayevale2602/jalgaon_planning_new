import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateDetails = () => {
  const { language } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();

  // Bilingual content
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
      content: {
        en: [
          "The District Annual Plan for 2023-24 was approved in the meeting held on 15th March 2023.",
          "Total budget allocation is ₹250 crores with focus on infrastructure development (40%), education (25%), healthcare (20%), and agriculture (15%).",
          "Key projects include construction of 50 km rural roads, upgradation of 10 primary health centers, and establishment of 5 new schools in tribal areas.",
          "The plan emphasizes on women empowerment schemes and skill development programs for youth.",
        ],
        mr: [
          "15 मार्च 2023 रोजी झालेल्या बैठकीत 2023-24 साठी जिल्हा वार्षिक योजना मंजूर करण्यात आली.",
          "एकूण बजेट वाटप 250 कोटी रुपये आहे ज्यामध्ये पायाभूत सुविधा विकास (40%), शिक्षण (25%), आरोग्यसेवा (20%) आणि शेती (15%) यावर भर देण्यात आला आहे.",
          "मुख्य प्रकल्पांमध्ये 50 किमी ग्रामीण रस्त्यांचे बांधकाम, 10 प्राथमिक आरोग्य केंद्रांचे उन्नयन आणि आदिवासी भागात 5 नवीन शाळा स्थापन करणे यांचा समावेश आहे.",
          "योजनेत महिला सक्षमीकरण योजना आणि तरुणांसाठी कौशल्य विकास कार्यक्रमांवर भर देण्यात आला आहे.",
        ],
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
      content: {
        en: [
          "The District Annual Plan for 2023-24 was approved in the meeting held on 15th March 2023.",
          "Total budget allocation is ₹250 crores with focus on infrastructure development (40%), education (25%), healthcare (20%), and agriculture (15%).",
          "Key projects include construction of 50 km rural roads, upgradation of 10 primary health centers, and establishment of 5 new schools in tribal areas.",
          "The plan emphasizes on women empowerment schemes and skill development programs for youth.",
        ],
        mr: [
          "15 मार्च 2023 रोजी झालेल्या बैठकीत 2023-24 साठी जिल्हा वार्षिक योजना मंजूर करण्यात आली.",
          "एकूण बजेट वाटप 250 कोटी रुपये आहे ज्यामध्ये पायाभूत सुविधा विकास (40%), शिक्षण (25%), आरोग्यसेवा (20%) आणि शेती (15%) यावर भर देण्यात आला आहे.",
          "मुख्य प्रकल्पांमध्ये 50 किमी ग्रामीण रस्त्यांचे बांधकाम, 10 प्राथमिक आरोग्य केंद्रांचे उन्नयन आणि आदिवासी भागात 5 नवीन शाळा स्थापन करणे यांचा समावेश आहे.",
          "योजनेत महिला सक्षमीकरण योजना आणि तरुणांसाठी कौशल्य विकास कार्यक्रमांवर भर देण्यात आला आहे.",
        ],
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
      content: {
        en: [
          "The District Annual Plan for 2023-24 was approved in the meeting held on 15th March 2023.",
          "Total budget allocation is ₹250 crores with focus on infrastructure development (40%), education (25%), healthcare (20%), and agriculture (15%).",
          "Key projects include construction of 50 km rural roads, upgradation of 10 primary health centers, and establishment of 5 new schools in tribal areas.",
          "The plan emphasizes on women empowerment schemes and skill development programs for youth.",
        ],
        mr: [
          "15 मार्च 2023 रोजी झालेल्या बैठकीत 2023-24 साठी जिल्हा वार्षिक योजना मंजूर करण्यात आली.",
          "एकूण बजेट वाटप 250 कोटी रुपये आहे ज्यामध्ये पायाभूत सुविधा विकास (40%), शिक्षण (25%), आरोग्यसेवा (20%) आणि शेती (15%) यावर भर देण्यात आला आहे.",
          "मुख्य प्रकल्पांमध्ये 50 किमी ग्रामीण रस्त्यांचे बांधकाम, 10 प्राथमिक आरोग्य केंद्रांचे उन्नयन आणि आदिवासी भागात 5 नवीन शाळा स्थापन करणे यांचा समावेश आहे.",
          "योजनेत महिला सक्षमीकरण योजना आणि तरुणांसाठी कौशल्य विकास कार्यक्रमांवर भर देण्यात आला आहे.",
        ],
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
      content: {
        en: [
          "The District Annual Plan for 2023-24 was approved in the meeting held on 15th March 2023.",
          "Total budget allocation is ₹250 crores with focus on infrastructure development (40%), education (25%), healthcare (20%), and agriculture (15%).",
          "Key projects include construction of 50 km rural roads, upgradation of 10 primary health centers, and establishment of 5 new schools in tribal areas.",
          "The plan emphasizes on women empowerment schemes and skill development programs for youth.",
        ],
        mr: [
          "15 मार्च 2023 रोजी झालेल्या बैठकीत 2023-24 साठी जिल्हा वार्षिक योजना मंजूर करण्यात आली.",
          "एकूण बजेट वाटप 250 कोटी रुपये आहे ज्यामध्ये पायाभूत सुविधा विकास (40%), शिक्षण (25%), आरोग्यसेवा (20%) आणि शेती (15%) यावर भर देण्यात आला आहे.",
          "मुख्य प्रकल्पांमध्ये 50 किमी ग्रामीण रस्त्यांचे बांधकाम, 10 प्राथमिक आरोग्य केंद्रांचे उन्नयन आणि आदिवासी भागात 5 नवीन शाळा स्थापन करणे यांचा समावेश आहे.",
          "योजनेत महिला सक्षमीकरण योजना आणि तरुणांसाठी कौशल्य विकास कार्यक्रमांवर भर देण्यात आला आहे.",
        ],
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
      content: {
        en: [
          "The District Annual Plan for 2023-24 was approved in the meeting held on 15th March 2023.",
          "Total budget allocation is ₹250 crores with focus on infrastructure development (40%), education (25%), healthcare (20%), and agriculture (15%).",
          "Key projects include construction of 50 km rural roads, upgradation of 10 primary health centers, and establishment of 5 new schools in tribal areas.",
          "The plan emphasizes on women empowerment schemes and skill development programs for youth.",
        ],
        mr: [
          "15 मार्च 2023 रोजी झालेल्या बैठकीत 2023-24 साठी जिल्हा वार्षिक योजना मंजूर करण्यात आली.",
          "एकूण बजेट वाटप 250 कोटी रुपये आहे ज्यामध्ये पायाभूत सुविधा विकास (40%), शिक्षण (25%), आरोग्यसेवा (20%) आणि शेती (15%) यावर भर देण्यात आला आहे.",
          "मुख्य प्रकल्पांमध्ये 50 किमी ग्रामीण रस्त्यांचे बांधकाम, 10 प्राथमिक आरोग्य केंद्रांचे उन्नयन आणि आदिवासी भागात 5 नवीन शाळा स्थापन करणे यांचा समावेश आहे.",
          "योजनेत महिला सक्षमीकरण योजना आणि तरुणांसाठी कौशल्य विकास कार्यक्रमांवर भर देण्यात आला आहे.",
        ],
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
      content: {
        en: [
          "The District Annual Plan for 2023-24 was approved in the meeting held on 15th March 2023.",
          "Total budget allocation is ₹250 crores with focus on infrastructure development (40%), education (25%), healthcare (20%), and agriculture (15%).",
          "Key projects include construction of 50 km rural roads, upgradation of 10 primary health centers, and establishment of 5 new schools in tribal areas.",
          "The plan emphasizes on women empowerment schemes and skill development programs for youth.",
        ],
        mr: [
          "15 मार्च 2023 रोजी झालेल्या बैठकीत 2023-24 साठी जिल्हा वार्षिक योजना मंजूर करण्यात आली.",
          "एकूण बजेट वाटप 250 कोटी रुपये आहे ज्यामध्ये पायाभूत सुविधा विकास (40%), शिक्षण (25%), आरोग्यसेवा (20%) आणि शेती (15%) यावर भर देण्यात आला आहे.",
          "मुख्य प्रकल्पांमध्ये 50 किमी ग्रामीण रस्त्यांचे बांधकाम, 10 प्राथमिक आरोग्य केंद्रांचे उन्नयन आणि आदिवासी भागात 5 नवीन शाळा स्थापन करणे यांचा समावेश आहे.",
          "योजनेत महिला सक्षमीकरण योजना आणि तरुणांसाठी कौशल्य विकास कार्यक्रमांवर भर देण्यात आला आहे.",
        ],
      },
    },
    // ... other update objects
  ];

  const getText = (item, isUpdate = false) => {
    if (!item) return ""; // Handle undefined/null items

    if (isUpdate) {
      // For update objects, safely access title properties
      return item.title?.[language] || item.title?.en || "";
    }

    // For regular bilingual objects
    return item[language] || item?.en || "";
  };

  const update = updatesData.find((item) => item.id === parseInt(id));

  if (!update) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">
          {language === "mr" ? "अद्यतन सापडले नाही" : "Update not found"}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Back button */}
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 md:mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          <span className="font-medium">
            {language === "mr" ? "मागे जा" : "Go Back"}
          </span>
        </motion.button>

        {/* Update content */}
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
        >
          <div className="flex items-center text-gray-500 mb-4">
            <Calendar className="mr-2" size={18} />
            <span className="text-sm md:text-base">{update.date}</span>
          </div>

          <motion.h1
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            whileHover={{ color: "#1e40af" }}
            transition={{ duration: 0.3 }}
          >
            {getText(update, true)}
          </motion.h1>

          <motion.div
            className="prose max-w-none mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              {getText(update.summary)}
            </p>

            <div className="space-y-4">
              {(update.content[language] || update.content.en)?.map(
                (paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                )
              )}
            </div>
          </motion.div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex items-center text-gray-500">
              <Clock className="mr-2" size={18} />
              <span className="text-sm md:text-base">
                {language === "mr"
                  ? "अंतिम अद्यतन: 15 मार्च 2023"
                  : "Last updated: 15 March 2023"}
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
};

export default UpdateDetails;
