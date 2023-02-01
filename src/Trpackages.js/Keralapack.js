import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



import './Kerala.css';
import logo from '../pages/logo.png';
import support from '../pages/support.png';
import gift from '../pages/gift.png';
import kerala from '../pages/Images/Kerala.jpg';
import offer from '../pages/Images/offer.png';
import ksl2 from '../pages/Images/Ksl2.jpg';
import ksl3 from '../pages/Images/ksl4.jpg';
import { Link } from 'react-router-dom';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button" className="click"
        style={{ backgroundColor: '#ffce11' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
function Keralapack() {
  
  


    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className="Main">
            <nav class="navbar sticky-top navbar-light bg-light">
              
            
      
    
                <a class="navbar-brand logo"><img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>Start Travelling</a>


                <form class="form-inline">
                    <a ><img src={gift} width="20" height="20" class="d-inline-block align-top" alt=""></img> offers</a>
                    <a><img src={support} width="20" height="20" class="d-inline-block align-top" alt=""></img>  support</a>
                    <a class="navbar-brand"></a>
                    <button class="btn btn-primary" type="submit">signin/signup</button>
                </form>
            </nav>
            
            <div className="h">
                <h3>4-days Kerala tour</h3>
            </div>

            <div className="head">

                <form className="heading">

                    <div className="image">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block "src={kerala}alt="First slide"/>
         <Carousel.Caption>
          <h3>Kerala Package</h3>
          <p>Begin your trip to Kerala</p>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "src={ksl2}alt="Second slide"/>

        <Carousel.Caption>
          <h3>Boat House</h3>
          <p>Live in water</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={ksl3}alt="Third slide" />

        <Carousel.Caption>
          <h3>Guruvaiyur</h3>
          <p>
            Have an devotional experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                    </div>


                    <div className="box">
                        <div className="price">
                            <div className="price2 ">
                                <h5>Price starts at</h5>
                                <h4 className="float-left mr-2 ml-2" >₹ 6400 </h4>
                                <h6 className="mt-3 ml-2">per person</h6>
                            </div>
                            
                            <Link exact to="/Hotelform">
                            <Button variant="primary" className="Butn">Book Now</Button></Link>
                        </div>
                        <div className="price II">
                            <img src={offer} className="offer"></img>
                        </div>
                    </div>

                </form>
            </div>
            <div className="Description">
                <div className="des">
                    <h1>Tour Description</h1>
                    <p>Set out on this unforgettable trip to uncover the opulence of the Queen of Hill stations. Visit the Botanical Garden for a replenishing start to the tour, cruise on the rejuvenating waters of Ooty lake, enjoy a surreal experience of the Nilgiris from Doddabetta viewpoint.</p>
                    <br />
                    <h1>Places Covered</h1>
                    <p>Chennai to Ooty -Visit Botanical Garden, Boating, Shopping- Night Halt at Ooty. Check out the hotel after breakfast and Visit Doddabettah Tea Estate, After Lunch Leaves for Chennai in the afternoon Night Journey.</p>
                </div>
            </div>

            <div className="down">
            <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1" >View More</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <h4>Botanical Garden</h4>
            <p>The Government Botanical Garden, Udhagamandalam was established in 1848. Its architect was William Graham McIvor. The Gardens, divided into several sections, cover an area of around 55 hectares, and lie on the lower slopes of Doddabetta peak.</p>
            <h4>Boat House</h4>
            <p>Ooty Lake is an artificial lake constructed by John Sullivan, in 1824. Ooty lake is an artificial lake constructed by John Sullivan, in 1824. Tamil Nadu Tourism has the facilities for Boating. An artificially constructed lake on the hills of Nilgiri district, the Ooty Lake is a refreshing place for visitors to play with azure waters. Enjoy a pleasant morning with a sunrise view, hire a paddleboat, give a shot at horse riding or take your kids to a mini train ride.</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      
    </Accordion>
            </div>
            <div className="des2">
             <div className="It">
                <h5>Itinerary</h5>
                <hr></hr>
             </div>
             
             <div className="stl">
             <div class="polaroid rotate_right">
  <img src={ksl3} alt="Pulpit rock" width="284" height="213" />
 
</div>

<div class="polaroid rotate_left">
  <img src={ksl3} alt="Monterosso al Mare" width="284" height="213"/>
 
</div>

             </div>
            </div>
           
        </div>
    );
}
export default Keralapack;