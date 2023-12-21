import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExpenseDate from "./ExpenseDate";

describe("ExpenseDate Component", () => {
  test("is rendered with the correct month", () => {
    const date = new Date("2023-10-20");
    render(<ExpenseDate date={date} />);
    expect(screen.getByText("October")).toBeInTheDocument();
  });

  test("is rendered with the correct year", () => {
    const date = new Date("2023-10-20");
    render(<ExpenseDate date={date} />);
    expect(screen.getByText("2023")).toBeInTheDocument();
  });

  test("is rendered with the correct day", () => {
    const date = new Date("2023-10-20");
    render(<ExpenseDate date={date} />);
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});
