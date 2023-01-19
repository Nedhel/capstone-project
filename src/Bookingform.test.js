import { fireEvent, render, screen } from "@testing-library/react";
import Bookingform from "../src/components/Bookingform";

test("Test reduce function", () => {
    const setAvailableTime = jest.fn();
    render(
        <Bookingform
            availableTime={{ times: ["17:00"] }}
            setAvailableTime={setAvailableTime}
        />
    );
    const date = screen.getByLabelText(/Choose date/);
    const time = screen.getByLabelText(/Choose time/);
    const guests = screen.getByLabelText(/Number of guests/);

    expect(date).toHaveAttribute("required");
    expect(time).toHaveAttribute("required");
    expect(guests).toHaveAttribute("required");
});
