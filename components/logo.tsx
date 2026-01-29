export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
    >
      {/* Zerovo Labs Logo - Cyan accent with dark theme */}
      <defs>
        <style>{`
          .logo-text { fill: var(--foreground); font-family: Outfit, sans-serif; }
          .logo-labs { fill: var(--primary); opacity: 0.8; }
          .logo-circle { stroke: var(--primary); }
          .logo-dot { fill: var(--primary); }
        `}</style>
      </defs>
      <text
        x="50"
        y="35"
        fontSize="28"
        fontWeight="300"
        className="logo-text"
      >
        zerovo
      </text>
      <text
        x="50"
        y="50"
        fontSize="10"
        fontWeight="300"
        className="logo-labs"
        letterSpacing="2"
      >
        LABS
      </text>
      {/* Accent circle */}
      <circle cx="25" cy="25" r="15" fill="none" strokeWidth="2" className="logo-circle" />
      <circle cx="25" cy="25" r="8" className="logo-dot" />
    </svg>
  )
}
