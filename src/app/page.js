import LeadershipTeam from "@/component/about/LeadershipTeam";
import PartnerBrands from "@/component/about/PartnerBrands";
import Hero from "@/component/Hero";
import TestimonialSection from "@/component/package/TestimonialSection";
import ServicesCategories from "@/component/services/ServicesCategories";
import WhyChooseUs from "@/component/services/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesCategories />
      <WhyChooseUs />
      <TestimonialSection />
      <LeadershipTeam />
      <PartnerBrands />
    </div>
  );
}
