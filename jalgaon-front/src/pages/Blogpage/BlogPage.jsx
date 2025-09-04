import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "../../components/BlogCart/BlogCard";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaSpinner, FaExclamationTriangle } from "react-icons/fa";

const BlogPage = () => {
  const { language } = useLanguage();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const content = {
    title: {
      en: "Our Blog",
      mr: "आमचे ब्लॉग",
    },
    subtitle: {
      en: "Latest articles and updates from DPC Jalgaon",
      mr: "जिल्हा नियोजन समिती जळगावचे नवीनतम लेख आणि अद्यतने",
    },
    loading: {
      en: "Loading blog posts...",
      mr: "ब्लॉग पोस्ट लोड होत आहेत...",
    },
    error: {
      en: "Failed to load blog posts. Please try again later.",
      mr: "ब्लॉग पोस्ट लोड करण्यात अयशस्वी. कृपया नंतर पुन्हा प्रयत्न करा.",
    },
    noPosts: {
      en: "No blog posts available.",
      mr: "कोणतेही ब्लॉग पोस्ट उपलब्ध नाहीत.",
    },
  };

  const getText = (item) => {
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/blogs");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          setBlogs(data.data);
        } else {
          throw new Error("Failed to fetch blog data");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching blog data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-96">
            <FaSpinner className="animate-spin text-4xl text-blue-600 mb-4" />
            <p className="text-gray-600">{getText(content.loading)}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-96">
            <FaExclamationTriangle className="text-4xl text-red-600 mb-4" />
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
              {getText(content.error)}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              {language === "en" ? "Try Again" : "पुन्हा प्रयत्न करा"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-8"></div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            {getText(content.subtitle)}
          </p>
        </motion.div>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{getText(content.noPosts)}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
