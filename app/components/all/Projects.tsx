"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";

/* ─── Types ────────────────────────────────────────────────────────────────── */
interface SideImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  bg: string;
  barBg: string;
  barBorder: string;
  accentColor: string;
  cursorColor: string;
  websiteUrl: string;
  caseStudyUrl: string;
  layout: "mobile" | "desktop";
  images: {
    main: string;
    mainAlt: string;
    sideTop?: SideImage;
    sideBot?: SideImage;
    sideImages?: SideImage[];
  };
}

/* ─── Single card ──────────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [hovering, setHovering] = useState(false);
  const [modal, setModal] = useState(false);
  const isDesktop = project.layout === "desktop";

  // Motion values for smooth cursor tracking without re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration for the cursor badge
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    /* Each card is 100vh tall, sticky at top, stacked by z-index */
    <div
      className="sticky top-0 h-[100svh] w-full overflow-hidden will-change-transform"
      style={{
        zIndex: index + 1,
        marginTop: index === 0 ? "0" : "-5vh",
        backgroundColor: project.bg,
        boxShadow: "0 -20px 50px rgba(0,0,0,0.3)",
      }}
    >
      <div
        className="relative h-full w-full flex flex-col"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => { if (!modal) setModal(true); }}
      >

        {/* ── Modal ── */}
        <AnimatePresence>
          {modal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4 cursor-auto"
              onClick={(e) => { e.stopPropagation(); setModal(false); }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="rounded-3xl p-8 md:p-12 w-full max-w-2xl shadow-2xl relative border border-white/10"
                style={{ backgroundColor: project.bg }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-5 left-6 text-2xl leading-none hover:opacity-40 transition-opacity"
                  style={{ color: project.accentColor }}
                  onClick={() => setModal(false)}
                >
                  &times;
                </button>
                <p className="text-xs font-bold tracking-widest uppercase mb-3 text-white/60">{project.name}</p>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5 text-white">{project.tagline}</h2>
                <p className="text-base text-white/80 leading-relaxed mb-8">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-8">
                  {project.tags.map((t) => (
                    <span key={t} className="px-4 py-2 rounded-lg text-sm font-semibold bg-white/10 text-white border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-6 flex justify-end">
                  <Link 
                    href={project.caseStudyUrl} 
                    className="px-8 py-3 bg-white text-black text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Full Case Study
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Gallery ── */}
        <div
          className={`flex-1 min-h-0 relative flex gap-4 md:gap-8 pl-5 md:pl-[120px] pr-5 md:pr-10 pt-4 md:pt-6 pb-4 overflow-hidden ${hovering && !modal ? "cursor-none" : ""}`}
        >
          {/* Main large left image */}
          <div className="relative w-[48%] h-[115%] flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] border border-white/5 z-20 pointer-events-none">
            <Image
              src={project.images.main}
              alt={project.images.mainAlt}
              fill
              priority
              unoptimized
              className={isDesktop ? "object-cover object-top" : "object-cover object-center"}
            />
          </div>

          {/* Right column: Animated Marquee of small images */}
          <div className="flex gap-4 md:gap-6 flex-1 min-w-0 h-[115%] relative overflow-hidden pointer-events-none justify-center">
            {(() => {
              const displayImages = project.images.sideImages ||
                [project.images.sideTop, project.images.sideBot].filter((img): img is SideImage => !!img);

              if (project.images.sideImages && project.images.sideImages.length >= 2) {
                const mid = Math.ceil(project.images.sideImages.length / 2);
                const col1 = project.images.sideImages.slice(0, mid);
                const col2 = project.images.sideImages.slice(mid);

                return (
                  <>
                    <div className="flex flex-col gap-4 md:gap-6 animate-[marquee-y-up_30s_linear_infinite] w-1/2">
                      {col1.concat(col1).map((img, idx) => (
                        <div key={`col1-${idx}`} className="relative w-full aspect-[4/5] flex-shrink-0">
                          <Image src={img.src} alt={img.alt} fill unoptimized className="object-contain" />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 animate-[marquee-y-down_30s_linear_infinite] w-1/2 mt-[-100px]">
                      {col2.concat(col2).map((img, idx) => (
                        <div key={`col2-${idx}`} className="relative w-full aspect-[4/5] flex-shrink-0">
                          <Image src={img.src} alt={img.alt} fill unoptimized className="object-contain" />
                        </div>
                      ))}
                    </div>
                  </>
                );
              }

              return (
                <div className="flex flex-col gap-4 md:gap-6 animate-[marquee-y-up_30s_linear_infinite] w-full">
                  {displayImages.concat(displayImages).map((img, idx) => (
                    <div key={idx} className="relative w-full aspect-[4/5] md:aspect-square flex-shrink-0 pointer-events-none">
                      <Image src={img.src} alt={img.alt} fill unoptimized className="object-contain" />
                    </div>
                  ))}
                </div>
              );
            })()}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />
          </div>

          {/* ── Custom Cursor (Read Badge) ── */}
          <AnimatePresence>
            {hovering && !modal && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="fixed pointer-events-none z-[100] w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center font-bold text-sm md:text-lg shadow-2xl select-none will-change-transform"
                style={{
                  left: smoothX,
                  top: smoothY,
                  translateX: "-50%",
                  translateY: "-50%",
                  backgroundColor: project.cursorColor,
                  color: project.accentColor,
                  fontFamily: "var(--font-nohemi)",
                }}
              >
                Read
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex-shrink-0 z-40 cursor-auto ml-0 md:ml-[110px] mr-0 md:mr-6 mb-8 pl-5 md:pl-8 pr-5 md:pr-10 py-6 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:rounded-2xl border-t border-white/5"
          style={{
            backgroundColor: project.bg,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((t) => (
                <span key={t} className="px-3 py-1 border border-white/30 rounded-full text-white text-[10px] md:text-xs font-medium tracking-wide">{t}</span>
              ))}
            </div>
            <h3 
              className="text-white tracking-tight" 
              style={{ 
                fontFamily: "var(--font-delight)",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "52px",
                letterSpacing: "-0.02em",
                verticalAlign: "middle"
              }}
            >
              {project.name}
            </h3>
          </div>
          <div className="flex items-center gap-5 md:gap-8 w-full md:w-auto justify-between md:justify-end">
            <Link href={project.caseStudyUrl} className="px-5 md:px-7 py-2.5 md:py-3 bg-white font-bold rounded-xl text-xs md:text-sm hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap" style={{ color: project.accentColor }}>Read Case Study</Link>
            <Link href={project.websiteUrl} target="_blank" className="text-white font-bold text-xs md:text-sm flex items-center gap-2 hover:opacity-70 transition-opacity whitespace-nowrap">
              Visit Website
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Wrapper ──────────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    /* Total height = number of projects × 100vh so scroll budget works */
    <div style={{ height: `${projects.length * 100}svh` }}>
      {(projects as Project[]).map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </div>
  );
}
