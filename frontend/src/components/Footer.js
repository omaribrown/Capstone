import React from "react";
import "../styles/footer.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-links">
        <ul>
          <a href='/'><li>Home</li></a>
          <a href='/tops'><li>Tops</li></a>
          <a href='/bottoms'><li>Bottoms</li></a>
          <a href='/shoesetc'><li>Shoes & Accessories</li></a>
        </ul>
        <ul>
        <a href='/list'><li>List an Item</li></a>
        <li>Manage Listings (Coming Soon) </li> 
        </ul>
      </div>
      <div className="newsletter">
        <h3>
          Subscribe to our newsletter!
        </h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" className='email-input'/>
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Footer;
