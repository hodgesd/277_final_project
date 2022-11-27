import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  it("renders a label and an input field", () => {
    render(
      <Input
        label="Player 1"
        id="player1"
        onClick={console.log("Button 1 clicked")}
      />
    );
    const label = screen.getByText("Player 1:");
    const input = screen.getByLabelText("Player 1:");
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(
      <Input
        label="Player 1"
        id="player1"
        onClick={console.log("Button 1 clicked")}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
