import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMicrochip,
  FaLayerGroup,
  FaShieldAlt,
  FaBrain,
  FaLock
} from "react-icons/fa";
import StatusBadge from "./StatusBadge";

export default function ProjectCaseStudy({ project, index }) {
  const [selectedImg, setSelectedImg] = useState(project.mainImage);
  const isReversed = index % 2 === 1;

  return (
    <article
      id={project.id}
      className="relative py-12 md:py-20 border-b border-gray-800/60 last:border-b-0"
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
            className="group relative rounded-2xl bg-gradient-to-b from-[#151d30] to-[#0d1424] border border-cyan-500/20 shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Top Bar simulating industrial monitor/app frame */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-gray-800/80 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                <span className="ml-2 text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
                  {project.title}
                </span>
              </div>
              <span className="text-[10px] text-gray-500 tracking-wider">
                ID: {project.id}
              </span>
            </div>

            {/* Main Visual Display */}
            <div className="relative min-h-[260px] sm:min-h-[340px] md:min-h-[400px] flex items-center justify-center p-4 sm:p-6 bg-[#080d18]">
              {selectedImg ? (
                <img
                  src={selectedImg}
                  alt={`${project.title} interface`}
                  className="w-full max-h-[420px] object-contain rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-500 py-16">
                  <FaMicrochip size={48} className="text-cyan-400/40 mb-3 animate-pulse" />
                  <p className="font-mono text-xs">Enterprise Architecture Engine</p>
                </div>
              )}

              {/* Sub-surface glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* Gallery Thumbnail Switcher */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="p-3 bg-[#0a0f1d] border-t border-gray-800/80 flex gap-2 overflow-x-auto">
                {project.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImg(item.img)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex-shrink-0 cursor-pointer ${
                      selectedImg === item.img
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                        : "bg-gray-800/40 text-gray-400 border border-transparent hover:bg-gray-800 hover:text-gray-200"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            {/* Special Hardware & Pipeline Callout on Visual Card */}
            <div className="px-5 py-4 bg-[#0b1122]/90 border-t border-gray-800/70 text-xs text-gray-300 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] uppercase tracking-wider">
                <FaMicrochip />
                <span>Hardware & Interface Layer</span>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed font-mono">
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
              className="mt-4 p-4 rounded-xl bg-gradient-to-r from-purple-950/40 via-[#131b2e] to-cyan-950/30 border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.1)]"
            >
              <div className="flex items-center gap-2 text-purple-400 font-mono font-semibold text-xs mb-2">
                <FaBrain className="text-purple-300 text-sm" />
                <span>Applied AI/ML: {project.aiMl.technology}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.aiMl.pipeline.map((step, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-0.5 rounded bg-purple-900/30 border border-purple-500/20 text-purple-200 text-[10px] font-mono"
                  >
                    {step}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
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
              className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-[#101b2f] border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
            >
              <div className="flex items-center gap-2 text-cyan-300 font-mono font-semibold text-xs mb-1">
                <FaBrain className="text-cyan-400 text-sm" />
                <span>Smart HR AI Assistant — {project.aiAssistant.status}</span>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                {project.aiAssistant.description}
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
                <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">
                  PROJECT {project.number}
                </span>
                <span className="text-gray-600">/</span>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">
                  {project.domain}
                </span>
              </div>
              <StatusBadge status={project.status} statusType={project.statusType} size="md" />
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-base md:text-lg text-cyan-300 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* High-level Tagline */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border-l-4 border-cyan-400 text-cyan-100 text-sm md:text-base leading-relaxed font-medium">
            {project.tagline}
          </div>

          {/* Overview */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {project.overview}
          </p>

          {/* Engineering Focus Box */}
          <div className="p-4 rounded-xl bg-[#101726] border border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <FaShieldAlt className="text-cyan-400" />
              <span>Engineering Focus</span>
            </div>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              {project.engineeringFocus}
            </p>
          </div>

          {/* Architecture Box */}
          <div className="p-4 rounded-xl bg-[#0f1624] border border-gray-800/90">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <FaLayerGroup className="text-cyan-400" />
              <span>Technical Architecture</span>
            </div>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-mono">
              {project.architecture}
            </p>
          </div>

          {/* Documented Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-cyan-400" />
              <span>Documented Operational Capabilities</span>
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs md:text-sm text-gray-300">
              {project.capabilities.map((cap, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2 rounded-lg bg-[#111726]/60 border border-gray-800/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="leading-snug">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#131d30] border border-cyan-500/20 text-cyan-200 hover:border-cyan-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* NDA Disclaimer Footer */}
          <div className="pt-2 flex items-center gap-2 text-xs text-gray-500 font-mono">
            <FaLock className="text-gray-500" />
            <span>Proprietary enterprise software — confidential client architecture</span>
          </div>
        </div>
      </div>
    </article>
  );
}
