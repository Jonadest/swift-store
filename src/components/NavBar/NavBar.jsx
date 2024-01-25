import "../Header/header.css";
import Menu from "../Menu/Menu";


const NavBar = ()=>{
  return(
    <nav className="navbar navbar-expand-lg  bg-custom text-center " >
      
  <div className=" text-center ">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Menu/>
      
    </div>
  </div>
</nav>
  )
}

export default NavBar;