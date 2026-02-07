import BusinessTrainingServices from "@/component/services/BusinessTrainingServices";
import EnrollmentProcess from "@/component/services/EnrollmentProcess";
import ITCompanyServices from "@/component/services/ITCompanyServices";
import ITTrainingServices from "@/component/services/ITTrainingServices";
import ServiceCTA from "@/component/services/ServiceCTA";
import ServicesCategories from "@/component/services/ServicesCategories";
import ServicesHero from "@/component/services/ServicesHero";
import WhyChooseUs from "@/component/services/WhyChooseUs";

export const metadata = {
  title: "Services | NexQore - IT Training & Business Solutions",
  description:
    "Professional IT training, business skill development, and custom IT solutions. Full Stack Development, Cybersecurity, Digital Marketing, Share Market Trading, and more.",
  keywords:
    "IT training, business training, digital marketing, share market, cybersecurity, software development, IT solutions",
  openGraph: {
    title: "Services | NexQore - IT Training & Business Solutions",
    description:
      "Transform your career or business with our comprehensive services.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesCategories />
      <ITTrainingServices />
      <BusinessTrainingServices />
      <ITCompanyServices />
      <WhyChooseUs />
      <EnrollmentProcess />
      <ServiceCTA />
    </main>
  );
}
