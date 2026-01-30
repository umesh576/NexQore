// components/services/WhyChooseUs.jsx
import {
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
  FaUsers,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
      title: "Industry Expert Trainers",
      description:
        "Learn from professionals with 10+ years of real-world experience",
    },
    {
      icon: <FaCertificate className="text-green-500 text-2xl" />,
      title: "Certified Programs",
      description: "Globally recognized certifications upon completion",
    },
    {
      icon: <FaCalendarAlt className="text-purple-500 text-2xl" />,
      title: "Flexible Scheduling",
      description: "Morning, evening, and weekend batches available",
    },
    {
      icon: <FaUsers className="text-orange-500 text-2xl" />,
      title: "Job Placement Assistance",
      description: "95% placement rate with 200+ partner companies",
    },
    {
      icon: <FaClock className="text-red-500 text-2xl" />,
      title: "Lifetime Access",
      description: "Course materials and updates accessible forever",
    },
    {
      icon: <FaDollarSign className="text-emerald-500 text-2xl" />,
      title: "Affordable Pricing",
      description: "EMI options and scholarship opportunities available",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose NexQore?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide the best learning and service experience with
            industry-leading standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-blue-50 mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Preview */}
        <div className="bg-linear-to-r from-blue-50 to-gray-50 rounded-3xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                What Our Clients Say
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-gray-700 mb-3">
                    The Full Stack Development course transformed my career.
                    Landed a job within 2 months!
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold">Amit Sharma</div>
                      <div className="text-sm text-gray-500">
                        Software Developer
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-gray-700 mb-3">
                    Their custom software solution increased our efficiency by
                    40%.
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold">Sunita Enterprises</div>
                      <div className="text-sm text-gray-500">
                        Business Client
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-700">Average Rating</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  98%
                </div>
                <div className="text-gray-700">Satisfaction Rate</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  200+
                </div>
                <div className="text-gray-700">Corporate Clients</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  95%
                </div>
                <div className="text-gray-700">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
