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
    <div className="bg-[#0B0F19] text-white min-h-screen selection:bg-cyan-400 selection:text-black font-sans antialiased">
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
  );
}

export default App;