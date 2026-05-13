import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useSiteContent } from "../../context/LanguageContext";

export function Footer() {
  const copy = useSiteContent();

  return (
    <footer className="border-t border-black/10 bg-white py-8">
      <div className="page-shell">
        <div className="grid gap-5 text-sm font-semibold text-neutral-600 md:grid-cols-[1.1fr_1fr_1fr] md:items-start">
          <div>
            <p className="text-xl font-black text-[#1c1b1b]">{copy.company.logoText}</p>
            <p className="mt-3 max-w-3xl leading-relaxed">{copy.footer.rights}</p>
          </div>
          <FooterLine icon={<MapPin size={17} />} value={copy.company.address} />
          <div className="grid gap-2">
            <FooterLine icon={<Phone size={17} />} value={copy.company.phone} />
            <FooterLine icon={<Mail size={17} />} value={copy.company.email} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLine({ icon, value }: { icon: ReactNode; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[#1c1b1b]">{icon}</span>
      <span>{value}</span>
    </div>
  );
}
