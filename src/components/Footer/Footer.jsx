import { Link } from "react-router-dom";
import "../Footer/footer.css";

const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return(
        <div className="container-fuild ">
  <footer className="py-5  footer">
    <ul className="nav justify-content-center  pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>

      <li className="nav-item"><Link to="/foods" className="nav-link px-2 text-body-secondary">Foods</Link></li>

      <li className="nav-item"><Link to="/snacks" className="nav-link px-2 text-body-secondary">Snacks</Link></li>

      <li className="nav-item"><Link to="/drinks" className="nav-link px-2 text-body-secondary">Drinks</Link></li>

      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
    </ul> 

    <div className="social-links">
      <a href="#"> <img src="../src/social/facebook.png" alt="" width={30}/></a>
      <a href="#"> <img src="../src/social/google.png" alt="" width={30}/></a>
      <a href="#"> <img src="../src/social/instagram.png" alt="" width={30}/></a>
      <a href="#"> <img src="../src/social/tik.png" alt="" width={30}/></a>
      <a href="#"> <img src="../src/social/youtube.png" alt="" width={30}/></a>
    </div>

    
    <p className="text-center text-body-secondary">© {currentYear} Swift Buy</p>
  </footer>
</div>
    )
}

export default Footer;