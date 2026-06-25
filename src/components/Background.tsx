/** Camada de fundo fixa: grade tenue + auroras azul/ciano com leve deriva. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grade tecnologica com fade radial */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(110,150,210,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(110,150,210,0.6) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 0%, transparent 75%)",
        }}
      />

      {/* Aurora azul — topo */}
      <div className="vz-aurora vz-drift absolute -top-48 left-1/2 h-[68vh] w-[68vh] -translate-x-1/2 rounded-full bg-violet/25 blur-[64px] md:blur-[130px]" />
      {/* Acento ciano — direita */}
      <div className="vz-aurora vz-float absolute top-[28%] right-[-12%] h-[46vh] w-[46vh] rounded-full bg-cyan/15 blur-[64px] md:blur-[130px]" />
      {/* Brilho profundo — base esquerda */}
      <div className="vz-aurora vz-drift absolute bottom-[-20%] left-[-10%] h-[52vh] w-[52vh] rounded-full bg-violet-deep/40 blur-[64px] md:blur-[140px]" />

      {/* Vinheta suave nas bordas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, transparent 55%, rgba(11,6,24,0.6) 100%)",
        }}
      />
    </div>
  );
}
