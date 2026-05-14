import container1 from "../assets/images/Контейнера1.jpg";
import container2 from "../assets/images/Контейнера2.jpg";
import container3 from "../assets/images/Контейнера3.jpg";
import container4 from "../assets/images/Контейнера4.jpg";
import loader1 from "../assets/images/Погрузчик1.jpg";
import loader2 from "../assets/images/Погрузчик2.jpg";
import repairImage from "../assets/images/Ремонт.jpg";
import shop1 from "../assets/images/Цех1.jpg";
import before1 from "../assets/images/До1.jpg";
import before2 from "../assets/images/До2.jpg";
import before4 from "../assets/images/До4.jpg";
import after1 from "../assets/images/После1.jpg";
import after2 from "../assets/images/После2.jpg";
import after3 from "../assets/images/После3.jpg";
import after4 from "../assets/images/После4.jpg";

export const content = {
  company: {
    logoText: "ЛКК",
    name: "ООО «Логистический контейнерный комплекс»",
    shortName: "ЛКК",
    city: "Новороссийск",
    address: "г. Новороссийск, ул. 5-я Промышленная, 9",
    phone: "+7 (XXX) XXX-XX-XX",
    email: "info@lkk.ru",
    schedule: "Круглосуточно",
    inn: "2315998869",
    legalOwner: "Карпов Степан Викторович",
    coordinates: [44.77555, 37.7024] as const,
  },
  nav: [
    { label: "Главная", href: "/" },
    { label: "О компании", href: "/about" },
    { label: "Услуги", href: "/services" },
    { label: "Технологии", href: "/technology" },
    { label: "Ремонт", href: "/repair" },
    { label: "Галерея", href: "/gallery" },
  ],
  hero: {
    title: "Логистический контейнерный комплекс",
    linesDesktop: ["Логистический", "контейнерный", "комплекс"],
    linesMobile: ["Логистический", "контейнерный", "комплекс"],
    modelLabel: "Контейнерный комплекс",
  },
  about: {
    title: "Инфраструктура, которая держит контейнерный оборот",
    items: [
      {
        title: "Порт рядом",
        text: "Терминальная инфраструктура в Новороссийске сокращает лишние плечи и потери времени.",
        action: "map",
      },
      {
        title: "Индивидуальные решения",
        text: "Депо, ремонт, склад, транспорт и перетарка собираются под конкретную операционную задачу.",
        action: "contact",
      },
      {
        title: "Технологический прогресс",
        text: "EIR, EDIFACT, CODECO и CEDEX дают прозрачность по статусам и оборудованию.",
        action: "tech",
      },
      {
        title: "Проверенная экспертиза",
        text: "Работы выполняются по стандартам IICL, под надзором РМРС и с подготовленной командой.",
        action: "expertise",
      },
    ],
  },
  services: {
    title: "",
    cards: [
      {
        title: "Контейнерное депо",
        image: container2,
        details: [
          "EIR проверка: осмотр при приеме и выдаче",
          "ACEP, CSC инспекция",
          "Терминальная обработка: хранение, сортировка, подготовка под груз",
        ],
      },
      {
        title: "Ремонт и техническое обслуживание",
        image: repairImage,
        details: [
          "Ремонт по стандартам IICL",
          "Ремонт под надзором РМРС",
          "Освидетельствование под надзором РМРС",
          "Разработка и сопровождение программы ACEP (РМРС)",
        ],
      },
      {
        title: "Обмен данными (B2B)",
        image: container3,
        details: ["EDIFACT: gate-in / gate-out, CODECO", "CEDEX по оборудованию"],
      },
      {
        title: "Транспортные услуги",
        image: loader1,
        details: [
          "Припортовые контейнерные перевозки",
          "Междугородние контейнерные перевозки",
          "Тентовые перевозки грузов",
        ],
      },
      {
        title: "Складские услуги",
        image: shop1,
        details: ["Ответственное хранение грузов", "Сортировка, доработка, упаковка, комплектация"],
      },
      {
        title: "Погрузочно-разгрузочные работы",
        image: loader2,
        details: [
          "Перетарка импортных грузов через склад",
          "Перетарка экспортных грузов прямым вариантом",
          "пупупу",
          "пупупуп",
          "пупупуффаыафыа",
        ],
      },
    ],
  },
  technology: {
    title: "Технологии процесса",
    modelLabel: "Цифровой контур",
    cards: [
      {
        title: "EIR контроль",
        text: "Фиксация состояния контейнера при приеме и выдаче с прозрачной историей осмотра.",
      },
      {
        title: "EDIFACT и CODECO",
        text: "Структурированный B2B-обмен статусами gate-in и gate-out для операторов.",
      },
      {
        title: "CEDEX",
        text: "Технические данные по оборудованию и ремонту в формате, понятном владельцу парка.",
      },
      {
        title: "ACEP / CSC",
        text: "Инспекции и сопровождение программ для безопасной эксплуатации контейнерного парка.",
      },
    ],
  },
  aboutCompany: {
    title: "О компании",
    statement: "",
    timeline: [
      {
        year: "2018",
        title: "Свидетельство РМРС",
        shortText: "Получение подтверждения технической компетенции.",
        longText: "Запуск работ под требованиями морского регистра и формирование базы для ремонтного направления.",
        metric: "РМРС",
        image: repairImage,
      },
      {
        year: "2020",
        title: "Собственный терминал",
        shortText: "Формирование контейнерной площадки в Новороссийске.",
        longText: "Территория начинает работать как самостоятельная инфраструктурная единица рядом с портом.",
        metric: "1,7 Га",
        image: container1,
      },
      {
        year: "2021",
        title: "Обновление техники",
        shortText: "Усиление операционной мощности комплекса.",
        longText: "Парк техники и процессы обработки адаптируются под регулярный контейнерный поток.",
        metric: "2000 TEU",
        image: loader1,
      },
      {
        year: "2022",
        title: "Аттестации",
        shortText: "Расширение допусков и ремонтных процедур.",
        longText: "Команда закрепляет работу по IICL, ACEP, CSC и требованиям технического надзора.",
        metric: "IICL",
        image: container4,
      },
      {
        year: "2024",
        title: "Комплекс перетарки",
        shortText: "Запуск складского и грузового контура.",
        longText: "Склад, перетарка, упаковка и комплектация собираются в единый производственный процесс.",
        metric: "900 м²",
        image: shop1,
      },
    ],
  },
  repair: {
    title: "Ремонт контейнера",
    text: "",
    cases: [
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
      {
        before: before1,
        after: after2,
        title: "Выравнивание боковой панели",
        caption: "Восстановление плоскости и подготовка контейнера к дальнейшей эксплуатации.",
      },
      {
        before: before2,
        after: after4,
        title: "Усиление поврежденной зоны",
        caption: "Локальный ремонт с контролем геометрии и технического состояния.",
      },
      {
        before: before4,
        after: after1,
        title: "Восстановление корпуса",
        caption: "Работы по корпусу контейнера после дефектовки и согласования объема ремонта.",
      },
      {
        before: before1,
        after: after3,
        title: "Контроль после ремонта",
        caption: "Финальная проверка результата перед возвратом контейнера в оборот.",
      },
    ],
  },
  contact: {
    title: "Контакты",
    text: "Терминал находится в промышленной зоне Новороссийска. Прием и обработка контейнеров доступны круглосуточно.",
    submit: "Отправить запрос",
    fields: {
      name: "Имя",
      phone: "Телефон",
      email: "E-mail",
      task: "Сообщение",
    },
  },
  gallery: {
    title: "Галерея",
    images: [
      { src: container1, title: "Контейнерная площадка", caption: "Рабочая зона терминала и контейнерного хранения." },
      { src: container2, title: "Депо", caption: "Контейнеры на территории комплекса." },
      { src: container3, title: "Оборудование", caption: "Контейнерный парк и технологическая инфраструктура." },
      { src: container4, title: "Терминал", caption: "Площадка обработки и сортировки контейнеров." },
      { src: loader1, title: "Техника", caption: "Погрузочная техника на операционной линии." },
      { src: loader2, title: "Перемещение", caption: "Работа с грузами и контейнерными потоками." },
      { src: repairImage, title: "Ремонт", caption: "Ремонтная зона и техническое обслуживание." },
      { src: shop1, title: "Цех", caption: "Производственный контур складских и ремонтных работ." },
      { src: before1, title: "До ремонта 01", caption: "Повреждение стенки контейнера до восстановления." },
      { src: after1, title: "После ремонта 01", caption: "Восстановленная стенка контейнера после ремонта." },
      { src: before2, title: "До ремонта 02", caption: "Поврежденный элемент до технических работ." },
      { src: after2, title: "После ремонта 02", caption: "Результат восстановления поврежденного элемента." },
      { src: before4, title: "До ремонта 03", caption: "Корпус контейнера до локального ремонта." },
      { src: after3, title: "После ремонта 03", caption: "Контрольное состояние после ремонта." },
      { src: after4, title: "После ремонта 04", caption: "Финишная приемка восстановленного контейнера." },
    ],
  },
  footer: {
    rights:
      "Все права защищены. Материалы сайта принадлежат Карпову Степану Викторовичу и не могут быть использованы в коммерческих целях без согласования.",
  },
  images: {
    container1,
    container2,
    container3,
    container4,
    loader1,
    loader2,
    shop1,
  },
};

export const englishContent: typeof content = {
  ...content,
  company: {
    ...content.company,
    name: "LCC Container Logistics Complex",
    city: "Novorossiysk",
    address: "9, 5th Industrialnaya St., Novorossiysk",
    schedule: "24/7",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technology", href: "/technology" },
    { label: "Repair", href: "/repair" },
    { label: "Gallery", href: "/gallery" },
  ],
  hero: {
    title: "Logistics container complex",
    linesDesktop: ["Logistics", "container", "complex"],
    linesMobile: ["Logistics", "container", "complex"],
    modelLabel: "Container complex",
  },
  about: {
    title: "Infrastructure that keeps container flow moving",
    items: [
      {
        title: "Port proximity",
        text: "Terminal infrastructure in Novorossiysk reduces extra legs and lost time.",
        action: "map",
      },
      {
        title: "Tailored solutions",
        text: "Depot, repair, warehouse, transport and transshipment are assembled around the exact operational task.",
        action: "contact",
      },
      {
        title: "Technological progress",
        text: "EIR, EDIFACT, CODECO and CEDEX make statuses and equipment history transparent.",
        action: "tech",
      },
      {
        title: "Proven expertise",
        text: "Work is performed under IICL standards, RS supervision and a trained operating team.",
        action: "expertise",
      },
    ],
  },
  services: {
    title: "",
    cards: [
      {
        title: "Container depot",
        image: container2,
        details: [
          "EIR inspection at gate-in and gate-out",
          "ACEP, CSC inspection",
          "Terminal handling: storage, sorting, cargo preparation",
        ],
      },
      {
        title: "Repair and maintenance",
        image: repairImage,
        details: [
          "IICL-compliant repair",
          "Repair under RS supervision",
          "Certification under RS supervision",
          "ACEP program development and support (RS)",
        ],
      },
      {
        title: "Data exchange (B2B)",
        image: container3,
        details: ["EDIFACT: gate-in / gate-out, CODECO", "CEDEX equipment messages"],
      },
      {
        title: "Transport services",
        image: loader1,
        details: ["Port-side container trucking", "Intercity container trucking", "Curtain-side cargo transport"],
      },
      {
        title: "Warehouse services",
        image: shop1,
        details: ["Responsible cargo storage", "Sorting, rework, packaging, order assembly"],
      },
      {
        title: "Loading and unloading",
        image: loader2,
        details: ["Import cargo transshipment via warehouse", "Export cargo direct transshipment"],
      },
    ],
  },
  technology: {
    title: "Process technology",
    modelLabel: "Digital circuit",
    cards: [
      {
        title: "EIR control",
        text: "Container condition is recorded at gate-in and gate-out with a transparent inspection history.",
      },
      {
        title: "EDIFACT and CODECO",
        text: "Structured B2B status exchange for gate-in and gate-out operations.",
      },
      {
        title: "CEDEX",
        text: "Technical repair and equipment data in a format fleet owners can process.",
      },
      {
        title: "ACEP / CSC",
        text: "Inspection and program support for safe container fleet operation.",
      },
    ],
  },
  aboutCompany: {
    title: "Company",
    statement: "",
    timeline: [
      {
        year: "2018",
        title: "RS certificate",
        shortText: "Technical competence confirmed.",
        longText: "Repair work is launched under marine register requirements.",
        metric: "RS",
        image: repairImage,
      },
      {
        year: "2020",
        title: "Own terminal",
        shortText: "Container yard formed in Novorossiysk.",
        longText: "The territory becomes an independent infrastructure unit near the port.",
        metric: "1.7 ha",
        image: container1,
      },
      {
        year: "2021",
        title: "Equipment renewal",
        shortText: "Operational capacity increased.",
        longText: "Equipment fleet and handling processes adapt to regular container flow.",
        metric: "2000 TEU",
        image: loader1,
      },
      {
        year: "2022",
        title: "Certifications",
        shortText: "Repair procedures expanded.",
        longText: "The team secures IICL, ACEP, CSC and technical supervision processes.",
        metric: "IICL",
        image: container4,
      },
      {
        year: "2024",
        title: "Transshipment complex",
        shortText: "Warehouse and cargo circuit launched.",
        longText: "Storage, transshipment, packaging and order assembly become one production flow.",
        metric: "900 m²",
        image: shop1,
      },
    ],
  },
  repair: {
    ...content.repair,
    title: "Container repair",
    text: "",
  },
  contact: {
    title: "Contacts",
    text: "The terminal is located in the industrial area of Novorossiysk. Container acceptance and handling are available 24/7.",
    submit: "Send request",
    fields: {
      name: "Name",
      phone: "Phone",
      email: "E-mail",
      task: "Message",
    },
  },
  gallery: {
    ...content.gallery,
    title: "Gallery",
    images: content.gallery.images.map((image) => ({ ...image })),
  },
  footer: {
    rights:
      "All rights reserved. Site materials belong to Stepan Viktorovich Karpov and may not be used for commercial purposes without approval.",
  },
};

export type SiteContent = typeof content;
export type SiteLanguage = "ru" | "en";
