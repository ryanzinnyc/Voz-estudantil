import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import { Stagger, Item } from "./Reveal";
import {
  IconMegaphone,
  IconSparkles,
  IconActivity,
  IconHeart,
  IconRadio,
  IconRocket,
} from "./Icons";

type Pillar = {
  icon: ReactNode;
  title: string;
  text: string;
};

const PILLARS: Pillar[] = [
  {
    icon: <IconMegaphone className="h-6 w-6" />,
    title: "Voz estudantil",
    text: "Cada aluno é ouvido. Suas ideias viram pauta, e suas pautas viram ação.",
  },
  {
    icon: <IconSparkles className="h-6 w-6" />,
    title: "Cultura e eventos",
    text: "Festivais, interclasses e momentos que aproximam todo mundo da escola.",
  },
  {
    icon: <IconActivity className="h-6 w-6" />,
    title: "Esporte e integração",
    text: "Mais quadra, mais torcida, mais gente jogando e vibrando junto.",
  },
  {
    icon: <IconHeart className="h-6 w-6" />,
    title: "Bem-estar na escola",
    text: "Um ambiente mais saudável, acolhedor e seguro pra estudar e conviver.",
  },
  {
    icon: <IconRadio className="h-6 w-6" />,
    title: "Comunicação transparente",
    text: "Informação clara entre alunos, grêmio e direção. Sem ruído, sem boato.",
  },
  {
    icon: <IconRocket className="h-6 w-6" />,
    title: "Projetos que saem do papel",
    text: "Ideia boa não pode ficar parada. A gente planeja, organiza e executa.",
  },
];

export default function Pillars() {
  return (
    <section id="pilares" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionHeader
          index="02"
          eyebrow="O que queremos transformar"
          title={
            <>
              Seis frentes para uma <span className="text-cyan">escola viva</span>.
            </>
          }
          intro="Não é sobre cargo nem sobre crachá. É sobre transformar o dia a dia de quem estuda aqui."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {PILLARS.map((p) => (
            <Item key={p.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-[border-color,background,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_-30px_rgba(24,195,245,0.5)]">
                {/* brilho de canto no hover */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-violet/30 to-cyan/10 text-cyan transition-colors duration-300 group-hover:border-cyan/40">
                  {p.icon}
                </div>

                <h3 className="font-display text-xl font-semibold text-cream">{p.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">{p.text}</p>
              </article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
