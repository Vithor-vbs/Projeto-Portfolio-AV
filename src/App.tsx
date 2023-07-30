import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AboutUs_Page } from "./components/Pages/AboutUs-Page/AboutUs_Page";
import { HomePage } from "./components/HomePage";
import "./AnimatedRoutes.css";

import AnimatedRoutes from "./AnimatedRoutes.tsx";

export function App() {
  return (
    <div className="App">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}
