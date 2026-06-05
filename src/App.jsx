import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";


function App() {
  return (
    <div className="bg-[#0B0F19]">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills/>
      <Projects/>
      <Experience/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;