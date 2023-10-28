import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Expenses from "./Expenses";

describe("Expenses Component", () => {
  test("renders a list of expenses via ExpenseItem component", () => {
    const expenses = [
      { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
      { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
      { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    ];

    render(<Expenses expenses={expenses} />);

    expenses.forEach((expense) => {
      expect(screen.getByText(expense.title)).toBeInTheDocument();
      expect(
        screen.getByText((content, element) => content === "$" + expense.price)
      ).toBeInTheDocument();
    });
  });

  test("uses the map function to render ExpenseItem components", () => {
    const expenses = [
      { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
      { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
      { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    ];

    const mapSpy = jest.spyOn(Array.prototype, "map");
    render(<Expenses expenses={expenses} />);
    expect(mapSpy).toHaveBeenCalled();
    mapSpy.mockRestore();
  });
});
