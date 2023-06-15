import React from "react";

const Contact = () => {
  function createLabelwithInput(name, fors, inputType) {
    return (
      <>
        <label for={fors} className="d-block">
          {name}
        </label>
        <input type={inputType} className="form-control" id={fors} />
      </>
    );
  }
  return (
    <div>
      <div className="row shadow card container justify-content-center mx-auto p-5 my-5 g-3">
        <div className="col-md-12">
          <h5 className="text-danger">
            <u>Contact Us</u>
          </h5>
        </div>
        <div className="col-md-12">
          {createLabelwithInput("Name", "name", "text")}
        </div>
        <div className="col-md-12">
          {createLabelwithInput("Email", "email", "email")}
        </div>
        <div className="col-md-12">
          {createLabelwithInput("Phone", "phone", "number")}
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-outline-danger">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
