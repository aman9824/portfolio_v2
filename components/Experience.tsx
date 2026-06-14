import { Reveal } from "./ui/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <div className="space-y-6">
      {experience.map((e, i) => (
        <Reveal key={e.company + e.period} delay={i * 0.04}>
          <div className="rounded-xl border border-navy-line bg-navy-panel/30 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-ink">{e.role}</h3>
              <span className="text-sm text-ink-dim">{e.period}</span>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
              <span className="font-medium text-clay">{e.company}</span>
              <span className="text-ink-dim">{e.location}</span>
              {e.customer && (
                <span className="rounded-md bg-navy-deep/70 px-2 py-0.5 text-xs text-ink-muted ring-1 ring-navy-line">
                  {e.customer}
                </span>
              )}
            </div>
            <ul className="mt-4 space-y-2">
              {e.bullets.map((b, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay/70" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
