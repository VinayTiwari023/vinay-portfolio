import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaBarcode,
  FaNetworkWired,
  FaBrain,
  FaCheck
} from "react-icons/fa";

export default function About() {
  const domains = [
    "Warehouse Management (WMS)",
    "Freight Transport & Logistics (TMS)",
    "Precast Concrete Manufacturing (ERP)",
    "Workforce Management (HRMS)",
    "Biometric Security & Visitor Systems",
    "Hardware-Integrated Applications"
  ];

  const capabilityMap = [
    {
      title: "Enterprise Mobile",
      icon: <FaMobileAlt className="text-cyan-400" />,
      stack: "Flutter • Android • Kotlin • Java",
      focus: "Cross-platform systems, custom renderers, hardware integration, responsive layouts for rugged terminals."
    },
    {
      title: "Industrial Mobility",
      icon: <FaBarcode className="text-cyan-400" />,
      stack: "Newland • Zebra EMDK • CipherLab • DataWedge",
      focus: "Hardware barcode scan engines, thermal label printing (ESC/POS), multi-mode camera fallback."
    },
    {
      title: "Backend & Integration",
      icon: <FaNetworkWired className="text-cyan-400" />,
      stack: "REST APIs • Dio • JSON Serialization • Firebase FCM",
      focus: "Secure session management, request queuing, offline caching (Hive), transactional integrity."
    },
    {
      title: "Applied AI / ML",
      icon: <FaBrain className="text-cyan-400" />,
      stack: "Google ML Kit • TensorFlow Lite • MobileFaceNet",
      focus: "128-dimensional face embeddings, on-device neural inference, edge biometric verification."
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-[#0d1322] text-white py-20 md:py-28 px-6 md:px-20 overflow-hidden border-t border-gray-800/80"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-3">
            Engineering Identity
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            I don't only build screens.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              I build mobile software around real operational workflows.
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
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I am an <strong className="text-white font-semibold">Android & Flutter Engineer</strong> specializing
              in production mobile applications that bridge physical hardware, enterprise APIs, and real-world floor
              operations.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              My engineering experience spans mission-critical industrial domains where downtime or scanning lag carries
              a direct business cost: warehouse inventory management, freight lifecycle tracking, concrete plant
              manufacturing floor operations, and secure biometric workforce management.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Instead of relying on fragile UI-only prototypes, I build with strict <strong className="text-cyan-300">Clean Architecture</strong>,
              decoupled data layers, typed JSON models, and hardware-specific protocols (Newland SDK, Zebra EMDK,
              CipherLab, and thermal Bluetooth printing).
            </p>

            {/* Operational Domains Checklist */}
            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3">
                Proven Operational Domains
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {domains.map((domain, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-[#111827]/80 border border-gray-800 text-xs font-medium text-gray-300"
                  >
                    <span className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-[10px]">
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
                className="p-5 rounded-2xl bg-gradient-to-b from-[#11192b] to-[#0c1322] border border-gray-800 hover:border-cyan-400/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-2 font-medium">
                    {cap.stack}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {cap.focus}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Documented Implementation</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
