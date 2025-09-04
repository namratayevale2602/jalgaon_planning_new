import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  FaFileAlt,
  FaFilePdf,
  FaExternalLinkAlt,
  FaDownload,
  FaSpinner,
  FaInfoCircle,
} from "react-icons/fa";

const Document = () => {
  const { language } = useLanguage();
  const [loadingPdf, setLoadingPdf] = useState(null);
  const [committeeData, setCommitteeData] = useState({
    committeeInfo: {
      title: {
        en: "Jalgaon District Planning Committee",
        mr: "जळगाव जिल्हा नियोजन समिती",
      },
      establishment: {
        en: "Established to oversee district planning and development activities",
        mr: "जिल्हा नियोजन आणि विकास क्रियाकलापांच्या देखरेखीसाठी स्थापन",
      },
    },
    documents: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCommitteeData();
  }, []);

  const fetchCommitteeData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jalgaonback.demovoting.com/api/rolewise"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCommitteeData(data);
    } catch (error) {
      console.error("Error fetching committee data:", error);
      setError(
        language === "en"
          ? "Failed to load documents. Please try again later."
          : "दस्तऐवज लोड करण्यात अयशस्वी. कृपया नंतर पुन्हा प्रयत्न करा."
      );
    } finally {
      setLoading(false);
    }
  };

  const getText = (item) => {
    if (!item) return "";
    if (typeof item === "string") return item;
    return item[language] || item.en || item.mr || "";
  };

  const openPdfInNewTab = (doc) => {
    setLoadingPdf(doc.id);
    const pdfUrl = `https://jalgaonback.demovoting.com/uploads/${doc.link}`;
    window.open(pdfUrl, "_blank");

    setTimeout(() => {
      setLoadingPdf(null);
    }, 1000);
  };

  const downloadPdf = async (doc) => {
    try {
      setLoadingPdf(doc.id);
      const pdfUrl = `https://jalgaonback.demovoting.com/uploads/${doc.link}`;
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = doc.link.split("/").pop() || "document.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert(language === "en" ? "Download failed" : "डाउनलोड अयशस्वी");
    } finally {
      setTimeout(() => setLoadingPdf(null), 500);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading Document...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-pink-50 to-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-red-500 text-5xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {language === "en"
                ? "Error Loading Content"
                : "सामग्री लोड करताना त्रुटी"}
            </h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={fetchCommitteeData}
              className="px-4 py-2 bg-pink-900 text-white rounded-md hover:bg-pink-700 transition-colors"
            >
              {language === "en" ? "Try Again" : "पुन्हा प्रयत्न करा"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {getText(committeeData.committeeInfo.establishment)}
          </p>
        </div>

        {/* Documents Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaFileAlt className="mr-2 text-pink-900" />
              {language === "en" ? "Committee Documents" : "समिती दस्तऐवज"}
            </h2>
          </div>

          {committeeData.documents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-300 text-6xl mb-4">📄</div>
              <p className="text-gray-500 text-lg">
                {language === "en"
                  ? "No documents available at the moment."
                  : "सध्या कोणतेही दस्तऐवज उपलब्ध नाहीत."}
              </p>
              <p className="text-gray-400 mt-2">
                {language === "en"
                  ? "Please check back later."
                  : "कृपया नंतर पुन्हा तपासा."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committeeData.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 bg-white group"
                >
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-pink-50 flex items-center justify-center mr-4 group-hover:bg-pink-100 transition-colors">
                      <FaFilePdf className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 line-clamp-2">
                        {getText(doc.title)}
                      </h3>
                    </div>
                  </div>

                  {doc.description && (
                    <p className="text-sm text-gray-600 mt-3 mb-4 line-clamp-3">
                      {getText(doc.description)}
                    </p>
                  )}

                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() => openPdfInNewTab(doc)}
                      disabled={loadingPdf === doc.id}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-900 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-75 transition-colors"
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
                          {language === "en" ? "View" : "पहा"}
                        </>
                      )}
                    </button>
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

export default Document;
