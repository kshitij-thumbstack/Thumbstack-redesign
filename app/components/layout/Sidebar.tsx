"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <aside className="hidden sm:flex fixed top-0 left-0 h-full w-[50px] md:w-[70px] bg-sidebar hover:bg-sidebar-hover transition-colors duration-300 z-40 flex-col justify-between items-center py-8">
        <div className="flex-1 flex items-start justify-center mt-16">
          <Link href="/">
            <h1 className="text-mint font-bold text-2xl tracking-tight -rotate-90 whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300">
              Thumbstack.
            </h1>
          </Link>
        </div>

        <div className="flex-none mb-24">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 p-4 cursor-pointer focus:outline-none group items-start"
            suppressHydrationWarning
          >
            <span className="block w-6 h-[2px] bg-mint group-hover:bg-white transition-colors duration-300"></span>
            <span className="block w-6 h-[2px] bg-mint group-hover:bg-white transition-colors duration-300"></span>
            <span className="block w-4 h-[2px] bg-mint group-hover:bg-white transition-colors duration-300"></span>
          </button>
        </div>
      </aside>

      {/* Mobile Menu Button - Fixed at top left on mobile */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 left-4 sm:hidden flex flex-col gap-1.5 p-3 cursor-pointer focus:outline-none group items-start bg-white rounded-lg shadow-lg z-50 hover:shadow-xl transition-shadow"
        suppressHydrationWarning
      >
        <span className="block w-5 h-[2.5px] bg-sidebar group-hover:bg-blue transition-colors duration-300"></span>
        <span className="block w-5 h-[2.5px] bg-sidebar group-hover:bg-blue transition-colors duration-300"></span>
        <span className="block w-3 h-[2.5px] bg-sidebar group-hover:bg-blue transition-colors duration-300"></span>
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] grid grid-cols-1 md:grid-cols-[1.8fr_1fr] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={() => setMenuOpen(false)}
      >

        {/* Left Pane - Navigation */}
        <div className="bg-sidebar h-full w-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-y-auto scrollbar-hide" onClick={(e) => e.stopPropagation()}>
          {/* Top Logo - Pushed to top-left corner */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
            <Link href="/">
              <h2 className="text-mint font-bold text-lg sm:text-xl tracking-tight cursor-pointer hover:text-white transition-colors">
                Thumbstack.
              </h2>
            </Link>
          </div>

          {/* Center Links - Typography matching Nohemi spec */}
          <nav className="flex flex-col gap-2 mt-16 sm:mt-20 mb-auto pl-4 sm:pl-8 md:pl-24">
            {[
              { name: "Fields Of Play", href: "/#fields-of-play" },
              { name: "Our Work", href: "/our-work" },
              { name: "News & Insights", href: "/news-and-insights" },
              { name: "Service", href: "/#service" },
              { name: "About Us", href: "/about-us" }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-white font-medium tracking-normal hover:text-mint transition-colors w-fit leading-[1.33]"
                style={{
                  fontSize: 'clamp(40px, 9vw, 96px)',
                  fontWeight: 500
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bottom Controls */}
          <div className="flex justify-between items-end w-full mt-auto relative h-12 gap-4">
            {/* Close Button - Pushed to bottom-left corner */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-mint p-2 transition-colors cursor-pointer absolute bottom-2 left-2"
              suppressHydrationWarning
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Socials - Pushed to bottom-right corner */}
            <div className="flex gap-2 sm:gap-4 text-white absolute bottom-2 right-2">
              {/* Instagram */}
              <a href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 10 10 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 10 10 0 0 1-15 0 2 2 0 0 1-2-2z" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Pane - Marquee */}
        <div className="bg-[#7A73E4] h-full w-full hidden md:flex items-center justify-center overflow-hidden relative border-l border-white/5 scrollbar-hide">
          <div className="flex gap-2 h-full">
            {/* Vertical Marquee 1 (Moving Up) */}
            <div className="flex flex-col gap-2 animate-[marquee-y-up_50s_linear_infinite] w-[220px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shrink-0">
                  <Image src={i % 2 === 0 ? "/Frame 2085663160.png" : "/Home.png"} alt="UI App" fill sizes="(max-width: 768px) 220px, 220px" className="object-cover" />
                </div>
              ))}
            </div>

            {/* Vertical Marquee 2 (Moving Down) */}
            <div className="flex flex-col gap-2 animate-[marquee-y-down_50s_linear_infinite] w-[220px] mt-[-500px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shrink-0">
                  <Image src={i % 2 === 0 ? "/Store 1.png" : "/Onboarding 7 (1) 1.png"} alt="UI App" fill sizes="(max-width: 768px) 220px, 220px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
