const WORDS = [
  "voz",
  "união",
  "ação",
  "representatividade",
  "juventude",
  "mudança",
  "pertencimento",
];

function Row() {
  return (
    <div className="vz-marquee-track flex shrink-0 items-center gap-8 px-4">
      {WORDS.map((word) => (
        <span key={word} className="flex items-center gap-8">
          <span className="font-display text-2xl font-medium tracking-tight text-cream/70 sm:text-3xl">
            {word}
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden
            className="text-cyan"
          >
            <path
              d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

/** Marquee discreto e infinito com as palavras-chave do movimento. */
export default function Marquee() {
  return (
    <div
      aria-hidden
      className="relative flex w-full overflow-hidden border-y border-white/10 bg-ink/60 py-5 backdrop-blur-sm select-none"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent"
      />
      <div className="flex">
        <Row />
        <Row />
      </div>
    </div>
  );
}
