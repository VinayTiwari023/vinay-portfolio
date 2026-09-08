export default function StatusBadge({ status, statusType = "production", size = "md" }) {
  const isProduction = statusType === "production" || status?.toLowerCase().includes("production");

  const sizeClasses = {
    sm: "text-[10px] px-2.5 py-1 gap-1.5",
    md: "text-xs px-3 py-1.5 gap-2",
    lg: "text-xs md:text-sm px-4 py-2 gap-2.5"
  }[size] || "text-xs px-3 py-1.5 gap-2";

  if (isProduction) {
    return (
      <span
        className={`inline-flex items-center font-mono font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${sizeClasses} bg-emerald-500/10 border-emerald-400/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span>{status || "LIVE IN PRODUCTION"}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center font-mono font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${sizeClasses} bg-cyan-500/10 border-cyan-400/30 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
      </span>
      <span>{status || "CURRENTLY BUILDING"}</span>
    </span>
  );
}

