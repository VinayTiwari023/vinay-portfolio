import { motion } from "framer-motion";
import ProjectCaseStudy from "../components/ProjectCaseStudy";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-[#090d17] via-[#0b101c] to-[#090d17] text-white py-20 md:py-32 px-6 md:px-20 overflow-hidden border-t border-gray-800/80"
    >
      {/* Ambient background illumination */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute top-[45%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] bg-purple-600/10 blur-[170px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Case Studies
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Selected Production Work
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Production-deployed enterprise platforms and advanced industrial mobility systems. Documented from
            real production architectures and engineering source material—no fabricated metrics or inflated statistics.
          </p>
        </motion.div>

        {/* 4 Deep-Dive Case Studies */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}