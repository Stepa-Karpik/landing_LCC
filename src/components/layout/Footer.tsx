import { content } from "../../content/content";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-8">
      <div className="page-shell flex flex-col gap-4 text-sm font-semibold text-neutral-600 md:flex-row md:items-center md:justify-between">
        <p className="text-xl font-black text-[#1c1b1b]">{content.company.logoText}</p>
        <p>ИНН {content.company.inn}</p>
        <p>© 2026 {content.company.name}</p>
      </div>
    </footer>
  );
}
