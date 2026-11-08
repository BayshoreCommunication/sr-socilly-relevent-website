import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import OurServices from "@/components/home/OurServices";
import OurApproach from "@/components/home/OurApproach";
import RealResults from "@/components/home/RealResults";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Pricing from "@/components/home/Pricing";
import Faq from "@/components/home/Faq";
import MeetOurFounders from "@/components/home/MeetOurFounders";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <TrustedBy />
      <IndustriesWeServe />
      <OurServices />
      <OurApproach />
      <RealResults />
      <FeaturedProducts />
      <Pricing />
      <Faq />
      <MeetOurFounders />
    </div>
  );
}
