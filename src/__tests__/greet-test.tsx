import { render, screen } from "@testing-library/react";
import { Greet } from "../components/Greet/Greet";

describe("Greet without name", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("This is sample nesting of describe", () => {
    test("nested test renders correctly", () => {
      render(<Greet />);
      const textElement = screen.getByText("Hello");
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Greet with name", () => {
  test("renders with the name Yash", () => {
    render(<Greet name="Yash" />);
    const textElement = screen.getByText("Hello Yash");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with the name Codevolution", () => {
    render(<Greet name="Codevolution" />);
    const textElement = screen.getByText("Hello Codevolution");
    expect(textElement).toBeInTheDocument();
  });
});
