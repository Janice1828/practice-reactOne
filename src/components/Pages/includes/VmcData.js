import React from "react";
const vmcData = (props) => {
  return (
    <>
      <div className="card shadow">
        <div className="card-head">{props.title}</div>
        <div className="card-body">{props.para}</div>
      </div>
    </>
  );
};

export default vmcData;
