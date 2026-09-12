import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
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
  const { theme, toggleTheme } = useTheme();

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
          ? "bg-white/90 dark:bg-[#090d18]/90 backdrop-blur-md border-b border-slate-200 dark:border-gray-800/80 shadow-lg shadow-slate-200/50 dark:shadow-black/40 py-2.5"
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
          className="cursor-pointer flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400 rounded-full"
        >
          <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-cyan-500/40 dark:border-cyan-400/40 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            <img
              src={profileImage}
              alt="Vinay Kumar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
              Vinay Kumar
            </span>
            <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider -mt-1 font-semibold">
              Android & Flutter Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-5 lg:gap-6 font-mono text-xs uppercase tracking-wider">
            {navItems.map((item) => (
              <li key={item.to} className="relative">
                <Link
                  activeClass="text-cyan-600 dark:text-cyan-400 font-bold"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-200 cursor-pointer py-1.5 focus:outline-none focus-visible:text-cyan-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-xl border border-slate-300 dark:border-gray-700/80 bg-slate-100/90 dark:bg-[#0f172a] text-amber-500 dark:text-cyan-300 hover:scale-110 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 cursor-pointer shadow-sm"
            >
              {theme === "dark" ? (
                <FaSun className="text-sm transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <FaMoon className="text-sm transition-transform -rotate-12 hover:rotate-0 text-slate-700" />
              )}
            </button>

            {/* Resume Action */}
            <a
              href="/Vinay_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 dark:border-cyan-400/40 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <FaDownload className="text-[10px]" />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Actions: Theme Toggle & Hamburger Menu */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg border border-slate-300 dark:border-gray-700 bg-slate-100 dark:bg-[#0f172a] text-amber-500 dark:text-cyan-300 text-sm"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon className="text-slate-700" />}
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="p-2 text-slate-800 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 focus:outline-none text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/98 dark:bg-[#090e1a]/98 backdrop-blur-xl border-b border-slate-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 max-h-[480px] py-6 shadow-2xl" : "opacity-0 max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              activeClass="text-cyan-600 dark:text-cyan-400 font-bold"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono uppercase tracking-wider text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-gray-700 bg-slate-100 dark:bg-[#0f172a] text-slate-800 dark:text-gray-200 font-mono text-xs uppercase tracking-wider cursor-pointer"
          >
            {theme === "dark" ? <FaSun className="text-amber-400" /> : <FaMoon className="text-slate-700" />}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>

          <a
            href="/Vinay_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full text-center px-6 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-white dark:text-black bg-cyan-600 dark:bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-300 transition-all shadow-sm"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </header>
  );
}