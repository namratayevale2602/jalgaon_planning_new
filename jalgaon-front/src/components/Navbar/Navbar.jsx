import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { logo, logo1 } from "../../assets";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    { name: { en: "HOME", mr: "मुख्यपृष्ठ" }, href: "/" },
    {
      name: { en: "ABOUT", mr: "आमच्याबद्दल" },
      dropdown: [
        {
          name: { en: "Organizational Chart", mr: "संस्थात्मक रचना" },
          href: "/organizationalChart",
        },
        // { name: { en: "Objectives", mr: "उद्दिष्टे" }, href: "/objectives" },
        {
          name: { en: "Planning Committee", mr: "नियोजन समिती" },
          href: "/dpc",
        },
        // {
        //   name: { en: "GENERAL REGISTER", mr: "सामान्य नोंदणीकर्ता" },
        //   href: "/gr-directory",
        // },
      ],
    },
    { name: { en: "COMMITTEE", mr: "समिती" }, href: "/planningcommittee" },
    // {
    //   name: {
    //     en: "HILLY REGION DEVELOPMENT PROGRAM",
    //     mr: "डोंगरी विभाग विकास कार्यक्रम",
    //   },
    //   href: "/gr",
    // },
    {
      name: {
        en: "DISTRICT DEVELOPMENT PLANNING",
        mr: "जिल्हा विकास आराखडा",
      },
      href: "/dsp",
    },

    {
      name: { en: "FUNCTIONS", mr: "कार्ये" },
      dropdown: [
        {
          name: { en: "RESPONSIBILITY", mr: "जबाबदाऱ्या" },
          href: "/responsibilities",
        },
        {
          name: { en: "ROLE-WISE DUTIES", mr: "भागानुसार कर्तव्ये" },
          href: "/rolewiseduties",
        },
        {
          name: { en: "OFFICER & CONTACTS", mr: "अधिकारी आणि संपर्क" },
          href: "/directory",
        },
      ],
    },
    // {
    //   name: { en: "SCHEMES", mr: "योजना" },
    //   dropdown: [
    //     {
    //       name: { en: "ANNUAL PLAN", mr: "वार्षिक योजना" },
    //       href: "/schemes#annualPlan",
    //     },
    //     {
    //       name: { en: "MLA FUNDS", mr: "एमएलए निधी" },
    //       href: "/schemes#mlaFunds",
    //     },
    //     {
    //       name: { en: "MP FUNDS", mr: "एमपी निधी" },
    //       href: "/schemes#mpFunds",
    //     },
    //     {
    //       name: { en: "HILLY AREA DEVELOPMENT", mr: "डोंगराळ क्षेत्र विकास" },
    //       href: "/schemes#hillyArea",
    //     },
    //     {
    //       name: { en: "HUMAN DEVELOPMENT", mr: "मानवी विकास" },
    //       href: "/schemes#humanDevelopment",
    //     },
    //     {
    //       name: { en: "MINORITY SCHEMES", mr: "अल्पसंख्याक योजना" },
    //       href: "/schemes#minoritySchemes",
    //     },
    //     {
    //       name: { en: "OTHER SCHEMES", mr: "इतर योजना" },
    //       href: "/schemes#otherSchemes",
    //     },
    //   ],
    // },
    { name: { en: "SCHEMES", mr: "योजना" }, href: "/scheme" },
    {
      name: { en: "RTI", mr: "माहिती अधिकार" },
      href: "/rti-portal",
    },
    { name: { en: "TOURISM", mr: "पर्यटन" }, href: "/tourism" },
    { name: { en: "GALLERY", mr: "गॅलरी" }, href: "/gallery" },
    // { name: { en: "BLOG", mr: "ब्लॉग" }, href: "/blog" },

    { name: { en: "REPORTS", mr: "अहवाल" }, href: "/reports" },
    { name: { en: "DOWNLOADS", mr: "डाउनलोड्स" }, href: "/downloads" },
  ];

  const getText = (item) => {
    return language === "en" ? item.en : item.mr;
  };

  return (
    <div className="bg-white relative">
      {/* Top Banner - Responsive */}
      <div className=" text-black">
        <div className="container mx-auto px-2 sm:px-4 py-1 sm:py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img
              src={logo}
              alt="Government Logo"
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
            <div className="hidden sm:block border-l border-white h-6 sm:h-8 mx-1 sm:mx-2"></div>
            <div className="hidden sm:block">
              <h1 className="text-sm sm:text-lg font-bold">
                {language === "en"
                  ? "Government of Maharashtra"
                  : "महाराष्ट्र शासन"}
              </h1>
              <p className="text-xs sm:text-sm">
                {language === "en"
                  ? "Jalgaon District Planning Office Portal"
                  : "जळगाव जिल्हा नियोजन कार्यालय पोर्टल"}
              </p>
            </div>
            <img
              src={logo1}
              alt="Government Logo"
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </div>

          <button
            onClick={toggleLanguage}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white text-pink-900 rounded-md hover:bg-gray-100 text-xs sm:text-sm font-medium"
          >
            {language === "en" ? "मराठी" : "English"}
          </button>
        </div>
      </div>

      {/* Main Navigation - Responsive */}
      <nav className="bg-pink-900">
        <div className="container mx-auto px-2 sm:px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex w-full">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group flex-1 text-center whitespace-nowrap"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`w-full px-1 sm:px-2 py-3 sm:py-4 font-medium text-white hover:text-pink-900 hover:bg-pink-50 transition-colors flex items-center justify-center ${
                          openDropdown === index
                            ? "bg-pink-900 text-pink-900"
                            : ""
                        }`}
                      >
                        <span className="px-1 overflow-hidden text-ellipsis text-sm sm:text-base">
                          {getText(item.name)}
                        </span>
                        <svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === index && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-50 min-w-max">
                          <ul className="bg-white shadow-lg py-1 border-t-2 border-pink-800">
                            {item.dropdown.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={subItem.href}
                                  className="block px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-pink-900 hover:bg-pink-50 hover:text-pink-900 text-left whitespace-nowrap"
                                >
                                  {getText(subItem.name)}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="w-full block px-1 sm:px-2 py-3 sm:py-4 font-medium text-white hover:text-pink-900 hover:bg-pink-50 transition-colors whitespace-nowrap text-sm sm:text-base"
                    >
                      {getText(item.name)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation - Enhanced for all small screens */}
          <div className="md:hidden flex justify-between items-center py-2 sm:py-3">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-white hover:text-pink-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Responsive */}
        {showMobileMenu && (
          <div className="md:hidden bg-white">
            <ul className="py-1 sm:py-2">
              {navItems.map((item, index) => (
                <li key={index} className="border-b border-gray-100">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left font-medium text-pink-900 hover:text-pink-900 flex justify-between items-center text-sm sm:text-base ${
                          openDropdown === index
                            ? "bg-blue-50 text-pink-900"
                            : ""
                        }`}
                      >
                        {getText(item.name)}
                        <svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === index && (
                        <ul className="bg-gray-50 pl-4 sm:pl-6">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="border-t border-gray-200"
                            >
                              <a
                                href={subItem.href}
                                className="block px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-pink-900 hover:text-pink-900 hover:bg-blue-100"
                              >
                                {getText(subItem.name)}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 sm:px-4 py-2 sm:py-3 font-medium text-white hover:text-pink-900 hover:bg-blue-50 text-sm sm:text-base"
                    >
                      {getText(item.name)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
