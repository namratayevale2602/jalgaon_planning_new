import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "https://jalgaonback.demovoting.com/api",
});

// Function to log responses (client-side only)
const logResponse = (endpoint, response) => {
  if (typeof window !== "undefined") {
    console.log(`Response from ${endpoint}:`, response);
  }
  return response;
};

// Function to log errors (client-side only)
const logError = (endpoint, error) => {
  if (typeof window !== "undefined") {
    console.error(`Error from ${endpoint}:`, error);
  }
  return Promise.reject(error);
};

// API functions
export const tourismAPI = async (params = {}) => {
  try {
    if (typeof window !== "undefined") {
      console.log(`Fetching tourism spots`);
    }
    const response = await api.get("/tourism/spots", { params });
    return logResponse("/tourism/spots", response.data);
  } catch (error) {
    return logError("/tourism/spots", error);
  }
};

export const tourismSpotDetailAPI = async (slug) => {
  try {
    if (typeof window !== "undefined") {
      console.log(`Fetching tourism spot detail for:`, slug);
    }
    const response = await api.get(`/tourism/spots/${slug}`);
    if (typeof window !== "undefined") {
      console.log(`Tourism spot detail response:`, response.data);
    }
    return logResponse(`/tourism/spots/${slug}`, response.data);
  } catch (error) {
    return logError(`/tourism/spots/${slug}`, error);
  }
};

export const tourismGalleryAPI = async (language = "en") => {
  try {
    if (typeof window !== "undefined") {
      console.log(`Fetching tourism gallery with language:`, language);
    }
    const response = await api.get("/tourism/gallery", {
      params: { lang: language },
    });
    return logResponse("/tourism/gallery", response.data);
  } catch (error) {
    return logError("/tourism/gallery", error);
  }
};

export default api;
