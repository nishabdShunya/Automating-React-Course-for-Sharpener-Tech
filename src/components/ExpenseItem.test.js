/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExpenseItem from "./ExpenseItem";

describe("ExpenseItem Component", () => {
  test("has a div for location of expense rendered correctly via props object", () => {
    const title = "Test Title";
    const date = new Date(2023, 0, 1);
    const price = "50";
    const location = "London";
    render(
      <ExpenseItem
        title={title}
        date={date}
        price={price}
        location={location}
      />
    );
    const locationElement = screen.getByText(location);
    expect(locationElement).toBeInTheDocument();
  });

  test("applies 'expense-item__location' class to div for location of expense", () => {
    const title = "Test Title";
    const date = new Date(2023, 0, 1);
    const price = "50";
    const location = "London";
    const { container } = render(
      <ExpenseItem
        title={title}
        date={date}
        price={price}
        location={location}
      />
    );
    const locationElement = container.querySelector(".expense-item__location");
    expect(locationElement).toBeInTheDocument();
  });
});
