import { company, gallery, hero, nav, repairPairs, services, technicalFacts } from "./site-data";

describe("site data", () => {
  it("keeps the core company positioning and contacts available", () => {
    expect(company.name).toContain("Логистический контейнерный комплекс");
    expect(company.city).toBe("Новороссийск");
    expect(company.coordinates).toEqual([44.77555, 37.7024]);
    expect(company.inn).toBe("2315998869");
  });

  it("contains the required commercial content blocks", () => {
    expect(services).toHaveLength(6);
    expect(technicalFacts.map((fact) => fact.value)).toEqual(
      expect.arrayContaining(["1,7 Га", "2000 TEU", "900 м²", "8000"])
    );
  });

  it("keeps the current navigation and gallery contract", () => {
    expect(hero.title).toBe("Логистический контейнерный комплекс");
    expect(nav.map((item) => item.href)).toEqual(["/", "/about", "/services", "/technology", "/repair", "/gallery"]);
    expect(gallery.length).toBeGreaterThanOrEqual(12);
  });

  it("uses valid before and after repair pairs without missing source files", () => {
    expect(repairPairs.length).toBeGreaterThanOrEqual(3);
    for (const pair of repairPairs) {
      expect(decodeURIComponent(pair.before)).toMatch(/До[124]\.jpg$/);
      expect(decodeURIComponent(pair.after)).toMatch(/После[1-4]\.jpg$/);
    }
  });
});
