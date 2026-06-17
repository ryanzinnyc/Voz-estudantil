import { motion } from "framer-motion";
import { EASE, inView } from "../lib/motion";

type Token = { t: string; accent?: "cyan" | "cream" };

// Manifesto quebrado em palavras para revelar com fluidez no scroll.
const TOKENS: Token[] = [
  { t: "A Voz Estudantil nasceu para" },
  { t: "representar", accent: "cyan" },
  { t: "ideias," },
  { t: "escutar", accent: "cyan" },
  { t: "estudantes e" },
  { t: "transformar", accent: "cyan" },
  { t: "a escola em um espaço mais" },
  { t: "participativo, criativo", accent: "cream" },
  { t: "e" },
  { t: "conectado", accent: "cream" },
  { t: "com quem vive ela todos os dias." },
];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const word = {
  hidden: { opacity: 0.12, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE } },
};

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[14rem_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex h-fit items-center gap-3 lg:sticky lg:top-32"
          >
            <span className="font-display text-sm font-semibold text-cyan">01</span>
            <span className="h-px w-10 bg-cyan/50" />
            <span className="font-display text-sm font-medium uppercase tracking-[0.25em] text-muted">
              Manifesto
            </span>
          </motion.div>

          <div>
            <motion.p
              variants={wordContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20% 0px" }}
              className="flex flex-wrap gap-x-[0.28em] gap-y-1 font-display text-[clamp(1.7rem,4.4vw,3.5rem)] font-medium leading-[1.12] tracking-tight"
            >
              {TOKENS.map((tk, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className={
                    tk.accent === "cyan"
                      ? "text-cyan"
                      : tk.accent === "cream"
                      ? "text-cream"
                      : "text-muted"
                  }
                >
                  {tk.t}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={inView}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-white/20" />
              <span className="font-display text-sm uppercase tracking-[0.2em] text-muted">
                Gremio Voz Estudantil
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
