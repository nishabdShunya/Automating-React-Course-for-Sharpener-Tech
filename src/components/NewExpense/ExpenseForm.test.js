import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExpenseForm from "./ExpenseForm";

describe("ExpenseForm", () => {
  test("correctly listens for title change", () => {
    render(<ExpenseForm />);
    const titleInput = screen.getByLabelText("Title"); // Find input element
    fireEvent.change(titleInput, { target: { value: "Test Title" } }); // Simulate user input
    expect(titleInput.value).toBe("Test Title"); // Verify if the input value is set correctly
  });

  test("correctly listens for amount change", () => {
    render(<ExpenseForm />);
    const amountInput = screen.getByLabelText("Amount"); // Find input element
    fireEvent.change(amountInput, { target: { value: "100" } }); // Simulate user input
    expect(amountInput.value).toBe("100"); // Verify if the input value is set correctly
  });

  test("correctly listens for date change", () => {
    render(<ExpenseForm />);
    const dateInput = screen.getByLabelText("Date"); // Find input element
    fireEvent.change(dateInput, { target: { value: "2023-11-01" } }); // Simulate user input
    expect(dateInput.value).toBe("2023-11-01"); // Verify if the input value is set correctly
  });
});
