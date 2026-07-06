import type { ReactNode, ElementType } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
}: RevealProps) {
  const { ref, visible } = useReveal();
  const Tag = as as any;
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
