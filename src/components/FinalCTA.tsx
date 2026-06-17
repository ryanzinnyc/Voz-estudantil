import { motion } from "framer-motion";
import Logo from "./Logo";
import Button from "./Button";
import { IconArrowRight, IconMail } from "./Icons";
import { EASE, inView } from "../lib/motion";

export default function FinalCTA() {
  return (
    <section id="participar" className="relative scroll-mt-24 overflow-hidden py-28 md:py-40">
      {/* aurora intensificada */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-violet/30 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[30vh] w-[80vh] -translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={inView}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto mb-10 w-28"
        >
          <Logo glow className="vz-float h-full w-full" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={inView}
          transition={{ duration: 0.85, ease: EASE }}
          className="font-display text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[0.98] text-cream"
        >
          Voz Estudantil é sobre{" "}
          <span className="vz-shimmer-text">fazer parte</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted sm:text-xl"
        >
          Quando os estudantes se unem, a escola muda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="#top" icon={<IconArrowRight className="h-4 w-4" />}>
            Quero participar
          </Button>
          <Button
            href="mailto:gremio.voz@suaescola.com"
            variant="ghost"
            icon={<IconMail className="h-4 w-4" />}
          >
            Falar com o Grêmio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
