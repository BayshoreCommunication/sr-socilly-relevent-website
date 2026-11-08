import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import OurServices from "@/components/home/OurServices";
import OurApproach from "@/components/home/OurApproach";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <TrustedBy />
      <IndustriesWeServe />
      <OurServices />
      <OurApproach />
    </div>
  );
}
