import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it("renders the application title", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", {
        name: /tdd todo app/i,
      }),
    ).toBeInTheDocument();
  });
});
