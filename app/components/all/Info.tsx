"use client";

import Image from "next/image";

export default function Info() {
  return (
    <section className="relative w-full min-h-[551px] bg-[#3145DD] overflow-hidden flex items-center snap-start py-20">
      {/* Background Ellipse */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "831px",
          height: "901px",
          left: "489px",
          top: "-58px",
          background: "rgba(228, 249, 244, 0.18)",
          filter: "blur(124px)",
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 h-full flex items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-4 w-full max-w-[899px]">
          <p
            className="text-white opacity-80"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "30px",
            }}
          >
            This is how we keep our work sharp, human, and meaningful.
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: "clamp(42px, 6vw, 60px)",
              maxWidth: "868px"
            }}
          >
            We Work In Small Teams.<br />
            We Ask The Uncomfortable Questions Early.<br />
            We Care Deeply About How Things Feel — Not Just How They Function.
          </h2>
        </div>
      </div>

      {/* Image Container - Using exact Figma coordinates for Desktop */}
      <div 
        className="hidden lg:block absolute pointer-events-none z-20"
        style={{
          width: "520px",
          height: "520px",
          left: "calc(50% - 520px/2 + 484px)",
          top: "198px"
        }}
      >
        <div 
          className="relative"
          style={{
            width: "367.15px",
            height: "366.37px",
            left: "calc(50% - 367.15px/2 - 37.62px)",
            top: "calc(50% - 366.37px/2 - 37.98px)",
            mixBlendMode: "plus-lighter",
            transform: "rotate(-76.48deg)"
          }}
        >
          <Image 
            src="/Design.png" 
            alt="Design graphic" 
            fill 
            sizes="367.15px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
