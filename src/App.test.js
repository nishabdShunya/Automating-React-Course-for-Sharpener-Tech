import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App Component", () => {
  test("is rendered correctly", () => {
    render(<App />);
    const headingElement = screen.getByText("Let's get Started");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the Expenses component", () => {
    render(<App />);
    expect(screen.getByText("Insurance")).toBeInTheDocument();
    expect(screen.getByText("Book")).toBeInTheDocument();
    expect(screen.getByText("Pen")).toBeInTheDocument();
    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });
});
