import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function GitHub() {
  const { theme } = useTheme();

  return (
    <section className="relative bg-slate-50 dark:bg-[#090e1a] text-slate-900 dark:text-white py-16 md:py-20 px-6 md:px-20 border-t border-slate-200 dark:border-gray-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-2">
              <FaGithub className="text-sm" />
              <span>Open Source & Engineering Activity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
              GitHub Contributions
            </h2>
          </div>
          <a
            href="https://github.com/VinayTiwari023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-200 transition-colors font-semibold"
          >
            @VinayTiwari023 →
          </a>
        </div>

        <div className="bg-white dark:bg-[#0f1626] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-gray-800/90 overflow-x-auto flex justify-center shadow-sm">
          <GitHubCalendar
            key={theme}
            username="VinayTiwari023"
            colorScheme={theme === "dark" ? "dark" : "light"}
            fontSize={12}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </div>
    </section>
  );
}