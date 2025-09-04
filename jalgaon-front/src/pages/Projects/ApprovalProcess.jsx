import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaUserCheck,
  FaClock,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

const ApprovalProcess = () => {
  const steps = [
    {
      step: 1,
      title: "Proposal Submission",
      icon: <FaFileAlt className="text-blue-600" />,
      description: "Submit complete proposal with required documents",
      duration: "7 days",
      requirements: [
        "Duly filled application form",
        "Detailed project report",
        "Estimated cost breakdown",
        "Location map and photos",
      ],
    },
    {
      step: 2,
      title: "Initial Scrutiny",
      icon: <FaUserCheck className="text-blue-600" />,
      description: "Review by Assistant Planning Officer",
      duration: "15 days",
      requirements: [
        "Technical feasibility check",
        "Budget adequacy verification",
        "Compliance with guidelines",
      ],
    },
    {
      step: 3,
      title: "Field Verification",
      icon: <FaCheckCircle className="text-blue-600" />,
      description: "Site visit by verification team",
      duration: "15 days",
      requirements: [
        "Physical site inspection",
        "Beneficiary consultations",
        "Need assessment report",
      ],
    },
    {
      step: 4,
      title: "Financial Approval",
      icon: <FaMoneyBillWave className="text-blue-600" />,
      description: "Budget clearance from finance department",
      duration: "15 days",
      requirements: [
        "Fund availability confirmation",
        "Treasury concurrence",
        "Approved budget sheet",
      ],
    },
    {
      step: 5,
      title: "Final Approval",
      icon: <FaCheckCircle className="text-blue-600" />,
      description: "DPC meeting and final sanction",
      duration: "30 days",
      requirements: [
        "DPC agenda inclusion",
        "Member discussions",
        "Resolution passing",
      ],
    },
  ];

  const documentsRequired = [
    "Project proposal in prescribed format",
    "Detailed estimate from approved agency",
    "Location plan with measurements",
    "Photographs of proposed site",
    "No Objection Certificates (if applicable)",
    "Land ownership documents (for construction projects)",
    "Technical sanction from competent authority",
    "Environmental clearance (if required)",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Project Approval Process
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Step-by-Step Guide
          </h2>

          <div className="relative">
            <div className="absolute left-4 h-full w-0.5 bg-blue-100 md:left-1/2 md:-ml-1"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 p-4 rounded-lg shadow-sm border ${
                      index % 2 === 0
                        ? "md:mr-8 bg-blue-50 border-blue-100"
                        : "md:ml-8 bg-green-50 border-green-100"
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          index % 2 === 0
                            ? "bg-blue-600 text-white"
                            : "bg-green-600 text-white"
                        } font-bold mr-3`}
                      >
                        {step.step}
                      </div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3 pl-11">
                      <FaClock className="mr-1" /> Duration: {step.duration}
                    </div>
                    <p className="text-gray-700 mb-3 pl-11">
                      {step.description}
                    </p>

                    <h4 className="text-sm font-medium text-gray-800 mb-2 pl-11">
                      Key Requirements:
                    </h4>
                    <ul className="list-disc pl-16 text-gray-600 space-y-1">
                      {step.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Documents Required
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {documentsRequired.map((doc, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {doc}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Important Guidelines
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Complete proposals must be submitted online through the DPC
                portal
              </li>
              <li>
                Incomplete applications will be rejected without processing
              </li>
              <li>Average processing time is 90 days from submission</li>
              <li>
                Status can be tracked using the application reference number
              </li>
              <li>
                Physical copies must be submitted within 7 days of online
                application
              </li>
              <li>All documents must be self-attested by the applicant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalProcess;
