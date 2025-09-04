import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  FaFileAlt,
  FaFilePdf,
  FaExternalLinkAlt,
  FaSpinner,
} from "react-icons/fa";

const DistrictPlanningCommittee = () => {
  const { language } = useLanguage();
  const [loadingPdf, setLoadingPdf] = useState(null);
  const [committeeData, setCommitteeData] = useState({
    committeeInfo: {
      title: { en: "", mr: "" },
      establishment: { en: "", mr: "" },
    },
    documents: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommitteeData();
  }, []);

  const fetchCommitteeData = async () => {
    try {
      const response = await fetch(
        "https://jalgaonback.demovoting.com/api/committee-documents"
      );
      const data = await response.json();
      setCommitteeData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching committee data:", error);
      setLoading(false);
    }
  };

  const getText = (item) => {
    if (typeof item === "string") return item;
    return item[language] || item.en || item;
  };

  const openPdfInNewTab = (doc) => {
    setLoadingPdf(doc.id);

    // Construct the direct URL to the PDF file
    const pdfUrl = `https://jalgaonback.demovoting.com/uploads/${doc.link}`;

    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");

    // Reset loading state after a short delay
    setTimeout(() => {
      setLoadingPdf(null);
    }, 1000);
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
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getText(committeeData.committeeInfo.title)}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {getText(committeeData.committeeInfo.establishment)}
          </p>
        </div>

        {/* Documents Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaFileAlt className="mr-2 text-pink-900" />
            {language === "en" ? "Documents" : "दस्तऐवज"}
          </h2>

          {committeeData.documents.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">
                {language === "en"
                  ? "No documents available."
                  : "कोणतेही दस्तऐवज उपलब्ध नाहीत."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {committeeData.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                      <FaFilePdf className="h-5 w-5 text-pink-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">
                        {getText(doc.title)}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {language === "en" ? "Updated" : "अद्यतनित"}:{" "}
                        {doc.updated}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {getText(doc.description)}
                      </p>

                      {/* Link that opens the PDF directly */}
                      <a
                        href={`https://jalgaonback.demovoting.com/uploads/${doc.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          openPdfInNewTab(doc);
                        }}
                        className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-pink-800 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 no-underline cursor-pointer"
                      >
                        {loadingPdf === doc.id ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            {language === "en" ? "Opening..." : "उघडत आहे..."}
                          </>
                        ) : (
                          <>
                            <FaExternalLinkAlt className="mr-1.5 h-3 w-3" />
                            {language === "en" ? "View PDF" : "PDF पहा"}
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DistrictPlanningCommittee;
