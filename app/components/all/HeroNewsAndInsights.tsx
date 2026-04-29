"use client";

import Link from "next/link";
import Sidebar from "../layout/Sidebar";

export default function HeroNewsAndInsights() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-12 px-6 md:px-12 lg:px-24 snap-start relative bg-[#3145DD] md:pl-[90px] overflow-hidden">
      <Sidebar />
      
      {/* Background Decoration - Glowing Oval */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white opacity-40 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Top row */}
        <div className="flex justify-between items-start w-full">
          <Link href="#" className="text-white font-medium text-xs md:text-sm flex items-center gap-2 hover:opacity-75 transition-opacity" style={{ fontFamily: "var(--font-satoshi)" }}>
            Let&apos;s Build Together
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px]">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Main typography */}
        <div className="flex flex-col gap-8 relative z-10">
          <h1 
            className="text-white tracking-tighter max-w-[1200px]"
            style={{ 
              fontFamily: "var(--font-delight)", 
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 8vw, 114.45px)",
              lineHeight: "clamp(3rem, 10vw, 143.07px)",
              letterSpacing: "-2%",
              verticalAlign: "middle"
            }}
          >
            Ideas, News & Notes<br />
            From The Studio.
          </h1>

          <p 
            className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            We document what we learn — from design sprints to engineering breakthroughs, 
            new project launches, experiments, and small discoveries that move our work forward.
          </p>
        </div>
      </div>
    </section>
  );
}
