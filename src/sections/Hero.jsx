import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaMicrochip,
  FaBrain,
  FaServer,
  FaMobileAlt
} from "react-icons/fa";

import profileImg from "../assets/profile/profile_image.jpeg";

export default function Hero() {
  const techPillars = [
    { label: "Flutter & Android", icon: <FaMobileAlt className="text-cyan-400" /> },
    { label: "Enterprise Systems", icon: <FaServer className="text-cyan-400" /> },
    { label: "Industrial Hardware", icon: <FaMicrochip className="text-cyan-400" /> },
    { label: "Applied AI / ML", icon: <FaBrain className="text-cyan-400" /> }
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] bg-[#0B0F19] text-white flex items-center px-6 md:px-20 pt-32 pb-16 overflow-hidden"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[12%] left-[10%] w-[380px] h-[380px] bg-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[420px] h-[420px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* LEFT COLUMN: Narrative & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 px-3.5 py-1.5 rounded-full mb-6 text-xs font-mono tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Android & Flutter Engineer</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-black leading-[1.1] tracking-tight text-white mb-6"
          >
            I build enterprise mobile systems that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-400">
              work beyond the screen.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8 font-normal"
          >
            I engineer production-focused mobile applications that connect{" "}
            <span className="text-white font-medium">enterprise workflows</span>,{" "}
            <span className="text-cyan-300 font-medium">real-world hardware</span> (Newland, Zebra, CipherLab),{" "}
            <span className="text-white font-medium">APIs</span>, and{" "}
            <span className="text-cyan-300 font-medium">intelligent on-device AI/ML</span>.
          </motion.p>

          {/* Technical Pillar Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl mb-10"
          >
            {techPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#111827]/80 border border-gray-800 text-xs font-mono text-gray-300 hover:border-cyan-500/40 hover:text-white transition-all"
              >
                {pillar.icon}
                <span className="truncate">{pillar.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Call-to-Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-6 py-3.5 rounded-xl font-semibold bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2.5 cursor-pointer text-sm md:text-base"
            >
              <span>Explore Production Work</span>
              <FaArrowRight className="text-xs" />
            </Link>

            <a
              href="/Vinay_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl font-medium border border-gray-700 hover:border-cyan-400 text-gray-200 hover:text-white transition-all flex items-center gap-2 text-sm md:text-base bg-[#111827]/60"
            >
              <FaDownload className="text-xs text-cyan-400" />
              <span>Resume</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/VinayTiwari023/"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="w-11 h-11 rounded-xl bg-[#111827] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all text-lg"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-kumar-android/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-[#111827] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all text-lg"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Professional Portrait with Technical Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[340px] sm:max-w-[380px]"
          >
            {/* Technical Border Frame */}
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-cyan-500/20 via-gray-800/40 to-blue-500/10 border border-cyan-500/30 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
              {/* Corner Accents */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></span>
              <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></span>
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></span>
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></span>

              <div className="overflow-hidden rounded-2xl bg-[#0d1424]">
                <img
                  src={profileImg}
                  alt="Vinay Kumar - Android & Flutter Engineer"
                  className="w-full aspect-[4/5] object-cover object-center filter contrast-[1.05] hover:scale-[1.02] transition-all duration-700"
                />
              </div>

              {/* Status Ribbon Badge */}
              <div className="mt-3 py-2.5 px-4 rounded-xl bg-[#0c1220] border border-gray-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-white">Vinay Kumar</span>
                </div>
                <span className="text-cyan-400 font-semibold tracking-wider">Gurgaon, IN</span>
              </div>
            </div>

            {/* Floating Telemetry Chip 1 */}
            <div className="hidden sm:flex absolute -bottom-4 -left-6 bg-[#0a101d]/95 backdrop-blur-md border border-cyan-400/40 rounded-xl px-4 py-2.5 items-center gap-3 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <div>
                <p className="text-[10px] font-mono text-gray-400 uppercase">Core Focus</p>
                <p className="text-xs font-mono font-bold text-cyan-300">Enterprise Mobility & AI</p>
              </div>
            </div>

            {/* Floating Telemetry Chip 2 */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#0a101d]/95 backdrop-blur-md border border-emerald-400/40 rounded-xl px-4 py-2 items-center gap-2 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] font-mono text-emerald-300 font-semibold">3 Live Systems</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}