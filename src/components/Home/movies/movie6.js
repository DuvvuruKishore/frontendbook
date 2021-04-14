import React from 'react';
import './movie.css'
import { Link } from "react-router-dom";
import Batman from '../images/Batman.png';


const movie6=()=> {
  return (
    <div className="product">
      <img src={Batman} alt="batman" />

      <div className="product__info">
        <p className="info__name">Batman</p>

        <p className="info__description">Batman is a superhero who appears in American comic books published by DC Comics.</p>

        <Link to={'/Batman'} className="info__button">
          Book
        </Link>
      </div>
    </div>
  );
};

export default movie6;
