import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App component", () => {
  test("logs to console the expense data received from ExpenseForm component via NewExpense component", () => {
    const originalConsoleLog = console.log;
    console.log = jest.fn(); // Mock console.log

    render(<App />);

    // Simulate user input in the ExpenseForm component
    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByLabelText("Amount"), {
      target: { value: "100" },
    });
    fireEvent.change(screen.getByLabelText("Date"), {
      target: { value: "2023-11-02" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByText("Add Expense"));

    // Check if the console.log is called with the correct data
    expect(console.log).toHaveBeenCalledWith({
      title: "Test Title",
      amount: "100",
      date: new Date("2023-11-02"),
      id: expect.any(String),
    });

    // Restore the original console.log
    console.log = originalConsoleLog;
  });
});
