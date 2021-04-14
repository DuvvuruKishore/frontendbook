import React from 'react';
import './movie.css'
import { Link } from "react-router-dom";
import Joker from '../images/joker.png';


const movie3=()=> {
  return (
    <div className="product">
      <img src={Joker} alt="joker" />

      <div className="product__info">
        <p className="info__name">Joker</p>

        <p className="info__description">In Gotham City, mentally troubled comedian Arthur Fleck is 
        disregarded and mistreated by society.This path brings him face-to-face with his alter-ego</p>

        <Link to={'/Joker'} className="info__button">
          Book
        </Link>
      </div>
    </div>
  );
};

export default movie3;
