import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Expenses from "./Expenses";

describe("Expenses component", () => {
  const expenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2024, 9, 17), price: 200 },
  ];

  test("shows desired message when there are no expenses for the selected year", () => {
    render(<Expenses expenses={expenses} />);

    // Select the filter dropdown and change the value to a year with no expenses, e.g., "2022"
    const filterDropdown = screen.getByLabelText("Filter by Year");
    fireEvent.change(filterDropdown, { target: { value: "2026" } });

    // Check if the "No expenses found" message is displayed
    expect(screen.getByText("No expenses found")).toBeInTheDocument();
  });

  test("shows desired message when there is only one expense for the selected year", () => {
    render(<Expenses expenses={expenses} />);

    // Select the filter dropdown and change the value to a year with no expenses, e.g., "2022"
    const filterDropdown = screen.getByLabelText("Filter by Year");
    fireEvent.change(filterDropdown, { target: { value: "2025" } });

    // Check if the "No expenses found" message is displayed
    expect(
      screen.getByText("Only one expense found. Please add more")
    ).toBeInTheDocument();
  });

  test("shows list of expenses for the selected year", () => {
    render(<Expenses expenses={expenses} />);

    // Select the filter dropdown and change the value to "2024"
    const filterDropdown = screen.getByLabelText("Filter by Year");
    fireEvent.change(filterDropdown, { target: { value: "2024" } });

    // Check if the rendered expenses contain "Book" and "Laptop"
    expect(screen.getByText("Book")).toBeInTheDocument();
    expect(screen.getByText("Laptop")).toBeInTheDocument();

    // Check that "Insurance" and "Pen" are not present
    expect(screen.queryByText("Insurance")).toBeNull();
    expect(screen.queryByText("Pen")).toBeNull();
  });
});
