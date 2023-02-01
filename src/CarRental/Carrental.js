import React from "react";
import logo from '../pages/logo.png';
import support from '../pages/support.png';
import gift from '../pages/gift.png';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import './Carrental.css';
function Carrental(){
    return(
        <div className="carmain">
           <nav class="navbar sticky-top navbar-light bg-light ">
              
            
      
    
              <a class="navbar-brand logo"><img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>Start Travelling</a>


              <form class="form-inline">
                  <a ><img src={gift} width="20" height="20" class="d-inline-block align-top" alt=""></img> offers</a>
                  <a><img src={support} width="20" height="20" class="d-inline-block align-top" alt=""></img>  support</a>
                  <a class="navbar-brand"></a>
                  <button class="btn btn-primary" type="submit">signin/signup</button>
              </form>
          </nav>
           <div className="br">
         
         
           {/* <Form className="fm">
     <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Current Location" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="">
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" placeholder="Enter destination" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>Pick up date</Form.Label>
            <Form.Control type="date" placeholder="" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="">
            <Form.Label>Pick up time</Form.Label>
            <Form.Control type="time" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>Drop date</Form.Label>
            <Form.Control type="date" placeholder="" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="">
            <Form.Label>Drop time</Form.Label>
            <Form.Control type="time" placeholder="" />
          </Form.Group>
        </Row>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>

          </Form>
           */}
           <div className="inb">
isjgisdjlkgjfkjdfkjgv
           </div>
           </div>
        </div>
    );
}
export default Carrental;