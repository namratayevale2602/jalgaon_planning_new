// RecentBlogs.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCart/BlogCard";
import { blogData } from "../../data/blogData.js";
import { useLanguage } from "../../contexts/LanguageContext";

const RecentBlogs = () => {
  const { language } = useLanguage();

  const content = {
    title: {
      en: "Recent Blogs",
      mr: "अलीकडील ब्लॉग",
    },
    viewAll: {
      en: "View All Articles",
      mr: "सर्व लेख पहा",
    },
  };

  const getText = (item) => {
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  // Sort blogs by date (newest first) and take first 3
  const recentBlogs = [...blogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="container mx-auto">
      <div className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {getText(content.title)}
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              {getText(content.viewAll)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentBlogs;
