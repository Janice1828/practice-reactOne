import React from "react";
import faBars from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-light d-flex align-items-center justify-content-between p-2">
        <div>
          <h1>FROM JENISH</h1>
        </div>
        <div className="d-flex align-items-center">
          <ul className="d-flex gap-3 align-items-center">
            <li className="list-unstyled">
              <NavLink to="/" className="text-decoration-none text-dark">
                Home
              </NavLink>
            </li>
            <li className="list-unstyled">
              <NavLink to="/about" className="text-decoration-none text-dark">
                About
              </NavLink>
            </li>
            <li className="list-unstyled">
              <NavLink to="/contact" className="text-decoration-none text-dark">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
