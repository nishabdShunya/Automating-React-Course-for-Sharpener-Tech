import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("Form submission adds new expense to the expenses list", () => {
  render(<App />);

  // Find the input fields and buttons
  const titleInput = screen.getByLabelText("Title");
  const amountInput = screen.getByLabelText("Amount");
  const dateInput = screen.getByLabelText("Date");
  const addButton = screen.getByText("Add Expense");

  // Enter values into the input fields
  fireEvent.change(titleInput, { target: { value: "Groceries" } });
  fireEvent.change(amountInput, { target: { value: "50" } });
  fireEvent.change(dateInput, { target: { value: "2023-12-24" } });

  // Click the add button
  fireEvent.click(addButton);

  // Check if the new expense is added to the list
  expect(screen.getByText("Groceries")).toBeInTheDocument();
  expect(screen.getByText("$50")).toBeInTheDocument();
  expect(screen.getByText("December")).toBeInTheDocument();
  expect(screen.getByText("24")).toBeInTheDocument();
});
