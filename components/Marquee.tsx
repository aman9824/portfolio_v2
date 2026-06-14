import { marquee } from "@/lib/content";

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="mask-fade-x overflow-hidden py-6">
      <div className="flex w-max animate-marquee gap-3">
        {items.map((m, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-navy-line bg-navy-panel/40 px-4 py-1.5 text-sm text-ink-muted"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
