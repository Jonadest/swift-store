import "./menu.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"



const Menu = ()=>{
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <CustomLink className="nav-link  trans"  to="/">Home</CustomLink>
        </li>
        
        <l className="nav-item">
          <CustomLink className="nav-link trans" to="/foods">Foods</CustomLink>
        </l>

        <li className="nav-item ">
          <CustomLink className="nav-link trans" to="/snacks" role="button" >
            Snacks
          </CustomLink>
          
        </li>
        <li className="nav-item ">
          <CustomLink className="nav-link trans" to="/drinks" role="button" >
            Drinks
          </CustomLink>
        </li>

        <li className="nav-item">
          <CustomLink className="nav-link trans"  to="/about">About</CustomLink>
        </li>

        <li className="nav-item">
          <CustomLink className="nav-link" to="/login"><i class="fa-solid fa-right-to-bracket"></i></CustomLink>
        </li>

        <li className="nav-item">
          <CustomLink className="nav-link" to="/cart"><i class="fa-solid fa-cart-shopping fs-3 cart"></i></CustomLink>
        </li>
       
      </ul>
    )
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active nav-item" : "nav-item"}>
      <Link to={to} className={isActive ? "nav-link active" : "nav-link"} {...props}>
        {children}
      </Link>
    </li>
  )
}


export default Menu;