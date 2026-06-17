import SectionHeader from "./SectionHeader";
import CountUp from "./CountUp";
import { motion } from "framer-motion";
import { EASE, inView } from "../lib/motion";

type Stat = {
  prefix?: string;
  value: number;
  label: string;
};

// Placeholders fáceis de editar — troque os valores quando tiver os reais.
const STATS: Stat[] = [
  { prefix: "+", value: 120, label: "ideias ouvidas" },
  { prefix: "+", value: 850, label: "estudantes representados" },
  { prefix: "+", value: 12, label: "projetos em construção" },
  { value: 1, label: "escola, muitas vozes" },
];

export default function Stats() {
  return (
    <section className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionHeader
          index="05"
          eyebrow="Impacto em movimento"
          title={
            <>
              O começo de algo que <span className="text-cyan">só cresce</span>.
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="relative bg-gradient-to-b from-night/60 to-void/40 p-7 sm:p-9"
            >
              <div className="font-display text-[clamp(2.6rem,7vw,4.2rem)] font-semibold leading-none tracking-tight text-cream">
                {s.prefix && <span className="text-cyan">{s.prefix}</span>}
                <CountUp to={s.value} />
              </div>
              <p className="mt-3 text-sm leading-snug text-muted sm:text-base">{s.label}</p>
              <span className="absolute right-6 top-7 h-1.5 w-1.5 rounded-full bg-cyan/60" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
