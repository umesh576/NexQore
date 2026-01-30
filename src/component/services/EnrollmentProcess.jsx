// components/services/EnrollmentProcess.jsx
"use client";
import { useState } from "react";
import {
  FaSearch,
  FaUserCheck,
  FaCalendarAlt,
  FaFileContract,
  FaCreditCard,
  FaGraduationCap,
} from "react-icons/fa";

const EnrollmentProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 1,
      title: "Explore Courses",
      description: "Browse our catalog and choose your preferred program",
      icon: <FaSearch className="text-blue-500 text-xl" />,
    },
    {
      step: 2,
      title: "Free Consultation",
      description: "Talk to our counselor for personalized guidance",
      icon: <FaUserCheck className="text-green-500 text-xl" />,
    },
    {
      step: 3,
      title: "Select Batch",
      description: "Choose your preferred schedule and timing",
      icon: <FaCalendarAlt className="text-purple-500 text-xl" />,
    },
    {
      step: 4,
      title: "Complete Registration",
      description: "Submit required documents and forms",
      icon: <FaFileContract className="text-orange-500 text-xl" />,
    },
    {
      step: 5,
      title: "Payment",
      description: "Pay fees with flexible payment options",
      icon: <FaCreditCard className="text-red-500 text-xl" />,
    },
    {
      step: 6,
      title: "Start Learning",
      description: "Begin your training journey with us",
      icon: <FaGraduationCap className="text-teal-500 text-xl" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Simple Enrollment Process
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Easy steps to start your learning journey with NexQore
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Steps */}
          <div className="hidden md:flex justify-between mb-12 relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300 -z-10"></div>

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${
                    activeStep === index
                      ? "bg-blue-600 text-white scale-110"
                      : "bg-white text-gray-700 border-2 border-gray-300"
                  }`}
                >
                  <div
                    className={`${activeStep === index ? "text-white" : ""}`}
                  >
                    {step.icon}
                  </div>
                </button>
                <div className="text-center">
                  <div
                    className={`font-bold mb-1 ${activeStep === index ? "text-blue-600" : "text-gray-700"}`}
                  >
                    Step {step.step}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    {step.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Steps */}
          <div className="md:hidden mb-12">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded-2xl transition-all ${
                    activeStep === index
                      ? "bg-blue-50 border-2 border-blue-200"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      activeStep === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{step.title}</div>
                    <div className="text-sm text-gray-600">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                {steps[activeStep].icon}
              </div>
              <div>
                <div className="text-sm text-blue-600 font-semibold">
                  Step {steps[activeStep].step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  {steps[activeStep].description}
                </p>

                {activeStep === 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Browse through 25+ training programs
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Compare course details and outcomes
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Read student reviews and success stories
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Free 30-minute career counseling session
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Personalized course recommendations
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Career path planning and guidance
                    </div>
                  </div>
                )}

                {/* Add similar details for other steps */}
              </div>

              <div className="bg-linear-to-br from-blue-50 to-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-4">Need Help?</h4>
                <p className="text-gray-600 mb-6">
                  Our counselors are available to guide you through each step of
                  the process.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcess;
