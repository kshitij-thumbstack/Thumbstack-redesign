import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsAndInsightsArticle() {
  return (
    <div className="w-full bg-[#FFFFFF] relative pb-20 z-10">
      {/* Container */}
      <div className="w-full max-w-[1600px] mx-auto pt-24 px-6 md:px-12 lg:px-[100px] flex flex-col items-center">
        
        {/* Back Link */}
        <div className="w-full flex justify-start mb-12">
          <Link 
            href="/#news-and-insights" 
            className="flex items-center gap-2 text-[#0F1D07] hover:text-[#3145DD] transition-colors"
            style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 500, fontSize: '16px' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to News & Insights
          </Link>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] md:h-[738px] relative overflow-hidden mb-16 md:mb-24 shrink-0 bg-[#BDBDBD] rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] z-10 pointer-events-none"></div>
          <Image 
            src="/grid1.jpg"
            alt="Article Hero"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Article Header & Main Text */}
        <div className="w-full max-w-[1248px] flex flex-col items-start gap-12 md:gap-[100px] mb-16 md:mb-[100px]">
          
          {/* Top Intro Section */}
          <div className="w-full max-w-[1048px] flex flex-col items-start gap-4">
            <span 
              className="text-[#000000] text-[14px] leading-[36px]"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              12 min read · Mar 28, 2026
            </span>
            
            <div className="flex flex-col gap-4">
              <h1 
                className="text-[#0F1D07] w-full"
                style={{ 
                  fontFamily: 'var(--font-delight)', 
                  fontWeight: 500, 
                  fontSize: 'clamp(40px, 6vw, 80px)', 
                  lineHeight: '1.28', 
                  letterSpacing: '-0.02em' 
                }}
              >
                Launch: Sunteck Realty Digital Showcase
              </h1>
              
              <p 
                className="text-[#0F1D07] w-full max-w-[772px]"
                style={{ 
                  fontFamily: 'var(--font-satoshi)', 
                  fontWeight: 500, 
                  fontSize: 'clamp(18px, 3vw, 22px)', 
                  lineHeight: '1.64' 
                }}
              >
                We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.
              </p>
              
              <p 
                className="text-[#0F1D07] w-full max-w-[700px] mt-2"
                style={{ 
                  fontFamily: 'var(--font-satoshi)', 
                  fontWeight: 400, 
                  fontSize: 'clamp(16px, 2vw, 20px)', 
                  lineHeight: '1.6' 
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium. Suscipit et in lectus netus pellentesque suscipit elementum. Purus libero mi et nec a. Risus aliquet amet imperdiet elit nulla amet. Arcu morbi amet sed sit amet eu adipiscing eget.
              </p>
            </div>
          </div>

          {/* Sub Section 1 */}
          <div className="w-full max-w-[1044px] flex flex-col items-start gap-5 md:gap-10">
            <h2 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 500, 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                lineHeight: '1.67', 
                letterSpacing: '-0.02em' 
              }}
            >
              Launch: Sunteck Realty Digital Showcase
            </h2>
            <p 
              className="text-[#0F1D07] w-full max-w-[700px]"
              style={{ 
                fontFamily: 'var(--font-satoshi)', 
                fontWeight: 400, 
                fontSize: 'clamp(16px, 2vw, 20px)', 
                lineHeight: '1.6' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium. Suscipit et in lectus netus pellentesque suscipit elementum. Purus libero mi et nec a. Risus aliquet amet imperdiet elit nulla amet. Arcu morbi amet sed sit amet eu adipiscing eget.
            </p>
          </div>

        </div>

        {/* Middle Image 1 */}
        <div className="w-full h-[400px] md:h-[738px] relative overflow-hidden mb-16 md:mb-[100px] shrink-0 bg-[#BDBDBD] rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] z-10 pointer-events-none"></div>
          <Image 
            src="/grid1.jpg" // Placeholder for IMG_1557.jpg
            alt="Article Mid Image"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Sub Section 2 */}
        <div className="w-full max-w-[1248px] flex flex-col items-start mb-16 md:mb-[100px]">
          <div className="w-full max-w-[1044px] flex flex-col items-start gap-5 md:gap-10">
            <h2 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 500, 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                lineHeight: '1.67', 
                letterSpacing: '-0.02em' 
              }}
            >
              Launch: Sunteck Realty Digital Showcase
            </h2>
            <p 
              className="text-[#0F1D07] w-full max-w-[700px]"
              style={{ 
                fontFamily: 'var(--font-satoshi)', 
                fontWeight: 400, 
                fontSize: 'clamp(16px, 2vw, 20px)', 
                lineHeight: '1.6' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium. Suscipit et in lectus netus pellentesque suscipit elementum. Purus libero mi et nec a. Risus aliquet amet imperdiet elit nulla amet. Arcu morbi amet sed sit amet eu adipiscing eget.
            </p>
          </div>
        </div>

        {/* Middle Image 2 */}
        <div className="w-full h-[400px] md:h-[738px] relative overflow-hidden mb-16 md:mb-[100px] shrink-0 bg-[#BDBDBD] rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] z-10 pointer-events-none"></div>
          <Image 
            src="/grid1.jpg" // Placeholder
            alt="Article Bottom Image"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Two Column Section */}
        <div className="w-full max-w-[1248px] flex flex-col md:flex-row items-start gap-10 md:gap-[40px]">
          
          {/* Column 1 */}
          <div className="flex-1 flex flex-col items-start gap-5">
            <h2 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 500, 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                lineHeight: '1.43', 
                letterSpacing: '-0.02em' 
              }}
            >
              Launch: Sunteck Realty Digital Showcase
            </h2>
            <p 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-satoshi)', 
                fontWeight: 400, 
                fontSize: 'clamp(16px, 2vw, 20px)', 
                lineHeight: '1.6' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col items-start gap-5">
            <h2 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 500, 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                lineHeight: '1.43', 
                letterSpacing: '-0.02em' 
              }}
            >
              Launch: Sunteck Realty Digital Showcase
            </h2>
            <p 
              className="text-[#0F1D07] w-full"
              style={{ 
                fontFamily: 'var(--font-satoshi)', 
                fontWeight: 400, 
                fontSize: 'clamp(16px, 2vw, 20px)', 
                lineHeight: '1.6' 
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue sem at commodo viverra platea sed arcu. Nisl malesuada odio vivamus massa praesent malesuada urna vitae vehicula. Amet viverra tellus facilisi pharetra dui eget. Ultrices augue cursus morbi amet ut id dignissim. Non at in tristique mattis libero bibendum massa massa. Urna diam lorem tincidunt vulputate duis lectus. Lobortis massa at mattis magna euismod sed elementum imperdiet nibh. Viverra gravida mi gravida viverra turpis pretium.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
