// components/about/AboutHero.jsx
"use client";
import Link from "next/link";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a2463] via-[#1e3a8a] to-[#3b82f6]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">Since 2018</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Pioneering
              <span className="block text-blue-300">Digital Excellence</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              NexQore is a premier IT training and business solutions company
              that bridges the gap between technology education and industry
              requirements. We empower individuals and businesses to thrive in
              the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Explore Our Courses
                <FaArrowRight className="ml-2" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-300">
                <FaPlay className="mr-2" />
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right Content - Stats Preview */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">3,200+</div>
              <div className="text-blue-200">Professionals Trained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-200">Placement Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-200">Corporate Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-200">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
