import { render, screen, fireEvent } from '@testing-library/react'
import Todo from '../Todo'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo></Todo>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i })

    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task} })
        buttonElement.click()
    });
}

describe('Todo Component', () => {

    test("Should render the correct content", () => {
        render(<MockTodo />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", { name: /Add/i })
        const paragraphElement = screen.getByText(/0 tasks left/i)
        expect(inputElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
        expect(paragraphElement).toBeInTheDocument()
    })

    test("Should add Go grocery shopping to the list", () => {
        render(<MockTodo />)
        addTask(["Go grocery shopping"])

        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).toBeInTheDocument()
        let paragraphElement = screen.getByText(/1 task left/i)
        expect(paragraphElement).toHaveTextContent("1 task left")
    })

    test("Should add 2 tasks to the list", () => {
        render(<MockTodo />)
        addTask(["Go grocery shopping", "Wash hands"])

        let divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(2)
    })

    test("Task should not have been completed when initially added", () => {
        render(<MockTodo />)

        addTask(["Go grocery shopping", "Wash hands"])
        let tasks = screen.getAllByTestId("task-container")
        tasks.forEach(task => {
            expect(task).not.toHaveClass("todo-item-active")
        })
    })

    test("Task should be completed when clicked", () => {
        render(<MockTodo />)

        addTask(["Go grocery shopping", "Wash hands"])
        let tasks = screen.getAllByTestId("task-container")
        tasks.forEach(task => {
            fireEvent.click(task)
            expect(task).toHaveClass("todo-item-active")
        })
    })
})