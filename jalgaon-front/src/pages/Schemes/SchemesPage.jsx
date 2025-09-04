import React, { useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import schemesContent from "../../utils/schemesContent.json";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "../../assets";

const SchemesPage = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const sectionRefs = {
    annualPlan: useRef(null),
    mlaFunds: useRef(null),
    mpFunds: useRef(null),
    hillyArea: useRef(null),
    humanDevelopment: useRef(null),
    minoritySchemes: useRef(null),
    otherSchemes: useRef(null),
  };

  // Image URLs for each scheme (using realistic Indian government/scheme images)
  const schemeImages = {
    annualPlan: img1,
    mlaFunds: img2,
    mpFunds: img3,
    hillyArea: img4,
    humanDevelopment: img5,
    minoritySchemes: img6,
    otherSchemes: img7,
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && sectionRefs[hash]?.current) {
      setTimeout(() => {
        const element = sectionRefs[hash].current;
        const offset = 200; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location.hash, sectionRefs]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header with Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-12 h-64">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt={
            language === "mr"
              ? "जळगाव जिल्हा विकास"
              : "Jalgaon District Development"
          }
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-800/70 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "mr" ? "योजना" : "Schemes"}
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              {language === "mr"
                ? "जळगाव जिल्ह्यासाठीच्या विविध विकास योजनांची माहिती"
                : "Information about various development schemes for Jalgaon District"}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation Menu */}
      <div className="mb-10 bg-blue-50 rounded-xl p-4 sticky top-4 z-10 shadow-sm">
        <h2 className="text-lg font-medium text-gray-700 mb-3">
          {language === "mr" ? "द्रुत निर्देशिका" : "Quick Navigation"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(schemesContent).map(([key, scheme]) => (
            <a
              key={key}
              href={`#${key}`}
              className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-100 transition-colors shadow"
            >
              {scheme.title[language]}
            </a>
          ))}
        </div>
      </div>

      {/* Schemes Sections */}
      <div className="space-y-8">
        {Object.entries(schemesContent).map(([key, scheme]) => (
          <section
            key={key}
            ref={sectionRefs[key]}
            id={key}
            className="scroll-mt-24 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="md:flex">
              {/* Image Column */}
              <div className="md:w-1/3">
                <img
                  src={schemeImages[key]}
                  alt={scheme.title[language]}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Content Column */}
              <div className="md:w-2/3">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {scheme.title[language]}
                  </h2>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4 text-gray-700 mb-6">
                    {scheme.content[language].map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Back to Top Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          {language === "mr" ? "वर जा" : "Back to Top"}
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SchemesPage;
