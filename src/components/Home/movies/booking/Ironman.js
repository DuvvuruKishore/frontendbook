import Ironman from '../../images/Ironman.png';
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
      <img src={Ironman} alt="Ironman"/>

      <div className="product__info">
        
        <p className="info__price">Rs:300</p>
        

      </div>
      <Link to={'/BookedIronman'} className="Bookingbutton">
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
