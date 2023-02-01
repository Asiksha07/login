import React from "react";
import './HotelList.css'
import Hotelig from './Hotel.jpg'

import logo from '../pages/logo.png';
import support from '../pages/support.png';
import gift from '../pages/gift.png';
import Trichy from './Trichy hotel.jpg';
import { Link } from 'react-router-dom';




function Hotel(){
    return(
     <div className="start">
<div>
<nav class="navbar nav fixed-top ">
              
              <a class="navbar-brand logo"><img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>Start Travelling</a>


              <form class="form-inline">
                  <a ><img src={gift} width="20" height="20" class="d-inline-block align-top" alt=""></img> offers</a>
                  <a><img src={support} width="20" height="20" class="d-inline-block align-top" alt=""></img>  support</a>
                  <a class="navbar-brand"></a>
                  <Link exact to="/Registerpage">
                  <button class="btn btn-primary" type="submit">signin/signup</button>
                  </Link>
              </form>
          </nav>
          </div>
        

          <div className="start1">
       <img src={Hotelig} alt="#"></img>  
       <div class="overlay">ENJOY YOUR DREAM VACCATION</div>
        </div>
       <div className="start2">
<div className="star1">
<img src={Trichy} alt="#"></img>  
</div>
<div className="start3">


 
     <div class="tyt">Custom column padding</div>
   
      <div class="tyt">Custom column padding</div>
    
  

</div>

       </div>

     </div>
    );
}
export default Hotel;