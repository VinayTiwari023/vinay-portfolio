import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useTheme } from "../context/ThemeContext";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const [reducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (reducedMotion) return;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [reducedMotion]);

  if (reducedMotion || !init) return null;

  const isDark = theme === "dark";
  const particleColor = isDark ? "#22d3ee" : "#0284c7";
  const linkOpacity = isDark ? 0.15 : 0.08;
  const particleOpacity = isDark ? 0.3 : 0.15;

  return (
    <Particles
      key={theme}
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "transparent" }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true
          },
          modes: {
            grab: { distance: 120, links: { opacity: isDark ? 0.3 : 0.15 } }
          }
        },
        particles: {
          color: { value: particleColor },
          links: {
            color: particleColor,
            distance: 130,
            enable: true,
            opacity: linkOpacity,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 0.8,
            straight: false
          },
          number: { density: { enable: true, area: 1000 }, value: 25 },
          opacity: { value: particleOpacity },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } }
        },
        detectRetina: true
      }}
    />
  );
}