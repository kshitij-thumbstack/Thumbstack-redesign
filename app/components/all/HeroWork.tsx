"use client";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "../layout/Sidebar";

export default function HeroWork() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-12 px-6 md:px-12 lg:px-16 snap-start relative bg-[#3145DD] md:pl-[60px] overflow-hidden">
      <Sidebar />

      {/* Background Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white opacity-40 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between h-full">

        {/* Left Content */}
        <div className="flex flex-col z-10 lg:w-1/2">
          <div className="mb-20">
            <Link
              href="#"
              className="text-white font-medium text-[13px] flex items-center gap-2 hover:opacity-75 transition-opacity uppercase tracking-wider"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Let&apos;s Build Together
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col relative z-10">
            <h1
              className="text-white flex flex-col"
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "100px",
                fontWeight: 500,
                lineHeight: "143.07px",
                letterSpacing: "-2%",
                width: "1098px",
                height: "287px",
              }}
            >
              <span>Work That Moves</span>
              <span>Businesses Forward</span>
            </h1>

            <p
              className="text-white/90 text-sm md:text-[15px] max-w-[380px] leading-relaxed mt-10"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              A curated collection of digital products, brand systems, and platforms
              we&apos;ve built across real estate, e-commerce, enterprise systems, and emerging startups.
            </p>
          </div>
        </div>

        {/* Right Content - The Vertical Stack */}
        <div className="lg:w-1/2 relative h-[700px] hidden lg:flex items-center justify-end translate-x-32">
          <div className="relative w-[520px] h-full flex flex-col justify-center gap-6">

            {/* Top Green Card */}
            <div className="relative w-full aspect-[1.4/1] bg-[#82A292] rounded-[24px] p-4 shadow-2xl z-10">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/BFT2.jpg"
                  alt="Bharat Flooring"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Floating Badge - Positioned to overlap the left edge of the card */}
              <div
                className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-white border border-white/20 shadow-xl z-30"
              >
                <span className="text-[12px] font-bold" style={{ fontFamily: "var(--font-satoshi)" }}>BFT</span>
                <span className="text-[12px]" style={{ fontFamily: "var(--font-satoshi)" }}>Read</span>
              </div>
            </div>

            {/* Bottom Purple Card */}
            <div className="relative w-full aspect-[1.4/1] bg-[#9EA2E8] rounded-[24px] p-4 shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                <Image
                  src="/Home.png"
                  alt="Home Page"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}