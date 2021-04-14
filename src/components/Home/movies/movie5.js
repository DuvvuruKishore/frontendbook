import React from 'react';
import './movie.css'
import { Link } from "react-router-dom";
import Ironman from '../images/Ironman.png';


const movie5=()=> {
  return (
    <div className="product">
      <img src={Ironman} alt="Ironman" />

      <div className="product__info">
        <p className="info__name">Ironman</p>

        <p className="info__description"> Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics</p>

        <Link to={'/Ironman'} className="info__button">
          Book
        </Link>
      </div>
    </div>
  );
};

export default movie5;
