// import { useLanguage } from "../../contexts/LanguageContext";
// import {
//   FaFileAlt,
//   FaUsers,
//   FaLandmark,
//   FaHome,
//   FaBalanceScale,
//   FaUserTie,
//   FaUserShield,
//   FaBook,
//   FaClipboardList,
// } from "react-icons/fa";
// import {
//   HiDocumentText,
//   HiUserGroup,
//   HiCalendar,
//   HiOfficeBuilding,
// } from "react-icons/hi";
// import { MdGroups, MdOutlineAssignment } from "react-icons/md";

// const PlanningCommittee = () => {
//   const { language } = useLanguage();

//   // Bilingual content
//   const content = {
//     title: {
//       en: "District Planning Committee - Jalgaon",
//       mr: "जिल्हा नियोजन समिती - जळगाव",
//     },
//     intro: {
//       en: "Constituted under the Maharashtra District Planning Committee (Structure and Functions) Act, 1998 to consolidate plans prepared by Panchayats and Municipalities and prepare a draft development plan for the entire district.",
//       mr: "महाराष्ट्र जिल्हा नियोजन समिती (रचना व कामे) अधिनियम, १९९८ अंतर्गत पंचायती व नगरपालिकांनी तयार केलेल्या योजना एकत्रित करण्यासाठी व संपूर्ण जिल्ह्यासाठी विकास योजनेचा मसुदा तयार करण्यासाठी स्थापन.",
//     },
//     structureTitle: {
//       en: "Committee Structure as per Maharashtra Act No. XXIV of 1998",
//       mr: "महाराष्ट्र अधिनियम क्रमांक XXIV of 1998 नुसार समिती रचना",
//     },
//     structure: {
//       en: [
//         "Total Members: 50",
//         "1. District Guardian Minister (Chairperson) - 1",
//         "2. Zilla Parishad President - 1",
//         "3. District Collector (Ex-Officio Secretary) - 1",
//         "4. Members nominated by State Government - 40",
//         "5. Special invitees with planning expertise - 10",
//         "6. MPs/MLAs from the district - 16",
//         "7. Divisional Commissioner - 1",
//         "8. Special Officer (Planning)/Deputy Commissioner (Planning) - 1",
//         "9. District Planning Officer - 1",
//       ],
//       mr: [
//         "एकूण सदस्य: 50",
//         "1. जिल्हा प्रभारी मंत्री (अध्यक्ष) - 1",
//         "2. जिल्हा परिषद अध्यक्ष - 1",
//         "3. जिल्हाधिकारी (पदेन सचिव) - 1",
//         "4. राज्य शासनाने नामनिर्देशित सदस्य - 40",
//         "5. नियोजन तज्ज्ञ विशेष निमंत्रित - 10",
//         "6. जिल्ह्यातील खासदार/आमदार - 16",
//         "7. विभागीय आयुक्त - 1",
//         "8. विशेष अधिकारी (नियोजन)/उपायुक्त (नियोजन) - 1",
//         "9. जिल्हा नियोजन अधिकारी - 1",
//       ],
//     },
//     compositionDetails: {
//       en: [
//         "Four-fifths members (40) to be elected from Zilla Parishad and Municipal Councillors",
//         "Reservation for SC/ST/OBC and women as per population proportion",
//         "One-third of reserved seats for SC/ST to be reserved for women",
//         "MPs/MLAs have right to attend meetings as special invitees",
//       ],
//       mr: [
//         "चार-पंचमांश सदस्य (40) जिल्हा परिषद व नगरपालिका सदस्यांमधून निवडले जातील",
//         "अनुसूचित जाती/जमाती/मागासवर्ग आणि महिलांसाठी लोकसंख्येच्या प्रमाणात आरक्षण",
//         "अनुसूचित जाती/जमातीच्या आरक्षित जागांपैकी एक तृतीयांश महिलांसाठी",
//         "खासदार/आमदारांना विशेष निमंत्रित म्हणून बैठकींना उपस्थित राहण्याचा अधिकार",
//       ],
//     },
//     functionsTitle: {
//       en: "Functions and Responsibilities",
//       mr: "कार्ये आणि जबाबदाऱ्या",
//     },
//     functions: {
//       en: [
//         "Consolidate plans prepared by Panchayats and Municipalities",
//         "Prepare draft development plan for the entire district",
//         "Coordinate between rural and urban planning bodies",
//         "Ensure balanced regional development",
//         "Monitor implementation of district plans",
//         "Allocate resources for district-level schemes",
//         "Review progress of ongoing projects",
//         "Submit annual development reports to State Government",
//       ],
//       mr: [
//         "पंचायती आणि नगरपालिकांनी तयार केलेल्या योजनांचे एकत्रीकरण",
//         "संपूर्ण जिल्ह्यासाठी विकास योजनेचा मसुदा तयार करणे",
//         "ग्रामीण आणि शहरी नियोजन संस्थांमध्ये समन्वय साधणे",
//         "संतुलित प्रादेशिक विकास सुनिश्चित करणे",
//         "जिल्हा योजनांच्या अंमलबजावणीचे निरीक्षण",
//         "जिल्हा स्तरीय योजनांसाठी संसाधनांचे वाटप",
//         "चालू प्रकल्पांच्या प्रगतीचे पुनरावलोकन",
//         "राज्य शासनाकडे वार्षिक विकास अहवाल सादर करणे",
//       ],
//     },
//     documentsTitle: {
//       en: "Important Documents",
//       mr: "महत्त्वाची दस्तऐवज",
//     },
//     act1998: {
//       en: "Maharashtra District Planning Committee (Structure and Functions) Act 1998",
//       mr: "महाराष्ट्र जिल्हा नियोजन समिती (रचना व कामे) अधिनियम 1998",
//     },
//     jalgaonStructure: {
//       en: "Jalgaon District Planning Committee Structure Chart",
//       mr: "जिल्हा नियोजन समिती जळगाव रचना तक्ता",
//     },
//     electionRules: {
//       en: "Maharashtra District Planning Committee (Election) Rules, 1999",
//       mr: "महाराष्ट्र जिल्हा नियोजन समिती (निवडणूक) नियम, १९९९",
//     },
//   };

//   const getText = (item) => {
//     return item[language] || item.en;
//   };

//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             {getText(content.title)}
//           </h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             {getText(content.intro)}
//           </p>
//         </div>

//         {/* Committee Structure Section */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <HiOfficeBuilding className="mr-2 text-blue-600" />
//             {getText(content.structureTitle)}
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Main Structure */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
//                 <MdGroups className="mr-2 text-blue-500" />
//                 {language === "en" ? "Composition" : "रचना"}
//               </h3>
//               <ul className="space-y-3">
//                 {getText(content.structure).map((item, index) => (
//                   <li key={index} className="flex items-start">
//                     <FaUserTie className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Composition Details */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
//                 <FaClipboardList className="mr-2 text-blue-500" />
//                 {language === "en" ? "Composition Details" : "रचना तपशील"}
//               </h3>
//               <ul className="space-y-3">
//                 {getText(content.compositionDetails).map((item, index) => (
//                   <li key={index} className="flex items-start">
//                     <FaBook className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Functions Section */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <HiCalendar className="mr-2 text-blue-600" />
//             {getText(content.functionsTitle)}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {getText(content.functions).map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-start bg-blue-50 p-4 rounded-lg"
//               >
//                 <MdOutlineAssignment className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
//                 <span className="text-gray-700">{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlanningCommittee;
