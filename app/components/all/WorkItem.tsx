"use client";
 
import Image from "next/image";

export default function WorkItem() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-24 snap-start relative bg-white md:pl-[90px]">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        
        {/* Left Side: Featured Image */}
        <div className="relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg flex-shrink-0">
          <Image 
            src="/stack2.jpg" 
            alt="Case study featured project"
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-lg">
              <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </div>
          </div>
        </div>
 
        {/* Right Side: Content */}
        <div className="flex flex-col flex-1 items-start justify-center w-full lg:w-1/2 gap-6 sm:gap-8">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-foreground rounded-full text-xs sm:text-sm font-medium text-foreground hover:bg-foreground hover:text-white transition-colors">
              Design
            </span>
            <span className="px-4 py-2 border border-foreground rounded-full text-xs sm:text-sm font-medium text-foreground hover:bg-foreground hover:text-white transition-colors">
              E-Commerce
            </span>
            <span className="px-4 py-2 border border-foreground rounded-full text-xs sm:text-sm font-medium text-foreground hover:bg-foreground hover:text-white transition-colors">
              AI
            </span>
          </div>

          {/* Main Heading */}
          <h2 
            className="leading-tight"
            style={{
              fontFamily: "var(--font-nohemi)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color: "#0F1E16"
            }}
          >
            Redefining How Luxury Clothing Connects With The World
          </h2>

          {/* Quote */}
          <p 
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              color: "#0F1E16"
            }}
          >
            "They Didn't Just Design Our Brand They Helped Us Understand Who We Truly Are."
          </p>

          {/* Client Info */}
          <div className="flex flex-col gap-1">
            <p 
              className="font-semibold text-sm sm:text-base"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Ayesha N.
            </p>
            <p 
              className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Head of Ecomm, SIORAI
            </p>
          </div>

          {/* Company Name */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600" style={{ fontFamily: "var(--font-delight)" }}>
            SIORAI
          </p>

          {/* CTA Button */}
          <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-white rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 hover:opacity-80 transition-opacity">
            Start your story
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M7 17L17 7M17 7V17M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
