import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-tight cursor-pointer transition-[background,color,box-shadow,border-color] duration-300 ease-out focus-visible:outline-none";

const variants = {
  primary:
    "bg-cyan text-void shadow-[0_10px_40px_-10px_rgba(24,195,245,0.6)] hover:bg-cyan-bright hover:shadow-[0_14px_50px_-8px_rgba(91,224,255,0.75)]",
  ghost:
    "border border-white/15 bg-white/[0.03] text-cream backdrop-blur-sm hover:border-cyan/60 hover:bg-white/[0.06] hover:text-cyan-bright",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  ariaLabel,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.a>
  );
}
