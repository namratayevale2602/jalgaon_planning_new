import { motion } from "framer-motion";
import { FaRupeeSign, FaFileInvoiceDollar, FaChartPie } from "react-icons/fa";

const BudgetExpenditure = () => {
  const currentYear = {
    year: "2023-2024",
    totalBudget: "₹1,450 Crores",
    allocated: {
      Agriculture: "₹220 Cr (15.2%)",
      Education: "₹280 Cr (19.3%)",
      Health: "₹180 Cr (12.4%)",
      Infrastructure: "₹420 Cr (29%)",
      "Social Welfare": "₹150 Cr (10.3%)",
      Others: "₹200 Cr (13.8%)",
    },
    expenditure: "₹870 Cr (60%)",
    documents: [
      { name: "Annual Budget Document 2023-24", link: "#" },
      { name: "Quarterly Expenditure Report Q1", link: "#" },
      { name: "Quarterly Expenditure Report Q2", link: "#" },
      { name: "Audit Report 2022-23", link: "#" },
    ],
  };

  const previousYears = [
    {
      year: "2022-2023",
      budget: "₹1,320 Cr",
      expenditure: "₹1,050 Cr (79.5%)",
    },
    { year: "2021-2022", budget: "₹1,200 Cr", expenditure: "₹960 Cr (80%)" },
    { year: "2020-2021", budget: "₹1,050 Cr", expenditure: "₹840 Cr (80%)" },
    { year: "2019-2020", budget: "₹950 Cr", expenditure: "₹760 Cr (80%)" },
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
            Budget & Expenditure
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaRupeeSign className="mr-2" /> Current Year Budget (2023-2024)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-700 font-medium">Total Budget</p>
              <p className="text-2xl font-bold text-gray-800">
                {currentYear.totalBudget}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700 font-medium">
                Expenditure Till Date
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {currentYear.expenditure}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-700 font-medium">
                Utilization Percentage
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="h-2.5 rounded-full bg-purple-600"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="text-lg font-bold text-gray-800 mt-1">
                60% Utilized
              </p>
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-3">
            Sector-wise Allocation
          </h3>
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
                    Allocation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Utilization
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(currentYear.allocated).map(
                  ([sector, allocation], index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-blue-50 transition"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {sector}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {allocation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full bg-blue-600"
                            style={{
                              width: `${Math.floor(Math.random() * 60) + 30}%`,
                            }}
                          ></div>
                        </div>
                      </td>
                    </motion.tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <FaFileInvoiceDollar className="mr-2" /> Budget Documents
            </h2>

            <div className="space-y-3">
              {currentYear.documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center border-b pb-3 last:border-b-0"
                >
                  <p className="text-gray-700">{doc.name}</p>
                  <a
                    href={doc.link}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                  >
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <FaChartPie className="mr-2" /> Previous Years
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                    >
                      Financial Year
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                    >
                      Budget
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                    >
                      Expenditure
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {previousYears.map((year, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-blue-50 transition"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {year.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {year.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {year.expenditure}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetExpenditure;
