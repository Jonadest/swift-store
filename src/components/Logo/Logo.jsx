import { Link } from "react-router-dom";
import webLogo from "../Logo/logo.png";

const Logo = () => {
  return (
    <div className="logo-box">
      <Link to="/">
        <img src={webLogo} alt="logo" className=" logo" />
      </Link>
    </div>
  );
};

export default Logo;
