import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter as Router } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <Router>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </Router>
  );
};

describe("TodoFooter", () => {
    test("Should render the correct number of incomplete tasks", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/);
        expect(paragraphElement).toBeInTheDocument();
      });
      
      test('Should render "task" when task is 1', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={1} />);
          const paragraphElement = screen.getByText(/1 task left/);
          expect(paragraphElement).toBeInTheDocument();
        });
      
      test('Should be visible', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={1} />);
          const paragraphElement = screen.getByText(/1 task left/);
          expect(paragraphElement).toBeVisible();
      });
      
      test('Should contain a <p> tag', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={1} />);
          const paragraphElement = screen.getByText(/1 task left/);
          expect(paragraphElement).toContainHTML("p");
      });
      
      test('Should contain text content', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={2} />);
          const paragraphElement = screen.getByTestId("incomplete-task-label")
          expect(paragraphElement).toHaveTextContent("2 tasks left");
      });
      
      test('Should not contain "tasks"', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={2} />);
          const paragraphElement = screen.getByTestId("incomplete-task-label")
          expect(paragraphElement).not.toHaveTextContent("2 task left");
      });
      
      test('Should text to be "1 task left"', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={1} />);
          const paragraphElement = screen.getByTestId("incomplete-task-label")
          expect(paragraphElement.textContent).toBe("1 task left");
      });

    });