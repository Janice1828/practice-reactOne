import React from "react";
import Carousel from "./includes/Carousel";
import Vmc from "./includes/Vmc";
const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container d-flex flex-column align-items-center mt-4 py-4">
        <h2 className="companyTitle">Our Company</h2>
        <p className="border-para"></p>

        <p className="paraHome text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          ea. Exercitationem eveniet explicabo voluptas. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Nobis itaque iste, qui praesentium
          harum maxime odio id commodi deserunt incidunt harum maxime odio id
          commodi deserunt incidunt.
        </p>
        <button type="" className="btn-warning btn py-2">
          Read More
        </button>
      </div>
      <Vmc />
    </>
  );
};

export default Home;
