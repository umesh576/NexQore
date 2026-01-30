"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Training", href: "/nepal" },
    { name: "Event", href: "/abroad" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Connect Us", href: "/contact" },
  ];

  const services = [
    { name: "IT Training", href: "/services/university-selection" },
    { name: "Professional Development", href: "/services/admission" },
    { name: "Web Designing", href: "/services/visa" },
    { name: "App Development", href: "/services/scholarship" },
    { name: "Graphics Design", href: "/services/documentation" },
    { name: "Share Marketing", href: "/services/pre-departure" },
    { name: "Business Development", href: "/services/pre-departure" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0a1a3a] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <div className="text-2xl font-bold tracking-wider text-white mb-1">
                ASTRA
              </div>
              <div className="text-xs tracking-[0.3em] text-blue-300 font-semibold">
                INTERNATIONAL EDUCATION
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for education consultancy in Nepal and
              abroad. We guide students to achieve their academic dreams in top
              destinations worldwide.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-blue-900 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 shrink-0" />
                <span className="text-gray-300">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3 shrink-0" />
                <span className="text-gray-300">+977 1-1234567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3 shrink-0" />
                <span className="text-gray-300">info@astraeducation.com</span>
              </li>
              <li className="flex items-start">
                <FaClock className="text-blue-400 mt-1 mr-3 shrink-0" />
                <span className="text-gray-300">Sun-Fri: 10AM - 6PM</span>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-blue-300">
                Subscribe to Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="grow px-4 py-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a1129] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Astra International Education. All
              rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-blue-600">|</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <span className="text-blue-600">|</span>
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors duration-300"
              >
                Sitemap
              </Link>
              <span className="text-blue-600">|</span>
              <Link
                href="/faq"
                className="hover:text-white transition-colors duration-300"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Accreditation Badges */}
          <div className="flex justify-center items-center gap-6 mt-6 pt-6 border-t border-blue-900">
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Accredited by</div>
              <div className="text-sm font-semibold text-blue-300">
                Nepal Government
              </div>
            </div>
            <div className="h-6 w-px bg-blue-800"></div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Member of</div>
              <div className="text-sm font-semibold text-blue-300">
                Education Council
              </div>
            </div>
            <div className="h-6 w-px bg-blue-800"></div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Certified</div>
              <div className="text-sm font-semibold text-blue-300">
                ISO 9001:2015
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
