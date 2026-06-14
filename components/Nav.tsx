"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-navy-line/60 bg-navy-deep/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5">
        <a
          href="#top"
          className="flex items-center gap-2 font-bold tracking-tight text-ink"
          aria-label="Home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-clay/15 text-clay ring-1 ring-clay/30">
            AP
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            className="inline-flex items-center gap-1.5 rounded-md bg-clay px-3.5 py-2 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
          >
            <FileText size={15} /> Resume
          </a>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-line/60 bg-navy-deep/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-muted hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resumeHref}
              className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-md bg-clay px-3.5 py-2 text-sm font-semibold text-navy-deep"
            >
              <FileText size={15} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
