// components/services/ITCompanyServices.jsx
import {
  FaLaptopCode,
  FaUsers,
  FaCode,
  FaChartLine,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const ITCompanyServices = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions for your specific business needs",
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
      deliverables: [
        "Web Applications",
        "Mobile Apps",
        "Desktop Software",
        "API Development",
      ],
      pricing: "Project-based",
      timeline: "4-12 weeks",
    },
    {
      title: "Website Development",
      description:
        "Responsive, modern websites that convert visitors to customers",
      icon: <FaCode className="text-green-500 text-3xl" />,
      deliverables: [
        "Business Websites",
        "E-commerce",
        "Portfolio Sites",
        "Landing Pages",
      ],
      pricing: "From NPR 50,000",
      timeline: "2-6 weeks",
    },
    {
      title: "IT Consulting",
      description: "Expert guidance for digital transformation and IT strategy",
      icon: <FaUsers className="text-purple-500 text-3xl" />,
      deliverables: [
        "IT Strategy",
        "System Audit",
        "Technology Stack",
        "Implementation Plan",
      ],
      pricing: "Hourly/Project",
      timeline: "Ongoing",
    },
    {
      title: "Digital Marketing Solutions",
      description:
        "Comprehensive online marketing strategies to grow your business",
      icon: <FaChartLine className="text-orange-500 text-3xl" />,
      deliverables: [
        "SEO Services",
        "Social Media",
        "PPC Campaigns",
        "Content Marketing",
      ],
      pricing: "Monthly Retainer",
      timeline: "3+ months",
    },
    {
      title: "Cloud Solutions",
      description:
        "Migrate and optimize your infrastructure on cloud platforms",
      icon: <FaServer className="text-teal-500 text-3xl" />,
      deliverables: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Cost Optimization",
        "Security",
      ],
      pricing: "Project-based",
      timeline: "2-8 weeks",
    },
    {
      title: "Cybersecurity Services",
      description:
        "Protect your business from cyber threats and vulnerabilities",
      icon: <FaShieldAlt className="text-red-500 text-3xl" />,
      deliverables: [
        "Security Audit",
        "Penetration Testing",
        "Incident Response",
        "Training",
      ],
      pricing: "Project/Retainer",
      timeline: "Varies",
    },
  ];

  return (
    <section id="it-solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            IT Company Services & Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional IT solutions to help businesses grow and succeed in the
            digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">
                  Key Deliverables:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-500">Pricing</div>
                  <div className="font-semibold text-gray-800">
                    {service.pricing}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Timeline</div>
                  <div className="font-semibold text-gray-800">
                    {service.timeline}
                  </div>
                </div>
              </div>

              <button className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-lg transition-colors">
                Request Quote
              </button>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Our Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand your requirements and objectives",
              },
              {
                step: "02",
                title: "Planning",
                description: "Create detailed project roadmap and timeline",
              },
              {
                step: "03",
                title: "Development",
                description: "Build and test the solution with regular updates",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy and provide ongoing maintenance",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITCompanyServices;
