import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet without name", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  describe("This is sample nesting of describe", () => {
    it("nested test renders correctly", () => {
      render(<Greet />);
      const textElement = screen.getByText(/Hello/);
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Greet with name", () => {
  it("renders with the name Yash", () => {
    render(<Greet name="Yash" />);
    const textElement = screen.getByText("Hello Yash");
    expect(textElement).toBeInTheDocument();
  });

  it("renders with the name Codevolution", () => {
    render(<Greet name="Codevolution" />);
    const textElement = screen.getByText("Hello Codevolution");
    expect(textElement).toBeInTheDocument();
  });
});
