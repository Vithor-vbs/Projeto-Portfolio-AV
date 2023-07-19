import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs_Page } from "./components/Pages/AboutUs-Page/AboutUs_Page";

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs_Page />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    </div>
  );
}
