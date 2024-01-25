import { Link } from "react-router-dom";
import "../Footer/footer.css";
import fblogo from "../Social/social/facebook.png";
import googlelogo from "../Social/social/google.png";
import iglogo from "../Social/social/instagram.png";
import tiklogo from "../Social/social/tik.png";
import youtubelogo from "../Social/social/youtube.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container-fuild ">
      <footer className="py-5  footer">
        <ul className="nav justify-content-center  pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/foods" className="nav-link px-2 text-body-secondary">
              Foods
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/snacks" className="nav-link px-2 text-body-secondary">
              Snacks
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/drinks" className="nav-link px-2 text-body-secondary">
              Drinks
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-body-secondary">
              About
            </Link>
          </li>
        </ul>

        <div className="social-links">
          <a href="#">
            <img src={fblogo} alt="" width={30} />
          </a>
          <a href="#">
            <img src={googlelogo} alt="" width={30} />
          </a>
          <a href="#">
            <img src={tiklogo} alt="" width={30} />
          </a>
          <a href="#">
            <img src={iglogo} alt="" width={30} />
          </a>
          <a href="#">
            <img src={youtubelogo} alt="" width={30} />
          </a>
        </div>

        <p className="text-center text-body-secondary">
          © {currentYear} Swift Buy
        </p>
      </footer>
    </div>
  );
};

export default Footer;
