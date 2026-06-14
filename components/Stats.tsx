"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-navy-line/60 bg-navy-deep/40">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-navy-line/50 px-6 py-8 text-center [&:not(:nth-child(2n))]:border-r md:[&:not(:last-child)]:border-r"
          >
            <div className="text-gradient text-3xl font-bold sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1.5 text-sm leading-snug text-ink-muted">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
