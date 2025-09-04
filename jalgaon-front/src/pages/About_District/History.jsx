import { motion } from "framer-motion";
import { FaLandmark, FaCalendarAlt, FaBook } from "react-icons/fa";

const Historyofdistrict = () => {
  const milestones = [
    {
      year: "1998",
      title: "Establishment",
      description: "Formed under the District Planning Committee Act, 1998",
      icon: <FaLandmark className="text-blue-600 text-2xl" />,
    },
    {
      year: "2005",
      title: "First 5-Year Plan",
      description:
        "Implemented the first comprehensive district development plan",
      icon: <FaBook className="text-blue-600 text-2xl" />,
    },
    {
      year: "2012",
      title: "Digital Transition",
      description: "Digitized planning processes and records",
      icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
    },
    {
      year: "2020",
      title: "COVID Response",
      description: "Special planning for pandemic recovery initiatives",
      icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          History of Jalgaon District Planning
        </h1>
        <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
      </motion.div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Background
        </h2>
        <p className="text-gray-700 mb-4">
          The District Planning Committee (DPC) of Jalgaon was established in
          accordance with the 74th Constitutional Amendment Act and the
          Maharashtra District Planning Committee Act, 1998. This institutional
          mechanism was created to consolidate the plans prepared by Panchayats
          and Municipalities in the district.
        </p>
        <p className="text-gray-700">
          The committee has played a pivotal role in the decentralized planning
          process, ensuring balanced regional development across Jalgaon
          district.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Key Milestones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition"
          >
            <div className="flex items-center mb-3">
              {item.icon}
              <span className="ml-3 font-bold text-gray-800">{item.year}</span>
            </div>
            <h3 className="text-xl font-medium text-blue-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          Legal Framework
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Constitution of India (74th Amendment Act, 1992)</li>
          <li>Maharashtra District Planning Committee Act, 1998</li>
          <li>
            Maharashtra Panchayats (Extension to Scheduled Areas) Act, 1997
          </li>
          <li>Various Government Resolutions issued by Planning Department</li>
        </ul>
      </div>
    </div>
  );
};

export default Historyofdistrict;
