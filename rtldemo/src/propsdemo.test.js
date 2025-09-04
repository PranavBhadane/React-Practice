import { render, cleanup } from "@testing-library/react";
import PropsDemo from "./propsdemo";

afterEach(() => {
  cleanup();
});

describe("PropsDemo Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<PropsDemo />);
    const headingElement = getByText(/Unit Testing Props/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the correct name props", () => {
    const { getByText } = render(<PropsDemo fullName="Pranav Bhadane" />);
    const nameElement = getByText(/Welcome user-Pranav Bhadane/i);
    expect(nameElement).toBeInTheDocument();
  });
});
