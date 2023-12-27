import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Chart from "./Chart";

test("Expense chart is rendered correctly without errors", () => {
  const chartExpenses = [
    { id: "e1", title: "Expense 1", date: new Date("2023-01-01"), price: 10 },
  ];

  render(<Chart chartExpenses={chartExpenses} />);

  // Check if the component renders without errors
  const chartElement = screen.getByText(/Jan/i);
  expect(chartElement).toBeInTheDocument();
});
