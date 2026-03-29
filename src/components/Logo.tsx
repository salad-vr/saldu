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

  const s = dimensions[size];
  const sw = 2.4;

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={s.mark}
        aria-label="Saldu logo"
      >
        {/* Background */}
        <rect width="36" height="36" rx="8" fill={`url(#${uid})`} />

        {/* S — top arc bows right, bottom arc bows left */}
        <path
          d="M14.8 10.5h-2c-2 0-3.6 1.6-3.6 3.6 0 2 1.6 3.6 3.6 3.6h2c2 0 3.6 1.6 3.6 3.6 0 2-1.6 3.6-3.6 3.6h-2"
          stroke="#0A1628"
          strokeWidth={sw}
          strokeLinecap="round"
        />

        {/* d — ascender */}
        <path
          d="M28.2 9v16.5"
          stroke="#0A1628"
          strokeWidth={sw}
          strokeLinecap="round"
        />

        {/* d — bowl */}
        <path
          d="M28.2 21.2a4.2 4.2 0 1 0-8.4 0 4.2 4.2 0 1 0 8.4 0Z"
          stroke="#0A1628"
          strokeWidth={sw}
        />

        <defs>
          <linearGradient
            id={uid}
            x1="4"
            y1="4"
            x2="34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EACC7A" />
            <stop offset="0.5" stopColor="#D4A843" />
            <stop offset="1" stopColor="#A67E1E" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={`${s.text} font-bold text-white tracking-tight leading-none`}
      >
        Sal<span className="text-gold-400">du</span>
      </span>
    </span>
  );
}
