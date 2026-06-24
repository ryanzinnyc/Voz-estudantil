import { motion } from "framer-motion";
import { EASE, inView } from "../lib/motion";
import { Reveal } from "./Reveal";

export default function Chapa() {
  return (
    <section id="chapa" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ----- Foto da chapa ----- */}
          <Reveal className="order-1">
            <div className="relative">
              {/* halos da marca */}
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-violet/20 blur-[70px]" />
              <div className="absolute -bottom-8 right-6 -z-10 h-1/3 w-1/3 rounded-full bg-cyan/30 blur-[60px]" />

              <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/10 bg-night shadow-[0_30px_80px_-20px_rgba(24,195,245,0.25)]">
                <img
                  src="/chapa.jpg"
                  alt="A chapa Voz Estudantil — estudantes do grêmio"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/75 via-void/10 to-transparent" />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.18em] text-cream/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  A chapa · 2026
                </span>
              </div>
            </div>
          </Reveal>

          {/* ----- Texto ----- */}
          <div className="order-2">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={inView}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              <span className="font-display text-sm font-medium uppercase tracking-[0.25em] text-muted">
                A Chapa
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={inView}
              transition={{ duration: 0.75, ease: EASE }}
              className="font-display text-[clamp(2.1rem,5.5vw,4rem)] font-semibold leading-[1.04] text-cream"
            >
              Conheça quem dá vida à{" "}
              <span className="vz-shimmer-text">Voz Estudantil</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Um time de estudantes de verdade, de turmas diferentes, unidos por
              uma ideia só:{" "}
              <span className="text-cream">
                dar voz a quem vive a escola todos os dias
              </span>
              .
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
