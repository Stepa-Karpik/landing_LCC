import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";

type LiquidModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
};

export function LiquidModal({ open, title, onClose, children, wide = false }: LiquidModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-white/34 p-4 backdrop-blur-[26px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 34, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.985 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
            className={`relative max-h-[90svh] w-full overflow-y-auto rounded-[28px] bg-white shadow-[0_40px_140px_rgba(28,27,27,0.2)] ${
              wide ? "max-w-6xl" : "max-w-4xl"
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/82 text-[#1c1b1b] backdrop-blur-xl transition hover:bg-[#1c1b1b] hover:text-white"
              aria-label="Закрыть"
            >
              <X size={19} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
