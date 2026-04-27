"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-blue snap-start">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 pt-20 pb-12 flex flex-col gap-16">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

          {/* Left - Say Hi */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 
              className="text-white flex items-center gap-4 whitespace-nowrap"
              style={{
                fontFamily: "Nohemi, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(4rem, 12vw, 152px)",
                lineHeight: "clamp(4rem, 12vw, 152px)",
                letterSpacing: "-2%",
                verticalAlign: "middle",
                textTransform: "capitalize"
              }}
            >
              Say hi!
              <div className="shrink-0 animate-spin-pause">
                <Image 
                  src="/footercircle.png" 
                  alt="Decorative spinning circle" 
                  width={152} 
                  height={152} 
                  className="w-[clamp(3rem,10vw,120px)] h-auto"
                />
              </div>
            </h2>

            <div className="flex flex-col gap-1">
              <p className="text-white/80 text-sm">Let&apos;s make something amazing together.</p>
              <p className="text-white/80 text-sm">Come chat with us — we&apos;ve got coffee (or tea) ready and are always up for a good conversation.</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-white mt-4">
              {/* Instagram */}
              <a href="#" className="hover:text-mint transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-mint transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 10 10 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 10 10 0 0 1-15 0 2 2 0 0 1-2-2z" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:text-mint transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-mint transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>

          {/* Right - Quick Links + Contact */}
          <div className="grid grid-cols-2 gap-8 md:gap-24 lg:gap-32">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-xs md:text-sm mb-2 uppercase tracking-wider">Quick Links</h3>
              <Link href="#" className="text-white/70 text-xs md:text-sm hover:text-white transition-colors">Fields of play</Link>
              <Link href="#" className="text-white/70 text-xs md:text-sm hover:text-white transition-colors">Our Work</Link>
              <Link href="#" className="text-white/70 text-xs md:text-sm hover:text-white transition-colors">News & insights</Link>
              <Link href="#" className="text-white/70 text-xs md:text-sm hover:text-white transition-colors">About us</Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-lg md:text-xl mb-1">Contact</h3>

              <div className="flex flex-col gap-1">
                <span className="text-white font-medium text-base md:text-lg mb-1">Mumbai (Worli)</span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-white font-medium text-base md:text-lg underline underline-offset-4 decoration-white/80">+91</span>
                  <a href="tel:8374938493" className="text-white font-medium text-base md:text-lg underline underline-offset-4 decoration-white/80 hover:text-mint transition-colors">8374938493</a>
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <span className="text-white font-medium text-base md:text-lg mb-1">Budapest</span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-white font-medium text-base md:text-lg underline underline-offset-4 decoration-white/80">+91</span>
                  <a href="tel:8374938493" className="text-white font-medium text-base md:text-lg underline underline-offset-4 decoration-white/80 hover:text-mint transition-colors">8374938493</a>
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <span className="text-white font-medium text-base md:text-lg mb-1">Dubai</span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-white font-medium text-base md:text-lg underline underline-offset-4 decoration-white/80">+91</span>
                  <a href="tel:8374938493" className="text-white font-medium text-base md:text-lg underline underline-offset-4 decoration-white/80 hover:text-mint transition-colors">8374938493</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="flex gap-6">
            <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">Privacy Policies</Link>
            <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">Terms and Conditions</Link>
          </div>

          <button
            className="flex items-center gap-3 px-6 py-3 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition-colors"
            suppressHydrationWarning
          >
            Sign up to our newsletter
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
