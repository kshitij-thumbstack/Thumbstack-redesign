"use client";

import Image from "next/image";

export default function WorkItem() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-24 snap-start relative bg-white md:pl-[90px]">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16">

        {/* Left Side: Featured Image */}
        <div className="relative w-full lg:w-[50%] aspect-[4/5] rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src="/stack2.jpg"
            alt="Case study featured project"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
            className="object-cover"
          />
          {/* Play Button - positioned at bottom center */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg"
              style={{ backgroundColor: "#F5D5D0" }}
            >
              <svg viewBox="0 0 24 24" fill="#0F1E16" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 ml-1">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col flex-1 items-start justify-center w-full lg:w-1/2 gap-5 sm:gap-6">

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <span
              className="px-5 py-2 border rounded-full text-xs sm:text-sm tracking-wide"
              style={{
                borderColor: "#0F1E16",
                color: "#0F1E16",
                fontFamily: "var(--font-satoshi)",
                fontWeight: 400
              }}
            >
              Design
            </span>
            <span
              className="px-5 py-2 border rounded-full text-xs sm:text-sm tracking-wide"
              style={{
                borderColor: "#0F1E16",
                color: "#0F1E16",
                fontFamily: "var(--font-satoshi)",
                fontWeight: 400
              }}
            >
              E-Commerce
            </span>
            <span
              className="px-5 py-2 border rounded-full text-xs sm:text-sm tracking-wide"
              style={{
                borderColor: "#0F1E16",
                color: "#0F1E16",
                fontFamily: "var(--font-satoshi)",
                fontWeight: 400
              }}
            >
              AI
            </span>
          </div>

          {/* Main Heading - Nohemi font */}
          <h2
            className="leading-[1.1]"
            style={{
              fontFamily: "var(--font-nohemi)",
              fontWeight: 600,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              letterSpacing: "-0.01em",
              color: "#0F1E16"
            }}
          >
            Redefining How Luxury Clothing Connects With The World
          </h2>

          {/* Quote - Delight font */}
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              color: "#0F1E16",
              lineHeight: 1.5
            }}
          >
            &ldquo;They Didn&apos;t Just Design Our Brand They Helped Us Understand Who We Truly Are.&rdquo;
          </p>

          {/* Client Info - Delight font */}
          <div className="flex flex-col gap-0.5">
            <p
              className="text-sm sm:text-base"
              style={{
                fontFamily: "var(--font-delight)",
                fontWeight: 500,
                color: "#0F1E16"
              }}
            >
              Ayesha N.
            </p>
            <p
              className="text-xs sm:text-sm uppercase"
              style={{
                fontFamily: "var(--font-delight)",
                fontWeight: 500,
                color: "#6B6B6B",
                letterSpacing: "0.08em",
                fontSize: "0.7rem"
              }}
            >
              HEAD OF ECOMM, SIORAI
            </p>
          </div>

          {/* Company Name - Bold red serif */}
          <p
            style={{
              fontFamily: "var(--font-nohemi)",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#C4291C",
              letterSpacing: "0.05em"
            }}
          >
            SIORAI
          </p>

          {/* CTA Button - Dark pill with arrow */}
          <button
            suppressHydrationWarning
            className="mt-2 flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "#0F1E16",
              color: "#FFFFFF",
              borderRadius: "999px",
              padding: "14px 28px",
              fontFamily: "var(--font-satoshi)",
              fontWeight: 500,
              fontSize: "0.95rem",
              border: "none"
            }}
          >
            Start your story
            <span
              className="flex items-center justify-center"
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.4)",
                flexShrink: 0
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7V17M17 7H7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
