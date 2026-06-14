import { Github, ExternalLink, Clock } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { projects, type Project } from "@/lib/content";

function StatusBadge({ status }: { status: Project["status"] }) {
  const live = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        live
          ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30"
          : "bg-clay/10 text-clay ring-1 ring-clay/30"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          live ? "bg-emerald-400" : "bg-clay"
        }`}
      />
      {status}
    </span>
  );
}

export function Projects() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 0.08}>
          <article className="group flex h-full flex-col rounded-xl border border-navy-line bg-navy-panel/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-clay/50 hover:card-glow">
            <div className="mb-3">
              <StatusBadge status={p.status} />
            </div>
            <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
              {p.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-navy-deep/70 px-2 py-1 text-xs text-ink-muted ring-1 ring-navy-line"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-5 text-sm">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-clay"
                >
                  <Github size={15} /> Code
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-clay"
                >
                  <ExternalLink size={15} /> Live
                </a>
              )}
              {!p.repo && !p.demo && (
                <span className="inline-flex items-center gap-1.5 text-xs text-ink-dim">
                  <Clock size={13} /> Repo shipping soon
                </span>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
