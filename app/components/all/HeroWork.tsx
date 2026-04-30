"use client";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "../layout/Sidebar";

export default function HeroWork() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-12 px-6 md:px-12 lg:px-24 snap-start relative bg-[#3145DD] md:pl-[70px] overflow-hidden">
      <Sidebar />

      {/* Background Glows */}
      {/* Ellipse 456 */}
      <div 
        className="absolute w-[555px] h-[901px] left-[1034px] top-[24px] bg-[rgba(228,249,244,0.18)] blur-[124.522px] rounded-full pointer-events-none z-0 hidden lg:block"
      ></div>
      {/* Ellipse 455 */}
      <div 
        className="absolute w-[786px] h-[1029px] left-[841px] top-[-67px] bg-[rgba(149,231,211,0.25)] blur-[124.522px] rounded-full pointer-events-none z-0 hidden lg:block"
      ></div>
      {/* Mobile Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[300px] h-[300px] bg-white opacity-40 blur-[100px] rounded-full pointer-events-none z-0 lg:hidden"></div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between h-full relative z-10">

        {/* Left Content */}
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="mb-12 md:mb-20">
            <Link
              href="#"
              className="text-white font-medium text-[16px] flex items-center gap-2 hover:opacity-75 transition-opacity uppercase tracking-wider h-[58px] w-fit"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Let&apos;s Build Together
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col relative">
            <h1
              className="text-white flex flex-col max-w-full"
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(2.5rem, 8vw, 100px)",
                fontWeight: 500,
                lineHeight: "clamp(3rem, 11vw, 143px)",
                letterSpacing: "-0.02em",
              }}
            >
              <span>Work That Moves</span>
              <span>Businesses Forward</span>
            </h1>

            <p
              className="text-white/90 text-[14px] max-w-[553px] leading-[28px] mt-10"
              style={{ 
                fontFamily: "var(--font-satoshi)",
                fontWeight: 700 
              }}
            >
              A curated collection of digital products, brand systems, and platforms
              we&apos;ve built across real estate, e-commerce, enterprise systems, and emerging startups.
            </p>
          </div>
        </div>

        {/* Right Content - The Vertical Stack */}
        <div className="hidden lg:flex lg:w-1/2 relative h-[800px] items-center justify-end translate-x-12 xl:translate-x-32">
          <div className="relative w-[500px] h-full flex flex-col justify-center gap-12">

            {/* Top Card (Frame 2087326434) */}
            <div 
              className="relative w-[424.5px] h-[384.38px] bg-[#7FABA2] rounded-[12px] p-4 shadow-2xl z-10 border border-[rgba(245,245,245,0.44)]"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/BFT2.jpg"
                  alt="Bharat Flooring"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Floating Badge (Frame 2087326360) */}
              <div
                className="absolute left-[-40px] top-[15%] w-[83px] h-[83px] bg-[rgba(255,255,255,0.32)] backdrop-blur-md rounded-full flex flex-col items-center justify-center text-white border border-white/20 shadow-xl z-30"
              >
                <span className="text-[14px] font-bold leading-[21px]" style={{ fontFamily: "var(--font-satoshi)" }}>BFT</span>
                <span className="text-[14px] leading-[21px]" style={{ fontFamily: "var(--font-satoshi)" }}>Read</span>
              </div>
            </div>

            {/* Bottom Card (Frame 2087326433) */}
            <div 
              className="relative w-[426px] h-[385px] bg-linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)) rounded-[12px] p-4 shadow-2xl border border-[rgba(245,245,245,0.44)]"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
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