type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <p className="text-[#e8651a] uppercase tracking-[0.22em] text-xs md:text-sm font-bold font-['Barlow_Condensed'] mb-3">
        {label}
      </p>

      <h2 className="font-['Barlow_Condensed'] text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] uppercase font-black text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-[640px] text-[#b8cce0] leading-7 text-[1.05rem]">
          {description}
        </p>
      )}
    </div>
  );
}