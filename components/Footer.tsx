import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-navy-line/60 px-5 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 text-sm text-ink-dim sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js · Tailwind · Framer Motion</span>
      </div>
    </footer>
  );
}
