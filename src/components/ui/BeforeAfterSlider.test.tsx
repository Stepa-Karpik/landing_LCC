import { render, screen } from "@testing-library/react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

describe("BeforeAfterSlider", () => {
  it("renders a labeled before and after comparison", () => {
    render(
      <BeforeAfterSlider
        before="/images/before.jpg"
        after="/images/after.jpg"
        title="Ремонт контейнера"
        beforeLabel="До"
        afterLabel="После"
      />
    );

    expect(screen.getByRole("img", { name: "Ремонт контейнера до ремонта" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Ремонт контейнера после ремонта" })).toBeInTheDocument();
    expect(screen.getByText("До")).toBeInTheDocument();
    expect(screen.getByText("После")).toBeInTheDocument();
    expect(screen.getByRole("slider", { name: "Положение сравнения" })).toBeInTheDocument();
  });
});
