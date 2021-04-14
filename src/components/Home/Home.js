import React from 'react'
import Movie1 from './movies/movie1';
import './Home.css';
import Movie2 from './movies/Movie2';
import Movie3 from './movies/Movie3';
import Movie4 from './movies/movie4';
import Movie5 from './movies/movie5';
import Movie6 from './movies/movie6';
import Navbar from './navbar';

const Home=()=> {
    return (
        <div >
             <Navbar/>
            <h1>Home</h1>
            <div className="home">
            <Movie1/>
            <Movie2/>
            <Movie3/>
            
            </div>
            <div className="home">
            <Movie4/>
            <Movie5/>
            <Movie6/>
            
            </div>
          
            </div>
    )
}

export default Home
