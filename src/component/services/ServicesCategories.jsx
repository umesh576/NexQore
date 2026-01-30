// components/services/ServicesCategories.jsx
"use client";
import { useState } from "react";
import {
  FaLaptopCode,
  FaChartLine,
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesCategories = () => {
  const [activeCategory, setActiveCategory] = useState("it-training");

  const categories = [
    {
      id: "it-training",
      title: "IT & Technology Training",
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: "Master in-demand tech skills with hands-on training",
      color: "from-blue-500 to-blue-600",
      count: 8,
    },
    {
      id: "business-training",
      title: "Business Skill Training",
      icon: <FaChartLine className="text-green-500 text-2xl" />,
      description: "Develop essential business and financial skills",
      color: "from-green-500 to-green-600",
      count: 6,
    },
    {
      id: "it-solutions",
      title: "IT Company Services",
      icon: <FaBuilding className="text-purple-500 text-2xl" />,
      description: "Custom software and digital solutions for businesses",
      color: "from-purple-500 to-purple-600",
      count: 4,
    },
    {
      id: "corporate",
      title: "Corporate Training",
      icon: <FaUsers className="text-orange-500 text-2xl" />,
      description: "Team training and skill development for companies",
      color: "from-orange-500 to-orange-600",
      count: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Service Categories
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for individuals, professionals, and
            businesses
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`cursor-pointer ${
                activeCategory === category.id ? "ring-4 ring-blue-200" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-100">
                    {category.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-500">
                    {category.count} services
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div
                  className={`h-2 w-full rounded-full bg-linear-to-r ${category.color}`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-linear-to-r from-gray-50 to-blue-50 rounded-3xl p-8"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-600 text-white rounded-xl mr-4">
              {categories.find((c) => c.id === activeCategory)?.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {categories.find((c) => c.id === activeCategory)?.title}
              </h3>
              <p className="text-gray-600">
                {categories.find((c) => c.id === activeCategory)?.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activeCategory === "it-training" &&
              [
                "Full Stack Development",
                "Cybersecurity",
                "Data Science & AI",
                "Cloud Computing",
                "Mobile App Development",
                "DevOps",
                "UI/UX Design",
                "IT Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg text-center"
                >
                  {item}
                </div>
              ))}

            {activeCategory === "business-training" &&
              [
                "Digital Marketing",
                "Share Market Trading",
                "Business Analytics",
                "Sales & Negotiation",
                "Financial Management",
                "Entrepreneurship",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg text-center"
                >
                  {item}
                </div>
              ))}

            {activeCategory === "it-solutions" &&
              [
                "Custom Software Development",
                "Website Development",
                "Mobile App Development",
                "IT Consulting",
                "Digital Marketing Solutions",
                "Cloud Solutions",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg text-center"
                >
                  {item}
                </div>
              ))}

            {activeCategory === "corporate" &&
              [
                "Team Skill Development",
                "IT Infrastructure Training",
                "Leadership Programs",
                "Digital Transformation",
                "Compliance Training",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg text-center"
                >
                  {item}
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCategories;
