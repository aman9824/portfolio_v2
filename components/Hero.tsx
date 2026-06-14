"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { hero, profile } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// renders *highlighted* segments with a gradient
function Headline({ text }: { text: string }) {
  const parts = text.split("*");
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-gradient">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[94vh] items-center overflow-hidden px-5 pt-16"
    >
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -left-32 top-10 h-96 w-96 animate-float rounded-full bg-clay/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] animate-pulse-slow rounded-full bg-sky/20 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-float rounded-full bg-amber/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-line bg-navy-panel/60 px-3.5 py-1.5 text-xs font-medium text-ink-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available · {profile.availability}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-clay"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl"
        >
          <Headline text={hero.headline} />
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted"
        >
          {hero.sub}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-clay px-5 py-3 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
          >
            See my work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resumeHref}
            className="inline-flex items-center gap-2 rounded-lg border border-navy-line bg-navy-panel/50 px-5 py-3 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-clay/50"
          >
            <FileText size={16} /> Resume
          </a>
          <div className="flex items-center gap-1.5">
            <IconLink href={profile.github} label="GitHub">
              <Github size={18} />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </IconLink>
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <Mail size={18} />
            </IconLink>
          </div>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-12 grid max-w-3xl grid-cols-1 gap-2 sm:grid-cols-2"
        >
          {hero.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-ink-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
              {h}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-dim transition-colors hover:text-clay"
      >
        <ChevronDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-lg border border-navy-line bg-navy-panel/50 text-ink-muted backdrop-blur transition-colors hover:border-clay/50 hover:text-ink"
    >
      {children}
    </a>
  );
}
