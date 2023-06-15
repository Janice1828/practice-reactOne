import React from "react";
import Navbar from "./components/Pages/includes/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Error from "./components/Pages/Error";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Pages/includes/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
