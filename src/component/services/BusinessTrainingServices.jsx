// components/services/BusinessTrainingServices.jsx
import {
  FaChartLine,
  FaBriefcase,
  FaDollarSign,
  FaUsers,
  FaHandshake,
  FaBullhorn,
} from "react-icons/fa";

const BusinessTrainingServices = () => {
  const businessCourses = [
    {
      title: "Digital Marketing Pro",
      icon: <FaChartLine className="text-green-500 text-3xl" />,
      duration: "4 Months",
      level: "Beginner to Advanced",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Google Analytics",
        "Campaign Management",
      ],
      price: "NPR 32,000",
      popular: true,
      placement: "90%",
    },
    {
      title: "Share Market Trading",
      icon: <FaDollarSign className="text-yellow-500 text-3xl" />,
      duration: "3 Months",
      level: "All Levels",
      features: [
        "Technical Analysis",
        "Fundamental Analysis",
        "Risk Management",
        "Trading Strategies",
        "Live Sessions",
      ],
      price: "NPR 35,000",
      popular: true,
      placement: "88%",
    },
    {
      title: "Business Analytics",
      icon: <FaBriefcase className="text-blue-500 text-3xl" />,
      duration: "3 Months",
      level: "Intermediate",
      features: [
        "Data Visualization",
        "Excel & Power BI",
        "Market Research",
        "KPI Analysis",
        "Reporting",
      ],
      price: "NPR 28,000",
      popular: false,
      placement: "92%",
    },
    {
      title: "Sales & Negotiation",
      icon: <FaHandshake className="text-red-500 text-3xl" />,
      duration: "2 Months",
      level: "Beginner",
      features: [
        "Sales Techniques",
        "Client Handling",
        "Negotiation Skills",
        "CRM Tools",
        "Lead Generation",
      ],
      price: "NPR 22,000",
      popular: false,
      placement: "85%",
    },
    {
      title: "Entrepreneurship Mastery",
      icon: <FaUsers className="text-purple-500 text-3xl" />,
      duration: "2 Months",
      level: "All Levels",
      features: [
        "Business Planning",
        "Funding Strategies",
        "Startup Management",
        "Pitch Development",
        "Legal Compliance",
      ],
      price: "NPR 25,000",
      popular: false,
      placement: "87%",
    },
    {
      title: "Financial Management",
      icon: <FaChartLine className="text-emerald-500 text-3xl" />,
      duration: "3 Months",
      level: "Intermediate",
      features: [
        "Financial Planning",
        "Investment Analysis",
        "Tax Management",
        "Portfolio Management",
        "Risk Assessment",
      ],
      price: "NPR 30,000",
      popular: false,
      placement: "91%",
    },
  ];

  return (
    <section id="business-training" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Business & Financial Training Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Develop essential business skills to advance your career or start
            your own venture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businessCourses.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                course.popular
                  ? "border-2 border-green-500"
                  : "border border-gray-200"
              }`}
            >
              {course.popular && (
                <div className="bg-green-500 text-white text-center py-2 font-semibold">
                  High Demand
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>{course.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">
                      {course.price}
                    </div>
                    <div className="text-sm text-gray-500">Complete Course</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                  <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {course.placement} Placement
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
                    Enroll Now
                  </button>
                  <button className="px-4 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors text-sm">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-600 text-white rounded-xl mr-4">
                <FaBullhorn size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800">
                Live Trading Sessions
              </h4>
            </div>
            <p className="text-gray-600">
              Practice real-time trading with expert guidance in our share
              market courses
            </p>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl mr-4">
                <FaBriefcase size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800">
                Business Plan Development
              </h4>
            </div>
            <p className="text-gray-600">
              Create and present your business plan to potential investors
            </p>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-600 text-white rounded-xl mr-4">
                <FaChartLine size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800">
                Certification Programs
              </h4>
            </div>
            <p className="text-gray-600">
              Globally recognized certifications from industry-leading platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTrainingServices;
