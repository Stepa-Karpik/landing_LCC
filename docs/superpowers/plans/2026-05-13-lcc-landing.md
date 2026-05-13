# LCC Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-grade React + TypeScript landing page for ООО «Логистический контейнерный комплекс».

**Architecture:** The app is a single-page landing with section components, shared UI primitives, typed site data, and isolated browser behavior for the before/after slider, gallery, and Yandex map. Visual design is black-and-white, industrial, restrained, and photo-led, with no background grids, artificial tech patterns, or decorative AI-style effects.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, Vitest, Testing Library, Yandex Maps JS API.

---

### Task 1: Project Scaffold And Tests

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/test/setup.ts`
- Create: `src/data/site-data.test.ts`
- Create: `src/components/ui/BeforeAfterSlider.test.tsx`

- [ ] Add Vite, React, TypeScript, Tailwind, Vitest, and Testing Library configuration.
- [ ] Add failing tests for required content and before/after slider rendering.
- [ ] Run `npm test -- --run`; expected failure is missing implementation modules.

### Task 2: Typed Content And Asset Migration

**Files:**
- Create: `src/data/site-data.ts`
- Copy: existing images from `/home/stepka/Downloads/LCC/Фото` to `src/assets/images`

- [ ] Model company facts, services, milestones, contacts, gallery images, and repair pairs in typed arrays.
- [ ] Do not reference missing `До3.jpg`.
- [ ] Preserve current known placeholders for phone and email until real contacts are supplied.

### Task 3: Core UI And Sections

**Files:**
- Create: `src/App.tsx`
- Create: `src/main.tsx`
- Create: `src/index.css`
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/sections/*.tsx`
- Create: `src/components/ui/*.tsx`

- [ ] Build hero, facts, services, repair, technical base, trust/history, contact, and footer sections.
- [ ] Keep layout responsive and typography large without overflow.
- [ ] Use restrained monochrome styling and real photos as the primary visual material.

### Task 4: Interactions And Map

**Files:**
- Create: `src/components/ui/BeforeAfterSlider.tsx`
- Create: `src/components/ui/ImageGallery.tsx`
- Create: `src/components/sections/ContactSection.tsx`
- Create: `src/lib/yandex-map.ts`

- [ ] Implement draggable before/after comparison.
- [ ] Implement technical base gallery.
- [ ] Load Yandex Maps with marker at `44.77555, 37.7024` using `VITE_YANDEX_MAPS_API_KEY`.

### Task 5: Verification

**Files:**
- Modify as needed based on verification results.

- [ ] Run `npm test -- --run`.
- [ ] Run `npm run build`.
- [ ] Run dev server and provide launch instructions.
