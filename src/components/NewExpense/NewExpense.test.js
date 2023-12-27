import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewExpense from "./NewExpense";

describe("NewExpense Component", () => {
  test('renders "Add Expense" button initially', () => {
    render(<NewExpense />);
    const addButton = screen.getByText("Add Expense");
    expect(addButton).toBeInTheDocument();
  });

  test('renders ExpenseForm when "Add Expense" button is clicked', () => {
    render(<NewExpense />);
    const addButton = screen.getByText("Add Expense");
    fireEvent.click(addButton);
    const titleInput = screen.getByLabelText("Title");
    expect(titleInput).toBeInTheDocument();
  });

  test('closes ExpenseForm on "Cancel" button click', async () => {
    render(<NewExpense />);
    const addButton = screen.getByText("Add Expense");
    fireEvent.click(addButton);

    // Wait for the ExpenseForm to be visible
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    // Ensure that the ExpenseForm is closed
    const titleInput = screen.queryByLabelText("Title");
    expect(titleInput).not.toBeInTheDocument();
  });

  test("closes ExpenseForm and submits form data on form submission", () => {
    // Mock the onAddExpense function
    const mockOnAddExpense = jest.fn();

    render(<NewExpense onAddExpense={mockOnAddExpense} />);
    const addButton = screen.getByText("Add Expense");
    fireEvent.click(addButton);

    const titleInput = screen.getByLabelText("Title");
    fireEvent.change(titleInput, { target: { value: "Test Expense" } });

    const amountInput = screen.getByLabelText("Amount");
    fireEvent.change(amountInput, { target: { value: "50" } });

    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: "2023-01-01" } });

    const submitButton = screen.getByText("Add Expense");
    fireEvent.click(submitButton);

    // Ensure that the ExpenseForm is closed
    const formInputs = screen.queryByLabelText("Title");
    expect(formInputs).not.toBeInTheDocument();

    // Ensure that form data submits on submission
    expect(mockOnAddExpense).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Test Expense",
        price: "50",
        date: new Date("2023-01-01"),
      })
    );
  });
});
