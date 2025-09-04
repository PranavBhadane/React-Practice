import React from "react";
import ChangeInput from "./changeinput";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("display the correct greeting", () => {
  const { getByLabelText, getByTestId } = render(<ChangeInput />);
  
  const input = getByLabelText("user-name");
  const greeting = getByTestId("change-input-greeting");

  // Initially
  expect(input.value).toBe("");
  expect(greeting.textContent).toBe("Welcome, Anonymous User!");

  // After typing
  fireEvent.change(input, { target: { value: "pranav" } });
  expect(input.value).toBe("pranav");
  expect(greeting.textContent).toBe("Welcome, pranav");
});
