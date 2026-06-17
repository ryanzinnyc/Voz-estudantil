import SectionHeader from "./SectionHeader";
import { Stagger, Item } from "./Reveal";

type Member = {
  role: string;
  name: string; // placeholder editável
  blurb: string;
  mono: string;
};

// Edite `name` quando a chapa estiver definida.
const TEAM: Member[] = [
  { role: "Presidente", name: "A definir", blurb: "Lidera, articula e representa a voz de todos.", mono: "PR" },
  { role: "Vice-presidente", name: "A definir", blurb: "Apoia, organiza e garante que nada pare.", mono: "VP" },
  { role: "Comunicação", name: "A definir", blurb: "Conecta o grêmio com cada estudante.", mono: "CM" },
  { role: "Eventos", name: "A definir", blurb: "Transforma ideias em momentos memoráveis.", mono: "EV" },
  { role: "Esportes", name: "A definir", blurb: "Move a escola dentro e fora de quadra.", mono: "ES" },
  { role: "Projetos", name: "A definir", blurb: "Tira os planos do papel e entrega resultado.", mono: "PJ" },
];

function PersonGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 text-white/15" fill="currentColor" aria-hidden>
      <circle cx="32" cy="23" r="13" />
      <path d="M8 60c0-13.3 10.7-24 24-24s24 10.7 24 24" />
    </svg>
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
              As pessoas por trás da <span className="text-cyan">voz</span>.
            </>
          }
          intro="Uma equipe que representa a diversidade da escola. Os nomes entram aqui assim que a chapa for formada."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {TEAM.map((m) => (
            <Item key={m.role}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-[border-color,box-shadow] duration-300 hover:border-cyan/40 hover:shadow-[0_20px_60px_-30px_rgba(108,79,224,0.6)]">
                {/* retrato placeholder */}
                <div className="relative grid aspect-[4/5] place-items-center overflow-hidden bg-gradient-to-br from-violet-deep/60 via-night to-void">
                  <span
                    aria-hidden
                    className="absolute right-4 top-3 font-display text-7xl font-bold text-white/[0.04]"
                  >
                    {m.mono}
                  </span>
                  <div className="transition-transform duration-500 group-hover:scale-105">
                    <PersonGlyph />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-display text-xs font-medium uppercase tracking-wider text-cyan-bright">
                    {m.role}
                  </span>
                </div>

                {/* identificação */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-cream">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.blurb}</p>
                </div>
              </article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
