import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // input element
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    // select element/dropdown
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    // checkbox element
    const termsAndConditionsElement = screen.getByRole("checkbox");
    expect(termsAndConditionsElement).toBeInTheDocument();

    // button element
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
