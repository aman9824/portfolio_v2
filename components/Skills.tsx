import { Reveal } from "./ui/Reveal";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {skills.map((cat, i) => (
        <Reveal key={cat.label} delay={(i % 2) * 0.06}>
          <div className="h-full rounded-xl border border-navy-line bg-navy-panel/30 p-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((it) => (
                <span
                  key={it}
                  className="rounded-md bg-navy-deep/60 px-2.5 py-1 text-sm text-ink-muted ring-1 ring-navy-line"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
