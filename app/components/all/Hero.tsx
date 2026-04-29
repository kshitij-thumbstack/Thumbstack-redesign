"use client";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "../layout/Sidebar";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-between py-12 px-6 md:px-12 lg:px-24 snap-start relative bg-white md:pl-[90px]">
      <Sidebar />
      {/* Top row */}
      <div className="flex justify-between items-start w-full max-w-[1400px] mx-auto pt-8">
        <Link href="/services" className="text-foreground font-semibold text-xs md:text-base flex items-center gap-2 hover:underline">
          Our Services
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px]">
            <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Main typography */}
      <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-center relative py-12">
        <h1
          className="text-[clamp(2.5rem,10vw,7rem)] leading-[1.15] tracking-tighter max-w-[1200px]"
          style={{
            fontFamily: "var(--font-delight)",
            fontWeight: 600
          }}
        >
          <span className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="bg-mint text-[#3145DD] px-2 pb-1 md:px-5 md:pb-3 rounded-none inline-block">Designing</span>
            <span className="text-[#3145DD]">and</span>
            <span className="bg-[#3145DD] text-mint px-2 pb-1 md:px-5 md:pb-3 rounded-none inline-block">building</span>
          </span>
          <span className="text-[#3145DD] block mt-2">meaningful digital</span>
          <span className="text-[#3145DD] block">experiences.</span>
        </h1>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
          <div className="flex flex-col gap-2">
            <p
              className="text-foreground font-medium text-sm md:text-base"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              We Build The Remarkable, Not The Routine.
            </p>
            <p
              className="text-foreground font-medium text-sm md:text-base"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Thoughtfully Crafted. <span className="text-blue">Bold In Execution.</span>
            </p>
          </div>

          <div className="mr-0 md:mr-12 lg:mr-24 hidden sm:block">
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <Image
                src="/circle.png"
                alt="Decorative spinning circle"
                fill
                sizes="(max-width: 768px) 128px, 192px"
                className="object-contain animate-[spin_20s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-[1400px] mx-auto flex justify-center pb-4 md:pb-8">
        <a href="#work" className="text-foreground font-bold text-xs md:text-sm flex items-center gap-2 hover:opacity-75 transition-opacity">
          View Our Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
