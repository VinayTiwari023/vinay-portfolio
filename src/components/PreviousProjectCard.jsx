import { motion } from "framer-motion";
import { FaGooglePlay, FaLock, FaCheckCircle, FaExternalLinkAlt, FaMicrochip } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

export default function PreviousProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
      className="bg-gradient-to-b from-[#111828] to-[#0c1220] border border-gray-800/90 hover:border-cyan-400/40 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Top Visual Showcase */}
        <div className="relative aspect-[16/10] bg-[#070b14] overflow-hidden flex items-center justify-center p-4 border-b border-gray-800/80">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

          {/* Top Info Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
            <span className="px-2.5 py-1 rounded-md bg-[#0a0f1d]/90 border border-gray-700/80 text-[10px] font-mono text-cyan-300 uppercase tracking-wider">
              PROJECT {project.number}
            </span>
            <StatusBadge status={project.status} statusType={project.statusType} size="sm" />
          </div>

          {project.mainImage ? (
            <img
              src={project.mainImage}
              alt={`${project.title} screenshot`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500 z-0"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500 py-10">
              <FaMicrochip size={36} className="text-cyan-400/40 mb-2" />
              <span className="font-mono text-xs">Enterprise Mobility App</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Domain & Title */}
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
              {project.domain}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Factual Description */}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {project.overview}
          </p>

          {/* Key Capabilities */}
          {project.capabilities && project.capabilities.length > 0 && (
            <div className="pt-1">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold mb-2 flex items-center gap-1.5">
                <FaCheckCircle className="text-cyan-400 text-xs" />
                <span>Operational Highlights</span>
              </h4>
              <ul className="space-y-1.5">
                {project.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span className="leading-snug">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#101728] border border-cyan-500/15 text-[11px] font-mono text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action / Footer */}
      <div className="p-5 sm:p-6 pt-0 mt-auto">
        <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
          {project.playStoreLink ? (
            <a
              href={project.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <FaGooglePlay className="text-xs" />
              <span>View on Google Play</span>
              <FaExternalLinkAlt className="text-[9px]" />
            </a>
          ) : (
            <div className="w-full py-2.5 px-4 rounded-xl font-mono text-[11px] bg-gray-900/60 border border-gray-800 text-gray-400 flex items-center justify-center gap-2">
              <FaLock className="text-[10px] text-gray-500" />
              <span>Internal Enterprise Deployment · NDA Protected</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
