import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App Component", () => {
  test("passes location as an attribute to each ExpenseItem", () => {
    render(<App />);
    const locations = screen.getAllByText(/Bangalore|Delhi|Hyderabad|Mumbai/i);
    expect(locations).toHaveLength(4);
  });
});
