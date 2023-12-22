import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExpenseForm from "./ExpenseForm";

describe("ExpenseForm", () => {
  test("correctly listens for title change", () => {
    render(<ExpenseForm onSaveExpenseData={() => {}} />);
    const titleInput = screen.getByLabelText("Title"); // Find input element
    fireEvent.change(titleInput, { target: { value: "Test Title" } }); // Simulate user input
    expect(titleInput.value).toBe("Test Title"); // Verify if the input value is set correctly
  });

  test("correctly listens for amount change", () => {
    render(<ExpenseForm onSaveExpenseData={() => {}} />);
    const amountInput = screen.getByLabelText("Amount"); // Find input element
    fireEvent.change(amountInput, { target: { value: "100" } }); // Simulate user input
    expect(amountInput.value).toBe("100"); // Verify if the input value is set correctly
  });

  test("correctly listens for date change", () => {
    render(<ExpenseForm onSaveExpenseData={() => {}} />);
    const dateInput = screen.getByLabelText("Date"); // Find input element
    fireEvent.change(dateInput, { target: { value: "2023-11-01" } }); // Simulate user input
    expect(dateInput.value).toBe("2023-11-01"); // Verify if the input value is set correctly
  });

  test("form submission calls the submit handler", () => {
    const submitHandler = jest.fn();
    const onSaveExpenseDataMock = jest.fn();
    render(<ExpenseForm onSaveExpenseData={onSaveExpenseDataMock} />);
    const addButton = screen.getByText("Add Expense");
    addButton.onclick = submitHandler;

    const titleInput = screen.getByLabelText("Title");
    const amountInput = screen.getByLabelText("Amount");
    const dateInput = screen.getByLabelText("Date");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(amountInput, { target: { value: "100" } });
    fireEvent.change(dateInput, { target: { value: "2023-11-02" } });
    fireEvent.click(addButton);

    expect(submitHandler).toHaveBeenCalledTimes(1);
  });

  test("form submission clears input fields", () => {
    const submitHandler = jest.fn();
    const onSaveExpenseDataMock = jest.fn();
    render(<ExpenseForm onSaveExpenseData={onSaveExpenseDataMock} />);
    const addButton = screen.getByText("Add Expense");
    addButton.onclick = submitHandler;

    const titleInput = screen.getByLabelText("Title");
    const amountInput = screen.getByLabelText("Amount");
    const dateInput = screen.getByLabelText("Date");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(amountInput, { target: { value: "100" } });
    fireEvent.change(dateInput, { target: { value: "2023-11-02" } });
    fireEvent.click(addButton);

    expect(submitHandler).toHaveBeenCalledTimes(1);

    expect(titleInput.value).toBe("");
    expect(amountInput.value).toBe("");
    expect(dateInput.value).toBe("");
  });

  test("form submission passes the expense data to NewExpense component", () => {
    const submitHandler = jest.fn();
    const onSaveExpenseDataMock = jest.fn();
    render(<ExpenseForm onSaveExpenseData={onSaveExpenseDataMock} />);
    const addButton = screen.getByText("Add Expense");
    addButton.onclick = submitHandler;

    const titleInput = screen.getByLabelText("Title");
    const amountInput = screen.getByLabelText("Amount");
    const dateInput = screen.getByLabelText("Date");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(amountInput, { target: { value: "100" } });
    fireEvent.change(dateInput, { target: { value: "2023-11-02" } });
    fireEvent.click(addButton);

    expect(submitHandler).toHaveBeenCalledTimes(1);
    expect(onSaveExpenseDataMock).toHaveBeenCalledWith({
      title: "Test Title",
      amount: "100",
      date: new Date("2023-11-02"),
    });
  });
});
