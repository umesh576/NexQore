"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaCode,
  FaChartLine,
  FaBriefcase,
  FaShieldAlt,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaRobot,
  FaGraduationCap,
  FaUsers,
  FaCertificate,
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaCheckCircle,
  FaArrowRight,
  FaLaptopCode,
  FaNetworkWired,
} from "react-icons/fa";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("it");

  // IT Training Services
  const itServices = [
    {
      title: "Full Stack Development",
      icon: <FaCode className="text-blue-500 text-3xl" />,
      duration: "6 Months",
      level: "Beginner to Advanced",
      features: [
        "Frontend (React, Next.js)",
        "Backend (Node.js, Python)",
        "Database Management",
        "DevOps & Deployment",
        "Real Project Experience",
      ],
      price: "NPR 45,000",
      popular: true,
    },
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt className="text-green-500 text-3xl" />,
      duration: "4 Months",
      level: "Intermediate",
      features: [
        "Network Security",
        "Ethical Hacking",
        "Penetration Testing",
        "Security Auditing",
        "Certification Prep",
      ],
      price: "NPR 55,000",
      popular: false,
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
        "AI Model Development",
        "Big Data Tools",
      ],
      price: "NPR 65,000",
      popular: true,
    },
    {
      title: "Cloud Computing",
      icon: <FaCloud className="text-orange-500 text-3xl" />,
      duration: "3 Months",
      level: "Intermediate",
      features: [
        "AWS/Azure/GCP",
        "Cloud Architecture",
        "Serverless Computing",
        "Containerization",
        "Cloud Security",
      ],
      price: "NPR 40,000",
      popular: false,
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-pink-500 text-3xl" />,
      duration: "5 Months",
      level: "Beginner",
      features: [
        "Flutter Development",
        "React Native",
        "iOS/Android Apps",
        "API Integration",
        "App Store Deployment",
      ],
      price: "NPR 42,000",
      popular: false,
    },
    {
      title: "IT Infrastructure",
      icon: <FaNetworkWired className="text-teal-500 text-3xl" />,
      duration: "4 Months",
      level: "Intermediate",
      features: [
        "Network Administration",
        "System Administration",
        "IT Support",
        "Server Management",
        "Troubleshooting",
      ],
      price: "NPR 38,000",
      popular: false,
    },
  ];

  // Business & Share Marketing Services
  const businessServices = [
    {
      title: "Share Market Trading",
      icon: <FaChartLine className="text-green-600 text-3xl" />,
      duration: "3 Months",
      level: "All Levels",
      features: [
        "Technical Analysis",
        "Fundamental Analysis",
        "Risk Management",
        "Trading Strategies",
        "Live Trading Sessions",
      ],
      price: "NPR 35,000",
      popular: true,
    },
    {
      title: "Digital Marketing Pro",
      icon: <FaBriefcase className="text-blue-600 text-3xl" />,
      duration: "4 Months",
      level: "Beginner",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Google Analytics",
        "Campaign Management",
      ],
      price: "NPR 32,000",
      popular: true,
    },
    {
      title: "Business Analytics",
      icon: <FaDatabase className="text-indigo-600 text-3xl" />,
      duration: "3 Months",
      level: "Intermediate",
      features: [
        "Data Visualization",
        "Excel & Power BI",
        "Market Research",
        "KPI Analysis",
        "Report Generation",
      ],
      price: "NPR 28,000",
      popular: false,
    },
    {
      title: "Entrepreneurship Mastery",
      icon: <FaUsers className="text-yellow-600 text-3xl" />,
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
    },
    {
      title: "Sales & Negotiation",
      icon: <FaDollarSign className="text-red-600 text-3xl" />,
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
    },
    {
      title: "Financial Management",
      icon: <FaChartLine className="text-emerald-600 text-3xl" />,
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
    },
  ];

  // IT Company Services
  const itCompanyServices = [
    {
      title: "Custom Software Development",
      description: "Build tailored software solutions for your business needs",
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      deliverables: [
        "Web Applications",
        "Mobile Apps",
        "Desktop Software",
        "API Development",
      ],
    },
    {
      title: "IT Consulting",
      description: "Expert guidance for digital transformation and IT strategy",
      icon: <FaUsers className="text-green-500 text-2xl" />,
      deliverables: [
        "IT Strategy",
        "System Audit",
        "Technology Stack",
        "Implementation Plan",
      ],
    },
    {
      title: "Website Development",
      description:
        "Responsive, modern websites that convert visitors to customers",
      icon: <FaCode className="text-purple-500 text-2xl" />,
      deliverables: [
        "Business Websites",
        "E-commerce",
        "Portfolio Sites",
        "Landing Pages",
      ],
    },
    {
      title: "Digital Marketing Solutions",
      description:
        "Comprehensive online marketing strategies to grow your business",
      icon: <FaChartLine className="text-orange-500 text-2xl" />,
      deliverables: [
        "SEO Services",
        "Social Media",
        "PPC Campaigns",
        "Content Marketing",
      ],
    },
  ];

  const trainingBenefits = [
    {
      icon: <FaGraduationCap className="text-blue-500" />,
      title: "Industry Expert Trainers",
      description: "Learn from professionals with real-world experience",
    },
    {
      icon: <FaCertificate className="text-green-500" />,
      title: "Certified Programs",
      description: "Globally recognized certifications upon completion",
    },
    {
      icon: <FaCalendarAlt className="text-purple-500" />,
      title: "Flexible Scheduling",
      description: "Morning, evening, and weekend batches available",
    },
    {
      icon: <FaUsers className="text-orange-500" />,
      title: "Job Placement Assistance",
      description: "90% placement rate with our partner companies",
    },
    {
      icon: <FaClock className="text-red-500" />,
      title: "Lifetime Access",
      description: "Course materials and updates accessible forever",
    },
    {
      icon: <FaDollarSign className="text-emerald-500" />,
      title: "Affordable Pricing",
      description: "EMI options and scholarship opportunities available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0a2463] to-[#1e3a8a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Training & IT Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 mb-8">
            Empowering careers through cutting-edge IT training, business skill
            development, and comprehensive technology solutions for modern
            businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("it")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "it"
                  ? "bg-white text-blue-900"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              IT Training
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "business"
                  ? "bg-white text-blue-900"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              Business Training
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "company"
                  ? "bg-white text-blue-900"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              IT Company Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Tabs Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === "it" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  IT & Technology Training Programs
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Master in-demand tech skills with our industry-aligned
                  programs. Get job-ready with hands-on projects and expert
                  guidance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                      service.popular
                        ? "border-2 border-blue-500"
                        : "border border-gray-200"
                    }`}
                  >
                    {service.popular && (
                      <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-800">
                            {service.price}
                          </div>
                          <div className="text-sm text-gray-500">
                            Complete Course
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {service.duration}
                        </span>
                        <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                          {service.level}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                          Enroll Now
                        </button>
                        <button className="px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "business" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Business & Financial Training Programs
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Develop essential business skills, master share market
                  trading, and learn digital marketing strategies for career
                  growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {businessServices.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                      service.popular
                        ? "border-2 border-green-500"
                        : "border border-gray-200"
                    }`}
                  >
                    {service.popular && (
                      <div className="bg-green-500 text-white text-center py-2 font-semibold">
                        Hot in Demand
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-800">
                            {service.price}
                          </div>
                          <div className="text-sm text-gray-500">
                            Complete Course
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                          {service.duration}
                        </span>
                        <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                          {service.level}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">
                          Enroll Now
                        </button>
                        <button className="px-4 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "company" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  IT Company Services & Solutions
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Professional IT solutions and digital services to help
                  businesses grow in the digital age.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                {itCompanyServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-blue-50 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="mt-6">
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
                    <button className="mt-6 w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-lg transition-colors">
                      Request Quote
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Need Custom IT Solutions?
                    </h3>
                    <p className="mb-6">
                      We provide tailored IT services for businesses of all
                      sizes. From software development to digital marketing,
                      weve got you covered.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-white text-blue-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Get Free Consultation
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div>Projects Delivered</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-3xl font-bold mb-2">95%</div>
                      <div>Client Satisfaction</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div>Technical Support</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-3xl font-bold mb-2">2M+</div>
                      <div>Lines of Code</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Astra for Training?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the best learning experience with industry-leading
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-50 mr-4">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0a2463] to-[#1e3a8a]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Join thousands of successful professionals who started their journey
            with Astra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Browse All Courses
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Talk to Our Counselor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
