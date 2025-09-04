import React, { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner } from "react-icons/fa";

const DataCard = () => {
  const { language } = useLanguage();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jalgaonback.demovoting.com/api/political-representatives?lang=${language}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-pink-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading Political Representatives...</p>
        </div>
      </div>
    );
  if (error)
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  if (!data) return <div className="text-center py-12">No data available</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{data.title}</h1>

      {data.categories.map((category) => (
        <div key={category.title} className="mb-12">
          {category.title && (
            <h2 className="text-xl text-center font-semibold mb-6 border-b pb-2">
              {category.title}
            </h2>
          )}

          <div className="flex flex-wrap justify-center gap-6">
            {category.people.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-72"
              >
                <div className="p-4 flex flex-col items-center">
                  <div className="w-60 h-60 mb-4 overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {person.matdarsangh}
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {person.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataCard;
