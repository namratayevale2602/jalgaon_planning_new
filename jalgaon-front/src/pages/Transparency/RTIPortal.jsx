import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { FaSpinner } from "react-icons/fa";

const RTIPortal = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/rti-portal?lang=${language}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (result.success) {
          setContent(result.data);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching RTI portal data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  const getText = (item) => {
    if (!item) return "";

    if (Array.isArray(item)) {
      return item[language] || item.en || item;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading RTI portal data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-gray-600">No content available</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {getText(content.title)}
        </h1>
        <p className="text-lg text-gray-600">{getText(content.subtitle)}</p>
      </div>

      {/* Office Facilities Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">
          {getText(content.facilities.title)}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-pink-50">
                {getText(content.facilities.columns).map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.facilities.items.map((facility) => (
                <tr key={facility.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {facility.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {getText(facility.facility)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {getText(facility.time)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {getText(facility.process)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {getText(facility.location)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {getText(facility.responsible)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {getText(facility.grievance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RTI Officers Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">
          {getText(content.rtiOfficers.title)}
        </h2>

        {/* Public Information Officer */}
        <h3 className="text-xl font-semibold mb-4">
          {getText(content.rtiOfficers.publicInfoOfficer)}
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead>
              <tr className="bg-pink-50">
                {getText(content.rtiOfficers.columns).map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rtiOfficers.officers.publicInformationOfficers.map(
                (officer) => (
                  <tr key={officer.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {officer.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.name)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.designation)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.jurisdiction)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      <div>{getText(officer.address)}</div>
                      <div>{officer.phone}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {officer.email}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Assistant Public Information Officer */}
        <h3 className="text-xl font-semibold mb-4">
          {getText(content.rtiOfficers.asstPublicInfoOfficer)}
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead>
              <tr className="bg-pink-50">
                {getText(content.rtiOfficers.columns)
                  .slice(0, -1)
                  .map((column, index) => (
                    <th
                      key={index}
                      className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                    >
                      {column}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {content.rtiOfficers.officers.assistantPublicInformationOfficers.map(
                (officer) => (
                  <tr key={officer.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {officer.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.name)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.designation)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.jurisdiction)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      <div>{getText(officer.address)}</div>
                      <div>{officer.phone}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {officer.email}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Appellate Authority */}
        <h3 className="text-xl font-semibold mb-4">
          {getText(content.rtiOfficers.appellateAuthority)}
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-pink-50">
                {getText(content.rtiOfficers.columns).map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rtiOfficers.officers.appellateAuthorities.map(
                (officer) => (
                  <tr key={officer.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {officer.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.name)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.designation)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {getText(officer.jurisdiction)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      <div>{getText(officer.address)}</div>
                      <div>{officer.phone}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      {officer.email}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-pink-900 mb-4">
        <a
          href="https://rtionline.maharashtra.gov.in/index-e.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here For More Detail
          <span>
            <ArrowRight></ArrowRight>
          </span>
        </a>
      </h3>
    </div>
  );
};

export default RTIPortal;
