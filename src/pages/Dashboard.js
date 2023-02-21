
import chris from './Images/new.gif';
import logo from './logo.png'
import img1 from'../pages/Images/Kerala.jpg';
import img2 from'../pages/Images/Kerala1.jpg';
import img3 from'../pages/Images/Horse.jpg';
import img4 from'../pages/Images/Snow.jpg';
import img5 from'../pages/Images/jaipurrajs.jpg';
import img6 from'../pages/Images/Tajmahal.jpg';
import img7 from'../pages/Images/Temple.jpg';
import img8 from'../pages/Images/Kanniya.jpg';
import img9 from'../pages/Images/tamilnadu.jpg';
import img10 from'../pages/Images/ooty.jpg';
import Navcomp from '../components/Navcomponent';
// import { Container, Row, Col,CCard} from 'react-bootstrap';
import './Dashboard.css'
import { Link } from 'react-router-dom';
function Dashboard() {
  
    return (
        <div className='Main'>


          <Navcomp></Navcomp>


            <div className='cont'>

                <img src={chris} className="imge"></img>
                <div class="container  lab">
                    {/* <nav class="navbar navbar-expand-lg navi "> */}
                    <a href="/MainTourpackage" class="list-group-item list-group-item-action labl sell ">Tour packages</a>
                        <a href="/HotelList" class="list-group-item list-group-item-action labl select ">Hotels</a>
                       
                        <a href="#" class="list-group-item list-group-item-action labl sel">Car Rental</a>
                        {/* <a href="#" class="list-group-item list-group-item-action labl sel">Boat House</a> */}
                        <a href="#" class="list-group-item list-group-item-action labl sel">Visit</a>

                    {/* </nav> */}
                   
                </div>
                
            </div>

            
< div className='car'>
  <form className='incar'>
    <div className='car1'> 
    <h1>Our Exciting packages for the season</h1>   
    </div>
    <div className='car2'> 
    <Link exact to="/Keralapack">
   <img src={img1} className='imgt' alt=''></img>
   <div class="overlayy">KERALA</div>
   </Link>
    </div>
    
    <div className='car3'>  
    <img src={img2} className='imgt' alt=''></img>
    <div class="overlayy">00TY</div>
    
    </div>
    <div className='car4'>  
    <img src={img3} className='imgt' alt=''></img>
    <div class="overlayy">RAJASTHAN</div>
    </div>

  </form>
</div>

< div className='crd'>
  <form className='incar'>
    <div className='crd1'> 
    <img src={img4} className='imgt' alt=''></img>
    <div class="overlayy">HIMALAYAS</div>
    </div>
    <div className='car2'> 
    <img src={img5} className='imgt' alt=''></img>
    <div class="overlayy">AMBER PALACE</div>
    </div>
    <div className='car3'>   
    <img src={img6} className='imgt' alt=''></img>
    <div class="overlayy">TAJ MAHAL</div>
    </div>
    <div className='car4'>   
    <img src={img7} className='imgt' alt=''></img>
    <div class="overlayy">SRIVILLIPUTHUR</div>
    </div>

  </form>
</div>

< div className='crd'>
  <form className='incar'>
    <div className='crd2'> 
    <img src={img8} className='imgtt' alt=''></img>
    <div class="overlayss">KANNIYAKUMARI</div>
     </div>
   
    <div className='car3'>   
    <img src={img9} className='imgt' alt=''></img>
    <div class="overlays">RANGANATHA SWAMY TEMPLE</div>
    </div>
    <div className='car4'>   
    <img src={img10} className='imgt' alt=''></img>
    <div class="overlayy">My Name is John</div>
    </div>

  </form>
</div>
<div>
  .
</div>
<div>
<nav class="navbar sticky-bottom navbar-light bg-light footer">
                <a class="navbar-brand logo"><img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>Start Travelling</a>


                <form class="form-inline">
                   
                </form>
            </nav>
</div>

        </div>
    )
}
export default Dashboard;