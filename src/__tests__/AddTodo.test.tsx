import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodo from "@/components/AddTodo";
import { saveTodo } from "../services/todoService";

jest.mock("../services/todoService");

const mockSaveTodo = jest.mocked(saveTodo);

describe("AddTodo", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("adds a todo when the service succeeds", async () => {
    const user = userEvent.setup();
    const onAdd = jest.fn();

    mockSaveTodo.mockResolvedValue({
      id: 1,
      text: "Learn Jest",
      completed: false,
    });

    render(<AddTodo onAdd={onAdd} />);

    await user.type(
      screen.getByRole("textbox", { name: /todo/i }),
      "Learn Jest",
    );

    await user.click(screen.getByRole("button", { name: /add todo/i }));

    expect(mockSaveTodo).toHaveBeenCalledWith("Learn Jest");
    expect(onAdd).toHaveBeenCalledWith("Learn Jest");
  });

  test("does not call the service for an empty todo", async () => {
    const user = userEvent.setup();
    const onAdd = jest.fn();

    render(<AddTodo onAdd={onAdd} />);

    await user.click(screen.getByRole("button", { name: /add todo/i }));

    expect(mockSaveTodo).not.toHaveBeenCalled();
    expect(onAdd).not.toHaveBeenCalled();
  });

  test("shows an error when the service fails", async () => {
    const user = userEvent.setup();
    const onAdd = jest.fn();

    mockSaveTodo.mockRejectedValue(new Error("Network error"));

    render(<AddTodo onAdd={onAdd} />);

    await user.type(
      screen.getByRole("textbox", { name: /todo/i }),
      "Learn Jest",
    );

    await user.click(screen.getByRole("button", { name: /add todo/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Unable to save todo",
    );

    expect(onAdd).not.toHaveBeenCalled();
  });
});
