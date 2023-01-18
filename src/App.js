import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import { Bookingpage } from "./components/Bookingpage";
import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./api.js";
import { ConfirmedBookin } from "./components/ConfirmedBookin";
import { useNavigate } from "react-router-dom";

function App() {
    const [availableTime, setAvailableTime] = useReducer(
        updateTimes,
        initialTimes()
    );
    const navigate = useNavigate();
    function updateTimes(state, action) {
        return { times: fetchAPI(new Date(action)) };
    }
    function initialTimes() {
        const times = { times: fetchAPI(new Date()) };
        console.log(times);
        return times;
    }
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmedBooking");
        }
    }
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                    path="/booking"
                    element={
                        <Bookingpage
                            availableTime={availableTime}
                            setAvailableTime={setAvailableTime}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmedBooking" element={<ConfirmedBookin />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
