import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes.tsx";
import AnimatedCursor from "./components/Animation/AnimatedCursor.tsx";

export function App() {
  return (
    <div className="App">
      <Router>
        <AnimatedCursor />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}
