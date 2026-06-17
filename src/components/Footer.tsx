import Logo from "./Logo";
import { IconInstagram, IconMail } from "./Icons";

const LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Pilares", href: "#pilares" },
  { label: "Propostas", href: "#propostas" },
  { label: "Equipe", href: "#equipe" },
  { label: "Momentos", href: "#momentos" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink/60">
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-3" aria-label="Voz Estudantil — início">
              <Logo className="h-10 w-10" />
              <span className="font-display text-lg font-semibold tracking-tight">
                Voz<span className="text-cyan">.</span> Estudantil
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              O grêmio que escuta, organiza e transforma. A voz dos estudantes, a energia da mudança.
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Navegar
            </span>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Falar com o grêmio
            </span>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram do grêmio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-cyan/60 hover:text-cyan"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:gremio.voz@suaescola.com"
                aria-label="E-mail do grêmio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-cyan/60 hover:text-cyan"
              >
                <IconMail className="h-5 w-5" />
              </a>
            </div>
            <a
              href="mailto:gremio.voz@suaescola.com"
              className="mt-1 text-sm text-muted transition-colors hover:text-cyan"
            >
              gremio.voz@suaescola.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Voz Estudantil · Grêmio Estudantil.</p>
          <p>Feito por estudantes, para estudantes.</p>
        </div>
      </div>
    </footer>
  );
}
