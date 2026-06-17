import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE, inView } from "../lib/motion";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
};

export default function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={inView}
        transition={{ duration: 0.6, ease: EASE }}
        className="mb-6 flex items-center gap-3"
      >
        <span className="font-display text-sm font-semibold text-cyan">{index}</span>
        <span className="h-px w-10 bg-cyan/50" />
        <span className="font-display text-sm font-medium uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={inView}
        transition={{ duration: 0.75, ease: EASE }}
        className="font-display text-[clamp(2.1rem,5.5vw,4rem)] font-semibold leading-[1.02] text-cream"
      >
        {title}
      </motion.h2>

      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mt-6 text-lg leading-relaxed text-muted"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
