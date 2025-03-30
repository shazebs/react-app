import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Underground from "./pages/Underground";

const AppRoutes:React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/underground" element={<Underground />} />
            <Route path="/notes" element={<Notes />} />
        </Routes>
    );
};

export default AppRoutes;