import { motion } from "framer-motion";
import {
  FaDownload,
  FaEye,
  FaFilePdf,
  FaSearch,
  FaSpinner,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const ReportsPage = () => {
  const { language } = useLanguage();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Bilingual content
  const content = {
    title: {
      en: "Reports & Documents",
      mr: "अहवाल आणि दस्तऐवज",
    },
    subtitle: {
      en: "Official documents related to District Planning Committees",
      mr: "जिल्हा नियोजन समिती संबंधित अधिकृत दस्तऐवज",
    },
    searchPlaceholder: {
      en: "Search documents...",
      mr: "दस्तऐवज शोधा...",
    },
    tableHeaders: {
      title: { en: "Document Title", mr: "दस्तऐवज शीर्षक" },
      description: { en: "Description", mr: "वर्णन" },
      format: { en: "Format", mr: "स्वरूप" },
      actions: { en: "Actions", mr: "क्रिया" },
    },
    buttons: {
      view: { en: "View", mr: "पहा" },
    },
    emptyState: {
      title: {
        en: "No documents found",
        mr: "कोणतेही दस्तऐवज सापडले नाहीत",
      },
      message: {
        en: "Try adjusting your search criteria",
        mr: "तुमची शोध निकष समायोजित करण्याचा प्रयत्न करा",
      },
    },
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jalgaonback.demovoting.com/api/reports"
      );
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
    }
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

  const filteredReports = reports.filter(
    (report) =>
      getText(report.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getText(report.description)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const handleView = (fileUrl) => {
    window.open(fileUrl, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading documents...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-pink-100 w-20 mb-6"></div>
          <p className="text-gray-600 mb-8">{getText(content.subtitle)}</p>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={getText(content.searchPlaceholder)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-900 focus:border-pink-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Reports Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {getText(content.tableHeaders.title)}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {getText(content.tableHeaders.description)}
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {getText(content.tableHeaders.format)}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {getText(content.tableHeaders.actions)}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReports.map((report) => (
                    <motion.tr
                      key={report.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hover:bg-pink-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-red-50 rounded-lg">
                            <FaFilePdf className="text-red-500 text-xl" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              <span className="inline-block max-w-[120px] xs:max-w-[150px] sm:max-w-[180px] truncate">
                                {getText(report.title)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {getText(report.description)}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-900">
                          {report.fileType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleView(report.fileUrl)}
                            className="text-pink-900 hover:text-pink-900 flex items-center p-2 rounded hover:bg-pink-50 transition"
                          >
                            <FaEye className="mr-1" />{" "}
                            {getText(content.buttons.view)}
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredReports.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 text-center"
              >
                <div className="text-gray-400 mb-4">
                  <FaSearch className="mx-auto text-4xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {getText(content.emptyState.title)}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {getText(content.emptyState.message)}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReportsPage;
