import { motion } from "framer-motion";

export default function Experience() {

const experience = [

  {
    company: "Seabird Logisolutions",
    role: "Android & Flutter Software Developer",
    duration: "July 2023 - April 2026",

    points: [
      "Developed enterprise-grade Android and Flutter applications for warehouse, visitor, expense, and internal management systems.",
      "Built WMS applications compatible with regular Android devices and industrial HHT devices including Zebra, Honeywell, and CipherLab.",
      "Worked on enterprise mobility solutions involving barcode scanning, Bluetooth printing, QR workflows, and real-time operations.",
      "Developed SLL-Ticketing, an internal ticket management platform used by IT-Infra teams across Pan India.",
      "Contributed to VMS (Visitor Management System) and EMS (Expense Management System) applications for enterprise operations.",
      "Integrated APIs, hardware devices, and operational workflows into scalable mobile applications.",
    ],
  },

  {
    company: "Sat Kabir Logistics",
    role: "Android Developer",
    duration: "April 2026 - Present",

    points: [
      "Working on enterprise WMS applications integrated with Newland HHT devices and barcode scanning workflows.",
      "Developing ERP mobile applications for operational and warehouse management systems.",
      "Building scalable Android applications focused on enterprise logistics and workflow automation.",
      "Integrating APIs, scanning modules, and real-time operational systems into Android platforms.",
    ],
  },


];


  return (
    <section id="experience" className="relative bg-[#0B0F19] text-white py-24 px-6 md:px-20 overflow-hidden">

      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, 80, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[5%] w-[350px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-cyan-400/50 pl-10">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 relative"
            >

              <div className="absolute -left-12.25 top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10"></div>
              <div className="absolute -left-12.25 top-2 w-5 h-5 rounded-full bg-cyan-400 animate-ping opacity-75 z-0"></div>

              <div className="bg-[#111827]/80 backdrop-blur-md border border-gray-800/80 rounded-3xl p-8 hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">

                <p className="text-cyan-400 mb-2 font-mono tracking-wide">
                  {item.duration}
                </p>

                <h3 className="text-3xl font-bold group-hover:text-white transition-colors">
                  {item.role}
                </h3>

                <h4 className="text-xl text-gray-300 mt-2 mb-6">
                  {item.company}
                </h4>

                <ul className="space-y-4 text-gray-400">

                  {item.points.map((point, idx) => (

                    <li key={idx}>
                      • {point}
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