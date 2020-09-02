import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/list.css";
// ANCHOR add a category option to effect post endpoint
// ANCHOR ADD MOCAL TO SAY THANKS FOR LISTING AND ASK IF LIST SOMETHING ELSE IF NOT REROUTE TO LISTINGS
export default class List extends Component {
  constructor() {
    super();

    this.state = {
      itemName: "",
      zipcode: "",
      price: "",
      description: "",
      category: "",
    };
  }
  handleNameChange = (e) => {
    this.setState({
      itemName: e.target.value,
    });
  };
  handleZipcodeChange = (e) => {
    this.setState({
      zipcode: e.target.value,
    });
  };
  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value,
    })
  }

  handleSubmit = async (e) => {
    try {
      console.log(this.state)
      const firstRes = await axios.post(
        `http://localhost:8080/` + this.state.category,
        this.state
      );
      console.log(this.state)
    } catch {
      console.error(e, e.message);
    }
  };

  render() {
    return (
      <div className='list-div'>

        <h1>List an item</h1>
        <Form className="list-form">
          <Form.Group>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={this.state.itemName}
              onChange={this.handleNameChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="text"
              value={this.state.handlePriceChange}
              onChange={this.handlePriceChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={this.state.category}
              onChange={this.handleCategoryChange} as='select'>
                <option></option>
                <option value="tops">Tops</option>
                <option value="bottoms">Bottoms</option>
                {/* just use quotes for value */}
                <option value="shoesetc">Shoes & Accessories</option>
              </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              required
              type="text"
              value={this.state.size}
              onChange={this.handleZipcodeChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              value={this.state.condition}
              onChange={this.handleDescriptionChange}
            />
          </Form.Group>

          <Button type="submit" onClick={this.handleSubmit} variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
