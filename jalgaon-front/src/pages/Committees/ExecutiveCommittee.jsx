// import { motion } from "framer-motion";
// import { FaClipboardList, FaChartLine, FaUsers } from "react-icons/fa";

// const ExecutiveCommittee = () => {
//   const reviews = [
//     {
//       month: "June 2023",
//       projectsReviewed: 18,
//       issuesResolved: 12,
//       decisions: [
//         "Approved revised estimates for 5 projects",
//         "Cleared pending bills worth ₹2.8 Cr",
//         "Directed expediting of road projects",
//       ],
//     },
//     {
//       month: "May 2023",
//       projectsReviewed: 15,
//       issuesResolved: 8,
//       decisions: [
//         "Constituted technical audit team",
//         "Revised implementation timeline for 3 projects",
//         "Approved new procurement guidelines",
//       ],
//     },
//     {
//       month: "April 2023",
//       projectsReviewed: 22,
//       issuesResolved: 15,
//       decisions: [
//         "Blacklisted 2 contractors for poor performance",
//         "Allocated additional funds for health projects",
//         "Initiated social audit process",
//       ],
//     },
//   ];

//   const members = [
//     "District Planning Officer (Chairperson)",
//     "Chief Executive Officer, ZP",
//     "Superintending Engineer, PWD",
//     "Executive Engineer, Water Resources",
//     "District Health Officer",
//     "District Education Officer",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             Executive Committee
//           </h1>
//           <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
//         </motion.div>

//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
//             <FaUsers className="mr-2" /> Committee Composition
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {members.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-blue-50 p-3 rounded-lg"
//               >
//                 <p className="text-gray-800">{member}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
//             <FaClipboardList className="mr-2" /> Monthly Progress Reviews
//           </h2>

//           <div className="space-y-6">
//             {reviews.map((review, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="border rounded-lg p-4 hover:shadow-md transition"
//               >
//                 <div className="flex justify-between items-center mb-3">
//                   <h3 className="text-xl font-medium text-blue-700">
//                     {review.month}
//                   </h3>
//                   <div className="flex space-x-4">
//                     <div className="text-center">
//                       <p className="text-sm text-gray-500">Projects Reviewed</p>
//                       <p className="text-lg font-bold text-gray-800">
//                         {review.projectsReviewed}
//                       </p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-sm text-gray-500">Issues Resolved</p>
//                       <p className="text-lg font-bold text-gray-800">
//                         {review.issuesResolved}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <h4 className="font-medium text-gray-800 mb-2">
//                   Key Decisions:
//                 </h4>
//                 <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                   {review.decisions.map((decision, i) => (
//                     <li key={i}>{decision}</li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold text-blue-700 mb-4">
//               Meeting Frequency
//             </h2>
//             <div className="flex items-center">
//               <div className="bg-blue-100 p-3 rounded-full mr-4">
//                 <FaChartLine className="text-blue-600 text-xl" />
//               </div>
//               <div>
//                 <p className="text-gray-700">
//                   The Executive Committee meets{" "}
//                   <span className="font-bold">monthly</span> to review progress
//                   of all ongoing projects.
//                 </p>
//                 <p className="text-gray-600 mt-1">
//                   Emergency meetings can be convened as needed.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold text-blue-700 mb-4">
//               Responsibilities
//             </h2>
//             <ul className="list-disc pl-5 space-y-2 text-gray-700">
//               <li>Monitor project implementation</li>
//               <li>Resolve operational issues</li>
//               <li>Approve minor plan modifications</li>
//               <li>Review financial expenditures</li>
//               <li>Prepare reports for DPC</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExecutiveCommittee;
