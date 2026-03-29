"use client";

import { useId } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const uid = useId();

  const dimensions = {
    sm: { mark: "w-8 h-8", text: "text-lg", gap: "gap-2" },
    md: { mark: "w-10 h-10", text: "text-2xl", gap: "gap-2.5" },
    lg: { mark: "w-14 h-14", text: "text-3xl", gap: "gap-3" },
  };

  const d = dimensions[size];

  return (
    <span className={`inline-flex items-center ${d.gap} ${className}`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={d.mark}
        aria-label="Saldu logo"
      >
        <rect width="36" height="36" rx="8" fill={`url(#${uid})`} />

        {/* S - two arcs forming a clean S shape */}
        <path
          d="M16.5 11.5H12c-1.7 0-3 1.3-3 3s1.3 3 3 3h3c1.7 0 3 1.3 3 3s-1.3 3-3 3H10.5"
          stroke="#0A1628"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* d - ascender stem */}
        <path
          d="M27.5 8.5v16"
          stroke="#0A1628"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* d - bowl */}
        <path
          d="M27.5 19c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5 2 4.5 4.5 4.5 4.5-2 4.5-4.5Z"
          stroke="#0A1628"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <defs>
          <linearGradient
            id={uid}
            x1="0"
            y1="0"
            x2="36"
            y2="36"
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
