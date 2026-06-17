import SectionHeader from "./SectionHeader";
import { Stagger, Item } from "./Reveal";
import { IconArrowRight } from "./Icons";

type Proposal = {
  n: string;
  title: string;
  text: string;
};

const PROPOSALS: Proposal[] = [
  {
    n: "01",
    title: "Eventos culturais e interclasses",
    text: "Um calendário vivo de festivais, campeonatos e mostras que movimentam a escola o ano inteiro.",
  },
  {
    n: "02",
    title: "Canal de escuta dos alunos",
    text: "Um espaço aberto — anônimo quando preciso — pra sugerir, criticar e ser ouvido de verdade.",
  },
  {
    n: "03",
    title: "Campanhas de respeito e inclusão",
    text: "Ações contínuas contra o bullying e por uma escola que acolhe absolutamente todo mundo.",
  },
  {
    n: "04",
    title: "Comunicação entre alunos e direção",
    text: "Pautas levadas com clareza e retorno honesto. A ponte que sempre faltou, agora de pé.",
  },
  {
    n: "05",
    title: "Melhoria dos espaços da escola",
    text: "Do pátio à biblioteca: ambientes melhores pra estudar, descansar e conviver.",
  },
  {
    n: "06",
    title: "Ações solidárias e comunitárias",
    text: "Arrecadações, mutirões e parcerias que levam o impacto pra além dos muros.",
  },
];

export default function Proposals() {
  return (
    <section id="propostas" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionHeader
          index="03"
          eyebrow="Propostas"
          title={
            <>
              Do papel para o <span className="text-cyan">corredor</span>.
            </>
          }
          intro="Compromissos concretos, com começo, meio e gente responsável. Nada de promessa vazia."
        />

        <Stagger className="mt-14 border-t border-white/10" stagger={0.07}>
          {PROPOSALS.map((p) => (
            <Item key={p.n}>
              <a
                href="#participar"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.025] sm:gap-8 sm:py-8 cursor-pointer"
              >
                <span className="font-display text-2xl font-semibold text-muted transition-colors duration-300 group-hover:text-cyan sm:text-3xl">
                  {p.n}
                </span>

                <div className="transition-transform duration-300 group-hover:translate-x-1.5 sm:group-hover:translate-x-3">
                  <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition-colors duration-300 group-hover:border-cyan/50 group-hover:text-cyan">
                  <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-45deg]" />
                </span>
              </a>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
