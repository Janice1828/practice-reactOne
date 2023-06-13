import React from "react";
import Navbar from "./components/Pages/includes/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
