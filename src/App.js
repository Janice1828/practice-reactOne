import React from "react";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
};

export default App;
