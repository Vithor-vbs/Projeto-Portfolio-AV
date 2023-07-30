import React from "react";
import "./AnimatedRoutes.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AboutUs_Page } from "./components/Pages/AboutUs-Page/AboutUs_Page";
import { AnimatePresence } from "framer-motion";
import { HomePage } from "./components/HomePage";

export default function transition() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/aboutUs" element={<AboutUs_Page />} />
        <Route index element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}
