import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

export default function StatusBadge({
  status,
  statusType = "production",
  size = "md",
  playStoreUrl,
  githubUrl,
  projectTitle
}) {
  const isOpenSource = statusType === "open-source" || Boolean(githubUrl);
  const isPrevious = statusType === "previous" || status?.toLowerCase().includes("deployed");
  const isLive = status === "LIVE" || (statusType === "production" && Boolean(playStoreUrl));
  const isProduction = status === "PRODUCTION" || statusType === "production" || status?.toLowerCase().includes("production");

  const sizeClasses = {
    sm: "text-[10px] px-2.5 py-1 gap-1.5",
    md: "text-xs px-3 py-1.5 gap-2",
    lg: "text-xs md:text-sm px-4 py-2 gap-2.5"
  }[size] || "text-xs px-3 py-1.5 gap-2";

  if (isOpenSource && githubUrl) {
    return (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${projectTitle || "project"} on GitHub`}
        className={`inline-flex items-center font-mono font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 cursor-pointer ${sizeClasses} bg-cyan-500/10 border-cyan-500/40 dark:border-cyan-400/30 text-cyan-800 dark:text-cyan-300 shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.15)] group/badge`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 dark:bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 dark:bg-cyan-400"></span>
        </span>
        <span>{status || "OPEN SOURCE · GITHUB"}</span>
        <FaExternalLinkAlt className="text-[9px] ml-0.5 opacity-80 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 transition-transform" />
      </a>
    );
  }

  if (isPrevious) {
    return (
      <span
        className={`inline-flex items-center font-mono font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${sizeClasses} bg-blue-500/10 border-blue-400/40 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.1)]`}
      >
        <FaCheckCircle className="text-blue-600 dark:text-blue-400 text-[10px] flex-shrink-0" />
        <span>{status || "PRODUCTION DEPLOYED"}</span>
      </span>
    );
  }

  if (isLive && playStoreUrl) {
    return (
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${projectTitle || "application"} on Google Play`}
        className={`inline-flex items-center font-mono font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/60 dark:hover:border-emerald-400/60 cursor-pointer ${sizeClasses} bg-emerald-500/10 border-emerald-500/40 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-400 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.15)] group/badge`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400"></span>
        </span>
        <span>LIVE · Google Play</span>
        <FaExternalLinkAlt className="text-[9px] ml-0.5 opacity-80 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 transition-transform" />
      </a>
    );
  }

  if (isProduction) {
    const displayText =
      status === "PRODUCTION"
        ? "CURRENTLY IN PRODUCTION"
        : status === "LIVE"
        ? "LIVE"
        : status || "LIVE IN PRODUCTION";

    return (
      <span
        className={`inline-flex items-center font-mono font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${sizeClasses} bg-emerald-500/10 border-emerald-500/40 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-400 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.15)]`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400"></span>
        </span>
        <span>{displayText}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center font-mono font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${sizeClasses} bg-cyan-500/10 border-cyan-500/40 dark:border-cyan-400/30 text-cyan-800 dark:text-cyan-300 shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.15)]`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 dark:bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 dark:bg-cyan-400"></span>
      </span>
      <span>{status || "CURRENTLY BUILDING"}</span>
    </span>
  );
}
