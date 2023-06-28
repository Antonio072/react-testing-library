import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Should render same text passed into title prop', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

test('Should render by role as heading and with My header title', () => {
    render(<Header title="My header"/>);
    const headingElement = screen.getByRole("heading", {name: "My header"});
    expect(headingElement).toBeInTheDocument();
});

test('Should render', () => {
    render(<Header title="My header"/>);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
});

test('Should render header-1 test id tag', () => {
    render(<Header title="My header"/>);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});

// Find by

it("Should find by the element", async () => {
    render(<Header title="My header"/>);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();

})

// Query by

it("Should not find by the element using queryBy", async () => {
    render(<Header title="My header"/>);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
})

// Get all by

it("Should find all elements with the same role", async () => {
    render(<Header title="My header"/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
})