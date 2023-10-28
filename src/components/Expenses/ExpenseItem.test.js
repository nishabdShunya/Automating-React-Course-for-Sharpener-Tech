/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExpenseItem from "./ExpenseItem";

describe("ExpenseItem Component", () => {
  test("includes ExpenseDate Component", () => {
    const title = "Test Title";
    const date = new Date(2023, 0, 1);
    const price = "50";
    render(<ExpenseItem title={title} date={date} price={price} />);
    expect(screen.getByText("January")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("01")).toBeInTheDocument();
  });

  test("is rendered correctly with title prop", () => {
    const title = "Test Title";
    const date = new Date(2023, 0, 1);
    const price = "50";
    render(<ExpenseItem title={title} date={date} price={price} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("is rendered correctly with price prop", () => {
    const title = "Test Title";
    const date = new Date(2023, 0, 1);
    const price = "50";
    render(<ExpenseItem title={title} date={date} price={price} />);
    const priceElement = screen.getByText("$" + price);
    expect(priceElement).toBeInTheDocument();
  });

  test("button click event is handled correctly", () => {
    const title = "Test Title";
    const date = new Date(2023, 0, 1);
    const price = "50";

    const spy = jest.spyOn(console, "log");

    render(<ExpenseItem title={title} date={date} price={price} />);

    const buttonElement = screen.getByText("Change Title");
    fireEvent.click(buttonElement);
    expect(spy).toHaveBeenCalledWith("Button clicked");

    spy.mockRestore();
  });
});
