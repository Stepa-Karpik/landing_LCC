type SectionIntroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  inverted?: boolean;
};

export function SectionIntro({ eyebrow, title, lead, inverted = false }: SectionIntroProps) {
  return (
    <div className="mb-8 grid gap-7 md:mb-10 md:grid-cols-[minmax(0,0.86fr)_minmax(280px,0.42fr)] md:items-end">
      <div>
        <p className={inverted ? "eyebrow text-neutral-400" : "eyebrow"}>/{eyebrow}</p>
        <h2 className="section-title mt-4">{title}</h2>
      </div>
      {lead ? (
        <p className={inverted ? "text-lg leading-relaxed text-neutral-300" : "text-lg leading-relaxed text-neutral-700"}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
