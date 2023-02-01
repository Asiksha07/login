import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Hotelform.css'

function Hotelform() {
    return (
<div className="frm">
<h1>Fill it to start Touring</h1>
<div className="frmin">
  
  <Form>
     <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>From</Form.Label>
            <Form.Control type="date" placeholder="Starting date" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="">
            <Form.Label>To</Form.Label>
            <Form.Control type="date" placeholder="Ending date" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control type="Text" placeholder="" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="">
            <Form.Label>Whatsapp No.</Form.Label>
            <Form.Control type="Text" placeholder="" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
  
          {/* <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
   */}
          <Form.Group as={Col} controlId="">
            <Form.Label>Pin</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
  
        {/* <Form.Group className="mb-3" id="">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
     </div> 
  </div>
   
    );
}
export default Hotelform;