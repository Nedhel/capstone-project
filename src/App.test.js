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
    const text = screen.getByLabelText(/Choose date/);

    expect(text).toBeInTheDocument();
});
