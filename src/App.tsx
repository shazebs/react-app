import './App.css';

import { Outlet, BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import AppRoutes from "./routes";

function App() {

  return (
    <>
      <Navigation />
      <Router>
        <AppRoutes />
        <Outlet />
      </Router>
    </>
  )
}

export default App;
