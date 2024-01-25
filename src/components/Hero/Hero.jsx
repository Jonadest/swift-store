import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4">
      <div className="d-lg-flex align-items-center">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 pt-5 ">
            Welcome to <span>Swift Buy, </span>
            Your Ultimate Campus Dining Experience!
          </h1>
          <p className="lead py-4 ">
            Discover a diverse range of mouth-watering dishes, refreshing
            drinks, and tempting snacks. Explore our menu and get ready to
            embark on a culinary journey that caters to the vibrant tastes of
            university life.
          </p>

          <div className="cta d-flex flex-column flex-lg-row gap-3  flex-sm-wrap my-lg-5">
            <div className="d-grid gap-2 d-md-flex justify-content-md-start ">
              <Search />
            </div>

            <div className="">
              <Link className="nav-link" to="/cart">
                <i class="fa-solid fa-cart-shopping fs-3 cart"> See Cart </i>
              </Link>
            </div>
          </div>
        </div>

        <Carousel />
      </div>
    </div>
  );
};

export default Hero;
