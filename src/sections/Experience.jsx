import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";

export default function Experience() {

const experience = [
  {
    company: "Seabird Logisolutions",
    role: "Android & Flutter Software Developer",
    duration: "July 2023 - April 2026",
    type: "Full-time",
    isCurrent: false,
    points: [
      "Developed and maintained 5+ production mobile applications serving logistics, warehouse, visitor management, and enterprise operations.",
      "Specialized in Android (Java/Kotlin) and Flutter, with hands-on experience in enterprise mobility, device integrations, and large-scale business workflows.",
      "Built solutions for industrial hardware ecosystems including Zebra, Honeywell, and CipherLab scanners, enabling efficient warehouse and logistics operations.",
      "Designed reusable architectures and modular components for scanning, printing, API communication, and device management, improving maintainability and scalability.",
      "Delivered end-to-end features from requirement gathering and development to deployment, testing, and production support. ",
    ],
  },
  {
    company: "Sat Kabir Logistics",
    role: "Android Developer",
    duration: "April 2026 - Present",
    type: "Full-time",
    isCurrent: true,
    points: [
      "Developing Android applications for warehouse and logistics operations, integrating enterprise workflows, hardware devices, and real-time operational systems.",
      "Building Warehouse Management System (WMS) applications integrated with Newland HHT devices and barcode scanning workflows.",
      "Building scalable Android applications focused on enterprise logistics and workflow automation.",
      "Integrating APIs, scanning modules, and real-time operational systems into Android platforms.",
    ],
  },
];

  return (
    <section id="experience" className="relative bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0B0F19] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden">
      
      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <motion.div
          animate={{ y: [0, 80, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[5%] w-[350px] md:w-[500px] h-[500px] md:h-[700px] bg-blue-600/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ y: [0, -100, 0], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-[10%] left-[5%] w-[300px] md:w-[450px] h-[400px] md:h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
          >
            <FaBriefcase className="text-cyan-400 text-[10px] sm:text-xs" />
            <span className="text-cyan-400 font-medium tracking-[0.25em] uppercase text-[10px] sm:text-xs md:text-sm">
              Career Journey
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base max-w-2xl"
          >
            Building enterprise mobile solutions for logistics and warehouse operations.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-400/30 pl-8 sm:pl-10 md:pl-12">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 sm:mb-16 relative last:mb-0"
            >
              {/* Timeline Dot with Pulse for Current Job */}
              <div className="absolute -left-[43px] sm:-left-[45px] md:-left-[49px] top-3 z-10">
                <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-cyan-400 bg-[#0B0F19] ${item.isCurrent ? 'shadow-[0_0_20px_rgba(34,211,238,0.8)]' : 'shadow-[0_0_12px_rgba(34,211,238,0.4)]'}`}>
                  {item.isCurrent && (
                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                  )}
                </div>
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#111827]/90 via-[#111827]/95 to-[#0B1120]/90 backdrop-blur-xl border border-gray-800/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-500 group shadow-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] relative overflow-hidden"
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10" />
                
                {/* Current Job Badge */}
                {item.isCurrent && (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-[9px] sm:text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-lg flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                    Current
                  </motion.div>
                )}

                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1.5 w-fit">
                    <FaCalendarAlt className="text-cyan-400 text-[10px] sm:text-xs" />
                    <span className="text-cyan-300 font-mono text-[10px] sm:text-xs tracking-wide">
                      {item.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-full px-3 py-1.5 w-fit">
                    <FaBuilding className="text-gray-400 text-[10px] sm:text-xs" />
                    <span className="text-gray-400 text-[10px] sm:text-xs">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Role */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-cyan-400 transition-colors duration-300 mb-1 sm:mb-2">
                  {item.role}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold">
                    {item.company}
                  </h4>
                  {item.isCurrent && (
                    <FaArrowRight className="text-cyan-400 text-xs sm:text-sm animate-pulse" />
                  )}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-cyan-400/30 via-transparent to-transparent mb-4 sm:mb-6" />

                {/* Responsibilities */}
                <ul className="space-y-2 sm:space-y-3">
                  {item.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3 group/item"
                    >
                      <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400/50 group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300 flex-shrink-0" />
                      <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300 text-xs sm:text-sm md:text-base leading-relaxed">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Company Logo / Icon Placeholder */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <FaBuilding className="text-cyan-400 text-6xl sm:text-8xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}