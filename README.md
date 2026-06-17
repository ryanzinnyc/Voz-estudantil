# Voz Estudantil — Landing Page

Landing page premium do **Grêmio Estudantil Voz Estudantil**.
Visual editorial e tecnológico, com a identidade extraída do ícone da marca
(violeta profundo + ciano elétrico). Construída com **Vite + React + TypeScript +
Tailwind CSS v4 + Framer Motion**.

> _A voz dos estudantes. A energia da mudança._

---

## Como rodar

```bash
npm install
npm run dev        # ambiente de desenvolvimento (http://localhost:5173)
npm run build      # gera a versão de produção em /dist
npm run preview    # serve a versão de produção localmente
npm run typecheck  # checagem de tipos
```

Requisitos: Node 18+ (testado em Node 24).

---

## Estrutura

```
src/
  App.tsx                 # monta a página inteira
  index.css               # tokens de design (cores, fontes), animações, base
  lib/motion.ts           # presets de animação (Framer Motion)
  components/
    Logo.tsx              # o capelo/robô recriado em SVG (escala perfeita)
    Background.tsx        # auroras + grade de fundo
    Spotlight.tsx         # brilho que segue o cursor (desktop)
    Nav.tsx               # cabeçalho + menu mobile
    Hero.tsx              # primeira dobra
    Marquee.tsx           # faixa de palavras-chave
    Manifesto.tsx         # manifesto editorial
    Pillars.tsx           # "O que queremos transformar"
    Proposals.tsx         # propostas (índice editorial)
    Team.tsx              # a chapa (placeholders editáveis)
    Stats.tsx             # indicadores com contagem animada
    Gallery.tsx           # "Momentos" (bento + slots p/ fotos)
    FinalCTA.tsx          # chamada final
    Footer.tsx            # rodapé
    SectionHeader.tsx     # cabeçalho reutilizável de seção
    Reveal.tsx            # utilitários de revelação no scroll
    CountUp.tsx           # contador animado
    Icons.tsx             # ícones SVG (sem emojis)
```

---

## O que é fácil de editar

| Quero mudar...                | Onde                                                        |
|-------------------------------|-------------------------------------------------------------|
| Nomes da chapa                | `src/components/Team.tsx` → array `TEAM` (campo `name`)     |
| Números dos indicadores       | `src/components/Stats.tsx` → array `STATS`                  |
| Propostas                     | `src/components/Proposals.tsx` → array `PROPOSALS`          |
| Pilares                       | `src/components/Pillars.tsx` → array `PILLARS`              |
| Palavras do marquee           | `src/components/Marquee.tsx` → array `WORDS`                |
| E-mail / Instagram            | `src/components/Footer.tsx` e `FinalCTA.tsx`                |
| Cores da marca                | `src/index.css` → bloco `@theme` (`--color-*`)             |

### Trocar o logo pela arte real (opcional)

O logo atual é um SVG vetorial recriado a partir do ícone, em `src/components/Logo.tsx`.
Se quiser usar o PNG original:

1. Coloque o arquivo em `public/logo.png`.
2. Substitua `<Logo .../>` por `<img src="/logo.png" alt="Voz Estudantil" .../>`
   nos componentes desejados (Hero, Nav, Footer).

### Adicionar fotos reais na galeria

Em `src/components/Gallery.tsx`, troque os tiles de detalhe/`Em breve` por
`<img src="/fotos/seu-arquivo.jpg" alt="..." className="h-full w-full object-cover" />`.

---

## Acessibilidade & performance

- HTML semântico, navegação por teclado, foco visível, _skip link_.
- Contraste alto (texto claro sobre fundo violeta profundo).
- Respeita `prefers-reduced-motion` (animações são desligadas).
- Sem bibliotecas pesadas além de React + Framer Motion.
- Imagens da identidade são SVG (nítidas e leves).
