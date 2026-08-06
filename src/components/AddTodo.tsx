"use client";

import { useState } from "react";
import { saveTodo } from "@/services/todoService";

type AddTodoProps = {
  onAdd: (text: string) => void;
};

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    try {
      setError("");

      await saveTodo(trimmedText);

      onAdd(trimmedText);
      setText("");
    } catch {
      setError("Unable to save todo");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo</label>

      <input
        id="todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">Add Todo</button>

      {error && <p role="alert">{error}</p>}
    </form>
  );
}
