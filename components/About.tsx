import { Reveal } from "./ui/Reveal";
import { about } from "@/lib/content";

export function About() {
  return (
    <div className="max-w-3xl space-y-5">
      {about.paragraphs.map((p, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <p className="text-lg leading-relaxed text-ink-muted">{p}</p>
        </Reveal>
      ))}
    </div>
  );
}
