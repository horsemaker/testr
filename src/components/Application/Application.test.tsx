import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // page heading element
    const pageHading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHading).toBeInTheDocument();

    // section heading element
    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    // input element
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    // textarea element
    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

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
