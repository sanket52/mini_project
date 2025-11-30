import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
       
          {/* left */}
          <div className="text-center sm:text-left"> 
            <span className="text-gray-500 font-light tracking-wide mb-6">
              <span className="text-purple-400"></span>
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Discover & <br /> Create Amazing <br /> 
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Events.
              </span>
            </h1>

            {/* FIXED: only ONE <p> tag */}
            <p className="text-lg sm:text-xl text-blue-400 mb-12 max-w-lg font-semibold">
              Whether you're hosting or attending, Spott makes every event memorable.
            </p>

            <Link href="/explore">
              <Button size="lg" className="rounded-full">
                Get Started
              </Button>
            </Link>
          </div>

          {/* right */}
          <div>
            <Image
              src="/react.png"
              alt="react-image"
              width={700}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
