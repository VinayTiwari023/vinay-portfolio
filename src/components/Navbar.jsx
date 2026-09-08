import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import profileImage from "../assets/profile/profile_image.jpeg";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Expertise", to: "expertise" },
  { label: "Work", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    },
    [menuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d18]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/40 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between">
        {/* Brand Link */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full"
        >
          <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-cyan-400/40 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            <img
              src={profileImage}
              alt="Vinay Kumar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black text-white group-hover:text-cyan-300 transition-colors tracking-tight">
              Vinay Kumar
            </span>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider -mt-1">
              Android & Flutter Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
            {navItems.map((item) => (
              <li key={item.to} className="relative">
                <Link
                  activeClass="text-cyan-400 font-bold"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 cursor-pointer py-1.5 focus:outline-none focus-visible:text-cyan-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Action */}
          <a
            href="/Vinay_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-mono font-semibold text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] flex items-center gap-2"
          >
            <FaDownload className="text-[10px]" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 focus:outline-none text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Slide-Over Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#090e1a]/98 backdrop-blur-xl border-b border-gray-800 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 max-h-[420px] py-6 shadow-2xl" : "opacity-0 max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              activeClass="text-cyan-400 font-bold"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono uppercase tracking-wider text-gray-300 hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/Vinay_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 w-full text-center px-6 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </header>
  );
}