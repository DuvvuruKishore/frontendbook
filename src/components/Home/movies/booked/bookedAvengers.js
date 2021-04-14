import Avengers from '../../images/avengers.png';
import { Link } from "react-router-dom";
import './booked.css';
import Navbar from '../../navbar';

const Product = () => {
  return (
    <div>
    <Navbar/>
    <div className="Booked">
      <img src={Avengers} alt="deadpool"/>
      <h4>Avengers ticket booked</h4>

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
