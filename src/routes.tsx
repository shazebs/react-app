import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Notes from "./pages/Notes";
import Underground from "./pages/Underground";

const AppRoutes:React.FC = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/underground" element={<Underground />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;