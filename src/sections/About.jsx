import { motion } from "framer-motion";

export default function About() {
return ( <section
   id="about"
   className="relative bg-[#111827] text-white py-24 px-6 md:px-20 overflow-hidden"
 >
{/* Background Glow */} <div className="absolute inset-0 overflow-hidden pointer-events-none">
<motion.div
animate={{
x: [0, 80, 0],
y: [0, 60, 0],
opacity: [0.05, 0.15, 0.05],
}}
transition={{
duration: 12,
repeat: Infinity,
ease: "linear",
}}
className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full"
/> </div>

```
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
        About Me
      </p>

      <h2 className="text-4xl md:text-6xl font-bold">
        Building Enterprise
        <span className="text-cyan-400"> Mobility Solutions</span>
      </h2>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm <span className="text-cyan-400 font-semibold">Vinay Kumar</span>,
          an Android and Flutter Developer currently working on
          enterprise-grade mobility applications for logistics,
          warehouse automation, ERP systems, ticketing platforms,
          visitor management systems, and handheld terminal devices.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed mt-6">
          My expertise includes Zebra EMDK, DataWedge,
          CipherLab SDK, barcode scanning, Bluetooth printing,
          REST API integration, face recognition, QR workflows,
          warehouse management systems, and large-scale
          enterprise Android solutions.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {[
            "Android",
            "Flutter",
            "Java",
            "Kotlin",
            "Zebra EMDK",
            "CipherLab",
            "Bluetooth Printing",
            "REST APIs",
            "ML Kit",
            "WMS",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right Stats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >
        {[
          {
            value: "2+",
            label: "Years Experience",
          },
          {
            value: "10+",
            label: "Projects Delivered",
          },
          {
            value: "4+",
            label: "HHT Integrations",
          },
          {
            value: "100%",
            label: "Enterprise Focus",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#1F2937]/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              {item.value}
            </h3>

            <p className="text-gray-300 mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

);
}
