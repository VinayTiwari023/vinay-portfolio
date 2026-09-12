import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaLayerGroup,
  FaNetworkWired,
  FaBarcode,
  FaBrain,
  FaWarehouse
} from "react-icons/fa";

export default function Expertise() {
  const capabilities = [
    {
      icon: <FaMobileAlt className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      title: "Mobile Engineering",
      tagline: "Flutter, Android, Kotlin, Java, Dart",
      desc: "Architecting resilient, high-performance mobile applications with native platform bridges, custom UI components, responsive layout systems, and memory-safe reactive lifecycles."
    },
    {
      icon: <FaLayerGroup className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      title: "Architecture & State",
      tagline: "Clean Architecture, BLoC, Riverpod & GetX",
      desc: "Structuring scalable, testable codebases using Clean Architecture principles, feature-first module boundaries, abstract repository contracts, and predictable reactive state via BLoC, Riverpod, GetX & Provider."
    },
    {
      icon: <FaNetworkWired className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      title: "APIs & Integrations",
      tagline: "REST APIs, Dio, WebSockets & FCM",
      desc: "Engineering robust networking layers with Dio and HTTP client, typed JSON models, interceptors, secure token lifecycle management, offline caching (Hive), and reliable push notifications."
    },
    {
      icon: <FaBarcode className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      title: "Hardware & Industrial Mobility",
      tagline: "OEM SDKs, Handheld Scanners & Printers",
      desc: "Direct hardware peripheral integration with industrial handheld terminals (Honeywell AIDC, Zebra EMDK, Newland, CipherLab), DataWedge intent hooks, ZPL sticker printing, ESC/POS Bluetooth thermal printing, and camera fallback scanning."
    },
    {
      icon: <FaBrain className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      title: "AI/ML Integration",
      tagline: "On-Device Inference & Computer Vision",
      desc: "Implementing real-time face detection with Google ML Kit, edge neural inference via TensorFlow Lite (MobileFaceNet), 128D mathematical face embeddings, and conversational AI integrations."
    },
    {
      icon: <FaWarehouse className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      title: "Operational Systems",
      tagline: "Enterprise, Logistics & Manufacturing",
      desc: "Field-tested domain experience driving business-critical operations across warehouse management (WMS), transport logistics (TMS), manufacturing ERP, and biometric workforce management (HRMS)."
    }
  ];

  return (
    <section
      id="expertise"
      className="relative bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white py-20 md:py-28 px-6 md:px-20 border-t border-slate-200 dark:border-gray-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-700 dark:text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-3">
            Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Engineering Capabilities & Disciplines
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Organized around transferable mobile software engineering disciplines, decoupled architectures, robust data integrations, hardware connectivity, and applied on-device intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#0d1424] border border-slate-200/90 dark:border-gray-800/90 p-7 md:p-8 rounded-2xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400/80 mb-4 font-semibold">
                  {item.tagline}
                </p>

                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-gray-800/60 flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></span>
                <span>Production Tested</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}