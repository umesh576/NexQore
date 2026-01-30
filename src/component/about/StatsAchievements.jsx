// components/about/StatsAchievements.jsx
"use client";
import { useState, useEffect } from "react";
import { FaTrophy, FaAward, FaStar, FaRibbon } from "react-icons/fa";

const StatsAchievements = () => {
  const [students, setStudents] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);

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

    const timers = [
      animateCount(setStudents, 3200, 2500),
      animateCount(setCompanies, 200, 2000),
      animateCount(setProjects, 500, 3000),
      animateCount(setCountries, 3, 1500),
    ];

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  const achievements = [
    {
      year: "2023",
      title: "Best IT Training Institute",
      organization: "National Education Awards",
      icon: <FaTrophy className="text-yellow-500" />,
    },
    {
      year: "2022",
      title: "Excellence in Skill Development",
      organization: "Asia Pacific Education Council",
      icon: <FaAward className="text-blue-500" />,
    },
    {
      year: "2022",
      title: "Top 10 EdTech Startups",
      organization: "Forbes Asia",
      icon: <FaStar className="text-purple-500" />,
    },
    {
      year: "2021",
      title: "Digital Transformation Partner",
      organization: "Government of Nepal",
      icon: <FaRibbon className="text-green-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            By The Numbers
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our impact in transforming careers and businesses
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              {students.toLocaleString()}+
            </div>
            <div className="text-gray-700 font-semibold">
              Professionals Trained
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              {companies}+
            </div>
            <div className="text-gray-700 font-semibold">Corporate Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              {projects}+
            </div>
            <div className="text-gray-700 font-semibold">
              Projects Delivered
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
              {countries}
            </div>
            <div className="text-gray-700 font-semibold">
              Countries Presence
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Awards & Recognitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-100 mr-4">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-semibold">
                      {achievement.year}
                    </div>
                    <h4 className="font-bold text-gray-800">
                      {achievement.title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {achievement.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2018",
                  event: "NexQore founded with focus on IT training",
                  detail: "Started with 2 trainers and 50 students",
                },
                {
                  year: "2019",
                  event: "Expanded to Business Training Programs",
                  detail: "Launched Digital Marketing and Share Market courses",
                },
                {
                  year: "2020",
                  event: "Launched Corporate Training Division",
                  detail: "Partnered with 50+ companies",
                },
                {
                  year: "2021",
                  event: "Opened 3 new training centers",
                  detail: "Expanded to Pokhara and Chitwan",
                },
                {
                  year: "2022",
                  event: "International recognition and awards",
                  detail: "Featured in Forbes Asia",
                },
                {
                  year: "2023",
                  event: "Launched IT Solutions Division",
                  detail: "Started providing custom software development",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-blue-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {milestone.detail}
                      </p>
                    </div>
                  </div>
                  <div className="relative w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAchievements;
