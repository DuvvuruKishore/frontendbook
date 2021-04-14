import Joker from '../../images/joker.png';
import { Link } from "react-router-dom";
import './booked.css';

const Product = () => {
  return (
    <div>
    <div className="Booked">
      <img src={Joker} alt="Joker"/>
      <h4>Joker ticket booked</h4>

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
