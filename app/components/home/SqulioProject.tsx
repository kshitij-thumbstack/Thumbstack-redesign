"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent } from "react";

export default function SqulioProject() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      className={`h-[100svh] w-full bg-[#A2A4F4] snap-start relative flex flex-col overflow-hidden ${isHovering && !showDetails ? 'cursor-none' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => {
        if (!showDetails) setShowDetails(true);
      }}
    >
      
      {/* Custom Read Cursor */}
      {isHovering && !showDetails && (
        <div 
          className="fixed pointer-events-none z-[100] w-20 h-20 bg-mint rounded-full flex items-center justify-center text-sidebar font-bold text-base shadow-2xl transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
          style={{ left: cursorPos.x, top: cursorPos.y }}
        >
          Read
        </div>
      )}

      {/* Details Overlay modal triggered by click */}
      {showDetails && (
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm z-[200] flex items-center justify-center p-4 cursor-auto"
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(false);
          }}
        >
          <div 
            className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-2xl shadow-2xl relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 text-2xl text-sidebar hover:opacity-50"
              onClick={() => setShowDetails(false)}
            >
              &times;
            </button>
            <h4 className="text-blue font-bold text-sm tracking-widest uppercase mb-4">Squlio Project</h4>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-sidebar mb-6 leading-tight">
              Transforming Fintech Engagement
            </h2>
            <p className="text-lg text-sidebar/70 font-medium mb-10">
              We partnered with Squlio to build a vibrant, gamified platform. From an intuitive onboarding flow to an engaging cashback dashboard, we transformed a complex fintech system into a delightful daily habit for users.
            </p>
            <div className="flex gap-3">
              {["Design", "Technology", "AI"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 rounded-lg text-sidebar font-semibold text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
               <Link href="#" className="px-8 py-3 bg-blue text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity">
                 Full Case Study
               </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spaced out image placements with auto-scrolling mobile columns */}
      <div className="relative w-full h-[80%] mt-4 flex px-12 sm:px-16 md:px-24 gap-12 md:gap-24 opacity-90 hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
        
        {/* Left Column (Main Dashboard - Home.png) */}
        <div className="w-[55%] h-[110%] shrink-0 relative rounded-t-[2.5rem] overflow-hidden shadow-2xl border-t-[10px] border-l-[10px] border-r-[10px] border-white/30">
           <Image 
             src="/Home.png" 
             alt="Squlio Dashboard" 
             fill 
             priority
             quality={100}
             sizes="55vw" 
             className="object-cover object-top" 
           />
        </div>

        {/* Center-Right Column (Vertical Marquee Up) - Fixed small width */}
        <div className="w-[220px] md:w-[260px] flex flex-col gap-8 md:gap-12 shrink-0 animate-[marquee-y-up_40s_linear_infinite]">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="flex flex-col gap-8 md:gap-12">
               <div className="w-full aspect-[9/19] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/30">
                  <Image src="/Frame 2085663160.png" alt="Mobile View 1" fill quality={100} sizes="220px" className="object-cover" />
               </div>
               <div className="w-full aspect-[9/19] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/30 bg-white">
                  <Image src="/Custom product pages.png" alt="Mobile View 2" fill quality={100} sizes="220px" className="object-cover" />
               </div>
             </div>
           ))}
        </div>

        {/* Far-Right Column (Vertical Marquee Down) - Fixed small width */}
        <div className="w-[220px] md:w-[260px] flex flex-col gap-8 md:gap-12 shrink-0 animate-[marquee-y-down_40s_linear_infinite]">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="flex flex-col gap-8 md:gap-12">
               <div className="w-full aspect-[9/19] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/30">
                  <Image src="/Store 1.png" alt="Store View" fill quality={100} sizes="220px" className="object-cover" />
               </div>
               <div className="w-full aspect-[9/19] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-[#5E4FD6] bg-[#5E4FD6]">
                  <Image src="/Onboarding 7 (1) 1.png" alt="Onboarding App" fill quality={100} sizes="220px" className="object-cover" />
               </div>
             </div>
           ))}
        </div>

      </div>

      {/* Sticky Bottom Bar UI - Attached to bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 md:left-8 md:right-8 bg-[#6462E7] md:rounded-t-[2.5rem] p-6 md:px-12 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] z-40 border-t border-l border-r border-[#8482F6] cursor-auto"
        onClick={(e) => e.stopPropagation()} // Prevent opening details when clicking the bar
      >
        
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            {["Design", "Technology", "AI"].map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-1 border border-white/40 rounded-full text-white text-xs font-semibold tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            Squlio
          </h3>
        </div>

        <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto justify-end">
          <button className="px-6 py-3 bg-white text-sidebar font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors shadow-sm">
            Read Case Study
          </button>
          <Link 
            href="#" 
            className="text-white font-bold text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            Visit Website
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>

    </section>
  );
}
