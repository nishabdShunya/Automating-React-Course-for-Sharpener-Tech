import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChartBar from "./ChartBar";

test("Monthly chart bars are rendered correctly without errors", () => {
  render(<ChartBar label="Jan" value={10} maxValue={100} />);

  // Check if the component renders without errors
  const chartBarElement = screen.getByText(/Jan/i);
  expect(chartBarElement).toBeInTheDocument();
});
