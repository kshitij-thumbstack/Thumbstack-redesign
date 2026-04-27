"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BFTProject() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Notebook scroll-in: BFT page slides up over Squlio as user scrolls
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const borderTopRadius = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["2.5rem", "2.5rem", "0rem"]
  );

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // BFT palette — matching the reference image: muted sage green background
  const brandBg = "#748F82";
  const brandAccent = "#2C3E35";
  const barBg = "#1E2E26";

  return (
    <div ref={sectionRef} className="relative h-[200vh]">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.35)]"
        style={{
          y,
          borderTopLeftRadius: borderTopRadius,
          borderTopRightRadius: borderTopRadius,
          backgroundColor: brandBg,
        }}
      >
        <section
          className={`relative h-full w-full flex flex-col overflow-hidden ${isHovering && !showDetails ? "cursor-none" : ""
            }`}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => {
            if (!showDetails) setShowDetails(true);
          }}
        >
          {/* Custom "Read" cursor — mint circle like in reference */}
          {isHovering && !showDetails && (
            <div
              className="fixed pointer-events-none z-[100] w-20 h-20 bg-[#7ECBB5] rounded-full flex items-center justify-center font-bold text-base shadow-2xl -translate-x-1/2 -translate-y-1/2"
              style={{ left: cursorPos.x, top: cursorPos.y, color: brandAccent }}
            >
              Read
            </div>
          )}

          {/* Details Overlay */}
          {showDetails && (
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4 cursor-auto"
              onClick={(e) => { e.stopPropagation(); setShowDetails(false); }}
            >
              <div
                className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-2xl shadow-2xl relative animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-6 left-6 text-2xl hover:opacity-50"
                  style={{ color: brandAccent }}
                  onClick={() => setShowDetails(false)}
                >
                  &times;
                </button>
                <h4 className="font-bold text-sm tracking-widest uppercase mb-4" style={{ color: brandAccent }}>
                  BFT Project
                </h4>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight" style={{ color: brandAccent }}>
                  100 Years of Innovation
                </h2>
                <p className="text-lg text-sidebar/70 font-medium mb-10">
                  We partnered with Bharat Flooring and Tiles to craft a digital experience worthy of a century-old legacy. From a cinematic homepage to an interactive tile catalogue, we translated their heritage craftsmanship into a premium web presence.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Design", "Technology", "AI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-lg font-semibold text-sm"
                      style={{ backgroundColor: `${brandAccent}18`, color: brandAccent }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                  <Link
                    href="#"
                    className="px-8 py-3 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: brandAccent }}
                  >
                    Full Case Study
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ── Image gallery ──────────────────────────────────────────────────
              LEFT:  BFT2 (main website homepage — fixed)
              RIGHT: BFT1 → BFT3 → BFT4 (scrolling marquee UP)
          ──────────────────────────────────────────────────────────────────── */}
          <div className="relative w-full flex-1 mt-4 flex px-6 sm:px-10 md:px-14 gap-6 md:gap-12 overflow-hidden pointer-events-none opacity-95 hover:opacity-100 transition-opacity duration-500 pb-[140px] md:pb-[160px]">

            {/* LEFT image — BFT2: main website, larger, natural shape */}
            <div className="relative w-full md:w-[65%] h-full shrink-0 z-20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden">
              <Image
                src="/BFT2.jpg"
                alt="Bharat Flooring and Tiles — Homepage"
                fill
                priority
                quality={100}
                sizes="(max-width: 1000px) 130vw, 65vw"
                className="object-contain object-top"
              />
            </div>

            {/* RIGHT column — BFT1, BFT3, BFT4 scrolling UP */}
            <div className="hidden md:flex flex-1 flex-col gap-6 overflow-hidden animate-[marquee-y-up_24s_linear_infinite]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-6">
                  {/* BFT1 */}
                  <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/10">
                    <Image src="/BFT1.png" alt="BFT Homepage" fill quality={100} sizes="(max-width: 1200px) 30vw, 400px" className="object-cover object-top" />
                  </div>
                  {/* BFT3 */}
                  <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/10">
                    <Image src="/BFT3.png" alt="BFT Catalogue" fill quality={100} sizes="(max-width: 1200px) 30vw, 400px" className="object-cover" />
                  </div>
                  {/* BFT4 */}
                  <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/10">
                    <Image src="/BFT4.png" alt="BFT Details" fill quality={100} sizes="(max-width: 1200px) 30vw, 400px" className="object-cover object-center" />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Bottom Bar ──────────────────────────────────────────────────────── */}
          <div
            className="absolute bottom-0 left-0 right-0 md:left-8 md:right-8 md:rounded-t-[2.5rem] p-4 md:px-12 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 shadow-[0_-20px_60px_rgba(0,0,0,0.3)] z-40 cursor-auto"
            style={{
              backgroundColor: barBg,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
              borderRight: "1px solid rgba(255,255,255,0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex gap-2 flex-wrap">
                {["Design", "Technology", "AI"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 md:px-4 py-0.5 md:py-1 border border-white/30 rounded-full text-white text-[10px] md:text-xs font-semibold tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-white text-2xl md:text-5xl font-bold tracking-tight">
                Bharat Flooring and Tiles
              </h3>
            </div>

            <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto justify-between md:justify-end">
              <button
                className="px-5 md:px-6 py-2 md:py-3 bg-white font-bold rounded-xl text-xs md:text-sm hover:bg-gray-100 transition-colors shadow-sm"
                style={{ color: brandAccent }}
                suppressHydrationWarning
              >
                Read Case Study
              </button>
              <Link
                href="https://bharatflooringandtiles.com"
                target="_blank"
                className="text-white font-bold text-xs md:text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                Visit Website
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

        </section>
      </motion.div>
    </div>
  );
}
