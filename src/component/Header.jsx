"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Training", href: "/training" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Connect Us", href: "/connection" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-[#0a2463] to-[#1e3a8a] text-white shadow-lg">
      {/* Top Bar */}
      <div className="border-b border-blue-800 py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-2 md:mb-0">
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-blue-300"></i>
              <span>+977 1-1234567</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-300"></i>
              <span>info@nexqore.com</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-300"></i>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Country Flags */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xs text-blue-300 mr-2">We Serve:</span>
            <div className="flex gap-1">
              <p>Skill, Growth, Experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto  py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center ">
            <div className="flex flex-col items-center">
              {/* <div className="text-5xl font-bold tracking-wider text-white">
                NexQore
              </div> */}
              <Image
                src={"/logo.jpg"}
                width={200}
                height={300}
                alt="logo nexQore"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="ml-4 px-6 py-2 bg-white text-[#0a2463] font-semibold rounded-md hover:bg-blue-100 transition-colors duration-200">
              Apply Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 rounded-md hover:bg-blue-800 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-blue-800">
                <h4 className="text-blue-300 text-sm font-semibold mb-2">
                  Study Destinations:
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {countries.map((country) => (
                    <div
                      key={country.name}
                      className="flex flex-col items-center p-2 bg-blue-900 rounded hover:bg-blue-800"
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <span className="text-xs mt-1">{country.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="mt-4 px-6 py-3 bg-white text-[#0a2463] font-semibold rounded-md hover:bg-blue-100 transition-colors duration-200">
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
