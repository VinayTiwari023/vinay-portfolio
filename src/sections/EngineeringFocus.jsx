import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaLayerGroup,
  FaNetworkWired,
  FaBarcode,
  FaBrain,
  FaWarehouse
} from "react-icons/fa";

const pillars = [
  {
    icon: <FaMobileAlt className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    title: "Production Mobile",
    subtitle: "Resilient Daily-Use Applications",
    desc: "Cross-platform Android and Flutter applications built for high reliability, fast responsiveness, and smooth UX across consumer smartphones and rugged industrial handhelds alike."
  },
  {
    icon: <FaLayerGroup className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    title: "Scalable Architecture",
    subtitle: "Clean, Testable & Maintainable",
    desc: "Strict Clean Architecture and MVVM patterns with reactive Riverpod and Provider state, decoupled domain boundaries, and abstract repository contracts designed for long-term maintainability."
  },
  {
    icon: <FaNetworkWired className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    title: "API-Driven Applications",
    subtitle: "Robust Network & Caching Layers",
    desc: "Structured Dio networking pipelines with interceptors, token lifecycle handling, typed JSON serialization, and encrypted offline persistence (Hive) for reliable data integrity."
  },
  {
    icon: <FaBarcode className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    title: "Hardware Integration",
    subtitle: "Direct Peripheral Connectivity",
    desc: "Native peripheral communication with OEM handheld barcode scanners (Newland, Zebra EMDK, CipherLab), Bluetooth ESC/POS thermal printers, and camera vision fallbacks."
  },
  {
    icon: <FaBrain className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    title: "Applied AI & Edge Vision",
    subtitle: "On-Device Neural Inference",
    desc: "Real-world machine learning running on the device: Google ML Kit face detection, MobileFaceNet inference via TensorFlow Lite, 128D face embeddings, and AI assistant integration."
  },
  {
    icon: <FaWarehouse className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    title: "Operational Systems",
    subtitle: "Real-World Business Impact",
    desc: "Proven software architectures driving daily commercial operations across multi-facility warehouse execution, freight logistics, manufacturing ERP, and biometric workforce management."
  }
];

export default function EngineeringFocus() {
  return (
    <section id="engineering-focus" className="relative bg-slate-100/60 dark:bg-[#0b101c] py-20 md:py-28 px-6 md:px-20 border-t border-slate-200 dark:border-gray-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cyan-700 dark:text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-3">
            Core Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            What I Engineer
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Engineering depth measured by software craftsmanship, architectural resilience, operational reliability, and real-world hardware and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#111728] dark:to-[#0d1424] border border-slate-200 dark:border-gray-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-400/40 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400/80 mb-3 font-medium">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-gray-800/60 flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></span>
                <span>Production Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
