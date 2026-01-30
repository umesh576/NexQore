// components/services/ServiceCTA.jsx
import Link from "next/link";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const ServiceCTA = () => {
  return (
    <section className="py-20 bg-linear-to-r from-[#0a2463] to-[#1e3a8a]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Whether you want to upgrade your skills, start a new career, or
                get professional IT solutions for your business, we&apos;re here
                to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaArrowRight className="text-blue-300 mr-3" />
                  <span>Free career counseling session</span>
                </div>
                <div className="flex items-center">
                  <FaArrowRight className="text-blue-300 mr-3" />
                  <span>Flexible payment options available</span>
                </div>
                <div className="flex items-center">
                  <FaArrowRight className="text-blue-300 mr-3" />
                  <span>Job placement assistance included</span>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Options */}
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Get in Touch Today
              </h3>

              <div className="space-y-6">
                {/* Quick Contact Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="tel:+977123456789"
                    className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/977123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </a>
                </div>

                {/* Email Form */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-4">
                    Send us a message
                  </h4>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Service Interested In</option>
                      <option value="it-training">IT Training</option>
                      <option value="business-training">
                        Business Training
                      </option>
                      <option value="it-solutions">IT Solutions</option>
                      <option value="corporate">Corporate Training</option>
                    </select>
                    <button className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-lg transition-colors">
                      Submit Inquiry
                    </button>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="text-center">
                  <p className="text-gray-600 mb-2">
                    Or visit our training center
                  </p>
                  <p className="font-semibold text-gray-800">
                    Kathmandu, Nepal
                  </p>
                  <p className="text-sm text-gray-500">Sun-Fri: 7AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="text-white">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold mb-2">ISO 9001</div>
                <div className="text-blue-200">Certified Quality</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-blue-200">Partner Companies</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
