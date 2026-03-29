interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12 lg:mb-16`}>
      {label && (
        <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
        {title}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            {" "}
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg text-navy-500 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
