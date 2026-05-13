import { content } from "../content/content";

export type ImageItem = {
  src: string;
  title: string;
  caption: string;
};

export const company = content.company;
export const services = content.services.cards.map((card, index) => ({
  kicker: String(index + 1).padStart(2, "0"),
  title: card.title,
  description: card.text,
  points: [card.text],
}));
export const technicalFacts = [
  { value: "2017", label: "год основания" },
  { value: "1,7 Га", label: "собственная территория" },
  { value: "2000 TEU", label: "вместимость депо" },
  { value: "900 м²", label: "ремонтный цех" },
  { value: "400 м²", label: "вспомогательные помещения" },
  { value: "8000", label: "контейнеров ремонта в год" },
];
export const repairPairs = content.repair.cases;
