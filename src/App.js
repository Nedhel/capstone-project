import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import { Bookingpage } from "./components/Bookingpage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<Bookingpage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
