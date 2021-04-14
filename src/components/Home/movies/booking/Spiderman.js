import Spiderman from '../../images/spiderman.png';
import { Link } from "react-router-dom";
import './booking.css';

const Product = () => {
  return (
    <div>
    <div className="Payment">
    <h2>payment section</h2>
    </div>
   
    <div className="product">
      <img src={Spiderman} alt="spiderman"/>

      <div className="product__info">
        
        <p className="info__price">Rs:300</p>
        

      </div>
      <Link to={'/BookedSpiderman'} className="Bookingbutton">
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
