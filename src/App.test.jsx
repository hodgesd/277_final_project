import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders correctly", () => {
  render(<App />);
  expect(screen.getByText("Basketball Head2Head")).toBeInTheDocument();
  // expect(screen.getByText("Player 2")).toBeInTheDocument();
});
