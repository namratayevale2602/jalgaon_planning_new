import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export const RawContentDisplay = () => {
  const { language } = useLanguage();
  const [section, setSection] = useState("about");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use the full URL if your React app is on a different port (like 3000)
        const response = await fetch(
          `http://127.0.0.1:8000/api/content/${section}`
        );

        // First check if response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check content type before parsing
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }

        const data = await response.json();
        setContentData(data || []); // Remove the [language] part since your API returns the full object
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [section, language]);

  if (loading) {
    return <div className="p-4">Loading content...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        {language === "en"
          ? `Error loading content: ${error}`
          : `सामग्री लोड करताना त्रुटी: ${error}`}
        <div className="mt-2 text-sm">
          {language === "en"
            ? "Please check your API endpoint"
            : "कृपया आपला API एंडपॉइंट तपासा"}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {language === "en" ? "Content for:" : "सामग्री:"} {section}
      </h1>

      <div className="mb-4">
        <label className="block mb-2">
          {language === "en" ? "Section:" : "विभाग:"}
        </label>
        <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder={
            language === "en" ? "Enter section" : "विभाग प्रविष्ट करा"
          }
        />
      </div>

      {contentData.length === 0 ? (
        <div className="bg-yellow-100 p-4 rounded-lg">
          {language === "en" ? "No content found" : "सामग्री आढळली नाही"}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">
                  {language === "en" ? "Section" : "विभाग"}
                </th>
                <th className="px-4 py-2">
                  {language === "en" ? "Field" : "क्षेत्र"}
                </th>
                <th className="px-4 py-2">
                  {language === "en" ? "Content" : "सामग्री"}
                </th>
              </tr>
            </thead>
            <tbody>
              {contentData.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2">{item.id || "-"}</td>
                  <td className="px-4 py-2">{item.section_name || "-"}</td>
                  <td className="px-4 py-2">{item.field_name || "-"}</td>
                  <td className="px-4 py-2">
                    {language === "en"
                      ? item.english_content || "-"
                      : item.marathi_content || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
