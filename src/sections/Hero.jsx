import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import profileImg from "../assets/profile/profile_image.jpeg";

export default function Hero() {

  return (

    <section
      id="home"
      className="relative min-h-screen bg-[#0B0F19] text-white flex items-center px-6 md:px-20 pt-28 overflow-hidden"
    >

      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -50, 0], x: [0, 30, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-500/20 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[5%] right-[5%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-blue-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}

        <div>

          {/* AVAILABLE BADGE */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for Opportunities
          </motion.div>

          {/* HELLO TEXT */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-lg mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* NAME */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Vinay{" "}
            <span className="text-cyan-400">
              Kumar
            </span>
          </motion.h1>

          {/* TITLE */}

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="mt-5"
>
  <h2 className="text-2xl md:text-4xl font-bold text-white">
    <TypeAnimation
      sequence={[
        "Android Developer",
        2000,
        "Flutter Developer",
        2000,
        "HHT Specialist",
        2000,
        "Enterprise Mobile Application Developer",
        2000,
      ]}
      speed={40}
      repeat={Infinity}
    />
  </h2>

  <p className="text-cyan-400 text-lg mt-4">
    Zebra • CipherLab • Bluetooth Printing • ERP • WMS
  </p>
</motion.div>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-gray-400 text-lg mt-8 max-w-2xl leading-relaxed"
          >
            I build scalable Android and Flutter applications for
            enterprise and business operations, with experience in
            ERP systems, warehouse management, ticketing platforms,
            visitor management, mobile automation, and hardware-integrated
            solutions. 
          </motion.p>

          {/* TECH BADGES */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex flex-wrap gap-3 mt-8"
          >

            {[
              "Android",
              "Flutter",
              "Java",
              "Zebra",
              "Honeywell",
              "CipherLab",
              "Newland",
              "EMDK",
              "REST APIs",
            ].map((item, index) => (

              <span
                key={index}
                className="bg-[#111827] border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                {item}
              </span>

            ))}

          </motion.div>

          {/* STATS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="flex flex-wrap gap-8 mt-10"
          >

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                3+
              </h3>

              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                10+
              </h3>

              <p className="text-gray-400">
                Enterprise Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                4+
              </h3>

              <p className="text-gray-400">
                HHT Integrations
              </p>
            </div>

          </motion.div>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >

            <a
              href="https://github.com/VinayTiwari023/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-cyan-400/30 hover:shadow-xl transition flex items-center gap-3"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vinay-kumar-android/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition flex items-center gap-3"
            >
              <FaLinkedin />
              LinkedIn
            </a>

           <a
  href="/Vinay_Kumar_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 transition flex items-center gap-3"
>
  <FaDownload />
  Resume
</a>

          </motion.div>

        </div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* GLOW EFFECT */}

            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-cyan-400 blur-3xl rounded-full"
            ></motion.div>

            {/* IMAGE */}

            <motion.img
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={profileImg}
              alt="Vinay Kumar"
              className="relative w-[220px] md:w-[280px] lg:w-[320px] object-cover rounded-[40px] border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.15)] hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(34,211,238,0.3)] transition-all duration-500"
            />

          </div>

        </motion.div>

      </div>

    </section>

  );
}