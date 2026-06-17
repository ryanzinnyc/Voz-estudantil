import { useId } from "react";

type LogoProps = {
  className?: string;
  /** Pulsing ring + soft glow behind the cap. */
  glow?: boolean;
  title?: string;
};

/**
 * Vetor recriado a partir do icone da marca: um capelo de formatura
 * que se transforma em criatura tecnologica — pernas/circuitos descendo
 * e o pingente ciano (a "energia") saindo para o lado.
 *
 * Tudo em SVG: nitido em qualquer tamanho, leve e animavel.
 */
export default function Logo({ className, glow = false, title = "Voz Estudantil" }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const board = `board-${id}`;
  const base = `base-${id}`;
  const sphere = `sphere-${id}`;
  const tassel = `tassel-${id}`;
  const leg = `leg-${id}`;

  return (
    <svg
      viewBox="0 0 240 248"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={board} x1="40" y1="40" x2="200" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#d9d2ff" />
        </linearGradient>
        <linearGradient id={base} x1="90" y1="120" x2="150" y2="178" gradientUnits="userSpaceOnUse">
          <stop stopColor="#efeaff" />
          <stop offset="1" stopColor="#c3b8f0" />
        </linearGradient>
        <radialGradient id={sphere} cx="0.34" cy="0.3" r="0.85">
          <stop stopColor="#dffaff" />
          <stop offset="0.4" stopColor="#5be0ff" />
          <stop offset="1" stopColor="#0fa3da" />
        </radialGradient>
        <linearGradient id={tassel} x1="138" y1="70" x2="200" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5be0ff" />
          <stop offset="1" stopColor="#18c3f5" />
        </linearGradient>
        <linearGradient id={leg} x1="120" y1="150" x2="120" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#cabff2" />
        </linearGradient>
      </defs>

      {glow && (
        <>
          <circle cx="118" cy="92" r="78" fill="#6c4fe0" opacity="0.28">
            <animate
              attributeName="r"
              values="74;84;74"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="196" cy="156" r="22" fill="#18c3f5" opacity="0.4" />
        </>
      )}

      {/* Pernas / circuitos */}
      <g stroke={`url(#${leg})`} strokeWidth="7" strokeLinecap="round">
        <path d="M104 150 C 86 178, 70 196, 64 220" />
        <path d="M116 156 C 112 184, 108 206, 106 226" />
        <path d="M132 156 C 138 184, 150 200, 168 214" />
        <path d="M138 150 C 158 172, 176 184, 192 196" />
      </g>
      {/* Nos das pernas */}
      <g>
        <circle cx="62" cy="224" r="9" fill="#0b0618" stroke="#ffffff" strokeWidth="4" />
        <circle cx="62" cy="224" r="3.4" fill="#18c3f5" />
        <circle cx="106" cy="230" r="9" fill="#0b0618" stroke="#ffffff" strokeWidth="4" />
        <circle cx="106" cy="230" r="3.4" fill="#18c3f5" />
        <circle cx="172" cy="218" r="9" fill="#0b0618" stroke="#ffffff" strokeWidth="4" />
        <circle cx="172" cy="218" r="3.4" fill="#18c3f5" />
        <circle cx="196" cy="200" r="5.5" fill="#ffffff" />
      </g>

      {/* Base do capelo */}
      <path
        d="M90 122 L150 122 Q156 122 154 132 L146 168 Q144 176 134 176 L106 176 Q96 176 94 168 L86 132 Q84 122 90 122 Z"
        fill={`url(#${base})`}
      />

      {/* Tabuleiro (losango) */}
      <path
        d="M120 34 L214 96 L120 138 L26 96 Z"
        fill={`url(#${board})`}
      />
      <path d="M120 34 L214 96 L120 138 L26 96 Z" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />

      {/* Pingente / cordao ciano (a energia) */}
      <path
        d={`M132 74 C 168 78, 196 96, 196 134`}
        stroke={`url(#${tassel})`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="196" cy="150" r="15" fill={`url(#${sphere})`} />

      {/* Esfera superior (botao do capelo) */}
      <circle cx="116" cy="80" r="26" fill={`url(#${sphere})`} />
      <circle cx="108" cy="72" r="8" fill="#ffffff" opacity="0.85" />

      {/* Brilho / sparkle */}
      <path
        d="M182 62 l3.2 8.4 8.4 3.2 -8.4 3.2 -3.2 8.4 -3.2 -8.4 -8.4 -3.2 8.4 -3.2 Z"
        fill="#ffffff"
        opacity="0.9"
      />
    </svg>
  );
}
