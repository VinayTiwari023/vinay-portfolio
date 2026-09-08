import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaBarcode,
  FaNetworkWired,
  FaWarehouse,
  FaIndustry,
  FaBrain
} from "react-icons/fa";

export default function Expertise() {
  const capabilities = [
    {
      icon: <FaMobileAlt className="text-2xl text-cyan-400" />,
      title: "Enterprise Mobile Engineering",
      tagline: "Production-focused Flutter & Android platforms",
      desc: "Architecting resilient mobile applications tailored around real operational business workflows, featuring clean modularity, sound reactive state, and memory safety."
    },
    {
      icon: <FaBarcode className="text-2xl text-cyan-400" />,
      title: "Industrial & Hardware Integration",
      tagline: "Scanners, HHT Terminals & Printers",
      desc: "Native integration with physical handheld terminals (Newland, Zebra EMDK, CipherLab), Bluetooth thermal printers (ESC/POS), and multi-mode camera scanning."
    },
    {
      icon: <FaNetworkWired className="text-2xl text-cyan-400" />,
      title: "Enterprise API Integration",
      tagline: "Transactional networking & local caching",
      desc: "Structured REST API communication via Dio and HTTP, JWT/token lifecycle management, typed data modeling, and robust offline caching using Hive and secure storage."
    },
    {
      icon: <FaWarehouse className="text-2xl text-cyan-400" />,
      title: "Warehouse & Logistics Systems",
      tagline: "Floor-to-dispatch operations",
      desc: "Inward management, GRN verification, smart putaway, bin-level inventory tracking, physical inventory audits (PIV), vehicle gatepass logging, and outbound dispatch."
    },
    {
      icon: <FaIndustry className="text-2xl text-cyan-400" />,
      title: "Manufacturing Applications",
      tagline: "Shop-floor production & QC lifecycle",
      desc: "Precast concrete batch tracking, mold pouring, curing schedules, Work-In-Progress (WIP) tracking, Quality Control (QC) approval/rejection, and procurement GRN."
    },
    {
      icon: <FaBrain className="text-2xl text-cyan-400" />,
      title: "Applied AI / ML",
      tagline: "On-device edge inference & embeddings",
      desc: "Camera face detection via Google ML Kit, on-device MobileFaceNet inference via TensorFlow Lite, 128D mathematical face embeddings, and conversational AI integrations."
    }
  ];

  return (
    <section
      id="expertise"
      className="relative bg-[#0B0F19] text-white py-20 md:py-28 px-6 md:px-20 border-t border-gray-800/80"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-3">
            Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Engineering Capabilities & Disciplines
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Focused on the intersection of modern mobile engineering, industrial hardware connectivity, enterprise data architectures, and applied on-device intelligence.
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
              className="bg-gradient-to-b from-[#111827] to-[#0d1424] border border-gray-800/90 p-7 md:p-8 rounded-2xl hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400/80 mb-4">
                  {item.tagline}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center gap-2 text-[11px] font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Production Tested</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}