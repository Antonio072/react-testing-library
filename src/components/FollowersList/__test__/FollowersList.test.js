import { render, screen } from "@testing-library/react";
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

    test("Renders FollowersList component", async () => {
            render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("followerlist-container");
        expect(followerDivElement).toBeInTheDocument();
    })

    test("Render 1 follower item", async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    })

    test("Render 5 follower items", async () => {
        render(<MockFollowersList />);
        const followerDivElements = await screen.findAllByTestId(/follower-item-/i);
        expect(followerDivElements.length).toBe(5);
    })
})