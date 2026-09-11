import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaArrowDown, FaBriefcase } from "react-icons/fa";
import ProjectCaseStudy from "../components/ProjectCaseStudy";
import PreviousProjectCard from "../components/PreviousProjectCard";
import { currentProjects, previousProjects, organizations } from "../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-[#090d17] via-[#0b101c] to-[#090d17] text-white py-20 md:py-32 px-6 md:px-20 overflow-hidden border-t border-gray-800/80"
    >
      {/* Ambient background illumination */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute top-[35%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full" />
        <div className="absolute top-[70%] right-[10%] w-[450px] h-[450px] bg-purple-600/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-[5%] left-[8%] w-[450px] h-[450px] bg-cyan-600/10 blur-[170px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Enterprise Portfolio · 8 Professional Projects</span>
            <span>Production Portfolio · 8 Professional Projects</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Selected Production Work
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Production-deployed enterprise mobile systems and industrial software architectures across two organizations.
            Reflecting career progression from core enterprise mobility to multi-facility operations, hardware peripherals, and applied AI/ML.
            Production-deployed mobile applications and software architectures across two organizations—spanning core mobile engineering, backend integrations, industrial hardware peripherals, and applied AI/ML.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* GROUP 1: CURRENT ORGANIZATION — SAT KABIR LOGISTICS                       */}
        {/* ========================================================================= */}
        <div className="mb-24 md:mb-32">
          {/* Organization Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#11192e] via-[#0d1424] to-[#10192d] border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.08)] mb-12 md:mb-16"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {organizations.current.type}
                </span>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-cyan-300 hidden sm:flex items-center gap-1.5">
                  <FaBriefcase className="text-[10px]" />
                  {organizations.current.role}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-gray-900/60 px-3 py-1 rounded-lg border border-gray-800">
                <FaCalendarAlt className="text-cyan-400 text-[10px]" />
                <span>{organizations.current.duration}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <FaBuilding className="text-cyan-400 text-xl sm:text-2xl" />
              <span>{organizations.current.name}</span>
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
              {organizations.current.summary}
            </p>
          </motion.div>

          {/* 4 Detailed Case Studies */}
          <div className="space-y-16 md:space-y-24">
            {currentProjects.map((project, index) => (
              <ProjectCaseStudy key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CAREER PROGRESSION BRIDGE                                                  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="my-16 md:my-24 py-8 px-6 rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#0a101d] border border-gray-800 text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xs mb-1">
              <FaArrowDown />
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              Engineering Progression
            </p>
            <p className="text-sm md:text-base text-gray-300 max-w-xl">
              Foundation in enterprise mobility, hardware scanning, and cloud integration at Seabird Logisolutions transitioned into expanded full-lifecycle architecture at Sat Kabir Logistics.
            </p>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* GROUP 2: PREVIOUS ORGANIZATION — SEABIRD LOGISOLUTIONS                     */}
        {/* ========================================================================= */}
        <div>
          {/* Organization Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0f172a] via-[#0d1424] to-[#11192d] border border-gray-800 shadow-lg mb-10 md:mb-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider">
                  {organizations.previous.type}
                </span>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-gray-300 hidden sm:flex items-center gap-1.5">
                  <FaBriefcase className="text-[10px] text-blue-400" />
                  {organizations.previous.role}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-gray-900/60 px-3 py-1 rounded-lg border border-gray-800">
                <FaCalendarAlt className="text-blue-400 text-[10px]" />
                <span>{organizations.previous.duration}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <FaBuilding className="text-blue-400 text-xl sm:text-2xl" />
              <span>{organizations.previous.name}</span>
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
              {organizations.previous.summary}
            </p>
          </motion.div>

          {/* 4 Previous Projects in 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {previousProjects.map((project, index) => (
              <PreviousProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
