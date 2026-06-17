import SectionHeader from "./SectionHeader";
import { Stagger, Item } from "./Reveal";
import Logo from "./Logo";

const tileBase =
  "group relative overflow-hidden rounded-2xl border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-cyan/40";

function Caption({ children }: { children: string }) {
  return (
    <span className="absolute bottom-4 left-4 z-10 flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.18em] text-cream/80">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
      {children}
    </span>
  );
}

export default function Gallery() {
  return (
    <section id="momentos" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionHeader
          index="06"
          eyebrow="Momentos"
          title={
            <>
              O álbum que vamos <span className="text-cyan">escrever juntos</span>.
            </>
          }
          intro="Por enquanto, a marca. Em breve, cada evento, cada conquista e cada rosto desta escola."
        />

        <Stagger
          className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4"
          stagger={0.08}
        >
          {/* Feature — logo em destaque */}
          <Item className="col-span-2 row-span-2">
            <div className={`${tileBase} grid h-full place-items-center bg-gradient-to-br from-violet-deep/50 via-night to-void`}>
              <div className="absolute inset-[18%] rounded-full bg-violet/25 blur-[70px]" />
              <Logo glow className="vz-float h-[64%] w-[64%]" />
              <Caption>A identidade do movimento</Caption>
            </div>
          </Item>

          {/* Crop — topo do capelo */}
          <Item className="col-span-1 row-span-1">
            <div className={`${tileBase} h-full bg-night`}>
              <Logo className="absolute -left-[30%] -top-[35%] h-[200%] w-[200%] opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
              <Caption>detalhe</Caption>
            </div>
          </Item>

          {/* Em breve */}
          <Item className="col-span-1 row-span-1">
            <div className={`${tileBase} grid h-full place-items-center bg-gradient-to-br from-violet/25 to-night`}>
              <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-cream/60">
                Em breve
              </span>
            </div>
          </Item>

          {/* Quote wide */}
          <Item className="col-span-2 row-span-1">
            <div className={`${tileBase} flex h-full items-center bg-gradient-to-r from-night to-void px-7`}>
              <p className="font-display text-2xl font-semibold leading-tight text-cream sm:text-3xl">
                1 escola,{" "}
                <span className="vz-shimmer-text">muitas vozes</span>.
              </p>
            </div>
          </Item>

          {/* Crop — pernas/circuito */}
          <Item className="col-span-1 row-span-1">
            <div className={`${tileBase} h-full bg-night`}>
              <Logo className="absolute -bottom-[42%] left-[8%] h-[185%] w-[185%] opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
              <Caption>detalhe</Caption>
            </div>
          </Item>

          {/* Slot de upload */}
          <Item className="col-span-1 row-span-1">
            <div className={`${tileBase} grid h-full place-items-center border-dashed bg-white/[0.02]`}>
              <div className="flex flex-col items-center gap-2 text-muted">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span className="text-xs">Adicione fotos</span>
              </div>
            </div>
          </Item>

          {/* Convite wide */}
          <Item className="col-span-2 row-span-1">
            <div className={`${tileBase} flex h-full items-center bg-gradient-to-r from-violet-deep/40 to-night px-7`}>
              <p className="text-base leading-snug text-muted sm:text-lg">
                Os melhores momentos ainda estão{" "}
                <span className="text-cream">por vir</span>.
              </p>
            </div>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
