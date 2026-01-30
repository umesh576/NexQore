// app/about/page.jsx
// import AboutHero from "@/components/about/AboutHero";
// import MissionVision from "@/components/about/MissionVision";
// import LeadershipTeam from "@/components/about/LeadershipTeam";
// import OurApproach from "@/components/about/OurApproach";
// import StatsAchievements from "@/components/about/StatsAchievements";
// import ClientTestimonials from "@/components/about/ClientTestimonials";
// import PartnerBrands from "@/components/about/PartnerBrands";

import AboutHero from "@/component/about/AboutHero";
import ClientTestimonials from "@/component/about/ClientTestimonials";
import LeadershipTeam from "@/component/about/LeadershipTeam";
import MissionVision from "@/component/about/MissionVision";
import OurApproach from "@/component/about/OurApproach";
import PartnerBrands from "@/component/about/PartnerBrands";
import StatsAchievements from "@/component/about/StatsAchievements";

export const metadata = {
  title: "About NexQore | IT Training & Business Solutions Company",
  description:
    "Learn about NexQore - A leading IT training and business solutions company. Discover our mission, leadership team, training methodology, and success stories.",
  keywords:
    "NexQore about, IT training company, business solutions, leadership team, training methodology, student success",
  openGraph: {
    title: "About NexQore | IT Training & Business Solutions Company",
    description:
      "Discover how NexQore transforms careers through cutting-edge IT training and business solutions.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MissionVision />
      <LeadershipTeam />
      <OurApproach />
      <StatsAchievements />
      <ClientTestimonials />
      <PartnerBrands />
    </main>
  );
}
