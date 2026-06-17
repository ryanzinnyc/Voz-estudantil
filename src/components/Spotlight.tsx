import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from "framer-motion";

/**
 * Brilho ciano sutil que segue o cursor. Desativado em toque e
 * quando o usuario pede menos movimento.
 */
export default function Spotlight() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  const background = useMotionTemplate`radial-gradient(560px circle at ${x}px ${y}px, rgba(24,195,245,0.09), rgba(108,79,224,0.05) 38%, transparent 70%)`;

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{ background }}
    />
  );
}
