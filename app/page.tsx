import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto pt-32 space-y-16 sm:space-y-32">
      <div>
        <Hero />
        
      </div>

    </div>
  );
}
