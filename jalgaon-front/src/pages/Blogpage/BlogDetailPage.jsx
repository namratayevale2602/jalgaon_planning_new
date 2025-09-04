import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaEye,
  FaSpinner,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const content = {
    backButton: {
      en: "Back to Blog",
      mr: "ब्लॉगवर परत जा",
    },
    loading: {
      en: "Loading blog post...",
      mr: "ब्लॉग पोस्ट लोड होत आहे...",
    },
    error: {
      en: "Failed to load blog post. Please try again later.",
      mr: "ब्लॉग पोस्ट लोड करण्यात अयशस्वी. कृपया नंतर पुन्हा प्रयत्न करा.",
    },
    notFound: {
      en: "Blog post not found",
      mr: "ब्लॉग पोस्ट सापडली नाही",
    },
  };

  const getText = (item) => {
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "mr" ? "mr-IN" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper function to safely handle tags
  const getTagsArray = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === "string") {
      // Handle comma-separated tags string
      return tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);
    }
    return [];
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://127.0.0.1:8000/api/blogs/${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found");
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          setBlog(data.data);
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

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-96">
            <FaExclamationTriangle className="text-4xl text-red-600 mb-4" />
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
              {error.includes("not found")
                ? getText(content.notFound)
                : getText(content.error)}
            </div>
            <Link
              to="/blog"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              {getText(content.backButton)}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{getText(content.notFound)}</p>
            <Link
              to="/blog"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              {getText(content.backButton)}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tagsArray = getTagsArray(blog.tags);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <FaArrowLeft className="mr-2" /> {getText(content.backButton)}
          </Link>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 md:h-80 overflow-hidden">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={blog.image}
                alt={getText(blog.title)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x400?text=Image+Not+Found";
                }}
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  {getText(blog.category)}
                </span>
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {formatDate(blog.date)}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-2" />
                  {blog.author}
                </span>
                <span className="flex items-center">
                  <FaEye className="mr-2" />
                  {blog.views} {language === "en" ? "views" : "वाचने"}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {getText(blog.title)}
              </h1>

              {tagsArray.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {tagsArray.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose max-w-none text-gray-700"
              >
                <p className="text-lg mb-6 text-gray-800 font-medium">
                  {getText(blog.excerpt)}
                </p>
                <div className="space-y-4">
                  {getText(blog.content)
                    .split("\n")
                    .map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
