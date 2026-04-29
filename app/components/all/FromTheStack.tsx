"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function StackCard({ item, idx }: { item: any; idx: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 shrink-0 relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group/item
        ${idx % 2 === 0
          ? 'w-[280px] sm:w-[400px] md:w-[639px]'
          : 'w-[240px] sm:w-[320px] md:w-[480px] hover:w-[280px] sm:hover:w-[400px] md:hover:w-[639px]'
        }
      `}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }}
    >
      {/* Card Image Container */}
      <div className={`relative rounded-lg sm:rounded-2xl md:rounded-[2rem] overflow-hidden group/card shadow-lg
        ${idx % 2 === 0
          ? 'w-[280px] sm:w-[400px] md:w-[639px] h-[200px] sm:h-[300px] md:h-[488px]'
          : 'w-[240px] sm:w-[320px] md:w-[480px] h-[180px] sm:h-[240px] md:h-[366px] hover:w-[280px] sm:hover:w-[400px] md:hover:w-[639px] hover:h-[200px] sm:hover:h-[300px] md:hover:h-[488px]'
        }
      `}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 480px"
          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors" />

        {/* Logo Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 lg:w-40 h-16 sm:h-24 md:h-32 lg:h-40 bg-white/95 rounded-lg sm:rounded-xl md:rounded-[1.5rem] shadow-2xl flex items-center justify-center p-3 sm:p-4 md:p-6 backdrop-blur-md">
          <div className="text-sidebar font-black text-xs sm:text-sm md:text-xl lg:text-2xl tracking-tighter text-center italic font-serif">
            {item.logo}
          </div>
        </div>

        {/* Drag Indicator — Mouse Follow Interaction ── */}
        {(idx === 2 || idx === 5) && (
          <motion.div
            animate={{
              x: mousePos.x - 48, // Offset to center (approx for 24rem width)
              y: mousePos.y - 48,
              transition: { type: "spring", damping: 25, stiffness: 200 }
            }}
            className="absolute left-0 top-0 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-[#A0E2D1]/90 rounded-full flex items-center justify-center text-sidebar font-bold text-xs sm:text-sm md:text-lg backdrop-blur-sm shadow-xl z-20 pointer-events-none"
          >
            Drag
          </motion.div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold tracking-tight text-sidebar">
            {item.title}
          </h3>
          <span className="px-2 sm:px-3 md:px-5 py-0.5 sm:py-1 bg-blue/10 text-blue text-[10px] sm:text-xs md:text-xs font-bold rounded-full shrink-0">
            {item.tag}
          </span>
        </div>
        <p className="text-sidebar/70 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium line-clamp-2">
          {item.description}
        </p>
        <Link href="#" className="flex items-center gap-1 sm:gap-2 text-sidebar font-bold text-[10px] sm:text-xs md:text-sm hover:underline w-fit">
          Read Case Study
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function FromTheStack() {
  const stackItems = [
    {
      id: 1,
      image: "/stack1.png",
      logo: "EMAANCE",
      title: "Launch: Sunteck Realty Digital Showcase",
      description: "We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.",
      tag: "Blog"
    },
    {
      id: 2,
      image: "/stack2.png",
      logo: "WESTSIDE",
      title: "Launch: Sunteck Realty Digital Showcase",
      description: "We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.",
      tag: "Article"
    },
    {
      id: 3,
      image: "/stack3.jpg",
      logo: "BRAND",
      title: "Launch: Sunteck Realty Digital Showcase",
      description: "We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.",
      tag: "Blog"
    }
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-24 snap-start relative bg-white border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-[1400px] flex flex-col mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2
              className="text-sidebar font-bold"
              style={{
                fontFamily: "var(--font-nohemi)",
                fontSize: "clamp(2rem, 6vw, 84px)",
                lineHeight: "1.2",
                letterSpacing: "-2%",
                textTransform: "capitalize",
              }}
            >
              From The Stack
            </h2>
            <p
              className="text-sidebar/60 max-w-5xl text-xs sm:text-[13px] whitespace-nowrap"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 500,
                letterSpacing: "0%",
              }}
            >
              Our latest launches, experiments, and thoughts on what&apos;s shaping design and technology.
            </p>
          </div>
          <Link href="#" className="flex items-center gap-2 text-sidebar font-bold text-xs md:text-base hover:opacity-70 transition-opacity mt-2 md:mt-0 shrink-0 whitespace-nowrap">
            Explore More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Auto-moving Carousel (Marquee) */}
      <div className="w-full relative flex overflow-hidden group">
        <div className="flex gap-4 sm:gap-6 md:gap-8 animate-[marquee-x_30s_linear_infinite] group-hover:[animation-play-state:paused] py-3 sm:py-4 items-stretch">
          {[...stackItems, ...stackItems].map((item, idx) => (
            <StackCard key={`${item.id}-${idx}`} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}