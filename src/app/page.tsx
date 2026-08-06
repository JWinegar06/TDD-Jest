"use client";

import { useState } from "react";
import AddTodo from "@/components/AddTodo";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TodoList, { Todo } from "@/components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  }

  function toggleTodo(id: number) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  }

  function deleteTodo(id: number) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Header />

      <Nav />

      <main>
        <section id="todos">
          <h2>My Todos</h2>

          <AddTodo onAdd={addTodo} />

          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </section>
      </main>
    </>
  );
}
