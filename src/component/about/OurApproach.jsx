// components/about/OurApproach.jsx
import {
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaCertificate,
  FaBriefcase,
  FaLightbulb,
} from "react-icons/fa";

const OurApproach = () => {
  const methodology = [
    {
      step: "01",
      title: "Industry Analysis",
      description:
        "We continuously analyze market trends and industry requirements to keep our curriculum relevant.",
      icon: <FaChartLine className="text-blue-500" size={24} />,
    },
    {
      step: "02",
      title: "Curriculum Design",
      description:
        "Experts design practical, project-based learning modules aligned with industry needs.",
      icon: <FaLaptopCode className="text-green-500" size={24} />,
    },
    {
      step: "03",
      title: "Hands-on Training",
      description:
        "80% practical sessions with real-world projects and industry tools.",
      icon: <FaUsers className="text-purple-500" size={24} />,
    },
    {
      step: "04",
      title: "Skill Assessment",
      description:
        "Regular evaluations and feedback to ensure skill development.",
      icon: <FaCertificate className="text-orange-500" size={24} />,
    },
    {
      step: "05",
      title: "Placement Support",
      description:
        "Career counseling, interview preparation, and job placement assistance.",
      icon: <FaBriefcase className="text-red-500" size={24} />,
    },
    {
      step: "06",
      title: "Continuous Support",
      description:
        "Lifetime access to updated materials and alumni network support.",
      icon: <FaLightbulb className="text-teal-500" size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A proven methodology for transforming careers and businesses
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {methodology.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Model */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our Operational Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span>ISO 9001:2015 Certified Training Processes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span>Industry Partnership Network of 200+ Companies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span>Modern Infrastructure with 5 Training Centers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <span>24/7 Learning Management System Access</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div>Student Satisfaction</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div>Placement Success Rate</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">40+</div>
                <div>Expert Trainers</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div>Live Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
