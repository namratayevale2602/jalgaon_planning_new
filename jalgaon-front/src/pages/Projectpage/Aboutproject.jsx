import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

const ProjectPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  // Helper function to get text based on current language
  const getText = (item) => {
    if (typeof item === 'object' && item !== null && language in item) {
      return item[language];
    }
    return item;
  };

  // Random nature/farm images from Pexels
  const pexelsImages = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg",
    "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg",
    "https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg",
    "https://images.pexels.com/photos/296240/pexels-photo-296240.jpeg",
    "https://images.pexels.com/photos/296242/pexels-photo-296242.jpeg",
    "https://images.pexels.com/photos/296245/pexels-photo-296245.jpeg"
  ];

  const categories = [
    {
      id: 1,
      name: {
        en: "ANNUAL PLAN",
        mr: "वार्षिक योजना"
      },
      slug: "annual-plan",
      description: {
        en: "Projects funded through annual development plans",
        mr: "वार्षिक विकास योजनांतर्गत प्रकल्प"
      },
      icon: "📅",
    },
    {
      id: 2,
      name: {
        en: "MLA FUNDS",
        mr: "विधानसभा निधी"
      },
      slug: "mla-funds",
      description: {
        en: "Projects funded through MLA development funds",
        mr: "विधानसभा सदस्य विकास निधीतर्गत प्रकल्प"
      },
      icon: "🏛️",
    },
    {
      id: 3,
      name: {
        en: "MP FUNDS",
        mr: "संसद सदस्य निधी"
      },
      slug: "mp-funds",
      description: {
        en: "Projects funded through MP development funds",
        mr: "संसद सदस्य विकास निधीतर्गत प्रकल्प"
      },
      icon: "🏛️",
    },
    {
      id: 4,
      name: {
        en: "HUMAN DEVELOPMENT",
        mr: "मानव विकास"
      },
      slug: "human-development",
      description: {
        en: "Projects focused on human development and welfare",
        mr: "मानव विकास आणि कल्याणकारी प्रकल्प"
      },
      icon: "👥",
    },
    {
      id: 5,
      name: {
        en: "MINORITY SCHEMES",
        mr: "अल्पसंख्याक योजना"
      },
      slug: "minority-schemes",
      description: {
        en: "Projects under minority welfare schemes",
        mr: "अल्पसंख्याक कल्याण योजनांतर्गत प्रकल्प"
      },
      icon: "🕌",
    },
    {
      id: 6,
      name: {
        en: "OTHER SCHEMES",
        mr: "इतर योजना"
      },
      slug: "other-schemes",
      description: {
        en: "Projects under various other schemes",
        mr: "विविध इतर योजनांतर्गत प्रकल्प"
      },
      icon: "📋",
    },
  ];

  const projects = [
    {
      id: 1,
      title: {
        en: "Annual  Plan ",
        mr: "वार्षिक विकास योजना 2023-24"
      },
      description: {
        en: "Infrastructure development projects under annual plan",
        mr: "वार्षिक योजनेअंतर्गत पायाभूत सुविधा विकास प्रकल्प"
      },
      image: pexelsImages[0],
      category_id: 1,
    },
    {
      id: 2,
      title: {
        en: "MLA Funds ",
        mr: "विधानसभा निधी रस्ता प्रकल्प"
      },
      description: {
        en: "Road construction and improvement projects",
        mr: "रस्ते बांधकाम आणि सुधारणा प्रकल्प"
      },
      image: pexelsImages[1],
      category_id: 2,
    },
    {
      id: 3,
      title: {
        en: "MP Fund ",
        mr: "संसद सदस्य निधी शाळा इमारत"
      },
      description: {
        en: "Educational infrastructure development",
        mr: "शैक्षणिक पायाभूत सुविधा विकास"
      },
      image: pexelsImages[2],
      category_id: 3,
    },
    {
      id: 4,
      title: {
        en: "Human Development  ",
        mr: "महिला सक्षमीकरण केंद्र"
      },
      description: {
        en: "Skill development and empowerment programs",
        mr: "कौशल्य विकास आणि सक्षमीकरण कार्यक्रम"
      },
      image: pexelsImages[3],
      category_id: 4,
    },
    {
      id: 5,
      title: {
        en: "Minority Schemes  ",
        mr: "अल्पसंख्याक समुदाय भवन"
      },
      description: {
        en: "Community infrastructure for minority groups",
        mr: "अल्पसंख्याक गटांसाठी समुदाय पायाभूत सुविधा"
      },
      image: pexelsImages[4],
      category_id: 5,
    },
    {
      id: 6,
      title: {
        en: "  Other Schemes",
        mr: "ग्रामविकास योजना"
      },
      description: {
        en: "Comprehensive village development projects",
        mr: "समग्र ग्रामविकास प्रकल्प"
      },
      image: pexelsImages[5],
      category_id: 6,
    },
  ];

  const filteredProjects = () => {
    if (activeFilter === "All") return projects;
    const category = categories.find(cat => getText(cat.name) === activeFilter);
    return projects.filter(project => project.category_id === category.id);
  };

  return (
    <div className="bg-gray-50 min-h-screen">


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        {/* Project Grid */}
        <div className="my-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects().map((project) => {
              const projectCategory = categories.find(cat => cat.id === project.category_id);
              
              return (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all cursor-pointer"
                  onClick={() => navigate(`/project/${projectCategory.slug}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={getText(project.title)}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{projectCategory?.icon}</span>
                      <span className="text-sm font-medium text-green-600">
                        {getText(projectCategory?.name)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {getText(project.title)}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {getText(project.description)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;