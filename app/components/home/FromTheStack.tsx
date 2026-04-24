"use client";

import Image from "next/image";
import Link from "next/link";

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
    <section className="min-h-[100svh] w-full flex flex-col justify-center items-center py-20 px-8 lg:px-24 snap-start relative bg-white border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-[1400px] flex flex-col mb-12">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-sidebar">
              From The Stack
            </h2>
            <p className="text-sidebar/60 text-lg md:text-xl font-medium max-w-2xl">
              Our latest launches, experiments, and thoughts on what&apos;s shaping design and technology.
            </p>
          </div>
          <Link href="#" className="flex items-center gap-2 text-sidebar font-bold text-sm md:text-base hover:opacity-70 transition-opacity mt-4">
            Explore More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Auto-moving Carousel (Marquee) */}
      <div className="w-full relative flex overflow-hidden group">
        <div className="flex gap-8 animate-[marquee-x_30s_linear_infinite] group-hover:[animation-play-state:paused] py-4">
          {[...stackItems, ...stackItems].map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="w-[85vw] md:w-[45vw] lg:w-[35vw] flex flex-col gap-6 shrink-0 relative">
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden group/card shadow-lg">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors" />
                
                {/* Logo Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-white/95 rounded-[1.5rem] shadow-2xl flex items-center justify-center p-6 backdrop-blur-md">
                   <div className="text-sidebar font-black text-xl md:text-2xl tracking-tighter text-center italic font-serif">
                     {item.logo}
                   </div>
                </div>

                {/* Drag Indicator (only for specific cards to match image) */}
                {(idx === 2 || idx === 5) && (
                  <div className="absolute bottom-12 right-12 w-24 h-24 bg-[#A0E2D1]/90 rounded-full flex items-center justify-center text-sidebar font-bold text-lg backdrop-blur-sm shadow-xl z-20">
                    Drag
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-sidebar">
                    {item.title}
                  </h3>
                  <span className="px-5 py-1 bg-blue/10 text-blue text-xs font-bold rounded-full">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sidebar/70 text-sm md:text-base font-medium line-clamp-2">
                  {item.description}
                </p>
                <Link href="#" className="flex items-center gap-2 text-sidebar font-bold text-sm hover:underline w-fit">
                  Read Case Study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
