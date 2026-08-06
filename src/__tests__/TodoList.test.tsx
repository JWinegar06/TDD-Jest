import { render, screen } from "@testing-library/react";
import TodoList from "@/components/TodoList";

describe("TodoList", () => {
  it("renders all todos", () => {
    const todos = [
      {
        id: 1,
        text: "Learn Jest",
        completed: false,
      },
      {
        id: 2,
        text: "Learn React Testing Library",
        completed: false,
      },
    ];

    render(
      <TodoList todos={todos} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );

    expect(screen.getByText("Learn Jest")).toBeInTheDocument();

    expect(screen.getByText("Learn React Testing Library")).toBeInTheDocument();
  });

  it("shows a message when there are no todos", () => {
    render(<TodoList todos={[]} onToggle={jest.fn()} onDelete={jest.fn()} />);

    expect(screen.getByText(/no todos yet/i)).toBeInTheDocument();
  });
});
