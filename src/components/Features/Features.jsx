import { Link } from "react-router-dom";
import "./features.css";
const Features = ()=>{
    return(
        <div className="collections col-sm-12 col-lg-12">
            <div className="items text-center ">
            <Link to="/foods" className="foods">
                <img  src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?w=740&t=st=1702290706~exp=1702291306~hmac=142c927f2ef183a781cb8c66f7c5d5b71c557fd84f7511b10d20d97c51f49c80" alt="food picture" />
            </Link> <br />
            <Link  to="/foods">Food</Link>
        </div>

        <div  className="items text-center ">
            <Link to="/snacks" className="foods">
                <img src="https://img.freepik.com/free-photo/fried-chicken-with-grilled-potatoes-eggplants-tomatoes-peppers_140725-7841.jpg?w=740&t=st=1702291663~exp=1702292263~hmac=e81fa1911957e919e10fe098b0d8f1683fdc8e03ebc838f9e7771cc1e6b2498a" />
            </Link> <br />
            <Link  to="/snacks">Snacks</Link>
        </div>

        <div   className="items text-center ">
            <Link to="/drinks" className="foods">
                <img src="https://img.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-42346.jpg?w=740&t=st=1702291894~exp=1702292494~hmac=e9426752e1ac33f6522d35e1d0c5248d7ef0c638385b53b70f99d5808a3e1151" />
            </Link> <br />
            <Link  to="/drinks">Drinks</Link>
        </div>
        </div>
    )
}

export default Features;