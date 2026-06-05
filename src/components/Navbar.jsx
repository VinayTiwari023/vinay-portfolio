import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import profileImage from "../assets/profile/profile_image.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-cyan-500/10"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        {/* Logo with Profile Image */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <div className="flex items-center gap-3 group">
            {/* Profile Image */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
              <img src={profileImage} // Replace with your profile image path
                alt="Vinay"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Name */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-105 transition-transform duration-300">
              &lt;Vinay /&gt;
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 font-medium">
            {[
 "home",
 "about",
 "skills",
 "experience",
 "projects",
 "contacts"
].map((item) => (
              <li key={item} className="group relative">
                <Link
                  activeClass="text-cyan-400"
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="capitalize text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </Link>
                {/* Hover Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md font-medium text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-[#0B0F19] transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]"
          >
            Resume
          </a>
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl text-cyan-400 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0B0F19]/95 backdrop-blur-xl border-b border-gray-800 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 max-h-[400px] py-6" : "opacity-0 max-h-0 overflow-hidden py-0"
        } flex flex-col items-center space-y-6 shadow-lg`}
      >
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <Link
              key={item}
            activeClass="text-cyan-400 font-bold"
              to={item}
            spy={true}
              smooth={true}
            offset={-80}
              duration={500}
              onClick={() => setMenuOpen(false)}
            className="capitalize text-lg text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {item}
            </Link>
          ))}
        
        {/* Mobile Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-2 rounded-md font-medium text-[#0B0F19] bg-cyan-400 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}