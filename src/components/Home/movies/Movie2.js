import React from 'react';
import './movie.css'
import { Link } from "react-router-dom";
import image from '../images/deadpool.png';


const movie2=()=> {
  return (
    <div className="product">
      <img src={image} alt="deadpool" />

      <div className="product__info">
        <p className="info__name">DeadPool</p>

        <p className="info__description">Deadpool can't help himself; 
        as long as he's able to breathe he'll crack wise and make fun of himself and those around him.</p>

        <Link to={'/DeadPool'} className="info__button">
          Book
        </Link>
      </div>
    </div>
  );
};

export default movie2;
