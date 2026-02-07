"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaChevronRight,
  FaCheckCircle,
  FaLaptopCode,
  FaChartLine,
  FaHotel,
  FaGlassCheers,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [studentsTrained, setStudentsTrained] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [placementRate, setPlacementRate] = useState(0);

  // Statistics animation
  useEffect(() => {
    const animateCount = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
      return timer;
    };

    const timer1 = animateCount(setStudentsTrained, 3200, 2500);
    const timer2 = animateCount(setCoursesCount, 25, 1800);
    const timer3 = animateCount(setPlacementRate, 85, 3000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  const handleVideoControl = () => {
    const video = document.getElementById("hero-video");
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Training Programs Categories
  const trainingCategories = [
    {
      category: "IT & Technology",
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      programs: [
        "Full Stack Development",
        "Data Science",
        "Cybersecurity",
        "Cloud Computing",
        "AI & ML",
      ],
    },
    {
      category: "Digital Marketing",
      icon: <FaChartLine className="text-green-400 text-2xl" />,
      programs: [
        "SEO/SEM",
        "Social Media Marketing",
        "Content Marketing",
        "Google Ads",
        "Email Marketing",
      ],
    },
    {
      category: "Hospitality Management",
      icon: <FaHotel className="text-yellow-400 text-2xl" />,
      programs: [
        "Hotel Operations",
        "Bartending",
        "Bakery & Pastry",
        "Culinary Arts",
        "Event Management",
      ],
    },
    {
      category: "Business & Finance",
      icon: <FaBriefcase className="text-purple-400 text-2xl" />,
      programs: [
        "Share Market Trading",
        "Business Management",
        "Entrepreneurship",
        "Accounting",
        "Sales Training",
      ],
    },
  ];

  // Featured Training Programs
  const featuredPrograms = [
    {
      name: "Full Stack Development",
      duration: "6 Months",
      icon: "💻",
      placement: "95%",
    },
    {
      name: "Digital Marketing Pro",
      duration: "4 Months",
      icon: "📈",
      placement: "90%",
    },
    {
      name: "Professional Bartending",
      duration: "3 Months",
      icon: "🍸",
      placement: "88%",
    },
    {
      name: "Share Market Mastery",
      duration: "3 Months",
      icon: "📊",
      placement: "92%",
    },
    {
      name: "Hotel Management",
      duration: "6 Months",
      icon: "🏨",
      placement: "85%",
    },
    {
      name: "Data Science",
      duration: "8 Months",
      icon: "🔬",
      placement: "94%",
    },
  ];

  const benefits = [
    "Industry-Recognized Certifications",
    "100% Practical Hands-on Training",
    "Job Placement Assistance",
    "Flexible Batch Timings",
    "Industry Expert Trainers",
    "Modern Infrastructure & Labs",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          id="hero-video"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover brightness-90"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-linear-to-br from-[#0a2463] via-[#1e3a8a] to-[#3b82f6]"></div>
        </video>

        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-3 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={handleVideoControl}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 relative py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full mb-6 border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">
                Professional Skill Development Center
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master In-Demand
              <span className="block text-blue-300 mt-2">
                Skills for the Digital Age
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Astra Skill Academy transforms careers through cutting-edge
              professional training in IT, Digital Marketing, Hospitality,
              Business, and more. Our industry-aligned programs ensure youre
              job-ready from day one.
            </p>

            {/* Benefits Highlights */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30"
              >
                View All Courses
                <FaChevronRight className="ml-2" />
              </Link>
              <Link
                href="/demo-class"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:scale-105"
              >
                Book Free Demo Class
              </Link>
            </div>
          </div>

          {/* Right Content - Stats & Programs */}
          <div className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  {studentsTrained}+
                </div>
                <div className="text-sm text-blue-200">
                  Professionals Trained
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  {coursesCount}+
                </div>
                <div className="text-sm text-blue-200">Training Programs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  {placementRate}%
                </div>
                <div className="text-sm text-blue-200">Placement Rate</div>
              </div>
            </div>

            {/* Training Categories */}
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Our Training Domains
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {trainingCategories.map((category) => (
                  <div
                    key={category.category}
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center mb-3">
                      {category.icon}
                      <h4 className="ml-3 font-bold text-white">
                        {category.category}
                      </h4>
                    </div>
                    <ul className="space-y-1">
                      {category.programs.map((program, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-300 group-hover:text-white transition-colors"
                        >
                          • {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Programs */}
            <div className="bg-gradient-to-br from-[#0a2463]/40 to-[#1e3a8a]/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Top Rated Programs
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {featuredPrograms.map((program) => (
                  <div
                    key={program.name}
                    className="flex flex-col items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{program.icon}</div>
                    <div className="text-xs font-medium text-white text-center mb-1">
                      {program.name}
                    </div>
                    <div className="text-xs text-blue-300">
                      {program.duration}
                    </div>
                    <div className="text-xs text-green-400 mt-1">
                      {program.placement} Placement
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Enrollment Form */}
            <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-3">
                Start Your Training Journey
              </h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <div className="flex gap-3">
                  <select className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                    <option value="">Select Course Interest</option>
                    <option value="it">IT & Technology</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="business">Business & Finance</option>
                  </select>
                  <button className="px-6 bg-white text-blue-900 hover:bg-blue-100 font-semibold py-2.5 rounded-lg transition-colors duration-300 text-sm whitespace-nowrap">
                    Enroll Now
                  </button>
                </div>
                <p className="text-xs text-gray-300 text-center">
                  Get free career counseling session
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <h3 className="text-center text-xl font-bold text-white mb-8">
            Trusted by Leading Companies for Talent
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Tech Companies", icon: "🏢", count: "50+" },
              { name: "Hotels & Resorts", icon: "🏨", count: "30+" },
              { name: "Marketing Agencies", icon: "📱", count: "40+" },
              { name: "Financial Firms", icon: "💼", count: "25+" },
              { name: "Restaurants", icon: "🍽️", count: "60+" },
              { name: "Startups", icon: "🚀", count: "100+" },
            ].map((company) => (
              <div key={company.name} className="text-center">
                <div className="text-3xl mb-2">{company.icon}</div>
                <div className="text-white font-bold">{company.count}</div>
                <div className="text-sm text-gray-300">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/80 text-sm mb-2">Explore Programs</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-20 flex flex-col gap-3">
        <a
          href="tel:+9779849748294"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="text-xl">📞</span>
          <span className="font-semibold">Call Now</span>
        </a>
        <a
          href="https://wa.me/+9779849748294"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="text-xl">💬</span>
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
