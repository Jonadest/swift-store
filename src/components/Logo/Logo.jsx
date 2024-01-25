import { Link } from "react-router-dom";
import logo from "@/images/logo.png";
const Logo = () => {
  return (
    <div className="logo-box">
      <Link to="/">
        <img src={logo} alt="logo" className=" logo" />
      </Link>
    </div>
  );
};

export default Logo;
