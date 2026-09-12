import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import EngineeringFocus from "./sections/EngineeringFocus";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import GitHub from "./sections/GitHub";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white min-h-screen font-sans antialiased transition-colors duration-300">
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Projects />
          <EngineeringFocus />
          <Skills />
          <Experience />
          <GitHub />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;