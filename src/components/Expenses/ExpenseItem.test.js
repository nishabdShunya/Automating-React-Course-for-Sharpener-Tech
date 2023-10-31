/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExpenseItem from "./ExpenseItem";

describe("Button click", () => {
  test("should change title of the expense", () => {
    const title = "Test Title";
    const date = new Date(2023, 0, 1);
    const price = "50";

    render(<ExpenseItem title={title} date={date} price={price} />);

    const buttonElement = screen.getByText("Change Title");
    fireEvent.click(buttonElement);
    expect(screen.getByText("New Title")).toBeInTheDocument();
  });
});
