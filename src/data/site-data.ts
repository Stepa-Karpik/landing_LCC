import logo from "../assets/images/Small LKK RGB.png";
import container1 from "../assets/images/Контейнера1.jpg";
import container2 from "../assets/images/Контейнера2.jpg";
import container3 from "../assets/images/Контейнера3.jpg";
import container4 from "../assets/images/Контейнера4.jpg";
import loader1 from "../assets/images/Погрузчик1.jpg";
import loader2 from "../assets/images/Погрузчик2.jpg";
import loader3 from "../assets/images/Погрузчик3.jpg";
import repair from "../assets/images/Ремонт.jpg";
import shop1 from "../assets/images/Цех1.jpg";
import shop2 from "../assets/images/Цех2.jpg";
import before1 from "../assets/images/До1.jpg";
import before2 from "../assets/images/До2.jpg";
import before4 from "../assets/images/До4.jpg";
import after1 from "../assets/images/После1.jpg";
import after2 from "../assets/images/После2.jpg";
import after3 from "../assets/images/После3.jpg";
import after4 from "../assets/images/После4.jpg";

export type Service = {
  title: string;
  kicker: string;
  description: string;
  points: string[];
};

export type Fact = {
  value: string;
  label: string;
};

export type Milestone = {
  year: string;
  text: string;
};

export type ImageItem = {
  src: string;
  title: string;
  caption: string;
};

export type RepairPair = {
  before: string;
  after: string;
  title: string;
  caption: string;
};

export const company = {
  name: "ООО «Логистический контейнерный комплекс»",
  shortName: "ЛКК",
  city: "Новороссийск",
  address: "г. Новороссийск, ул. 5-я Промышленная, 9",
  phone: "+7 (XXX) XXX-XX-XX",
  email: "info@lkk.ru",
  schedule: "Круглосуточно",
  inn: "2315998869",
  coordinates: [44.77555, 37.7024] as const,
  logo,
};

export const hero = {
  eyebrow: "Припортовый контейнерный терминал",
  title: "Двигаем контейнерный бизнес вперед",
  titleLines: ["Двигаем", "контейнерный", "бизнес вперед"],
  lead:
    "Депо, ремонт, склад, перетарка и припортовая логистика рядом с портом Новороссийска.",
  image: container1,
};

export const whyChoose = [
  {
    title: "Порт рядом",
    text: "Терминальная инфраструктура в Новороссийске сокращает лишние плечи и потери времени.",
  },
  {
    title: "Единый контур",
    text: "Депо, ремонт, хранение, перетарка и транспорт работают как одна связанная система.",
  },
  {
    title: "Технологично",
    text: "EIR, EDIFACT, CODECO и CEDEX дают операторам прозрачность по статусам и оборудованию.",
  },
  {
    title: "Проверенный ремонт",
    text: "Работы выполняются по IICL, с РМРС и подготовленной производственной командой.",
  },
];

export const technicalFacts: Fact[] = [
  { value: "2017", label: "год основания" },
  { value: "1,7 Га", label: "собственная территория" },
  { value: "2000 TEU", label: "вместимость депо" },
  { value: "900 м²", label: "ремонтный цех" },
  { value: "400 м²", label: "вспомогательные помещения" },
  { value: "8000", label: "контейнеров ремонта в год" },
];

export const services: Service[] = [
  {
    kicker: "01",
    title: "Контейнерное депо",
    description: "Операции при приеме, выдаче, хранении и подготовке порожних контейнеров.",
    points: ["EIR проверка", "ACEP и CSC инспекция", "Хранение, сортировка, подготовка под груз"],
  },
  {
    kicker: "02",
    title: "Ремонт и обслуживание",
    description: "Восстановление контейнеров по международным требованиям и под отраслевым надзором.",
    points: [
      "Ремонт по стандартам IICL",
      "Ремонт и освидетельствование под надзором РМРС",
      "Разработка и сопровождение программы ACEP",
    ],
  },
  {
    kicker: "03",
    title: "B2B обмен данными",
    description: "Структурированная передача статусов и данных по оборудованию для операторов.",
    points: ["EDIFACT: gate-in, gate-out, CODECO", "CEDEX по оборудованию"],
  },
  {
    kicker: "04",
    title: "Транспорт",
    description: "Припортовые и междугородние перевозки контейнеров и грузов.",
    points: ["Припортовые контейнерные перевозки", "Междугородние контейнерные перевозки", "Тентовые перевозки грузов"],
  },
  {
    kicker: "05",
    title: "Складские услуги",
    description: "Ответственное хранение и обработка грузов на территории комплекса.",
    points: ["Ответственное хранение", "Сортировка", "Доработка, упаковка, комплектация"],
  },
  {
    kicker: "06",
    title: "Перетарка",
    description: "Погрузочно-разгрузочные работы для импортных и экспортных грузов.",
    points: ["Импорт и экспорт через склад", "Импорт и экспорт напрямую"],
  },
];

export const showcaseServices = [
  {
    title: "Контейнерное депо",
    text: "Прием, выдача, хранение, сортировка и подготовка порожних контейнеров.",
    image: container2,
  },
  {
    title: "Ремонт и ТО",
    text: "Восстановление контейнеров по IICL, РМРС, ACEP и требованиям владельцев оборудования.",
    image: repair,
  },
  {
    title: "Склад и перетарка",
    text: "Ответственное хранение, комплектация, упаковка, импортные и экспортные операции.",
    image: shop1,
  },
  {
    title: "Транспорт",
    text: "Припортовые и междугородние контейнерные перевозки, включая тентовые грузы.",
    image: loader1,
  },
  {
    title: "B2B данные",
    text: "EDIFACT gate-in/gate-out, CODECO и CEDEX по оборудованию для операторов.",
    image: container3,
  },
];

export const industryCards = [
  {
    title: "Судоходные линии",
    text: "Контроль возврата, ремонтного цикла и технического состояния парка.",
  },
  {
    title: "Экспедиторы",
    text: "Понятный терминальный процесс для контейнеров и грузов в Новороссийске.",
  },
  {
    title: "Грузовладельцы",
    text: "Складская обработка, перетарка и подготовка грузов к дальнейшей логистике.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2018",
    text: "Первое в Азово-Черноморском бассейне Свидетельство РМРС на ремонт контейнеров.",
  },
  { year: "2020", text: "Собственный терминал с цехами и складами." },
  { year: "2021", text: "Новые контейнерные автопогрузчики." },
  { year: "2022", text: "Аттестация РМРС на периодические освидетельствования." },
  { year: "2024", text: "Комплекс по складской перетарке." },
];

export const technicalBase: ImageItem[] = [
  { src: container1, title: "Контейнерное депо", caption: "Собственная территория и хранение до 2000 TEU." },
  { src: container2, title: "Терминальная зона", caption: "Прием, сортировка и подготовка контейнеров под груз." },
  { src: container3, title: "Открытая площадка", caption: "Промышленная зона с контролем доступа." },
  { src: container4, title: "Контейнерный парк", caption: "Операционная площадка припортового комплекса." },
  { src: loader1, title: "Автопогрузчики", caption: "Контейнерная техника, приобретенная в 2021 году." },
  { src: loader2, title: "Погрузочная техника", caption: "Маневрирование и обработка контейнеров на территории." },
  { src: loader3, title: "Терминальная механизация", caption: "Техника для регулярной высокой нагрузки." },
  { src: repair, title: "Ремонтная зона", caption: "Осмотр, дефектовка и восстановление контейнеров." },
  { src: shop1, title: "Ремонтный цех", caption: "900 м² производственной площади." },
  { src: shop2, title: "Цех и оснащение", caption: "Материалы и комплектующие для ремонта любой сложности." },
];

export const repairPairs: RepairPair[] = [
  {
    before: before1,
    after: after1,
    title: "Восстановление стенки контейнера",
    caption: "Дефектовка, ремонт и возврат контейнера в рабочее состояние.",
  },
  {
    before: before2,
    after: after2,
    title: "Ремонт поврежденного элемента",
    caption: "Работа по стандартам IICL и требованиям технического надзора.",
  },
  {
    before: before4,
    after: after4,
    title: "Локальный ремонт корпуса",
    caption: "Сохранение геометрии, ресурса и коммерческой пригодности контейнера.",
  },
  {
    before: before4,
    after: after3,
    title: "Финишная приемка",
    caption: "Контроль качества после завершения ремонта.",
  },
];

export const qualityPoints = [
  "Инспекторы, диспетчеры и технологи аттестованы РМРС и по стандартам IICL.",
  "Сварщики-электрогазосварщики имеют аттестацию РМРС.",
  "Команда проходит постоянное повышение квалификации.",
  "Материалы и комплектующие поставляются напрямую от сертифицированных производителей КНР.",
];
