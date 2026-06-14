import { BadgeCheck, GraduationCap } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { certifications } from "@/lib/content";

export function Certifications() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Reveal>
        <div className="h-full rounded-xl border border-navy-line bg-navy-panel/30 p-6">
          <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-clay">
            <BadgeCheck size={16} /> Certifications
          </h3>
          <ul className="space-y-2">
            {certifications.primary.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-dim">
            Selected coursework
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {certifications.coursework.map((c) => (
              <span
                key={c}
                className="rounded-md bg-navy-deep/60 px-2 py-1 text-xs text-ink-muted ring-1 ring-navy-line"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="h-full rounded-xl border border-navy-line bg-navy-panel/30 p-6">
          <h3 className="mb-1 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-clay">
            <GraduationCap size={16} /> Anthropic Academy
          </h3>
          <p className="mb-4 text-xs text-ink-dim">In progress · 2026</p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {certifications.academy.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay/60" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
