// components/about/LeadershipTeam.jsx
"use client";
import { useState } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaStar } from "react-icons/fa";

const leadershipData = [
  {
    name: "Rajesh Thapa",
    position: "Founder & CEO",
    image: "/team/ceo.jpg",
    bio: "Former Senior Architect at Microsoft with 15+ years in tech industry. Passionate about bridging the digital skills gap in Nepal.",
    education: "MSc Computer Science, Stanford University",
    experience: "15+ years in Tech Leadership",
    linkedin: "https://linkedin.com/in/rajeshthapa",
    email: "rajesh@nexqore.com",
    achievements: [
      "Featured in Forbes 30 Under 30 Asia",
      "Speaker at TechCrunch Disrupt",
      "Author of 'Digital Transformation Handbook'",
    ],
  },
  {
    name: "Samantha Chen",
    position: "Co-Founder & CTO",
    image: "/team/cto.jpg",
    bio: "Ex-Google engineer with expertise in AI/ML and scalable systems. Leads our technical curriculum development.",
    education: "PhD AI, MIT",
    experience: "12+ years in AI Research",
    linkedin: "https://linkedin.com/in/samanthachen",
    email: "samantha@nexqore.com",
    achievements: [
      "Published 20+ research papers",
      "Lead Developer of award-winning AI platform",
      "Women in Tech Award 2022",
    ],
  },
  {
    name: "Aarav Sharma",
    position: "Director of Training",
    image: "/team/director.jpg",
    bio: "Industry veteran with 20+ years in corporate training. Designed our industry-aligned curriculum.",
    education: "MBA, Harvard Business School",
    experience: "20+ years in Education",
    linkedin: "https://linkedin.com/in/aaravsharma",
    email: "aarav@nexqore.com",
    achievements: [
      "Trained 5000+ professionals",
      "Consultant for Fortune 500 companies",
      "Government Skill Development Advisor",
    ],
  },
  {
    name: "Priya Kapoor",
    position: "Head of Business Solutions",
    image: "/team/head-business.jpg",
    bio: "Digital transformation expert helping businesses adopt cutting-edge technologies.",
    education: "MSc Digital Business, LBS",
    experience: "10+ years in Consulting",
    linkedin: "https://linkedin.com/in/priyakapoor",
    email: "priya@nexqore.com",
    achievements: [
      "Led 100+ digital transformation projects",
      "Keynote speaker at Digital Summit Asia",
      "Board Member, Tech Entrepreneurs Association",
    ],
  },
];

const LeadershipTeam = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experienced professionals driving innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {leadershipData.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="p-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                    {leader.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  {leader.name}
                </h3>
                <p className="text-blue-600 text-center font-semibold mb-4">
                  {leader.position}
                </p>
                <p className="text-gray-600 text-center text-sm mb-6">
                  {leader.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed View */}
        {selectedLeader && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {selectedLeader.position}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                        {selectedLeader.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex justify-center space-x-4 mb-6">
                      <a
                        href={selectedLeader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={`mailto:${selectedLeader.email}`}
                        className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                      >
                        <FaEnvelope />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          Biography
                        </h4>
                        <p className="text-gray-600">{selectedLeader.bio}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          Education
                        </h4>
                        <p className="text-gray-600">
                          {selectedLeader.education}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          Experience
                        </h4>
                        <p className="text-gray-600">
                          {selectedLeader.experience}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {selectedLeader.achievements.map(
                            (achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-center text-gray-600"
                              >
                                <FaStar
                                  className="text-yellow-500 mr-2"
                                  size={12}
                                />
                                {achievement}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Our leadership team brings together{" "}
            <span className="font-semibold text-blue-600">75+ years</span> of
            combined experience in technology, education, and business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
