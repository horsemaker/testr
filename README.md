# testr

react testing

---

## Anatomy of a Test

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

---

## Test Driven Development (TDD)

TDD is a software development process where you write tests before writing the software code.

Once the tests have been written, you write the code to ensure the tests pass

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run the tests successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue to pass

Also called red-green testing as all tests go from a red failed state to a green passed state.

---

## Jest Watch Mode

Watch mode is an option that we can pass to Jest asking to watch files that have changed since the last commit and execute tests related only to those changed files.

An optimization designed to make your tests run fast regardless of the many tests you have.

---

## `skip` & `only`

- `test.skip()` => skips that particular test
- `test.only()` => tests only that particular test

## `describe`

`describe(name, fn)`

- The first argument is the group name
- The second argument is a function that contains the expectations to test

1. You can use `skip` & `only` with a `describe` block too. The behavior remains same as it was with `test`.
2. You can nest a `describe` block inside other `describe` block. This can be used to create heirarchy.

---

## Filename Conventions

- Files with `.test.js` or `test.tsx` suffix.
- Files with `spec.js` or `spec.tsx` suffix.
- Files with `.js` or `.tsx` suffix in `__tests__` folders.

Recommendation is to always put your tests next to code they are testing so that relative imports are shorter.

---

## `it`

- You can use `it` instead of `test`.
- `test.only()` => `fit()`
- `test.skip()` => `xit()`

---

## Code Coverage

A metric that can help you understand how much of your software code is tested.

- **Statement coverage**: how many of the statements in the software code have been executed
- **Branches coverage**: how many of the branches of the control structures (if statements for instance) have been executed
- **Function coverage**: how many of the functions defined have been called and finally
- **Line coverage**: how many lines of source code have been tested

---

## Assertions

When writing tests, we often need to check that values meet certain conditions.

### `expect`

`expect(value)`

- The argument should be the value that your code produces
- Typically, you will use `expect` along with a `matcher` function to assert something about a value.
- A `matcher` can optionally accept an argument which is the correct expected value.

---

## What to test?

1. Test component renders
2. Test component renders with props
3. Test component renders indifferent states
4. Test component reacts to events

## What not to test?

1. Implementation details
2. Third party code
3. Code that is not important from a user point of view

---

## RTL Queries

Every test we write generally involves the following basic steps:

1. Render the component
2. Find an element rendered by the component
3. Assert against the element found in step 2 which will pass or fail the test

To render the component, we use the render method from RTL.

For assertion, we use `expect` passing in a value and combine it with a `matcher` function from `jest` or `jest-dom`.

Queries are the methods that Testing Library provides to find elements on the page.

To find a single element on the page, we have

- `getBy...`
- `queryBy...`
- `findBy...`

To find multiple elements on the page, we have

- `getAllBy...`
- `queryAllBy...`
- `findAllBy...`

The suffix can be one of `Role`, `LabelText`, `PlaceHolderText`, `Text`, `DisplayValue`, `AltText`, `Title` and finally `TestId`.

### `getBy...` queries

`getBy...` class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.

---

## getByRole

`getByRole` queries for elements with the given role.

Role refers to **ARIA (Accessible Rich Internet Applications)** role which provides semantic meaning to content to ensure people using assistive technologies are able to use them.

By default, many semantic elements in HTML have a role. Button element (`<button>`) have a button role, anchor element (`<a>`) has a link role, `<h1>` to `<h6>` elements have a heading role, checkboxes have a checkbox role, radio buttons have a radio role & so on.

If you're working with elements that do not have a default role or if you want to specify a different role, the `role` attribute can be used to add the desired role.

To use anchor element as a button in the navbar, you can add `role='button'`.

### Options

**_name_**

The accessibble name is for simple cases equal to

1. the label of a form element
2. the text content of a button
3. the value of the `aria-label` attribute

**_level_**

**_hidden_**

**_selected_**

**_checked_**

**_pressed_**

## getByLabelText

`getByLabelText` will search for the label that matches the given text, then find the element associated with that label.

**_selector_**

In case there are 2 or more labels with similar text.

## References

- [Using Matchers](https://jestjs.io/docs/using-matchers)
- [Custom Jest Matchers - Jest DOM](https://github.com/testing-library/jest-dom)
- [Queries `getByRole`](https://testing-library.com/docs/queries/byrole)
