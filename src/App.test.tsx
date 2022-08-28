import { render, screen } from "@testing-library/react";
import App from "./App";
/** We don't import "test" or "expect". Both "test" & "expect" are methods of Jest that are provided by CRA globally. */

/**
 * test
 *
 * test(name, fn, timeout)
 * - The first argument is the test name used to identify the test.
 * - The second argument is a function that contains the expectations to test.
 * - The third argument is the timeout which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5 seconds.
 */
test("renders learn react link", () => {
  render(<App />);
  // case insensitive regex with the words "learn react"
  const linkElement = screen.getByText(/learn react/i);
  // "toBeInTheDocument" => matcher function => carries out assertion
  expect(linkElement).toBeInTheDocument();
});
