/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

describe("Card Component", function () {
  test("renders with children", () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("renders with className received in the props", () => {
    const { container } = render(
      <Card className="custom-class">Test Content</Card>
    );
    const cardElement = container.querySelector(".card.custom-class");
    expect(cardElement).not.toBeNull();
  });
});
