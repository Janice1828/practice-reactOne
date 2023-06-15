import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-dark text-light row w-100 justify-content-center py-5 px-5 footer">
        <div className="col-md-4">
          <h5>Company Information</h5>
          <hr />
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock.
          </p>
        </div>
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <hr />
          <div className="d-flex flex-column">
            <Link to="/" className="text-light text-decoration-none">
              Home
            </Link>
            <Link to="/about" className="text-light text-decoration-none">
              About
            </Link>
            <Link to="/contact" className="text-light text-decoration-none">
              Contact
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <h5>Contact Information</h5>
          <hr />
          <p>Imadol , Lalitpur</p>
          <p>+977 982344354</p>
          <p>testemail@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
