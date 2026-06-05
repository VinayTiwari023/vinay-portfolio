import { motion } from "framer-motion";
import {
  FaBarcode,
  FaMobileAlt,
  FaPrint,
  FaWarehouse,
  FaAndroid,
  FaCode,
} from "react-icons/fa";

export default function Expertise() {
  const services = [
    {
      icon: <FaAndroid size={40} />,
      title: "Android Development",
      desc: "Enterprise Android applications using Java & Kotlin.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Flutter Development",
      desc: "Cross-platform applications for Android & iOS.",
    },
    {
      icon: <FaBarcode size={40} />,
      title: "Barcode Scanning",
      desc: "Zebra, Honeywell, CipherLab and Newland integrations.",
    },
    {
      icon: <FaPrint size={40} />,
      title: "Bluetooth Printing",
      desc: "ESC/POS, thermal printers and label generation.",
    },
    {
      icon: <FaWarehouse size={40} />,
      title: "Warehouse Solutions",
      desc: "WMS, inventory, putaway, picking and shipment workflows.",
    },
    {
      icon: <FaCode size={40} />,
      title: "API Integrations",
      desc: "REST APIs, authentication and real-time synchronization.",
    },
  ];

  return (
    <section
      id="expertise"
      className="bg-[#0B0F19] text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          What I Do
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Areas of Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#111827] border border-gray-800 p-8 rounded-3xl hover:border-cyan-400 transition-all"
            >
              <div className="text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}