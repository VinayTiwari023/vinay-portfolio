import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";

import { FaAndroid, FaJava, FaGitAlt, FaBluetooth, FaWifi } from "react-icons/fa";
import { SiFirebase, SiKotlin, SiFlutter, SiZebratechnologies } from "react-icons/si";
import { MdPrint, MdQrCodeScanner, MdOutlineDevices } from "react-icons/md";

const skills = [
  {
    icon: <FaAndroid size={40} />,
    title: "Android",
    desc: "Enterprise Android apps using Java & Kotlin for logistics and mobility.",
  },
  {
    icon: <SiFlutter size={40} />,
    title: "Flutter",
    desc: "Cross-platform enterprise applications with clean architecture.",
  },
  {
    icon: <FaJava size={40} />,
    title: "Java",
    desc: "Scalable Android solutions, hardware integrations, and backend APIs.",
  },
  {
    icon: <SiKotlin size={40} />,
    title: "Kotlin",
    desc: "Modern Android development with coroutines and Jetpack components.",
  },
  {
    icon: <SiFirebase size={40} />,
    title: "Firebase",
    desc: "Authentication, push notifications, Firestore, and cloud services.",
  },
  {
    icon: <FaGitAlt size={40} />,
    title: "Git & GitHub",
    desc: "Version control, branching workflows, and collaborative development.",
  },
  {
    icon: <MdQrCodeScanner size={40} />,
    title: "Zebra EMDK",
    desc: "Enterprise barcode scanning, scanner profiles, and HHT integrations.",
  },
  {
    icon: <MdQrCodeScanner size={40} />,
    title: "DataWedge",
    desc: "Scanner profile management and intent-based data capture for Zebra.",
  },
  {
    icon: <MdOutlineDevices size={40} />,
    title: "CipherLab SDK",
    desc: "Barcode scanning integrations for CipherLab industrial HHT devices.",
  },
  {
    icon: <MdPrint size={40} />,
    title: "Bluetooth Printing",
    desc: "ESC/POS command set and thermal printer integrations for label printing.",
  },
  {
    icon: <FaWifi size={40} />,
    title: "REST APIs",
    desc: "Secure API integration, JWT auth, and real-time data synchronization.",
  },
  {
    icon: <SiZebratechnologies size={40} />,
    title: "ML Kit",
    desc: "QR code scanning, face detection, and on-device ML features.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0B0F19] text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -50, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative bg-[#111827]/80 backdrop-blur-md border border-gray-800/80 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-cyan-400 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 inline-block">
                {skill.icon}
              </div>
              <h3 className="relative text-2xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors">
                {skill.title}
              </h3>
              <p className="relative text-gray-400 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
