"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Package", href: "/package" },
    { name: "Training", href: "/training" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Connect Us", href: "/connection" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-[#0a2463] to-[#1e3a8a] text-white shadow-lg w-full">
      {/* Top Bar - Fixed responsiveness issues */}
      <div className="border-b border-blue-800 py-2 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-blue-300">📞</span>
              <span className="whitespace-nowrap">+977 1-1234567</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-blue-300">✉️</span>
              <span className="whitespace-nowrap">info@nexqore.com</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-blue-300">📍</span>
              <span className="whitespace-nowrap">Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Country Flags/Slogan */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xs text-blue-300 mr-2">We Serve:</span>
            <div className="flex gap-1">
              <p className="text-sm font-medium">Skill, Growth, Experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Fixed responsive sizing */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col items-center">
              <Image
                src="/logo.jpg"
                width={160}
                height={80}
                alt="logo nexQore"
                className="w-30 h-auto sm:w-35 md:w-40 lg:w-45 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <button className="ml-4 px-5 py-2 bg-white text-[#0a2463] font-semibold rounded-md hover:bg-blue-100 transition-colors duration-200 whitespace-nowrap">
              Apply Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn bg-blue-900/50 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 rounded-md hover:bg-blue-800 transition-colors duration-200 font-medium text-center sm:text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Apply Now Button */}
              <button className="mt-4 px-6 py-3 bg-white text-[#0a2463] font-semibold rounded-md hover:bg-blue-100 transition-colors duration-200 w-full">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
