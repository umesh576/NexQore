// components/about/ClientTestimonials.jsx
"use client";
import { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Full Stack Developer, TechSolutions Inc.",
    image: "/testimonials/amit.jpg",
    rating: 5,
    content:
      "The Full Stack Development course at NexQore completely transformed my career. Within 3 months of completion, I landed a job with a 150% salary hike. The practical projects were exactly what employers are looking for.",
    type: "student",
  },
  {
    name: "Priya Kapoor",
    role: "Marketing Director, GrowthPlus Agency",
    image: "/testimonials/priya.jpg",
    rating: 5,
    content:
      "We partnered with NexQore for digital marketing training for our entire team. The improvement in campaign performance has been remarkable. Their trainers are industry practitioners, not just academics.",
    type: "corporate",
  },
  {
    name: "Rajesh Gupta",
    role: "Stock Market Trader",
    image: "/testimonials/rajesh.jpg",
    rating: 5,
    content:
      "The Share Market Trading course taught me strategies that actually work in real markets. The live trading sessions and mentorship helped me turn trading from a hobby into a profitable profession.",
    type: "student",
  },
  {
    name: "Sunita Enterprises",
    role: "Managing Director",
    image: "/testimonials/sunita.jpg",
    rating: 5,
    content:
      "NexQore developed our e-commerce platform from scratch. Their team understood our business needs perfectly and delivered ahead of schedule. The post-launch support has been exceptional.",
    type: "client",
  },
  {
    name: "David Chen",
    role: "IT Manager, GlobalTech Corp",
    image: "/testimonials/david.jpg",
    rating: 5,
    content:
      "We've hired 15 NexQore graduates in the last year, and they've all performed exceptionally well. The curriculum is perfectly aligned with industry requirements.",
    type: "corporate",
  },
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const filteredTestimonials =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.type === filter);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length,
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What People Say About Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real stories from students, clients, and corporate partners
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => {
              setFilter("all");
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => {
              setFilter("student");
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => {
              setFilter("corporate");
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "corporate"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Corporate
          </button>
          <button
            onClick={() => {
              setFilter("client");
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "client"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            IT Clients
          </button>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-8 md:p-12">
            <FaQuoteLeft className="text-blue-200 text-4xl mb-6" />

            <div className="mb-8">
              <div className="flex mb-4">
                {[
                  ...Array(filteredTestimonials[currentIndex]?.rating || 5),
                ].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {filteredTestimonials[currentIndex]?.content}
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                {filteredTestimonials[currentIndex]?.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">
                  {filteredTestimonials[currentIndex]?.name}
                </h4>
                <p className="text-gray-600">
                  {filteredTestimonials[currentIndex]?.role}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Overall Ratings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-700">Google Reviews</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" size={14} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-700">Student Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">96%</div>
            <div className="text-gray-700">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-gray-700">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
