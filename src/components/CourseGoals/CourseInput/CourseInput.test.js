import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CourseInput from "./CourseInput";

describe("CourseInput component", () => {
  test("renders label's color as red when input is invalid", () => {
    const mockOnAddGoal = jest.fn();
    render(<CourseInput onAddGoal={mockOnAddGoal} />);

    const addButton = screen.getByText("Add Goal");
    fireEvent.click(addButton);

    expect(mockOnAddGoal).not.toHaveBeenCalled(); // onAddGoal should not be called
    expect(screen.getByText("Course Goal")).toHaveStyle("color: red");
  });

  test("renders input's background color as lightpink when input is invalid", () => {
    const mockOnAddGoal = jest.fn();
    render(<CourseInput onAddGoal={mockOnAddGoal} />);

    const addButton = screen.getByText("Add Goal");
    fireEvent.click(addButton);

    expect(mockOnAddGoal).not.toHaveBeenCalled(); // onAddGoal should not be called
    expect(screen.getByRole("textbox")).toHaveStyle(
      "backgroundColor: lightpink"
    );
  });

  test("renders input's border color as red when input is invalid", () => {
    const mockOnAddGoal = jest.fn();
    render(<CourseInput onAddGoal={mockOnAddGoal} />);

    const addButton = screen.getByText("Add Goal");
    fireEvent.click(addButton);

    expect(mockOnAddGoal).not.toHaveBeenCalled(); // onAddGoal should not be called
    expect(screen.getByRole("textbox")).toHaveStyle("borderColor: red");
  });

  test("renders label's color as black when input is valid", () => {
    const mockOnAddGoal = jest.fn();
    render(<CourseInput onAddGoal={mockOnAddGoal} />);

    const inputElement = screen.getByLabelText("Course Goal");
    const addButton = screen.getByText("Add Goal");

    fireEvent.change(inputElement, { target: { value: "Valid Goal" } });
    fireEvent.click(addButton);

    expect(mockOnAddGoal).toHaveBeenCalledWith("Valid Goal");
    expect(screen.getByText("Course Goal")).toHaveStyle("color: black");
  });

  test("renders input's background color as transparent when input is valid", () => {
    const mockOnAddGoal = jest.fn();
    render(<CourseInput onAddGoal={mockOnAddGoal} />);

    const inputElement = screen.getByLabelText("Course Goal");
    const addButton = screen.getByText("Add Goal");

    fireEvent.change(inputElement, { target: { value: "Valid Goal" } });
    fireEvent.click(addButton);

    expect(mockOnAddGoal).toHaveBeenCalledWith("Valid Goal");
    expect(screen.getByRole("textbox")).toHaveStyle(
      "backgroundColor: transparent"
    );
  });

  test("renders input's border color as black when input is valid", () => {
    const mockOnAddGoal = jest.fn();
    render(<CourseInput onAddGoal={mockOnAddGoal} />);

    const inputElement = screen.getByLabelText("Course Goal");
    const addButton = screen.getByText("Add Goal");

    fireEvent.change(inputElement, { target: { value: "Valid Goal" } });
    fireEvent.click(addButton);

    expect(mockOnAddGoal).toHaveBeenCalledWith("Valid Goal");
    expect(screen.getByRole("textbox")).toHaveStyle("borderColor: black");
  });
});
