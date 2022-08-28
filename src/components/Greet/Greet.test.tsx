/**
 * Greet should render the text hello and if a name is passed into the component it should render hello followed by the name.
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Yash" />);
  const textElement = screen.getByText("Hello Yash");
  expect(textElement).toBeInTheDocument();
});
