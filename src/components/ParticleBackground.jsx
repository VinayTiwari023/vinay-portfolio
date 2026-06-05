import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Puts it behind your website
        background: {
          color: {
            value: "transparent", // Ensures your existing background color shows
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" }, // Adds particles on click
            onHover: { enable: true, mode: "grab" }, // Reaches out to grab the mouse
            resize: true,
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.8 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: "#22d3ee" }, // Tailwind cyan-400 to match your theme
          links: {
            color: "#22d3ee",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}