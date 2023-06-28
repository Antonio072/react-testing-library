import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput component", () => {

    test("Should render input element", () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    })
    
    test("Should be able to type into input", () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, {target: {value: "Go grocery shopping"}})
        expect(inputElement.value).toBe("Go grocery shopping");
    })
    
    test("Should clean input", () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, {target: {value: "Go grocery shopping"}})
        expect(inputElement.value).toBe("Go grocery shopping");

        const buttonElement = screen.getByRole("button", {name: /add/i});
        buttonElement.click();

        expect(inputElement.value).toBe("");
    })
})

