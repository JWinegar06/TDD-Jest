import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "@/components/TodoItem";

describe("TodoItem", () => {
  it("renders the todo text", () => {
    render(
      <TodoItem
        id={1}
        text="Learn Jest"
        completed={false}
        onToggle={jest.fn()}
        onDelete={jest.fn()}
      />,
    );

    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
  });

  it("calls onToggle when the checkbox is clicked", () => {
    const handleToggle = jest.fn();

    render(
      <TodoItem
        id={1}
        text="Learn Jest"
        completed={false}
        onToggle={handleToggle}
        onDelete={jest.fn()}
      />,
    );

    fireEvent.click(
      screen.getByRole("checkbox", {
        name: /learn jest/i,
      }),
    );

    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  it("calls onDelete when delete is clicked", () => {
    const handleDelete = jest.fn();

    render(
      <TodoItem
        id={1}
        text="Learn Jest"
        completed={false}
        onToggle={jest.fn()}
        onDelete={handleDelete}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /delete learn jest/i,
      }),
    );

    expect(handleDelete).toHaveBeenCalledWith(1);
  });
});
