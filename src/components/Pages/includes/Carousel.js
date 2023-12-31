import React from "react";
import CarouselImg from "./education.jpg";
import CarouselImgSecond from "./desert.jpg";
import CarouselImgThird from "./driveways2.jpg";

const Carousel = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={CarouselImg}
              class="d-block w-100"
              alt="..."
              id="carouselImg"
            />
          </div>
          <div class="carousel-item">
            <img
              src={CarouselImgSecond}
              class="d-block w-100"
              alt="..."
              id="carouselImg"
            />
          </div>
          <div class="carousel-item">
            <img
              src={CarouselImgThird}
              class="d-block w-100"
              alt="..."
              id="carouselImg"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
