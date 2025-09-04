import React, { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner } from "react-icons/fa";

const DSPReports = () => {
  const { language } = useLanguage();
  const [reports, setReports] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const content = {
    en: {
      heading: "District Development Plan Reports",
      subheading: "Available Reports and Presentations",
      galleryTitle: "GALLERY",
      viewPdf: "View PDF",
    },
    mr: {
      heading: "जिल्हा विकास आराखडा अहवाल",
      subheading: "उपलब्ध अहवाल आणि सादरीकरणे",
      galleryTitle: "गॅलरी",
      viewPdf: "PDF पहा",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch both reports and gallery images in parallel
        const [reportsResponse, galleryResponse] = await Promise.all([
          fetch(
            `https://jalgaonback.demovoting.com/api/dsp-reports?lang=${language}`
          ),
          fetch(`https://jalgaonback.demovoting.com/api/dsp-gallery-images`),
        ]);

        if (!reportsResponse.ok || !galleryResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const reportsResult = await reportsResponse.json();
        const galleryResult = await galleryResponse.json();

        if (reportsResult.success) {
          setReports(reportsResult.data);
        }

        if (galleryResult.success) {
          setGalleryImages(galleryResult.data);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching DSP data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading reports and gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Gallery Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {content[language].galleryTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt[language]}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {content[language].subheading}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {language === "en" ? "Report Title" : "अहवालाचे शीर्षक"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {language === "en" ? "Action" : "कृती"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reports.map((report, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                      {report.title[language]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-900 hover:text-pink-800 hover:underline"
                      >
                        {content[language].viewPdf}
                        <svg
                          className="w-4 h-4 ml-1 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSPReports;
