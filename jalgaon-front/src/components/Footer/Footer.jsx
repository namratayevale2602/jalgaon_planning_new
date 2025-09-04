import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { logo } from "../../assets";

const Footer = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Jalgaon District Planning",
      mr: "जळगाव जिल्हा नियोजन",
    },
    subtitle: {
      en: "Government of Maharashtra",
      mr: "महाराष्ट्र शासन",
    },
    address: {
      en: "Jalgaon, Maharashtra",
      mr: "जळगाव, महाराष्ट्र",
    },
    phone: {
      en: "0257-2223135",
      mr: "०२५७-२२२३१३५",
    },
    copyright: {
      en: "© Jalgaon District Planning",
      mr: "© जळगाव जिल्हा नियोजन",
    },
    developby: {
      en: "Developed by Rich System Solution Pvt. Ltd.",
      mr: "रिच सिस्टम सोल्युशन प्रायव्हेट लिमिटेड द्वारे विकसित.",
    },
  };

  const getText = (key) => {
    return content[key][language] || content[key].en;
  };

  return (
    <footer className="bg-pink-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Logo and basic info */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Jalgaon District Logo" className="h-20 mr-3" />
            <div>
              <h3 className="text-lg font-bold">{getText("title")}</h3>
              <p className="text-sm text-gray-300">{getText("subtitle")}</p>
            </div>
          </div>

          {/* Right side - Minimal contact info */}
          <div className="text-sm">
            <div className="flex items-center mb-1">
              <FaMapMarkerAlt className="mr-2" />
              <span>{getText("address")}</span>
            </div>
            <div className="flex items-center mb-1">
              <FaPhone className="mr-2" />
              <span>{getText("phone")}</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>dpojalgaon@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-300 mt-4 pt-4 text-center text-sm text-gray-300">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p>{getText("copyright")}</p>
            <p className="md:ml-4">{getText("developby")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
