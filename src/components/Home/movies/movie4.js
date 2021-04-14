import React from 'react';
import './movie.css'
import { Link } from "react-router-dom";
import Spiderman from '../images/spiderman.png';


const movie4=()=> {
  return (
    <div className="product">
      <img src={Spiderman} alt="spiderman" />

      <div className="product__info">
        <p className="info__name">Spiderman</p>

        <p className="info__description">Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.</p>

        <Link to={'/Spiderman'} className="info__button">
          Book
        </Link>
      </div>
    </div>
  );
};

export default movie4;
