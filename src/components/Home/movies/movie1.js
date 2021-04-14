import React from 'react';
import './movie.css';
import { Link } from "react-router-dom";
import image from '../images/avengers.png';


const movie1=()=> {
  return (
    <div className="product">
      <img src={image} alt="avengers" />

      <div className="product__info">
        <p className="info__name">Avengers</p>

        <p className="info__description"> The Avengers, is a 2012 American superhero film based on the Marvel Comics
         superhero team of the same name.</p>

        <Link to={'/BookAvengers'} className="info__button">
          Book
        </Link>
      </div>
    </div>
  );
};

export default movie1;
