import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-20 sm:py-24 ${className}`}
    >
      {(eyebrow || title) && (
        <Reveal className="mb-10">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
