# Next.js Todo App - TDD Project

## Overview

This project is a simple Todo application built with Next.js and TypeScript. It was created to practice Test Driven Development (TDD) using Jest and React Testing Library.

## Features

The application allows users to:

- Add new todos
- Mark todos as completed
- Delete todos
- Prevent empty todos from being added
- Display a message when there are no todos
- Handle errors when saving a todo

## TDD Practices

The project follows the **Red-Green-Refactor** TDD process:

1. **Red** - Write a test that initially fails.
2. **Green** - Write the code needed to make the test pass.
3. **Refactor** - Clean up the code while keeping the tests passing.

Unit tests were created for individual components, while integration tests were used to make sure the components work together.

Tests were written using:

- Jest
- React Testing Library
- User Event

## Mocking

Jest mocks are used to test external dependencies without making real network requests.

The `todoService` is mocked when testing the `AddTodo` component:

```tsx
jest.mock("../services/todoService");
```

The `fetch` function is also mocked when testing the service:

```tsx
const mockFetch = jest.fn();

global.fetch = mockFetch;
```

Mocking makes the tests faster, predictable, and independent from a real API.

## Test Files

```text
src/__tests__/
├── AddTodo.test.tsx
├── App.test.tsx
├── Header.test.tsx
├── Nav.test.tsx
├── TodoItem.test.tsx
├── TodoList.test.tsx
└── TodoService.test.ts
```

## Challenges

One challenge was testing asynchronous behavior after adding the `todoService`. Some tests had to use asynchronous queries such as `findByText` to wait for the UI to update.

Another challenge occurred when testing `fetch`. Jest did not have `fetch` available in the test environment, so a mock `fetch` function was created.

These changes helped keep the tests isolated and prevented real network requests during testing.

## Running the Tests

Run all tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## What I Learned

This project helped me understand how TDD can be used to build features in small steps. I also learned how to use unit tests, integration tests, asynchronous testing, and Jest mocks to test a Next.js application.