import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { IconMenu, IconClose, IconArrowRight } from "./Icons";

const LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Pilares", href: "#pilares" },
  { label: "Propostas", href: "#propostas" },
  { label: "Equipe", href: "#equipe" },
  { label: "Momentos", href: "#momentos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-300 md:px-10 ${
          scrolled
            ? "my-2 rounded-2xl border border-white/10 bg-void/80 py-3 backdrop-blur-md md:my-3 md:bg-void/70 md:backdrop-blur-xl"
            : "py-5"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-3 rounded-lg"
          aria-label="Voz Estudantil — início"
        >
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Voz<span className="text-cyan">.</span>
            <span className="hidden sm:inline"> Estudantil</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-muted transition-colors duration-200 hover:text-cream"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#participar"
            className="group hidden items-center gap-2 rounded-full bg-cyan px-5 py-2.5 font-display text-sm font-semibold text-void transition-colors duration-300 hover:bg-cyan-bright sm:inline-flex cursor-pointer"
          >
            Quero participar
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-cream transition-colors hover:border-cyan/60 lg:hidden cursor-pointer"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-void/95 px-6 pt-28 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navegação mobile" className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, duration: 0.4 }}
                  className="border-b border-white/10 py-4 font-display text-3xl font-medium text-cream cursor-pointer"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#participar"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-display text-base font-semibold text-void cursor-pointer"
              >
                Quero participar
                <IconArrowRight className="h-5 w-5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
