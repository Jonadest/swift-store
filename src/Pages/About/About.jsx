import Logo from "../../components/Logo/Logo";
import "../About/about.css";

const About = ()=>{
    return(
       <div className="about ">
      

       <div className="about-wrapper col-11 col-lg-8 my-5">

    <div className=" about-text col-12 col-lg-6   px-sm-5  ">
    <h1 className="text-center">About</h1>
    
        <p className="textP ">At Swift Buy, we believe that a great meal has the power to bring people together. Our passion for delicious food and exceptional service is at the heart of everything we do. Established with the vision of creating a culinary experience that transcends the ordinary, Swift Buy is your go-to destination for mouthwatering delights.</p>
        <div className="text-center">
        <Logo/>
        </div>
        </div>
       

        <div className=" image-box d-lg-block d-none col-12 col-lg-6">
        </div>
       
        
         
       </div>
       </div>
    )
}

export default About;