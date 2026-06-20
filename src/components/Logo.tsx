import { useId } from "react";

type LogoProps = {
  className?: string;
  /** Liga o halo + brilho pulsante atrás do emblema (uso no herói). */
  glow?: boolean;
  title?: string;
};

/** Estrela de 5 pontas (raio externo 10, interno 5), centrada na origem. */
const STAR =
  "M0,-10 L2.94,-4.05 L9.51,-3.09 L4.76,1.55 L5.88,8.09 L0,5 L-5.88,8.09 L-4.76,1.55 L-9.51,-3.09 L-2.94,-4.05 Z";

/**
 * Emblema da marca Voz Estudantil — E. E. Mathias Jacomel:
 * um globo (meridianos + paralelos) envolto por uma constelação,
 * com três estrelas-guia em ciano formando um triângulo.
 *
 * Vetor puro: nítido em qualquer tamanho, leve e animável.
 */
export default function Logo({ className, glow = false, title = "Voz Estudantil" }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const sphere = `sphere-${id}`;
  const starFill = `star-${id}`;
  const halo = `halo-${id}`;
  const grid = `grid-${id}`;
  const clip = `clip-${id}`;

  // As três estrelas-guia (formam o triângulo sobre o globo).
  const stars = [
    { x: 120, y: 92, s: 1.7 },
    { x: 84, y: 150, s: 1.45 },
    { x: 156, y: 150, s: 1.45 },
  ];

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <radialGradient id={sphere} cx="0.4" cy="0.32" r="0.82">
          <stop stopColor="#0e3a63" stopOpacity="0.7" />
          <stop offset="0.7" stopColor="#0a2747" stopOpacity="0.35" />
          <stop offset="1" stopColor="#050b18" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={starFill} cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#eafdff" />
          <stop offset="0.45" stopColor="#5be0ff" />
          <stop offset="1" stopColor="#18a8e0" />
        </radialGradient>
        <radialGradient id={halo}>
          <stop stopColor="#bff4ff" />
          <stop offset="0.35" stopColor="#5be0ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#18c3f5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={grid} x1="40" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5be0ff" />
          <stop offset="1" stopColor="#1f6fd0" />
        </linearGradient>
        <clipPath id={clip}>
          <circle cx="120" cy="120" r="78" />
        </clipPath>
      </defs>

      {/* Halo geral (somente no herói) */}
      {glow && (
        <circle cx="120" cy="118" r="86" fill={`url(#${halo})`} opacity="0.5">
          <animate attributeName="opacity" values="0.4;0.62;0.4" dur="6s" repeatCount="indefinite" />
        </circle>
      )}

      {/* Preenchimento sutil da esfera */}
      <circle cx="120" cy="120" r="78" fill={`url(#${sphere})`} />

      {/* Grade do globo — meridianos + paralelos (recortada no círculo) */}
      <g clipPath={`url(#${clip})`} stroke={`url(#${grid})`} strokeWidth="1.4" opacity="0.55">
        <line x1="120" y1="42" x2="120" y2="198" />
        <ellipse cx="120" cy="120" rx="26" ry="78" />
        <ellipse cx="120" cy="120" rx="52" ry="78" />
        <line x1="42" y1="120" x2="198" y2="120" />
        <ellipse cx="120" cy="120" rx="78" ry="26" />
        <ellipse cx="120" cy="120" rx="78" ry="52" />
      </g>

      {/* Contorno do globo */}
      <circle cx="120" cy="120" r="78" stroke={`url(#${grid})`} strokeWidth="2" opacity="0.9" />

      {/* Linhas do triângulo entre as estrelas-guia */}
      <path
        d="M120 92 L84 150 M120 92 L156 150 M84 150 L156 150"
        stroke="#5be0ff"
        strokeWidth="1.2"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* Constelação de apoio — pontos + traços tracejados */}
      <g fill="#bdeeff" opacity="0.85">
        <circle cx="60" cy="62" r="2" />
        <circle cx="84" cy="48" r="1.4" />
        <circle cx="104" cy="58" r="1.6" />
        <circle cx="180" cy="68" r="2" />
        <circle cx="198" cy="90" r="1.4" />
        <circle cx="56" cy="150" r="1.6" />
        <circle cx="120" cy="192" r="1.8" />
        <circle cx="152" cy="198" r="1.3" />
      </g>
      <path
        d="M60 62 L84 48 L104 58 M180 68 L198 90 M120 192 L152 198"
        stroke="#7fd6f5"
        strokeWidth="1"
        strokeDasharray="3 4"
        opacity="0.45"
        strokeLinecap="round"
      />

      {/* Três estrelas-guia */}
      {stars.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          {glow && (
            <circle r={11 * p.s} fill={`url(#${halo})`} opacity="0.7">
              <animate
                attributeName="opacity"
                values="0.45;0.85;0.45"
                dur={`${4 + i}s`}
                repeatCount="indefinite"
              />
            </circle>
          )}
          <g transform={`scale(${p.s})`}>
            <path
              d={STAR}
              fill={`url(#${starFill})`}
              stroke="#eafdff"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />
            <circle r="2.2" fill="#ffffff" />
          </g>
        </g>
      ))}

      {/* Brilho / sparkle */}
      <path
        d="M200 150 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4 Z"
        fill="#dffaff"
        opacity="0.85"
      />
    </svg>
  );
}
