"use client";

export default function LetsTalk() {
  return (
    <section className="min-h-[100svh] w-full snap-start relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/talk.jpg')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 items-start">

        {/* Left Side - Headline */}
        <div className="flex flex-col gap-6 md:gap-8 lg:w-2/5 pt-8">
          <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide uppercase">Get in touch</span>
          <h2
            className="text-white font-medium tracking-tighter capitalize"
            style={{
              fontFamily: "Nohemi, sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 100.37px)",
              lineHeight: "102px",
              letterSpacing: "0%"
            }}
          >
            Lets<br />Create
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
            Great products begin with simple conversations. Tell us what you&apos;re envisioning — the goals, the gaps, the sparks — and we&apos;ll come back with ideas, clarity, and a way forward that actually moves the needle.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col gap-8 md:w-3/5 pt-8">
          {/* Row 1: First Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 text-xs font-medium uppercase tracking-wider">First Name</label>
              <input
                type="text"
                placeholder="Anna"
                className="bg-transparent border-b border-gray-600 text-white text-lg pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 text-xs font-medium uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                placeholder="Louis"
                className="bg-transparent border-b border-gray-600 text-white text-lg pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 text-xs font-medium uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                placeholder="Anna.Louis@Email.Com"
                className="bg-transparent border-b border-gray-600 text-white text-lg pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 text-xs font-medium uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                placeholder="+91"
                className="bg-transparent border-b border-gray-600 text-white text-lg pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* Row 3: Project Details */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-xs font-medium uppercase tracking-wider">Project Details</label>
            <input
              type="text"
              placeholder="Tell Us About Your Project..."
              className="bg-transparent border-b border-gray-600 text-white text-lg pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
              suppressHydrationWarning
            />
          </div>

          {/* Submit Button */}
          <button
            className="self-start mt-4 px-8 py-4 bg-blue hover:bg-blue/90 text-white rounded-full font-semibold flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
            suppressHydrationWarning
          >
            Talk to us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
