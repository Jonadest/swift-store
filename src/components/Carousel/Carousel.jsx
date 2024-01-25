import "../Carousel/carousel.css";
import CarouselImage from "../Carousel/Images/delivery.jpg";
import CarouselImage1 from "../Carousel/Images/drinks.jpg";
import CarouselImage2 from "../Carousel/Images/eating.jpg";
import CarouselImage3 from "../Carousel/Images/rice.jpg";
import CarouselImage4 from "../Carousel/Images/snacks.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      touch
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={CarouselImage} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={CarouselImage1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={CarouselImage2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={CarouselImage3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={CarouselImage4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
