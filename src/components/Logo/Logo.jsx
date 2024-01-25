import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo-box">
      <Link to="/">
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1706140800&semt=ais"
          alt="logo"
          className=" logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
