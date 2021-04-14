

import Avengers from '../../images/avengers.png';
import { Link } from "react-router-dom";
import './booking.css';
import Navbar from '../../navbar';

const Product = () => {
 return (
   <div>
   <Navbar/>
   <div className="Payment">
   <h2>payment section</h2>
   </div>
    <div className="product">
      <img src={Avengers} alt=""avengers/>

      <div className="product__info">
        
        <p className="info__price">Rs :1000</p>
        

      </div>
      
     <Link to={'/BookedAvengers'} className="Bookingbutton">
          payment
        </Link>
        </div>
        <div className="Home">
        <Link to="/home">
        <button type="button" className="button" >
             Back to Home
        </button>
    </Link>
    </div>
          
    </div>
  );
};

export default Product;
