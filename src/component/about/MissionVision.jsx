// components/about/MissionVision.jsx
import { FaBullseye, FaEye, FaHandsHelping, FaStar } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Purpose & Values
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Driving digital transformation through education and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-600 text-white rounded-xl mr-4">
                <FaBullseye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To empower individuals and businesses with cutting-edge IT skills
              and digital solutions that drive innovation, career growth, and
              business transformation in the rapidly evolving digital landscape.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaStar className="text-blue-500 mr-3" />
                <span className="text-black">
                  Democratize access to quality IT education
                </span>
              </li>
              <li className="flex items-center">
                <FaStar className="text-blue-500 mr-3" />
                <span className="text-black">
                  Bridge the industry-academia skill gap
                </span>
              </li>
              <li className="flex items-center">
                <FaStar className="text-blue-500 mr-3" />
                <span className="text-black">
                  Foster innovation and entrepreneurship
                </span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-600 text-white rounded-xl mr-4">
                <FaEye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To become Asia&apos;s leading digital skills and solutions
              provider, recognized for creating a workforce that drives
              technological innovation and economic growth across industries.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaStar className="text-purple-500 mr-3" />
                <span className="text-black">
                  Train 10,000+ professionals annually by 2025
                </span>
              </li>
              <li className="flex items-center">
                <FaStar className="text-purple-500 mr-3" />
                <span className="text-black">
                  Partner with 500+ companies for talent solutions
                </span>
              </li>
              <li className="flex items-center">
                <FaStar className="text-purple-500 mr-3" />
                <span className="text-black">
                  Expand to 5 countries in Southeast Asia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHandsHelping className="text-blue-500" size={28} />,
                title: "Excellence",
                description:
                  "Striving for the highest quality in everything we do",
              },
              {
                icon: <FaBullseye className="text-green-500" size={28} />,
                title: "Innovation",
                description:
                  "Embracing change and driving technological advancement",
              },
              {
                icon: <FaStar className="text-purple-500" size={28} />,
                title: "Integrity",
                description:
                  "Operating with transparency and ethical practices",
              },
              {
                icon: <FaEye className="text-orange-500" size={28} />,
                title: "Impact",
                description: "Creating measurable value for our stakeholders",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
