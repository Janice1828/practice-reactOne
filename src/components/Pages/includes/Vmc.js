import React from "react";
import vmcData from "./VmcData";
const Vmc = () => {
  const Vmcdata = [
    {
      title: "Our Vision",
      para: "Our Vision is to make this company larger and broader.",
    },
    {
      title: "Our Mission",
      para: "Our Mission is to complete each and every project before deadline.",
    },
    {
      title: "our Core Values",
      para: "The Core Value of our company is more than you have ever thought.",
    },
  ];
  return (
    <div className="bg-dark bg-opacity-25 py-4">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="companyTitle">Vision, Mission and Values</h1>
        <p className="border-para"></p>
      </div>
      <div>
        बकम
        <div className="bg-danger">
          {Vmcdata.map((val, ind) => {
            return <vmcData key={ind} title={val.title} para={val.para} />;
          })}
        </div>
        asd
      </div>
    </div>
  );
};

export default Vmc;
