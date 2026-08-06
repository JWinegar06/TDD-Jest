import { saveTodo } from "../services/todoService";

describe("todoService", () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    global.fetch = mockFetch;
    jest.clearAllMocks();
  });

  test("saves a todo", async () => {
    const todo = {
      id: 1,
      text: "Learn Jest",
      completed: false,
    };

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => todo,
    });

    const result = await saveTodo("Learn Jest");

    expect(mockFetch).toHaveBeenCalledWith("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "Learn Jest",
      }),
    });

    expect(result).toEqual(todo);
  });

  test("throws an error when the request fails", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
    });

    await expect(saveTodo("Learn Jest")).rejects.toThrow("Failed to save todo");
  });
});
