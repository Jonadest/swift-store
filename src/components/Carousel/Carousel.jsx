import "../Carousel/carousel.css";
import CarouselImage from "../Carousel/Images/delivery.jpg";
import CarouselImage1 from "../Carousel/Images/drinks.jpg";
import CarouselImage2 from "../Carousel/Images/eating.jpg";
import CarouselImage3 from "../Carousel/Images/rice.jpg";
import CarouselImage4 from "../Carousel/Images/snacks.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide "
      data-bs-ride="carousel "
    >
      <div class="carousel-inner ">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={CarouselImage} class="d-block  w-75 mx-auto" alt="..." />
        </div>

        <div class="carousel-item" data-bs-interval="2000">
          <img src={CarouselImage1} class="d-block  w-75 mx-auto" alt="..." />
        </div>

        <div class="carousel-item">
          <img src={CarouselImage2} class="d-block  w-75 mx-auto" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={CarouselImage3} class="d-block  w-75 mx-auto" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={CarouselImage4} class="d-block  w-75 mx-auto" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next  "
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
