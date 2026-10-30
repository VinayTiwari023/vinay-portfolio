import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaMicrochip,
  FaLayerGroup,
  FaShieldAlt,
  FaBrain,
  FaLock,
  FaGithub,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt
} from "react-icons/fa";
import StatusBadge from "./StatusBadge";

export default function ProjectCaseStudy({ project, index }) {
  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [{ img: project.mainImage, label: project.title }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const thumbnailContainerRef = useRef(null);
  const isReversed = index % 2 === 1;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = gallery.length - 1;
      if (nextIndex >= gallery.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const selectIndex = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeBtn = thumbnailContainerRef.current.children[currentIndex];
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.2, ease: "easeIn" }
    })
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipeThreshold = 40;
    if (offset.x < -swipeThreshold || velocity.x < -300) {
      paginate(1);
    } else if (offset.x > swipeThreshold || velocity.x > 300) {
      paginate(-1);
    }
  };

  return (
    <article
      id={project.id}
      className="relative py-12 md:py-20 border-b border-slate-200 dark:border-gray-800/60 last:border-b-0"
    >
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-8 lg:gap-14 items-start`}
      >
        {/* VISUAL SHOWCASE COLUMN */}
        <div className="w-full lg:w-[48%] sticky top-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#151d30] dark:to-[#0d1424] border border-slate-200 dark:border-cyan-500/20 shadow-md dark:shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Top Bar simulating industrial monitor/app frame */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-gray-800/80 text-xs font-mono text-slate-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                <span className="ml-2 text-cyan-700 dark:text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
                  {project.title}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-gray-500 tracking-wider">
                ID: {project.id}
              </span>
            </div>

            {/* Main Visual Display */}
            <div className="relative min-h-[260px] sm:min-h-[340px] md:min-h-[400px] flex items-center justify-center p-4 sm:p-6 bg-slate-50 dark:bg-[#080d18] overflow-hidden select-none">
              {/* Prev / Next Navigation Arrows */}
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => paginate(-1)}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 dark:border-cyan-500/30 shadow-lg transition-all z-20 cursor-pointer hover:scale-110 active:scale-95"
                  >
                    <FaChevronLeft className="text-xs" />
                  </button>
                  <button
                    type="button"
                    onClick={() => paginate(1)}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 dark:border-cyan-500/30 shadow-lg transition-all z-20 cursor-pointer hover:scale-110 active:scale-95"
                  >
                    <FaChevronRight className="text-xs" />
                  </button>

                  {/* Slide Counter Badge */}
                  <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 font-semibold tracking-wider pointer-events-none">
                    {currentIndex + 1} / {gallery.length}
                  </div>
                </>
              )}

              {gallery[currentIndex]?.img ? (
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={gallery[currentIndex]?.img}
                    alt={`${project.title} - ${gallery[currentIndex]?.label || "interface"}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag={gallery.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    className={`w-full max-h-[420px] object-contain rounded-xl shadow-lg dark:shadow-2xl ${
                      gallery.length > 1 ? "cursor-grab active:cursor-grabbing" : ""
                    }`}
                    loading="lazy"
                  />
                </AnimatePresence>
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-gray-500 py-16">
                  <FaMicrochip size={48} className="text-cyan-600/40 dark:text-cyan-400/40 mb-3 animate-pulse" />
                  <p className="font-mono text-xs">Enterprise Architecture Engine</p>
                </div>
              )}

              {/* Sub-surface glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-200/20 dark:from-[#0d1424] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* Gallery Thumbnail Switcher */}
            {gallery.length > 1 && (
              <div className="p-3 bg-slate-100 dark:bg-[#0a0f1d] border-t border-slate-200 dark:border-gray-800/80">
                <div
                  ref={thumbnailContainerRef}
                  className="flex gap-2 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-0.5"
                >
                  {gallery.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => selectIndex(idx)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex-shrink-0 cursor-pointer ${
                        currentIndex === idx
                          ? "bg-cyan-500/15 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold"
                          : "bg-slate-200/60 dark:bg-gray-800/40 text-slate-600 dark:text-gray-400 border border-transparent hover:bg-slate-200 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-gray-200"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          currentIndex === idx ? "bg-cyan-600 dark:bg-cyan-400" : "bg-slate-400 dark:bg-gray-600"
                        }`}
                      ></span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Hardware & Pipeline Callout on Visual Card */}
            <div className="px-5 py-4 bg-slate-50/90 dark:bg-[#0b1122]/90 border-t border-slate-200 dark:border-gray-800/70 text-xs text-slate-700 dark:text-gray-300 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
                <FaMicrochip />
                <span>Hardware & Interface Layer</span>
              </div>
              <p className="text-slate-600 dark:text-gray-400 text-[11px] leading-relaxed font-mono">
                {project.hardware}
              </p>
            </div>
          </motion.div>

          {/* AI/ML Special Callout for Precast ERP */}
          {project.aiMl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 via-slate-50 dark:via-[#131b2e] to-cyan-500/10 border border-purple-400/30 dark:border-purple-500/30 shadow-sm"
            >
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-mono font-semibold text-xs mb-2">
                <FaBrain className="text-purple-600 dark:text-purple-300 text-sm" />
                <span>Applied AI/ML: {project.aiMl.technology}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.aiMl.pipeline.map((step, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-500/20 text-purple-800 dark:text-purple-200 text-[10px] font-mono"
                  >
                    {step}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed">
                {project.aiMl.details}
              </p>
            </motion.div>
          )}

          {/* Special Architecture Callout for SKL HRMS */}
          {project.aiAssistant && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-slate-50 dark:via-[#101b2f] to-slate-100 dark:to-cyan-950/30 border border-cyan-500/30 shadow-sm"
            >
              <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300 font-mono font-semibold text-xs mb-1">
                <FaBrain className="text-cyan-600 dark:text-cyan-400 text-sm" />
                <span>Smart HR AI Assistant — {project.aiAssistant.status}</span>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed">
                {project.aiAssistant.description}
              </p>
            </motion.div>
          )}

          {/* Open Source / Mock API Callout */}
          {project.mockApi && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-slate-50 dark:via-[#101b2f] to-purple-500/10 border border-cyan-500/30 dark:border-cyan-500/30 shadow-sm"
            >
              <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300 font-mono font-semibold text-xs mb-1">
                <FaCodeBranch className="text-cyan-600 dark:text-cyan-400 text-sm" />
                <span>Zero-Backend Mock API Engine — {project.mockApi.status}</span>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed">
                {project.mockApi.description}
              </p>
            </motion.div>
          )}


          {/* Multi-Tenant & Workflow State Machine Callout for Tazalo Tasks */}
          {project.workflowEngine && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-slate-50 dark:via-[#0c1813] to-amber-500/10 border border-emerald-500/30 dark:border-emerald-500/30 shadow-sm"
            >
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-mono font-semibold text-xs mb-1">
                <FaLayerGroup className="text-emerald-600 dark:text-emerald-400 text-sm" />
                <span>Workflow & Multi-Tenancy — {project.workflowEngine.status}</span>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed">
                {project.workflowEngine.description}
              </p>
            </motion.div>
          )}

          {/* Telephony & Native Engine Callout for Sales-CRM */}
          {project.telephonyEngine && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-50 dark:via-[#18140a] to-cyan-500/10 border border-amber-500/30 dark:border-amber-500/30 shadow-sm"
            >
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-mono font-semibold text-xs mb-1">
                <FaPhoneAlt className="text-amber-600 dark:text-amber-400 text-sm" />
                <span>Telephony & OEM Engine — {project.telephonyEngine.status}</span>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed">
                {project.telephonyEngine.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* STORY + ARCHITECTURE + CAPABILITIES COLUMN */}
        <div className="w-full lg:w-[52%] flex flex-col space-y-6">
          {/* Header Metadata */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold text-sm tracking-widest uppercase">
                  PROJECT {project.number}
                </span>
                <span className="text-slate-300 dark:text-gray-600">/</span>
                <span className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wide">
                  {project.domain}
                </span>
              </div>
              <StatusBadge
                status={project.status}
                statusType={project.statusType}
                size="md"
                playStoreUrl={project.playStoreUrl || project.playStoreLink}
                githubUrl={project.githubUrl}
                projectTitle={project.title}
              />
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-base md:text-lg text-cyan-700 dark:text-cyan-300 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* High-level Tagline */}
          <div className="p-4 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/20 border-l-4 border-cyan-500 dark:border-cyan-400 text-slate-800 dark:text-cyan-100 text-sm md:text-base leading-relaxed font-medium">
            {project.tagline}
          </div>

          {/* Overview */}
          <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            {project.overview}
          </p>

          {/* Engineering Focus Box */}
          <div className="p-4 rounded-xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">
              <FaShieldAlt className="text-cyan-600 dark:text-cyan-400" />
              <span>Engineering Focus</span>
            </div>
            <p className="text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
              {project.engineeringFocus}
            </p>
          </div>

          {/* Architecture Box */}
          <div className="p-4 rounded-xl bg-white dark:bg-[#0f1624] border border-slate-200 dark:border-gray-800/90 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">
              <FaLayerGroup className="text-cyan-600 dark:text-cyan-400" />
              <span>Technical Architecture</span>
            </div>
            <p className="text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-mono">
              {project.architecture}
            </p>
          </div>

          {/* Documented Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-gray-400 font-semibold mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-cyan-600 dark:text-cyan-400" />
              <span>Documented Operational Capabilities</span>
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs md:text-sm text-slate-600 dark:text-gray-300">
              {project.capabilities.map((cap, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2 rounded-lg bg-white dark:bg-[#111726]/60 border border-slate-200 dark:border-gray-800/60 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="leading-snug">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-gray-400 font-semibold mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#131d30] border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-200 hover:border-cyan-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action / Disclaimer */}
          <div className="pt-2">
            {project.githubUrl ? (
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500/15 dark:hover:bg-cyan-500/25 text-white dark:text-cyan-300 border border-slate-700 dark:border-cyan-500/40 font-mono text-xs font-semibold shadow-sm hover:shadow-md transition-all group/gh"
                >
                  <FaGithub className="text-sm text-white dark:text-cyan-300" />
                  <span>View Repository on GitHub</span>
                  <FaExternalLinkAlt className="text-[10px] opacity-80 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-transform" />
                </a>
                <span className="text-[11px] text-slate-500 dark:text-gray-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 inline-block"></span>
                  <span>
                    {project.isOpenSource
                      ? "MIT License · Mock API Engine · Open Source"
                      : (project.licenseText || "Proprietary Enterprise Client Architecture · Production Verified (167 Tests)")}
                  </span>
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-500 font-mono">
                <FaLock className="text-slate-400 dark:text-gray-500" />
                <span>Proprietary enterprise software — confidential client architecture</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
