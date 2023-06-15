import React from "react";

const Servicecard = (props) => {
  return (
    <div className="card w-25 d-flex justify-content-center shadow">
      <div className="card-body">
        <img src={props.imgSrc} alt="Service Image" className="img-fluid" />
        <hr />
        <h6 className="text-danger">{props.heading}</h6>
        <p>{props.paragraph}</p>
        <button type="" className="btn btn-outline-warning text-dark">
          {props.buttonName}
        </button>
      </div>
    </div>
  );
};

export default Servicecard;
