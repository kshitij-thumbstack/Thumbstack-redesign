"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue snap-start">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 pt-20 pb-12 flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          
          {/* Left - Say Hi */}
          <div className="flex flex-col gap-8 md:max-w-md">
            <h2 className="text-white text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] flex items-center gap-4">
              Say hi!
              {/* Mint flower/swirl SVG */}
              <svg width="64" height="64" viewBox="0 0 100 100" className="text-mint fill-current animate-[spin_20s_linear_infinite]">
                <path d="M50 5C52 22 60 30 50 50C68 30 78 28 95 30C78 38 70 48 50 50C70 52 78 62 95 70C78 72 68 70 50 50C60 70 52 78 50 95C48 78 40 70 50 50C30 70 22 72 5 70C22 62 30 52 50 50C30 48 22 38 5 30C22 28 32 30 50 50C40 30 48 22 50 5Z" />
              </svg>
            </h2>
            
            <div className="flex flex-col gap-1">
              <p className="text-white/80 text-sm">Let&apos;s make something amazing together.</p>
              <p className="text-white/80 text-sm">Come chat with us — we&apos;ve got coffee (or tea) ready and are always up for a good conversation.</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-white mt-4">
              {/* Instagram */}
              <a href="#" className="hover:text-mint transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-mint transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 10 10 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 10 10 0 0 1-15 0 2 2 0 0 1-2-2z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:text-mint transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-mint transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Right - Quick Links + Contact */}
          <div className="flex gap-16 md:gap-24">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm mb-2">Quick Links</h3>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">Fields of play</Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">Our Work</Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">News & insights</Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors">About us</Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-sm mb-2">Contact</h3>
              
              <div className="flex flex-col gap-1">
                <span className="text-white/70 text-sm">Mumbai (Worli)</span>
                <span className="text-white/70 text-sm">+91</span>
                <a href="tel:8374938493" className="text-white text-sm underline underline-offset-2 hover:text-mint transition-colors">8374938493</a>
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <span className="text-white/70 text-sm">Budapest</span>
                <span className="text-white/70 text-sm">+91</span>
                <a href="tel:8374938493" className="text-white text-sm underline underline-offset-2 hover:text-mint transition-colors">8374938493</a>
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <span className="text-white/70 text-sm">Dubai</span>
                <span className="text-white/70 text-sm">+91</span>
                <a href="tel:8374938493" className="text-white text-sm underline underline-offset-2 hover:text-mint transition-colors">8374938493</a>
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

          <button className="flex items-center gap-3 px-6 py-3 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition-colors">
            Sign up to our newsletter
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
