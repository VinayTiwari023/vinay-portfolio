import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaMobileAlt,
  FaRocket,
  FaNetworkWired,
  FaBrain
} from "react-icons/fa";

import profileImg from "../assets/profile/profile_image.jpeg";

export default function Hero() {
  const techPillars = [
    { label: "Android & Flutter", icon: <FaMobileAlt className="text-cyan-600 dark:text-cyan-400" /> },
    { label: "Production Apps", icon: <FaRocket className="text-cyan-600 dark:text-cyan-400" /> },
    { label: "APIs & Integrations", icon: <FaNetworkWired className="text-cyan-600 dark:text-cyan-400" /> },
    { label: "AI/ML", icon: <FaBrain className="text-cyan-600 dark:text-cyan-400" /> }
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white flex items-center px-6 md:px-20 pt-32 pb-16 overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[12%] left-[10%] w-[380px] h-[380px] bg-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[420px] h-[420px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* LEFT COLUMN: Narrative & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-cyan-500/10 dark:bg-cyan-950/60 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300 px-3.5 py-1.5 rounded-full mb-6 text-xs font-mono tracking-wider uppercase font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
            <span>Android & Flutter Engineer</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.1rem,4.2vw,3.75rem)] font-black leading-[1.12] tracking-tight text-slate-900 dark:text-white mb-6"
          >
            I build production mobile applications that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 dark:from-cyan-400 dark:via-cyan-200 dark:to-blue-400">
              work beyond the screen.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-gray-300 text-[15px] sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 font-normal"
          >
            I engineer production-focused Android and Flutter applications that connect{" "}
            <span className="text-slate-900 dark:text-white font-semibold">real-world workflows</span>,{" "}
            <span className="text-cyan-700 dark:text-cyan-300 font-semibold">APIs</span>,{" "}
            <span className="text-slate-900 dark:text-white font-semibold">hardware peripherals</span>, and{" "}
            <span className="text-cyan-700 dark:text-cyan-300 font-semibold">intelligent on-device experiences</span>.
          </motion.p>

          {/* Technical Capability Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 w-full max-w-2xl mb-10"
          >
            {techPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-gray-800 text-[11px] sm:text-xs md:text-[13px] font-mono text-slate-700 dark:text-gray-300 hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-white transition-all shadow-sm"
              >
                <span className="text-sm shrink-0">{pillar.icon}</span>
                <span className="leading-tight font-medium">{pillar.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Call-to-Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="min-h-[44px] px-5 sm:px-6 py-3 rounded-xl font-semibold bg-cyan-600 dark:bg-cyan-400 text-white dark:text-black hover:bg-cyan-500 dark:hover:bg-cyan-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2.5 cursor-pointer text-sm md:text-base shadow-sm"
            >
              <span>Explore Production Work</span>
              <FaArrowRight className="text-xs" />
            </Link>

            <a
              href="/Vinay_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 sm:px-5 py-3 rounded-xl font-medium border border-slate-300 dark:border-gray-700 bg-white dark:bg-[#111827]/60 text-slate-800 dark:text-gray-200 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-700 dark:hover:text-white transition-all flex items-center gap-2 text-sm md:text-base shadow-sm"
            >
              <FaDownload className="text-xs text-cyan-600 dark:text-cyan-400" />
              <span>Resume</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/VinayTiwari023/"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="w-11 h-11 min-h-[44px] rounded-xl bg-white dark:bg-[#111827] border border-slate-300 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400/40 transition-all text-lg shadow-sm"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-kumar-android/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-11 h-11 min-h-[44px] rounded-xl bg-white dark:bg-[#111827] border border-slate-300 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-400/40 transition-all text-lg shadow-sm"
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
            className="relative w-full max-w-[300px] sm:max-w-[360px]"
          >
            {/* Technical Border Frame */}
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-cyan-500/20 via-slate-200/60 dark:via-gray-800/40 to-blue-500/10 border border-cyan-500/30 shadow-xl dark:shadow-[0_0_60px_rgba(34,211,238,0.12)]">
              {/* Corner Accents */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-500 dark:border-cyan-400"></span>
              <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-500 dark:border-cyan-400"></span>
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-500 dark:border-cyan-400"></span>
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-500 dark:border-cyan-400"></span>

              <div className="overflow-hidden rounded-2xl bg-slate-200 dark:bg-[#0d1424]">
                <img
                  src={profileImg}
                  alt="Vinay Kumar - Android & Flutter Engineer"
                  className="w-full aspect-[4/5] object-cover object-center filter contrast-[1.05] hover:scale-[1.02] transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}