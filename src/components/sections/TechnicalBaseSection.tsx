import { useSiteContent } from "../../context/LanguageContext";
import { ScrollModelSection } from "../ui/ScrollModelSection";

export function TechnicalBaseSection() {
  const copy = useSiteContent();

  return (
    <ScrollModelSection
      title={copy.technology.title}
      modelLabel={copy.technology.modelLabel}
      items={copy.technology.cards}
      titleAs="h1"
    />
  );
}
