import { cleanup, render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

afterEach(() => {
  cleanup();
});

describe("Test Suite Hello World Comp", () => {
  test("Hello World renders successfully", () => {
    render(<HelloWorld />);
    const element = screen.getByText(/Hello World/i);
    expect(element).toBeInTheDocument();
  });
});