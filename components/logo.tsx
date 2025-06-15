interface LogoProps {
  className?: string
  width?: number
  height?: number
  showText?: boolean
}

export function Logo({ className = "", width = 120, height = 32, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={height}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer circle - represents motion/wheel */}
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />

        {/* Inner circle with gradient background */}
        <circle cx="16" cy="16" r="12" fill="url(#logoGradient)" />

        {/* Lightning bolt - power/electric element */}
        <path
          d="M12 8L20 14H16L20 24L12 18H16L12 8Z"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />

        {/* Motion lines - speed/rescue response */}
        <path
          d="M4 12L8 12M4 16L10 16M4 20L8 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-primary opacity-60"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-extrabold leading-tight tracking-tight">Power Motion</span>
          <span className="text-base font-bold text-primary leading-tight tracking-wide">RESCUE</span>
        </div>
      )}
    </div>
  )
}

export function LogoIcon({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />

      {/* Inner circle with gradient */}
      <circle cx="16" cy="16" r="12" fill="url(#iconGradient)" />

      {/* Lightning bolt */}
      <path
        d="M12 8L20 14H16L20 24L12 18H16L12 8Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />

      {/* Motion lines */}
      <path
        d="M4 12L8 12M4 16L10 16M4 20L8 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-primary opacity-60"
      />

      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
    </svg>
  )
}
