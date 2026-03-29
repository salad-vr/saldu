interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12 lg:mb-16`}>
      {label && (
        <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-3">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            {" "}
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-navy-300" : "text-navy-300"
          } ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
