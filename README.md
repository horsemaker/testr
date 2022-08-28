# testr

react testing

# Anatomy of a Test

```tsx
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
```

# Test Driven Development (TDD)

TDD is a software development process where you write tests before writing the software code.

Once the tests have been written, you write the code to ensure the tests pass

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run the tests successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue to pass

Also called red-green testing as all tests go from a red failed state to a green passed state.

# Jest Watch Mode

Watch mode is an option that we can pass to Jest asking to watch files that have changed since the last commit and execute tests related only to those changed files.

An optimization designed to make your tests run fast regardless of the many tests you have.

# `skip` & `only`

- `test.skip()` => skips that particular test
- `test.only()` => tests only that particular test

# `describe`

`describe(name, fn)`

- The first argument is the group name
- The second argument is a function that contains the expectations to test

1. You can use `skip` & `only` with a `describe` block too. The behavior remains same as it was with `test`.
2. You can nest a `describe` block inside other `describe` block. This can be used to create heirarchy.

# Filename Conventions

- Files with `.test.js` or `test.tsx` suffix.
- Files with `spec.js` or `spec.tsx` suffix.
- Files with `.js` or `.tsx` suffix in `__tests__` folders.

Recommendation is to always put your tests next to code they are testing so that relative imports are shorter.

# `it`

- You can use `it` instead of `test`.
- `test.only()` => `fit()`
- `test.skip()` => `xit()`

# Code Coverage

A metric that can help you understand how much of your software code is tested.

- **Statement coverage**: how many of the statements in the software code have been executed
- **Branches coverage**: how many of the branches of the control structures (if statements for instance) have been executed
- **Function coverage**: how many of the functions defined have been called and finally
- **Line coverage**: how many lines of source code have been tested

# Assertions

When writing tests, we often need to check that values meet certain conditions.

## `expect`

`expect(value)`

- The argument should be the value that your code produces
- Typically, you will use `expect` along with a `matcher` function to assert something about a value.
- A `matcher` can optionally accept an argument which is the correct expected value.

# References

- [Using Matchers](https://jestjs.io/docs/using-matchers)
- [Custom Jest Matchers - Jest DOM](https://github.com/testing-library/jest-dom)
