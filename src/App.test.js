import React from "react";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Testing Board functionality", () => {
  test("Clicking a board selects the board", () => {
    // Arrange
    const { container } = render(<App />);
  });
});
