import React from "react";
const VmcData = (props) => {
  return (
    <>
      <div
        className="card shadow p-3 w-25 d-flex flex-column align-items-center justify-content-center"
        id={props.cardId}
      >
        <div className="card-head">
          <h6 className="text-danger">{props.title}</h6>
        </div>
        <div className="card-body text-center">{props.para}</div>
      </div>
    </>
  );
};

export default VmcData;
