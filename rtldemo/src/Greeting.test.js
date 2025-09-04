import React from "react";

import { render,screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders  greeting with name', () => { 
    render(<Greeting/>)
    const headingElement = screen.getByText(/Hello,Pranav/i)
    expect(headingElement).toBeInTheDocument();
})