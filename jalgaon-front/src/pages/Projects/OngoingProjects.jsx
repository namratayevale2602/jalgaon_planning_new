import { motion } from "framer-motion";
import { FaHardHat, FaRupeeSign, FaChartLine } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const OngoingProjects = () => {
  const projects = [
    {
      id: "PROJ-2023-045",
      name: "Jalgaon Tourism Infrastructure Development",
      description:
        "Development of tourist facilities at historical sites across the district",
      budget: "₹12.5 Crores",
      progress: 65,
      status: "On Track",
      startDate: "15 Jan 2023",
      endDate: "30 Jun 2024",
      photos: ["/placeholder-project1.jpg", "/placeholder-project2.jpg"],
    },
    {
      id: "PROJ-2023-078",
      name: "Rural Road Connectivity - Phase III",
      description: "Construction of 85km rural roads connecting 25 villages",
      budget: "₹18.2 Crores",
      progress: 42,
      status: "Delayed",
      startDate: "01 Mar 2023",
      endDate: "31 Dec 2023",
      photos: ["/placeholder-project3.jpg"],
    },
    {
      id: "PROJ-2023-112",
      name: "Smart Classroom Initiative",
      description: "Digital classroom setup in 50 government schools",
      budget: "₹7.8 Crores",
      progress: 28,
      status: "On Track",
      startDate: "01 Apr 2023",
      endDate: "31 Mar 2024",
      photos: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Ongoing Projects
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {project.photos.length > 0 ? (
                  <img
                    src={project.photos[0]}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400">
                    <FaHardHat className="text-4xl mx-auto" />
                    <p>No photos available</p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-blue-700">
                    {project.name}
                  </h2>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "On Track"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{project.marathi}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Progress</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div
                        className={`h-2.5 rounded-full ${
                          project.progress > 70
                            ? "bg-green-600"
                            : project.progress > 40
                            ? "bg-blue-600"
                            : "bg-yellow-500"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">
                      {project.progress}% completed
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 flex items-center">
                        <FaRupeeSign className="mr-1" /> Budget
                      </p>
                      <p className="text-gray-700">{project.budget}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 flex items-center">
                        <FiClock className="mr-1" /> Timeline
                      </p>
                      <p className="text-gray-700">
                        {project.startDate} - {project.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaChartLine className="mr-2" /> Overall Progress Summary
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Sector
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    No. of Projects
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Total Budget
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Avg. Progress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Completion Target
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Infrastructure
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹87.5 Cr
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "58%" }}
                      ></div>
                    </div>
                    <span className="mt-1 block">58%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Dec 2023
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Education
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    8
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹32.1 Cr
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                    <span className="mt-1 block">72%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Mar 2024
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Health
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    5
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹24.8 Cr
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-yellow-500 h-2.5 rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                    <span className="mt-1 block">35%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Sep 2024
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Project Monitoring
          </h3>
          <p className="text-gray-700">
            All ongoing projects are monitored monthly by the District Planning
            Committee. Physical verification is conducted for at least 20% of
            projects each quarter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
