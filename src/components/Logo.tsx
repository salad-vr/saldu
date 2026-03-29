interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const dimensions = {
    sm: { mark: "w-8 h-8", text: "text-lg", gap: "gap-2" },
    md: { mark: "w-10 h-10", text: "text-2xl", gap: "gap-2.5" },
    lg: { mark: "w-14 h-14", text: "text-3xl", gap: "gap-3" },
  };

  const d = dimensions[size];

  return (
    <span className={`inline-flex items-center ${d.gap} ${className}`}>
      {/* Logomark: interlocking S and d */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={d.mark}
      >
        <rect width="48" height="48" rx="10" fill="url(#gold-grad)" />
        {/* S letterform - flowing curve */}
        <path
          d="M14 18.5C14 15.5 16.5 13 20 13C23.5 13 25.5 15 25.5 17.5C25.5 22 14 20.5 14 26.5C14 29.5 16.5 31.5 20 31.5"
          stroke="#0A1628"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* d letterform - vertical stem + bowl */}
        <path
          d="M34 11V31.5"
          stroke="#0A1628"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M34 26C34 29 31.5 31.5 28.5 31.5C25.5 31.5 23 29 23 26C23 23 25.5 20.5 28.5 20.5C31.5 20.5 34 23 34 26Z"
          stroke="#0A1628"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Connecting bridge line between S and d */}
        <path
          d="M20 31.5C22 35 26 36 29 35"
          stroke="#0A1628"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <defs>
          <linearGradient
            id="gold-grad"
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D4A843" />
            <stop offset="1" stopColor="#B8912A" />
          </linearGradient>
        </defs>
      </svg>
      {/* Wordmark */}
      <span className={`${d.text} font-bold text-white tracking-tight leading-none`}>
        Sal<span className="text-gold-400">du</span>
      </span>
    </span>
  );
}
