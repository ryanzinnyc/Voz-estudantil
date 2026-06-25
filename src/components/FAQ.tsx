import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Stagger, Item } from "./Reveal";
import { EASE } from "../lib/motion";

const IG_URL = "https://www.instagram.com/voz_estudantil.mj/";

function IgLink() {
  return (
    <a
      href={IG_URL}
      target="_blank"
      rel="noreferrer noopener"
      className="text-cyan underline-offset-2 transition-colors hover:text-cyan-bright hover:underline"
    >
      @voz_estudantil.mj
    </a>
  );
}

type QA = { q: string; a: ReactNode };

const FAQS: QA[] = [
  {
    q: "O que é a Voz Estudantil?",
    a: (
      <>
        É o grêmio estudantil da escola — um grupo de estudantes eleito para
        representar a voz de todos os alunos, levar ideias à direção e ajudar a
        transformar o dia a dia da escola.
      </>
    ),
  },
  {
    q: "O que o grêmio faz?",
    a: (
      <>
        Organiza eventos, leva as pautas dos alunos à direção, promove campanhas
        de respeito e inclusão e trabalha por melhorias nos espaços e na
        convivência. Dá pra ver as frentes em “Pilares” e os planos em
        “Propostas”.
      </>
    ),
  },
  {
    q: "Quem faz parte da chapa?",
    a: (
      <>
        São 12 estudantes, cada um responsável por um cargo. Você conhece todo
        mundo — nome, cargo e turma — na seção “A chapa” aqui do site.
      </>
    ),
  },
  {
    q: "Posso mandar uma ideia ou sugestão?",
    a: (
      <>
        Com certeza! Mesmo com a chapa já formada, a Voz Estudantil é de todos.
        Manda uma mensagem pra gente no Instagram <IgLink /> — a gente lê e leva
        as boas ideias adiante.
      </>
    ),
  },
  {
    q: "Qualquer aluno pode falar com o grêmio?",
    a: (
      <>
        Sim. Somos estudantes como você. Pode chamar a gente no corredor ou no
        Instagram pra tirar dúvidas, dar sugestões ou pedir ajuda.
      </>
    ),
  },
  {
    q: "Como acompanho as novidades?",
    a: (
      <>
        Pelo nosso Instagram <IgLink />, onde postamos eventos, conquistas e
        avisos do grêmio.
      </>
    ),
  },
];

function FaqItem({ q, a }: QA) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-cyan/30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-cream">{q}</span>
        <span
          aria-hidden
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-cyan transition-transform duration-300 ${
            open ? "rotate-45 border-cyan/50" : ""
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[0.975rem] leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="duvidas" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionHeader
          index="07"
          eyebrow="Dúvidas"
          title={
            <>
              Perguntas <span className="text-cyan">frequentes</span>.
            </>
          }
          intro="O básico sobre o grêmio e como falar com a gente."
        />

        <Stagger className="mx-auto mt-14 flex max-w-3xl flex-col gap-3" stagger={0.06}>
          {FAQS.map((item) => (
            <Item key={item.q}>
              <FaqItem {...item} />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
