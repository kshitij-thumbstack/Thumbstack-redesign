"use client";

import Image from "next/image";

export default function Info() {
  return (
    <section className="relative w-full h-[551px] bg-[#3145DD] overflow-hidden flex items-center snap-start">

      {/* Ellipse 456 - The background glow effect */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "831px",
          height: "901px",
          left: "489px",
          top: "-58px",
          background: "rgba(228, 249, 244, 0.18)",
          filter: "blur(124.52px)",
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 h-full flex items-center">
        {/* Text Container - Frame 2087326471 */}
        <div className="flex flex-col items-start gap-[12px] w-full max-w-[899px]">
          <p
            className="text-white opacity-90"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontSize: "14px",
              lineHeight: "30px",
              fontWeight: 400,
            }}
          >
            This is how we keep our work sharp, human, and meaningful.
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "38px",
              lineHeight: "58px",
              maxWidth: "868px",
              textTransform: "capitalize",
            }}
          >
            We Work In Small Teams.<br />
            We Ask The Uncomfortable Questions Early.<br />
            We Care Deeply About How Things Feel — Not Just How They Function.
          </h2>
        </div>
      </div>

      {/* Image Container - Component 141 */}
      <div
        className="absolute pointer-events-none z-20"
        style={{
          width: "520px",
          height: "520px",
          // Positioned to the right as per the visual reference
          right: "0px",
          bottom: "-60px",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            // This is the effect that makes it match the image glow
            mixBlendMode: "plus-lighter",
            // Corrected rotation: The CSS -76deg often flips it wrong in browsers
            // -15deg to -20deg matches the 'flow' in your screenshot
            transform: "rotate(-15deg)",
            filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.2))",
          }}
        >
          <Image
            src="/Design.png"
            alt="Design graphic"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}