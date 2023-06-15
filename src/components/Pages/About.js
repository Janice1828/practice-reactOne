import React from "react";
import Vmc from "./includes/Vmc";
const About = () => {
  return (
    <div>
      <div className="container d-flex flex-column mt-4 py-4">
        <h2 className="companyTitle">Our Company</h2>
        <p className="border-para"></p>

        <p className="paraHome">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          ea. Exercitationem eveniet explicabo voluptas. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Nobis itaque iste, qui praesentium
          harum maxime odio id commodi deserunt incidunt harum maxime odio id
          commodi deserunt incidunt.
        </p>
        <button type="" className="btn-warning btn py-2 text-light" id="butto">
          Read More
        </button>
      </div>
      <Vmc />
    </div>
  );
};

export default About;
