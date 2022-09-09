import './App.css'
import Navbar from "./Navbar"
import axios from "axios"
// Routes
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>

            </Router>
        </div>
    );
}

export default App;
