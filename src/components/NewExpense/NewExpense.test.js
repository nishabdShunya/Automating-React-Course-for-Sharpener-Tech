import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewExpense from "./NewExpense";

describe("NewExpense component", () => {
  test("passes the expense data to App component on form submission", () => {
    const onAddExpenseMock = jest.fn();
    render(<NewExpense onAddExpense={onAddExpenseMock} />);

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

    // Check if the onAddExpense function is called with the correct data
    expect(onAddExpenseMock).toHaveBeenCalledWith({
      title: "Test Title",
      amount: "100",
      date: new Date("2023-11-02"),
      id: expect.any(String), // Check if the id is added to the data
    });
  });
});
