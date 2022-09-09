import './App.css'

import Navbar from "./Navbar"
import Device from "./Device";
import Select from "./Select";
import About from "./About";

import axios from "axios"
// Routes
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <Router>
                <Routes>
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/"
                        element={<Select/>}
                    />
                    <Route
                        path="/kettle"
                        element={<Device field={1} name="Kettle" />}
                    />
                    <Route
                        path="/hairdryer"
                        element={<Device field={2} name="Hair Dryer" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
