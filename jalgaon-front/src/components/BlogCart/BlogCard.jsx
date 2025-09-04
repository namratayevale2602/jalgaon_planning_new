// BlogCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const BlogCard = ({ blog }) => {
  const { language } = useLanguage();

  const getText = (item) => {
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/blog/${blog.slug}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={getText(blog.title)}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {getText(blog.category)}
            </span>
            <span className="mx-2">•</span>
            <span>
              {new Date(blog.date).toLocaleDateString(
                language === "mr" ? "mr-IN" : "en-US"
              )}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {getText(blog.title)}
          </h3>
          <p className="text-gray-600 mb-4">{getText(blog.excerpt)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
