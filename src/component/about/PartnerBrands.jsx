// components/about/PartnerBrands.jsx
import Image from "next/image";
import Link from "next/link";

const PartnerBrands = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/partners/microsoft.svg",
      type: "Technology Partner",
    },
    {
      name: "Google",
      logo: "/partners/google.svg",
      type: "Certification Partner",
    },
    { name: "AWS", logo: "/partners/aws.svg", type: "Cloud Partner" },
    {
      name: "NIC Asia",
      logo: "/partners/nic-asia.svg",
      type: "Corporate Client",
    },
    {
      name: "Tech Mahindra",
      logo: "/partners/tech-mahindra.svg",
      type: "Placement Partner",
    },
    {
      name: "Nepal Rastra Bank",
      logo: "/partners/nrb.svg",
      type: "Government Partner",
    },
    {
      name: "Himalayan Bank",
      logo: "/partners/himalayan-bank.svg",
      type: "Financial Partner",
    },
    { name: "NTC", logo: "/partners/ntc.svg", type: "Infrastructure Partner" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to deliver exceptional
            value
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-gray-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                  {partner.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
                <h4 className="font-bold text-gray-800">{partner.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{partner.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Start Your Journey with NexQore?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to upgrade your skills or need business
            solutions, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/courses"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About NexQore - Your Partner in Digital Transformation
          </h2>
          <p className="text-gray-600 mb-4">
            NexQore is a leading IT training and business solutions company
            based in Nepal, dedicated to empowering individuals and
            organizations through technology education and digital
            transformation services. Founded in 2018, we have rapidly grown to
            become one of the most trusted names in professional skill
            development.
          </p>
          <p className="text-gray-600 mb-4">
            Our comprehensive portfolio includes IT training programs in Full
            Stack Development, Cybersecurity, Data Science, and Cloud Computing;
            business skill development in Digital Marketing, Share Market
            Trading, and Entrepreneurship; and professional IT solutions
            including custom software development, website creation, and digital
            marketing services for businesses.
          </p>
          <p className="text-gray-600">
            What sets NexQore apart is our industry-aligned curriculum, expert
            trainers with real-world experience, and a strong focus on
            practical, project-based learning. We maintain a 95% placement rate
            for our graduates and have partnered with 200+ companies for talent
            acquisition and business solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
