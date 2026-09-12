import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaLayerGroup,
  FaNetworkWired,
  FaMicrochip,
  FaCheck
} from "react-icons/fa";

export default function About() {
  const domains = [
    "Enterprise Mobile Applications",
    "Warehouse Management (WMS)",
    "Transport & Fleet Logistics (TMS)",
    "Manufacturing Operations (ERP)",
    "Workforce & Biometrics (HRMS)",
    "Hardware-Integrated Systems"
  ];

  const capabilityMap = [
    {
      title: "Mobile Engineering",
      icon: <FaMobileAlt className="text-cyan-600 dark:text-cyan-400" />,
      stack: "Flutter • Android • Kotlin • Java • Dart",
      focus: "Production cross-platform apps, custom renderers, reactive UI, and high-performance native platform bridges."
    },
    {
      title: "Architecture & State",
      icon: <FaLayerGroup className="text-cyan-600 dark:text-cyan-400" />,
      stack: "Clean Architecture • MVVM • BLoC • Riverpod • GetX",
      focus: "Decoupled domain boundaries, abstract repository contracts, testable modular code, and predictable reactive state across BLoC, Riverpod, and GetX."
    },
    {
      title: "APIs & Integration",
      icon: <FaNetworkWired className="text-cyan-600 dark:text-cyan-400" />,
      stack: "REST APIs • Dio • Token Security • Offline Caching",
      focus: "Structured networking, interceptors, request queuing, local persistence (Hive), and transactional data sync."
    },
    {
      title: "Hardware & Edge AI",
      icon: <FaMicrochip className="text-cyan-600 dark:text-cyan-400" />,
      stack: "OEM SDKs • Zebra/Newland • ML Kit • TensorFlow Lite",
      focus: "Direct peripheral hooks (barcode/thermal print), on-device biometric verification, and neural inference."
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-100/70 dark:bg-[#0d1322] text-slate-900 dark:text-white py-20 md:py-28 px-6 md:px-20 overflow-hidden border-t border-slate-200 dark:border-gray-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-cyan-700 dark:text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-3">
            Engineering Identity
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Mobile engineering for the real world.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
              Built for production, scale, and operational reliability.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Professional Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-slate-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              I am an <strong className="text-slate-900 dark:text-white font-semibold">Android & Flutter Engineer</strong> with
              production experience building mobile applications across diverse real-world domains—connecting
              intuitive user interfaces with robust backend APIs, physical hardware, and operational workflows.
            </p>

            <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              My engineering background spans environments where software reliability directly impacts daily operations:
              enterprise applications, multi-facility warehouse management, commercial fleet transport, manufacturing plant floors,
              and secure biometric workforce systems.
            </p>

            <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              I build with <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">Clean Architecture</strong>, decoupled data layers,
              reactive state, and typed API models. Whether integrating OEM scanner SDKs (Honeywell AIDC, Zebra EMDK, Newland, CipherLab),
              industrial ZPL sticker printing, or on-device ML models, my priority is shipping dependable, maintainable software that performs under demanding real-world conditions.
            </p>

            {/* Operational Domains Checklist */}
            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold mb-3">
                Proven Operational Domains
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {domains.map((domain, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-gray-800 text-xs font-medium text-slate-700 dark:text-gray-300 shadow-sm"
                  >
                    <span className="w-4 h-4 rounded-full bg-cyan-500/10 dark:bg-cyan-400/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 text-[10px]">
                      <FaCheck />
                    </span>
                    <span>{domain}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Engineering Capability Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
          >
            {capabilityMap.map((cap, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#11192b] dark:to-[#0c1322] border border-slate-200 dark:border-gray-800 hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400/90 mb-2 font-semibold">
                    {cap.stack}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                    {cap.focus}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-gray-800/60 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></span>
                  <span>Production Tested</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
