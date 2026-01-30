// components/services/ITTrainingServices.jsx
import {
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaRobot,
  FaNetworkWired,
  FaCertificate,
} from "react-icons/fa";

const ITTrainingServices = () => {
  const itCourses = [
    {
      title: "Full Stack Development",
      icon: <FaCode className="text-blue-500 text-3xl" />,
      duration: "6 Months",
      level: "Beginner to Advanced",
      features: [
        "MERN Stack",
        "REST APIs",
        "Database Design",
        "DevOps Basics",
        "Real Projects",
      ],
      price: "NPR 45,000",
      popular: true,
      placement: "95%",
    },
    {
      title: "Cybersecurity Specialist",
      icon: <FaShieldAlt className="text-green-500 text-3xl" />,
      duration: "4 Months",
      level: "Intermediate",
      features: [
        "Ethical Hacking",
        "Network Security",
        "Pen Testing",
        "Security Audits",
        "Cert Prep",
      ],
      price: "NPR 55,000",
      popular: false,
      placement: "92%",
    },
    {
      title: "Data Science & AI",
      icon: <FaDatabase className="text-purple-500 text-3xl" />,
      duration: "8 Months",
      level: "Advanced",
      features: [
        "Machine Learning",
        "Python Programming",
        "Data Analysis",
        "AI Models",
        "Big Data",
      ],
      price: "NPR 65,000",
      popular: true,
      placement: "94%",
    },
    {
      title: "Cloud Computing",
      icon: <FaCloud className="text-orange-500 text-3xl" />,
      duration: "3 Months",
      level: "Intermediate",
      features: [
        "AWS/Azure/GCP",
        "Cloud Architecture",
        "Serverless",
        "Containerization",
        "Cloud Security",
      ],
      price: "NPR 40,000",
      popular: false,
      placement: "90%",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-pink-500 text-3xl" />,
      duration: "5 Months",
      level: "Beginner",
      features: [
        "Flutter/React Native",
        "iOS/Android",
        "API Integration",
        "App Deployment",
        "UI/UX",
      ],
      price: "NPR 42,000",
      popular: false,
      placement: "88%",
    },
    {
      title: "DevOps Engineering",
      icon: <FaRobot className="text-teal-500 text-3xl" />,
      duration: "4 Months",
      level: "Intermediate",
      features: [
        "CI/CD Pipeline",
        "Docker & Kubernetes",
        "Infrastructure as Code",
        "Monitoring",
        "Automation",
      ],
      price: "NPR 48,000",
      popular: true,
      placement: "93%",
    },
    {
      title: "UI/UX Design",
      icon: <FaCertificate className="text-red-500 text-3xl" />,
      duration: "3 Months",
      level: "Beginner",
      features: [
        "Figma/Sketch",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
      price: "NPR 35,000",
      popular: false,
      placement: "91%",
    },
    {
      title: "IT Support & Networking",
      icon: <FaNetworkWired className="text-indigo-500 text-3xl" />,
      duration: "4 Months",
      level: "Beginner",
      features: [
        "Network Admin",
        "System Admin",
        "IT Support",
        "Troubleshooting",
        "Security Basics",
      ],
      price: "NPR 38,000",
      popular: false,
      placement: "89%",
    },
  ];

  return (
    <section id="it-training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            IT & Technology Training Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Industry-aligned courses with hands-on projects and guaranteed
            placement assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {itCourses.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                course.popular
                  ? "border-2 border-blue-500"
                  : "border border-gray-200"
              }`}
            >
              {course.popular && (
                <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                  Most Popular
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
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                  <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {course.placement} Placement
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
                    Enroll Now
                  </button>
                  <button className="px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm">
                    Syllabus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Features */}
        <div className="bg-linear-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Why Our IT Training Stands Out
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span>
                    Industry Expert Trainers with 10+ years experience
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span>
                    Project-based learning with real-world applications
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span>Guaranteed internship opportunities</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span>Lifetime access to course materials and updates</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div>Hours of Content</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div>Real Projects</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <div className="text-3xl font-bold mb-2">40+</div>
                <div>Expert Trainers</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div>Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITTrainingServices;
