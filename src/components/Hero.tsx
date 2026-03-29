import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  badge?: string;
  size?: "large" | "small";
}

export default function Hero({
  title,
  highlight,
  subtitle,
  primaryCTA,
  secondaryCTA,
  badge,
  size = "large",
}: HeroProps) {
  const isLarge = size === "large";

  return (
    <section
      className={`relative overflow-hidden ${
        isLarge ? "pt-32 pb-20 lg:pt-44 lg:pb-32" : "pt-28 pb-12 lg:pt-36 lg:pb-16"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl ${isLarge ? "" : "mx-auto text-center"}`}>
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-xs font-medium text-gold-400 uppercase tracking-wider">
                {badge}
              </span>
            </div>
          )}

          <h1
            className={`font-bold text-white leading-tight tracking-tight ${
              isLarge
                ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                : "text-3xl sm:text-4xl lg:text-5xl"
            }`}
          >
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  {highlight}
                </span>
              </>
            )}
          </h1>

          <p
            className={`mt-6 text-navy-300 leading-relaxed ${
              isLarge
                ? "text-lg sm:text-xl max-w-2xl"
                : "text-base sm:text-lg max-w-2xl mx-auto"
            }`}
          >
            {subtitle}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 ${
                isLarge ? "" : "justify-center"
              }`}
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-gold-500/20"
                >
                  {primaryCTA.label}
                  <ArrowRight size={18} />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy-600 hover:border-navy-500 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-navy-800"
                >
                  {secondaryCTA.label}
                  <ChevronRight size={18} />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
