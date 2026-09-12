import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Sat Kabir Logistics",
      role: "Android Developer",
      duration: "April 2026 - Present",
      type: "Full-time",
      isCurrent: true,
      focus: "Enterprise Warehouse Mobility & Industrial HHT Systems",
      points: [
        "Engineering and maintaining the core SKL-WMS mobile platform for warehouse floor operations, handling gate entry, inward GRN verification, and outbound dispatch.",
        "Integrating native hardware scanner SDKs (Newland HHT) and barcode parsing logic for sub-second floor stock capture.",
        "Developing decoupled mobile architectures connecting operational warehouse workflows with real-time enterprise backend APIs.",
        "Engineering transport management (KBR TMS), precast manufacturing ERP, and workforce mobility systems (SKL HRMS) with secure token management and real-time operational sync."
      ]
    },
    {
      company: "Seabird Logisolutions",
      role: "Android & Flutter Software Developer",
      duration: "July 2023 - April 2026",
      type: "Full-time",
      isCurrent: false,
      focus: "Enterprise Mobile Systems, Manufacturing & Logistics",
      points: [
        "Architected and deployed production-grade mobile applications in Flutter and native Android (Kotlin/Java) for logistics (WMS - GNOSIS), visitor security, expense automation, and IT ticketing.",
        "Integrated industrial device peripherals including Zebra EMDK, DataWedge, CipherLab scanners, and Bluetooth thermal printers using the ESC/POS protocol.",
        "Implemented on-device edge AI/ML pipelines, including Google ML Kit face detection and TensorFlow Lite inference (MobileFaceNet 128D embeddings) for secure gatepass verification.",
        "Designed modular application structures following Clean Architecture and MVVM patterns with reactive Riverpod and Provider state management."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="relative bg-[#0b101c] text-white py-20 md:py-28 px-6 md:px-20 overflow-hidden border-t border-gray-800/80"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3.5 py-1.5 mb-4">
            <FaBriefcase className="text-cyan-400 text-xs" />
            <span className="text-cyan-300 font-mono tracking-[0.2em] uppercase text-xs">
              Career Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Professional Experience
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Engineering track record focused on enterprise mobile development, industrial hardware connectivity,
            and mission-critical business systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 pl-6 sm:pl-10 space-y-12">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Indicator Pin */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-4">
                <div
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-cyan-400 bg-[#0B0F19] ${
                    item.isCurrent
                      ? "shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                      : "shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                  }`}
                >
                  {item.isCurrent && (
                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                  )}
                </div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111828] to-[#0c1220] border border-gray-800 hover:border-cyan-400/40 transition-all duration-300 shadow-xl">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 text-xs font-mono text-cyan-300">
                      <FaCalendarAlt className="text-cyan-400 text-[10px]" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-800/60 rounded-full px-3 py-1 text-xs font-mono text-gray-400">
                      <FaBuilding className="text-gray-400 text-[10px]" />
                      <span>{item.type}</span>
                    </div>
                  </div>

                  {item.isCurrent && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Role
                    </span>
                  )}
                </div>

                {/* Role and Company */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-cyan-300 font-medium text-base mb-3">
                  <span>{item.company}</span>
                  {item.isCurrent && <FaArrowRight className="text-cyan-400 text-xs animate-pulse" />}
                </div>

                <p className="text-xs font-mono text-gray-400 uppercase tracking-wide mb-6">
                  {item.focus}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-cyan-400/30 via-transparent to-transparent mb-6" />

                {/* Points */}
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}