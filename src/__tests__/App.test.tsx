import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/app/page";
import { saveTodo } from "../services/todoService";

jest.mock("../services/todoService");

const mockSaveTodo = jest.mocked(saveTodo);

describe("Todo App Integration", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockSaveTodo.mockResolvedValue({
      id: 1,
      text: "Test Todo",
      completed: false,
    });
  });

  test("allows a user to create a todo", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.type(
      screen.getByRole("textbox", { name: /todo/i }),
      "Finish Jest assignment",
    );

    await user.click(screen.getByRole("button", { name: /add todo/i }));

    expect(
      await screen.findByText("Finish Jest assignment"),
    ).toBeInTheDocument();
  });

  test("allows a user to delete a todo", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.type(
      screen.getByRole("textbox", { name: /todo/i }),
      "Delete me",
    );

    await user.click(screen.getByRole("button", { name: /add todo/i }));

    expect(await screen.findByText("Delete me")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /delete delete me/i,
      }),
    );

    expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
  });

  test("allows a user to complete a todo", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.type(
      screen.getByRole("textbox", { name: /todo/i }),
      "Learn TDD",
    );

    await user.click(screen.getByRole("button", { name: /add todo/i }));

    const checkbox = await screen.findByRole("checkbox", {
      name: /learn tdd/i,
    });

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
