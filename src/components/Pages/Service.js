import React from "react";
import Servicecard from "./includes/Servicecard";
import Servicedata from "./includes/Servicedata";
const Service = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center p-5">
        <h1 className="companyTitle">Our Services</h1>
        <p className="border-para"></p>
      </div>
      <div className="d-flex gap-5 justify-content-center">
        {Servicedata.map((value, index) => {
          return (
            <Servicecard
              imgSrc={value.imgsrc}
              heading={value.heading}
              buttonName={value.buttonName}
              paragraph={value.paragraph}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
