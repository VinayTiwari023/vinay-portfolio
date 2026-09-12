import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  return (
    <footer className="bg-[#060a12] border-t border-gray-800/80 text-gray-400 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-lg tracking-tight">
            Vinay Kumar
          </h3>
          <p className="text-xs font-mono text-cyan-400 mt-0.5">
            Android & Flutter Engineer • Enterprise Mobile, Industrial Systems & Applied AI
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-mono">
          <a
            href="https://github.com/VinayTiwari023"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <FaGithub className="text-base" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vinay-kumar-android"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin className="text-base" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:vinaytiwari7011@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope className="text-base" />
            <span>Email</span>
          </a>
        </div>

        {/* Back to top & Copyright */}
        <div className="flex items-center gap-4 text-xs">
          <span>© 2026 Vinay Kumar</span>
          <button
            type="button"
            onClick={scrollToTop}
            title="Scroll to top"
            className="w-8 h-8 rounded-lg bg-[#0f1626] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer"
          >
            <FaChevronUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
}