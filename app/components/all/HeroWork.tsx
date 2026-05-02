"use client";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "../layout/Sidebar";

export default function HeroWork() {
  return (
    <section className="min-h-[120vh] w-full flex flex-col justify-start py-12 px-6 md:px-12 lg:px-24 snap-start relative bg-[#3145DD] md:pl-[110px] overflow-hidden pt-80 md:pt-[55vh]">
      <Sidebar />

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none z-0" />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start justify-between h-full relative z-10 gap-8">

        {/* Left Content */}
        <div className="flex flex-col w-full lg:w-[70%] lg:mt-32">
          <div className="mb-8">
            <Link
              href="#"
              className="text-white font-medium flex items-center gap-2 hover:opacity-75 transition-opacity"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontSize: "14px" // Reduced by 2px from the previous 16px
              }}
            >
              Let&apos;s Build Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col">
            <h1
              className="text-white flex flex-col"
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(2.5rem, 6vw, 84px)",
                fontWeight: 500,
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="whitespace-nowrap">Work That Moves</span>
              <span className="whitespace-nowrap">Businesses Forward</span>
            </h1>

            <p
              className="text-white max-w-[553px] mt-10"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "28px",
                letterSpacing: "0%",
              }}
            >
              A curated collection of digital products, brand systems, and platforms
              we&apos;ve built across real estate, e-commerce, enterprise systems, and emerging startups.
            </p>
          </div>
        </div>

        {/* Right Content - Scaled Down Image Stack */}
        <div className="w-full lg:w-[30%] flex flex-col items-end gap-16 lg:translate-x-4 xl:translate-x-8">

          {/* Top Card (BFT) */}
          <div className="relative group lg:-mt-64">
            {/* Floating Badge (Slightly smaller to match) */}
            <div
              className="absolute left-[-35px] top-[20%] w-[75px] h-[75px] bg-white/20 backdrop-blur-xl rounded-full flex flex-col items-center justify-center text-white border border-white/30 shadow-2xl z-20"
            >
              <span className="text-[12px] font-bold" style={{ fontFamily: "var(--font-satoshi)" }}>BFT</span>
              <span className="text-[11px]" style={{ fontFamily: "var(--font-satoshi)" }}>Read</span>
            </div>

            <div
              className="relative w-[280px] sm:w-[340px] lg:w-[420px] aspect-[4/3] bg-[#7FABA2] rounded-[12px] p-6 shadow-2xl"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/BFT2.jpg"
                  alt="Bharat Flooring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Card (Smaller Container) */}
          <div
            className="relative w-[280px] sm:w-[340px] lg:w-[420px] aspect-[4/3] bg-[#9EA3F1] rounded-[12px] p-6 shadow-2xl lg:mt-8"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
              <Image
                src="/Home.png"
                alt="Dashboard UI"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}