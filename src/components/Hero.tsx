import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Logo from "./Logo";
import Button from "./Button";
import { IconArrowRight, IconArrowDown } from "./Icons";
import { EASE } from "../lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: 40, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* ----- Texto ----- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY }}
          className="order-2 lg:order-1"
        >
          <motion.div variants={line} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="font-display text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Grêmio Estudantil · 2026
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(3.2rem,11vw,8.8rem)] font-semibold leading-[0.9]">
            <motion.span variants={line} className="block text-cream">
              Voz
            </motion.span>
            <motion.span variants={line} className="vz-shimmer-text block">
              Estudantil
            </motion.span>
          </h1>

          <motion.p
            variants={line}
            className="mt-7 max-w-md text-lg leading-relaxed text-muted sm:text-xl"
          >
            A voz dos estudantes.{" "}
            <span className="text-cream">A energia da mudança.</span>
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#manifesto" icon={<IconArrowRight className="h-4 w-4" />}>
              Conheça o Grêmio
            </Button>
            <Button href="#propostas" variant="ghost">
              Ver propostas
            </Button>
          </motion.div>

          <motion.div variants={line} className="mt-10 flex items-center gap-6 text-sm text-muted">
            <div>
              <span className="block font-display text-2xl font-semibold text-cream">1</span>
              escola
            </div>
            <span className="h-8 w-px bg-white/10" />
            <div>
              <span className="block font-display text-2xl font-semibold text-cream">∞</span>
              vozes
            </div>
            <span className="h-8 w-px bg-white/10" />
            <div className="max-w-[10rem] leading-tight">
              Feito por estudantes, para estudantes.
            </div>
          </motion.div>
        </motion.div>

        {/* ----- Visual (logo + orbita) ----- */}
        <motion.div
          style={{ y: visualY, opacity: fade }}
          className="order-1 flex justify-center lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            className="relative aspect-square w-[78vw] max-w-[460px] sm:w-[60vw] lg:w-full"
          >
            {/* halo */}
            <div className="absolute inset-[12%] rounded-full bg-violet/30 blur-[80px]" />
            <div className="absolute right-[10%] bottom-[18%] h-1/4 w-1/4 rounded-full bg-cyan/40 blur-[60px]" />

            {/* anel pontilhado girando */}
            {!reduce && (
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 48, ease: "linear", repeat: Infinity }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full text-white/15">
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="1 4"
                  />
                </svg>
              </motion.div>
            )}

            {/* moldura de vidro */}
            <div className="absolute inset-[6%] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent backdrop-blur-[2px]" />

            {/* o capelo */}
            <div className="vz-float absolute inset-0 grid place-items-center">
              <Logo glow className="h-[72%] w-[72%] drop-shadow-[0_24px_60px_rgba(24,195,245,0.25)]" />
            </div>

            {/* pontos orbitando */}
            <span className="vz-float absolute left-[6%] top-[24%] h-3 w-3 rounded-full bg-cyan shadow-[0_0_20px_4px_rgba(24,195,245,0.6)]" />
            <span className="vz-drift absolute right-[8%] top-[14%] h-2 w-2 rounded-full bg-violet-bright" />
            <span className="vz-float absolute bottom-[12%] left-[20%] h-2 w-2 rounded-full bg-cream/70" />
          </motion.div>
        </motion.div>
      </div>

      {/* indicador de scroll */}
      <motion.a
        href="#manifesto"
        aria-label="Rolar para o manifesto"
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-cyan md:flex cursor-pointer"
      >
        <span className="font-display text-[0.7rem] uppercase tracking-[0.3em]">Role</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <IconArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
