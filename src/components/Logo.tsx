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
  const uid = `logo-${size}-${Math.random().toString(36).slice(2, 6)}`;

  return (
    <span className={`inline-flex items-center ${d.gap} ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={d.mark}
        aria-label="Saldu logo"
      >
        <rect width="40" height="40" rx="8" fill={`url(#${uid})`} />
        {/* S - clean geometric S curve */}
        <path
          d="M11 15c0-2.2 2-4 4.5-4s4 1.5 4 3.5c0 4-8.5 2.5-8.5 7.5 0 2.2 2 4 4.5 4"
          stroke="#0A1628"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* d - bowl + ascender */}
        <path
          d="M28 9v19"
          stroke="#0A1628"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="22"
          r="4.5"
          stroke="#0A1628"
          strokeWidth="2.8"
        />
        <defs>
          <linearGradient
            id={uid}
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0BD63" />
            <stop offset="1" stopColor="#B8912A" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={`${d.text} font-bold text-white tracking-tight leading-none`}
      >
        Sal<span className="text-gold-400">du</span>
      </span>
    </span>
  );
}
