"use client";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "../layout/Sidebar";

export default function Hero() {
  return (
    <section className="min-h-[100svh] w-full flex flex-col justify-between py-12 px-8 lg:px-24 snap-start relative bg-white pl-[80px] md:pl-[100px]">
      <Sidebar />
      {/* Top row */}
      <div className="flex justify-between items-start w-full max-w-[1400px] mx-auto pt-8">
        <Link href="/services" className="text-foreground font-semibold text-sm md:text-base flex items-center gap-2 hover:underline">
          Our Services
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px]">
            <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Main typography */}
      <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-center relative">
        <h1 className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] leading-[1.1] tracking-tighter font-bold text-foreground max-w-[1200px]">
          <span className="whitespace-nowrap">
            <span className="bg-mint text-blue px-3 pb-1 md:px-5 md:pb-3 rounded-none inline-block">Designing</span>{" "}
            and{" "}
            <span className="bg-blue text-mint px-3 pb-1 md:px-5 md:pb-3 rounded-none inline-block">building</span>
          </span>
          <br />
          <span className="text-blue">meaningful digital</span>
          <br />
          <span className="text-blue">experiences.</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end w-full">
          <div className="flex flex-col gap-2">
            <p className="text-foreground font-medium text-lg md:text-xl">
              We Build The Remarkable, Not The Routine.
            </p>
            <p className="text-foreground font-medium text-lg md:text-xl">
              Thoughtfully Crafted. <span className="text-blue">Bold In Execution.</span>
            </p>
          </div>

          <div className="mt-8 md:mt-0 mr-12 lg:mr-24 self-end md:self-auto hidden md:block">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image 
                src="/circle.png" 
                alt="Decorative spinning circle" 
                fill 
                className="object-contain animate-[spin_20s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-[1400px] mx-auto flex justify-center pb-8">
        <a href="#work" className="text-foreground font-bold text-sm flex items-center gap-2 hover:opacity-75 transition-opacity">
          View Our Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
