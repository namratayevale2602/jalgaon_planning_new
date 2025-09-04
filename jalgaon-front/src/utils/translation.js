// utils/translation.js
export const getTranslatedContent = (data, language) => {
  if (!data) return null;

  return {
    name: data.name?.[language] || data.name?.en || "",
    description: data.description?.[language] || data.description?.en || "",
    image: data.image || "",
    stats: data.stats?.[language] || data.stats?.en || [],
  };
};

export const translateSingleField = (field, language) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[language] || field.en || "";
};
