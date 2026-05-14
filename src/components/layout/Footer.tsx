import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";

export function Footer() {
  const copy = useSiteContent();
  const [copied, setCopied] = useState<"phone" | "email" | null>(null);

  const openMap = () => {
    const [lat, lon] = copy.company.coordinates;
    window.open(`https://yandex.ru/maps/?ll=${lon}%2C${lat}&z=16&pt=${lon},${lat},pm2rdm`, "_blank", "noopener,noreferrer");
  };

  const copyValue = (key: "phone" | "email", value: string) => {
    void navigator.clipboard?.writeText(value);
    setCopied(key);
    window.setTimeout(() => setCopied((current) => (current === key ? null : current)), 1000);
  };

  return (
    <footer className="border-t border-black/10 bg-white py-4">
      <div className="page-shell">
        <div className="grid gap-4 text-sm font-semibold text-neutral-600 md:grid-cols-[1.15fr_1fr_0.85fr] md:items-start lg:grid-cols-[1.25fr_1fr_0.85fr]">
          <div>
            <p className="text-xl font-black text-[#1c1b1b]">{copy.company.logoText}</p>
            <p className="mt-2 max-w-3xl text-xs leading-relaxed">{copy.footer.rights}</p>
          </div>
          <FooterLine icon={<MapPin size={17} />} value={copy.company.address} onClick={openMap} />
          <div className="grid gap-2">
            <FooterLine
              icon={<Phone size={17} />}
              value={copy.company.phone}
              copied={copied === "phone"}
              onClick={() => copyValue("phone", copy.company.phone)}
            />
            <FooterLine
              icon={<Mail size={17} />}
              value={copy.company.email}
              copied={copied === "email"}
              onClick={() => copyValue("email", copy.company.email)}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLine({
  icon,
  value,
  copied = false,
  onClick,
}: {
  icon: ReactNode;
  value: string;
  copied?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-11 min-w-0 items-start gap-3 text-left transition hover:text-[#1c1b1b]"
    >
      <span className="mt-0.5 text-[#1c1b1b]">{icon}</span>
      <span className="relative block min-h-5 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "copied" : value}
            initial={{ y: copied ? -18 : 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: copied ? 18 : -18, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {copied ? "Скопировано" : value}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
