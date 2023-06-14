import React from "react";
import ErrorImg from "../images/erorr.jpg";

const Error = () => {
  return (
    <div>
      <img src={ErrorImg} alt="404 Error!" className="img-fluid" />
    </div>
  );
};

export default Error;
