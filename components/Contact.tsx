import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-navy-line bg-gradient-to-br from-navy-panel/70 to-navy-deep/70 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Let&apos;s build something in production.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-muted">
          I&apos;m exploring Forward Deployed &amp; Applied AI roles. {profile.availability}.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-clay px-5 py-3 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-line bg-navy-panel/50 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-clay/50"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-line bg-navy-panel/50 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-clay/50"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.portfolio}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-line bg-navy-panel/50 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-clay/50"
          >
            <Globe size={16} /> Portfolio
          </a>
        </div>
      </div>
    </Reveal>
  );
}
