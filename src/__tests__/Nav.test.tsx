import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";

describe("Nav", () => {
  it("renders the navigation links", () => {
    render(<Nav />);

    expect(
      screen.getByRole("link", {
        name: /home/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /todos/i,
      }),
    ).toBeInTheDocument();
  });
});
