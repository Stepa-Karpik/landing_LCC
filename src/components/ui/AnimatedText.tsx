import { motion, type Variants } from "framer-motion";

type AnimatedTextProps = {
  lines: string[];
  className?: string;
  ariaLabel?: string;
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.06,
    },
  },
};

const word: Variants = {
  hidden: { y: "112%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.72, ease },
  },
};

export function AnimatedText({ lines, className, ariaLabel }: AnimatedTextProps) {
  return (
    <motion.span
      aria-label={ariaLabel}
      className={className}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden pb-[0.04em]">
          {line.split(" ").map((part, index) => (
            <motion.span key={`${line}-${part}-${index}`} className="inline-block" variants={word}>
              {part}
              {index < line.split(" ").length - 1 ? "\u00a0" : ""}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
