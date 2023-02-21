import React from "react";
import './HotelList.css'
import Hotelig from './Hotel.jpg'
import Trichy from './Trichy hotel.jpg';
import Welcome from "../components/Cmpnts";
import Madurai from '../pages/Images/Maduraihotel.jpg';
import Navcomp from '../components/Navcomponent' ;




function Hotel(){
    return(
     <div className="start">
<div>
  <Navcomp/>

          </div>
          <div className="start1">

            <img src={Hotelig} alt="#"></img>
            <div class="overlay">ENJOY YOUR DREAM VACCATION</div>
        </div>
      <Welcome  Trichy={Trichy} Hotelname="Hotel Vinayaga"/>

       <Welcome  Trichy={Madurai} Hotelname="Federal Resort"/> 
       <Welcome/> 
       <Welcome/> 
       <Welcome/> 
       <Welcome/> 
       <Welcome/> 



         
     </div>
    
    );
}

export default Hotel;