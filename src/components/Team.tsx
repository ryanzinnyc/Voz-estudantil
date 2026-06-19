import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import { Stagger, Item } from "./Reveal";
import {
  IconCrown,
  IconShield,
  IconClipboard,
  IconWallet,
  IconUsers,
  IconMegaphone,
  IconPalette,
  IconActivity,
  IconLeaf,
  IconGradCap,
} from "./Icons";

type Member = {
  mono: string; // sigla curta exibida como marca d'água
  role: string; // cargo oficial
  category: string; // agrupamento para hierarquia visual
  icon: ReactNode;
  blurb: string;
  featured?: boolean; // realce para a liderança (presidência)
};

// Edite quando a chapa estiver definida — basta trocar o status do card.
const TEAM: Member[] = [
  {
    mono: "PR",
    role: "Presidente",
    category: "Presidência",
    icon: <IconCrown className="h-6 w-6" />,
    blurb: "Lidera, articula e representa a voz de todos.",
    featured: true,
  },
  {
    mono: "VP",
    role: "Vice-Presidente",
    category: "Presidência",
    icon: <IconShield className="h-6 w-6" />,
    blurb: "Apoia a presidência, coordena ações e garante a continuidade dos trabalhos.",
    featured: true,
  },
  {
    mono: "1S",
    role: "1º Secretário",
    category: "Secretaria",
    icon: <IconClipboard className="h-6 w-6" />,
    blurb: "Responsável pela organização documental, atas e registros do grêmio.",
  },
  {
    mono: "2S",
    role: "2º Secretário",
    category: "Secretaria",
    icon: <IconClipboard className="h-6 w-6" />,
    blurb: "Auxilia a secretaria e garante a organização administrativa.",
  },
  {
    mono: "1T",
    role: "1º Tesoureiro",
    category: "Tesouraria",
    icon: <IconWallet className="h-6 w-6" />,
    blurb: "Gerencia recursos financeiros, orçamento e prestação de contas.",
  },
  {
    mono: "2T",
    role: "2º Tesoureiro",
    category: "Tesouraria",
    icon: <IconWallet className="h-6 w-6" />,
    blurb: "Auxilia no controle financeiro e na transparência dos recursos.",
  },
  {
    mono: "DS",
    role: "Diretor Social",
    category: "Diretoria",
    icon: <IconUsers className="h-6 w-6" />,
    blurb: "Promove integração, inclusão e bem-estar entre os estudantes.",
  },
  {
    mono: "CI",
    role: "Diretor de Comunicação e Imprensa",
    category: "Diretoria",
    icon: <IconMegaphone className="h-6 w-6" />,
    blurb: "Divulga ações, mantém canais de comunicação e fortalece a presença da chapa.",
  },
  {
    mono: "CD",
    role: "Diretor de Cultura e Diversidade",
    category: "Diretoria",
    icon: <IconPalette className="h-6 w-6" />,
    blurb: "Valoriza a cultura, a arte e a diversidade dentro da escola.",
  },
  {
    mono: "EL",
    role: "Diretor de Esporte e Lazer",
    category: "Diretoria",
    icon: <IconActivity className="h-6 w-6" />,
    blurb: "Incentiva atividades esportivas, recreativas e de lazer.",
  },
  {
    mono: "SM",
    role: "Diretor de Saúde e Meio Ambiente",
    category: "Diretoria",
    icon: <IconLeaf className="h-6 w-6" />,
    blurb: "Promove campanhas de saúde, sustentabilidade e conscientização ambiental.",
  },
  {
    mono: "RA",
    role: "Diretor de Relações Acadêmicas",
    category: "Diretoria",
    icon: <IconGradCap className="h-6 w-6" />,
    blurb: "Representa os interesses acadêmicos dos estudantes e dialoga com a comunidade escolar.",
  },
];

function PersonGlyph() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-24 w-24 text-white/15 transition-colors duration-500 group-hover:text-white/25"
      fill="currentColor"
      aria-hidden
    >
      <circle cx="32" cy="23" r="13" />
      <path d="M8 60c0-13.3 10.7-24 24-24s24 10.7 24 24" />
    </svg>
  );
}

function RoleCard({ member }: { member: Member }) {
  const { mono, role, category, icon, blurb, featured } = member;

  return (
    <article
      aria-label={`${role} — vaga a definir`}
      className={`vz-team-card group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/[0.03] backdrop-blur-md transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-brand ${
        featured
          ? "border-brand-bright/30 shadow-[0_18px_50px_-34px_rgba(0,157,207,0.55)]"
          : "border-white/10 hover:border-brand-bright/40"
      }`}
    >
      {/* anel de gradiente institucional no hover */}
      <span
        aria-hidden
        className="vz-card-ring pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* retrato placeholder — grande, formato 4/5 */}
      <div className="relative grid aspect-[4/5] place-items-center overflow-hidden">
        {/* base escura tingida pela marca */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/75 via-night to-void" />
        {/* lavagem do gradiente institucional */}
        <div
          aria-hidden
          className={`vz-brand-gradient absolute inset-0 transition-opacity duration-500 group-hover:opacity-40 ${
            featured ? "opacity-[0.28]" : "opacity-[0.16]"
          }`}
        />
        {/* brilho radial atrás da silhueta */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-bright/25 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* sigla como marca d'água */}
        <span
          aria-hidden
          className="absolute right-5 top-4 select-none font-display text-8xl font-bold tracking-tighter text-white/[0.05]"
        >
          {mono}
        </span>

        {/* ícone do cargo em selo de vidro */}
        <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-brand-bright shadow-lg shadow-brand-deep/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
          {icon}
        </span>

        {/* silhueta anônima (vaga a definir) */}
        <div className="relative transition-transform duration-500 group-hover:scale-105">
          <PersonGlyph />
        </div>

        {/* esmaecimento inferior + selo de categoria */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-void via-void/80 to-transparent" />
        <span
          className={`absolute bottom-4 left-4 rounded-full border px-3 py-1 font-display text-xs font-medium uppercase tracking-wider backdrop-blur-sm ${
            featured
              ? "border-brand-bright/50 bg-brand-bright/15 text-cyan-bright"
              : "border-brand-bright/30 bg-brand-bright/10 text-brand-bright"
          }`}
        >
          {category}
        </span>
      </div>

      {/* identificação */}
      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-cream">{role}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{blurb}</p>

        <div className="mt-auto flex items-center gap-2.5 pt-5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-bright" />
          </span>
          <span className="font-display text-xs font-medium uppercase tracking-wider text-muted/90">
            Vaga a definir
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section id="equipe" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionHeader
          index="04"
          eyebrow="A chapa"
          title={
            <>
              As pessoas por trás da <span className="vz-brand-text">voz</span>.
            </>
          }
          intro="Doze cargos, uma só missão: representar cada estudante. Os nomes entram aqui assim que a chapa for formada — a estrutura já está pronta para recebê-los."
        />

        <Stagger
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {TEAM.map((m) => (
            <Item key={m.mono} className="h-full">
              <RoleCard member={m} />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
