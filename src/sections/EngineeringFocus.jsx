import { motion } from "framer-motion";
import {
  FaWarehouse,
  FaBarcode,
  FaServer,
  FaRocket,
  FaBrain
} from "react-icons/fa";

const pillars = [
  {
    icon: <FaWarehouse className="text-2xl text-cyan-400" />,
    title: "Operational Mobility",
    subtitle: "Built for the Floor, Not Just the Office",
    desc: "Applications designed specifically for rugged environments, continuous warehouse shifts, transport depots, and manufacturing plant floors where speed and usability dictate business velocity."
  },
  {
    icon: <FaBarcode className="text-2xl text-cyan-400" />,
    title: "Hardware-Connected Software",
    subtitle: "Direct Peripheral Integration",
    desc: "Seamless communication with industrial Newland, Zebra, and CipherLab handheld scanners, Bluetooth thermal label printers, camera OCR pipelines, and precision GPS sensors."
  },
  {
    icon: <FaServer className="text-2xl text-cyan-400" />,
    title: "Enterprise APIs & Architecture",
    subtitle: "Decoupled, Testable, Maintainable",
    desc: "Strict Clean Architecture and MVVM patterns with reactive Riverpod and Provider state, type-safe Dio networking, interceptors, and local caching abstractions built for long-term maintainability."
  },
  {
    icon: <FaRocket className="text-2xl text-cyan-400" />,
    title: "Production Systems",
    subtitle: "Live Operational Deployments",
    desc: "Multiple enterprise mobile applications actively deployed in live production, driving critical commercial transactions across warehouse management, freight transport, and manufacturing."
  },
  {
    icon: <FaBrain className="text-2xl text-cyan-400" />,
    title: "Applied AI & Edge Vision",
    subtitle: "On-Device Neural Inference",
    desc: "Real-world machine learning on the device: Google ML Kit face detection, MobileFaceNet inference via TensorFlow Lite, 128D face embeddings, and conversational AI assistant integrations."
  }
];

export default function EngineeringFocus() {
  return (
    <section id="engineering-focus" className="relative bg-[#0b101c] py-20 md:py-28 px-6 md:px-20 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-3">
            Core Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            What I Engineer
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Engineering depth measured by operational capability, architectural resilience, and real-world hardware integration rather than arbitrary marketing metrics.
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
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#111728] to-[#0d1424] border border-gray-800/80 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center gap-2 text-[11px] font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Production Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

