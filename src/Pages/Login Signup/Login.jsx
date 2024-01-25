import { Link } from "react-router-dom";
import "./login.css";



function Login() {
  return (
    <div className="wrapper">
      <div className="login-body d-lg-flex d-flex-sm-colum col-lg-8 mb-4  ">
        
        <div className="img-side d-none d-lg-block">
          <img src="./src/images/login.jpg" alt="" />
          <p className="c-acct text-center "><Link to="/signup"><strong>Create account</strong></Link></p>
        </div>


        <div className="details-side">
          <div className="form">
            <h1>Login <i class="fa-solid fa-right-to-bracket"></i></h1>
           
            <main class="form-signin  m-auto">
  <form>
   
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating mb-4 col-12 col-lg-10 ">
      <input type="email" class="form-control  " id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating col-12 col-lg-10">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class=" bbt col-4  col-lg-6 py-2" type="submit">Sign in</button>
    
    <div className="social">
    <p>Or login with <span>
      
      <img src="./src/social/facebook.png" width={30} alt=""/>

      
      <img src="./src/social/google.png" width={30} alt=""/>

      <img src="./src/social/tik.png" width={30} alt=""/>


      </span></p>
    </div>
    <p className="c-acct lgcc text-center "><Link to="/signup"><strong>Create account</strong></Link></p>
  </form>
</main>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login;
