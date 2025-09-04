import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

const ProjectDetail = () => {
  const { language } = useLanguage();
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Helper function to get text based on current language
  const getText = (item) => {
    if (typeof item === 'object' && item !== null && language in item) {
      return item[language];
    }
    return item;
  };

  const projects = [
    {
      id: 1,
      name: {
        en: "Annual Development Plan 2023-24",
        mr: "वार्षिक विकास योजना 2023-24"
      },
      slug: "annual-plan",
      description: {
        en: "Infrastructure development projects under annual plan. This includes road construction, water supply projects, and community building development across the region.",
        mr: "वार्षिक योजनेअंतर्गत पायाभूत सुविधा विकास प्रकल्प. यामध्ये रस्ते बांधकाम, पाणीपुरवठा प्रकल्प आणि संपूर्ण प्रदेशातील समुदाय भवन विकास समाविष्ट आहे."
      },
      details: {
        en: [
          "15 km of new roads constructed",
          "5 water supply projects completed",
          "3 community centers built",
          "Benefiting over 10,000 residents"
        ],
        mr: [
          "15 किमी नवीन रस्ते बांधले",
          "5 पाणीपुरवठा प्रकल्प पूर्ण",
          "3 समुदाय केंद्रे बांधली",
          "10,000 पेक्षा जास्त रहिवाशांना लाभ"
        ]
      },
      image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
    },
    {
      id: 2,
      name: {
        en: "MLA Fund Road Project",
        mr: "विधानसभा निधी रस्ता प्रकल्प"
      },
      slug: "mla-funds",
      description: {
        en: "Road construction and improvement projects funded through MLA development funds. These projects focus on connecting rural areas and improving transportation infrastructure.",
        mr: "विधानसभा सदस्य विकास निधीतर्गत रस्ते बांधकाम आणि सुधारणा प्रकल्प. हे प्रकल्प ग्रामीण भागांना जोडण्यावर आणि वाहतूक पायाभूत सुविधा सुधारण्यावर लक्ष केंद्रित करतात."
      },
      details: {
        en: [
          "10 km of rural roads paved",
          "3 bridges constructed",
          "Improved access to 5 villages",
          "Created 200+ local jobs"
        ],
        mr: [
          "10 किमी ग्रामीण रस्ते डांबरीकरण",
          "3 पूल बांधले",
          "5 गावांना सुधारित प्रवेश",
          "200+ स्थानिक रोजगार निर्माण"
        ]
      },
      image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg"
    },
    {
      id: 3,
      name: {
        en: "MP Fund School Building",
        mr: "संसद सदस्य निधी शाळा इमारत"
      },
      slug: "mp-funds",
      description: {
        en: "Educational infrastructure development funded through MP development funds. This includes construction of new school buildings and upgrading existing facilities.",
        mr: "संसद सदस्य विकास निधीतर्गत शैक्षणिक पायाभूत सुविधा विकास. यामध्ये नवीन शाळा इमारती बांधणे आणि विद्यमान सुविधांचे उन्नयन समाविष्ट आहे."
      },
      details: {
        en: [
          "2 new school buildings constructed",
          "5 schools upgraded",
          "Capacity for 500+ additional students",
          "Modern facilities including computer labs"
        ],
        mr: [
          "2 नवीन शाळा इमारती बांधल्या",
          "5 शाळा उन्नत केल्या",
          "500+ अतिरिक्त विद्यार्थ्यांसाठी क्षमता",
          "संगणक प्रयोगशाळांसह आधुनिक सुविधा"
        ]
      },
      image: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg"
    },
    {
      id: 4,
      name: {
        en: "Women Empowerment Center",
        mr: "महिला सक्षमीकरण केंद्र"
      },
      slug: "human-development",
      description: {
        en: "Skill development and empowerment programs for women in rural areas. The center provides vocational training, health education, and entrepreneurship support.",
        mr: "ग्रामीण भागातील महिलांसाठी कौशल्य विकास आणि सक्षमीकरण कार्यक्रम. केंद्र व्यावसायिक प्रशिक्षण, आरोग्य शिक्षण आणि उद्योजकता समर्थन प्रदान करते."
      },
      details: {
        en: [
          "500+ women trained annually",
          "10+ vocational courses offered",
          "Micro-finance support for entrepreneurs",
          "Childcare facilities available"
        ],
        mr: [
          "दरवर्षी 500+ महिलांना प्रशिक्षण",
          "10+ व्यावसायिक अभ्यासक्रम",
          "उद्योजकांसाठी सूक्ष्म-वित्त समर्थन",
          "बालसंगोपन सुविधा उपलब्ध"
        ]
      },
      image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg"
    },
    {
      id: 5,
      name: {
        en: "Minority Community Hall",
        mr: "अल्पसंख्याक समुदाय भवन"
      },
      slug: "minority-schemes",
      description: {
        en: "Community infrastructure for minority groups funded through minority welfare schemes. The hall serves as a cultural center and meeting place for the community.",
        mr: "अल्पसंख्याक कल्याण योजनांतर्गत अल्पसंख्याक गटांसाठी समुदाय पायाभूत सुविधा. हे भवन समुदायासाठी सांस्कृतिक केंद्र आणि सभास्थान म्हणून काम करते."
      },
      details: {
        en: [
          "2000 sq ft community space",
          "Cultural events and meetings",
          "Library and resource center",
          "Open to all community members"
        ],
        mr: [
          "2000 चौ.फूट समुदाय जागा",
          "सांस्कृतिक कार्यक्रम आणि सभा",
          "ग्रंथालय आणि संसाधन केंद्र",
          "सर्व समुदाय सदस्यांसाठी खुले"
        ]
      },
      image: "https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg"
    },
    {
      id: 6,
      name: {
        en: "Village Development Scheme",
        mr: "ग्रामविकास योजना"
      },
      slug: "other-schemes",
      description: {
        en: "Comprehensive village development projects including sanitation, water supply, and community facilities. These projects aim to improve quality of life in rural areas.",
        mr: "स्वच्छता, पाणीपुरवठा आणि समुदाय सुविधांसह समग्र ग्रामविकास प्रकल्प. या प्रकल्पांचा उद्देश ग्रामीण भागातील जीवनमान सुधारणे हा आहे."
      },
      details: {
        en: [
          "10 villages covered",
          "Sanitation facilities for 500 households",
          "Drinking water projects",
          "Community gardens and parks"
        ],
        mr: [
          "10 गावे समाविष्ट",
          "500 घरांसाठी स्वच्छता सुविधा",
          "पिण्याच्या पाण्याचे प्रकल्प",
          "समुदाय बागा आणि उद्याने"
        ]
      },
      image: "https://images.pexels.com/photos/296240/pexels-photo-296240.jpeg"
    }
  ];

  const selectedProject = projects.find(proj => proj.slug === projectSlug);

  if (!selectedProject) {
    return <div className="flex items-center justify-center h-screen text-xl">
      {language === 'mr' ? 'प्रकल्प सापडला नाही' : 'Project not found'}
    </div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
   

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Main Content */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative group overflow-hidden">
              <img 
                src={selectedProject.image}
                alt={getText(selectedProject.name)}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
              <div className="absolute inset-0  group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <FiImage className="text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-4xl" />
              </div>
            </div>
            
            {/* Description Section */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {getText(selectedProject.name)}
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {getText(selectedProject.description)}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {language === 'mr' ? 'प्रकल्प तपशील' : 'Project Highlights'}
                </h3>
                <ul className="space-y-3">
                  {getText(selectedProject.details).map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center  p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(false);
                  }}
                  className="text-white hover:text-gray-300 text-2xl"
                  aria-label={language === 'mr' ? 'बंद करा' : 'Close'}
                >
                  &times;
                </button>
              </div>
              
              <img 
                src={selectedProject.image} 
                alt={getText(selectedProject.name)} 
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;