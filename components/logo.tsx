export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Zerovo Labs Logo - Cyan accent with dark theme */}
        <text
          x="50"
          y="35"
          fontSize="28"
          fontWeight="300"
          fill="currentColor"
          className="text-foreground"
          fontFamily="Outfit, sans-serif"
        >
          zerovo
        </text>
        <text
          x="50"
          y="50"
          fontSize="10"
          fontWeight="300"
          fill="currentColor"
          className="text-primary opacity-80"
          fontFamily="Outfit, sans-serif"
          letterSpacing="2"
        >
          LABS
        </text>
        {/* Accent circle */}
        <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
        <circle cx="25" cy="25" r="8" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  )
}
