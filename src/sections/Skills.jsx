import { motion } from "framer-motion";
import { skillCategories } from "../data/skillsData";
import {
  FaMobileAlt,
  FaLayerGroup,
  FaServer,
  FaBarcode,
  FaBrain
} from "react-icons/fa";

const categoryIcons = {
  mobile: <FaMobileAlt className="text-cyan-400" />,
  architecture: <FaLayerGroup className="text-cyan-400" />,
  backend: <FaServer className="text-cyan-400" />,
  industrial: <FaBarcode className="text-cyan-400" />,
  "ai-ml": <FaBrain className="text-cyan-400" />
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#090e1a] text-white py-20 md:py-28 px-6 md:px-20 overflow-hidden border-t border-gray-800/80"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-3">
            Technical Repertoire
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Categorized Technical Skills
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Organized by functional engineering layers. Every listed technology is anchored in documented enterprise
            codebases and production implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`${
                idx < 2 ? "lg:col-span-6" : idx === 2 ? "lg:col-span-12" : "lg:col-span-6"
              } p-6 md:p-8 rounded-2xl bg-[#0f1626] border border-gray-800/90 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-lg">
                      {categoryIcons[cat.id]}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 uppercase">
                    {cat.badge}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#131b2d]/80 border border-gray-800/70 hover:border-gray-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs md:text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400/80">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-tight">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
