import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import BookAvengers from './components/Home/movies/booking/BookAvengers';
import DeadPool from './components/Home/movies/booking/Deadpool';
import Joker from './components/Home/movies/booking/Joker';
import Ironman from './components/Home/movies/booking/Ironman';
import Batman from './components/Home/movies/booking/Batman';
import Spiderman from './components/Home/movies/booking/Spiderman';
import BookedAvengers from './components/Home/movies/booked/bookedAvengers';
import BookedBatman from './components/Home/movies/booked/bookedBatman';
import BookedDeadpool from './components/Home/movies/booked/bookedDeapool';
import BookedJoker from './components/Home/movies/booked/bookedJoker';
import BookedSpiderman from './components/Home/movies/booked/bookedSpiderman';
import BookedIronman from './components/Home/movies/booked/booledIronman';
import Navbar from './components/Home/navbar';

const App=()=> {
  return (
  
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Auth}/>
    <Route path="/home" exact component={Home}/>
    <Route path='/BookAvengers' exact component={BookAvengers}/>
    <Route path='/DeadPool' exact component={DeadPool}/>
    <Route path='/Joker' exact component={Joker}/>
    <Route path='/Ironman' exact component={Ironman}/>
    <Route path='/Batman' exact component={Batman}/>
    <Route path='/Spiderman' exact component={Spiderman}/>
    <Route path='/BookedAvengers' exact component={BookedAvengers}/>
    <Route path='/BookedBatman' exact component={BookedBatman}/>
    <Route path='/BookedDeadpool' exact component={BookedDeadpool}/>
    <Route path='/BookedJoker' exact component={BookedJoker}/>
    <Route path='/BookedSpiderman' exact component={BookedSpiderman}/>
    <Route path='/BookedIronman' exact component={BookedIronman}/>
    </Switch>
    </BrowserRouter>
    );
}

export default App;
