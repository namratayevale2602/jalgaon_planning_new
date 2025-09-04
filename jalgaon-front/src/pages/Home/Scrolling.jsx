// import { useState, useEffect, useRef } from "react";

// const NoticesSection = () => {
//   const [notices] = useState([
//     {
//       id: 1,
//       title: "Annual General Meeting Announcement",
//       date: "2023-11-15",
//       type: "Meeting",
//     },
//     {
//       id: 2,
//       title: "Tender for Construction Work",
//       date: "2023-11-10",
//       type: "Tender",
//     },
//     {
//       id: 3,
//       title: "Holiday Notice: Diwali Celebration",
//       date: "2023-11-12",
//       type: "Notice",
//     },
//     {
//       id: 4,
//       title: "Infrastructure Development Tender",
//       date: "2023-11-05",
//       type: "Tender",
//     },
//     {
//       id: 5,
//       title: "Emergency Board Meeting",
//       date: "2023-11-08",
//       type: "Meeting",
//     },
//     {
//       id: 6,
//       title: "Office Closure Notice",
//       date: "2023-11-20",
//       type: "Notice",
//     },
//   ]);

//   const containerRef = useRef(null);
//   const scrollInterval = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const startScrolling = () => {
//       if (isHovered) return; // Pause when hovered

//       scrollInterval.current = setInterval(() => {
//         if (containerRef.current) {
//           const { scrollTop, scrollHeight, clientHeight } =
//             containerRef.current;
//           const atBottom = scrollHeight - (scrollTop + clientHeight) < 1;

//           if (atBottom) {
//             // When at bottom, scroll back to top instantly
//             containerRef.current.scrollTo({
//               top: 0,
//               behavior: "instant",
//             });
//           } else {
//             // Smooth scroll down
//             containerRef.current.scrollBy({
//               top: 1,
//               behavior: "smooth",
//             });
//           }
//         }
//       }, 50); // Adjust speed by changing this value
//     };

//     startScrolling();

//     return () => {
//       if (scrollInterval.current) {
//         clearInterval(scrollInterval.current);
//       }
//     };
//   }, [isHovered]);

//   const getBadgeColor = (type) => {
//     switch (type) {
//       case "Notice":
//         return "bg-blue-100 text-blue-800";
//       case "Tender":
//         return "bg-green-100 text-green-800";
//       case "Meeting":
//         return "bg-purple-100 text-purple-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
//         Latest Updates
//       </h2>

//       <div
//         ref={containerRef}
//         className="h-64 overflow-y-auto scrollbar-hide"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <ul className="space-y-3">
//           {notices.map((notice) => (
//             <li
//               key={notice.id}
//               className="p-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg border border-gray-100"
//             >
//               <div className="flex items-start justify-between">
//                 <div>
//                   <span
//                     className={`text-xs font-semibold px-2 py-1 rounded-full ${getBadgeColor(
//                       notice.type
//                     )}`}
//                   >
//                     {notice.type}
//                   </span>
//                   <h3 className="mt-2 text-lg font-medium text-gray-800">
//                     {notice.title}
//                   </h3>
//                 </div>
//                 <span className="text-sm text-gray-500 whitespace-nowrap">
//                   {new Date(notice.date).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                   })}
//                 </span>
//               </div>
//             </li>
//           ))}
//           {/* Duplicate items for seamless looping */}
//           {notices.map((notice) => (
//             <li
//               key={`duplicate-${notice.id}`}
//               className="p-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg border border-gray-100"
//             >
//               <div className="flex items-start justify-between">
//                 <div>
//                   <span
//                     className={`text-xs font-semibold px-2 py-1 rounded-full ${getBadgeColor(
//                       notice.type
//                     )}`}
//                   >
//                     {notice.type}
//                   </span>
//                   <h3 className="mt-2 text-lg font-medium text-gray-800">
//                     {notice.title}
//                   </h3>
//                 </div>
//                 <span className="text-sm text-gray-500 whitespace-nowrap">
//                   {new Date(notice.date).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                   })}
//                 </span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mt-4 text-center">
//         <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//           View All Updates →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NoticesSection;
