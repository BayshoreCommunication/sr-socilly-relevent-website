import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <TrustedBy />
    </div>
  );
}
