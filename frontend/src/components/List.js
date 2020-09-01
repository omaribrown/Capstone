import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/list.css";
// ANCHOR add a category option to effect post endpoint
export default class List extends Component {
  constructor() {
    super();

    this.state = {
      itemName: "",
      size: "",
      price: "",
      condition: "",
      db: [],
    };
  }
  handleNameChange = (e) => {
    this.setState({
      itemName: e.target.value,
    });
  };
  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value,
    });
  };
  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  handleConditionChange = (e) => {
    this.setState({
      condition: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const firstRes = await axios.post(
        "http://localhost:8080/tops",
        this.state
      );
      const secondRes = await axios.get("http://localhost:8080/tops");
      this.setState({ db: secondRes.data });
    } catch {
      console.error(e, e.message);
    }
  };

  grabAllTops = async () => {
    try {
      const res = await axios.get("http://localhost:8080/tops");
      this.setState({ db: res.data });
      console.log(res.data);
    } catch (e) {
      console.error(e, e.message);
    }
  };

  componentDidMount() {
    this.grabAllTops();
  }
  render() {
    return (
      <div className='list-div'>

        <h1>List an item</h1>
        <Form className="list-form">
          <Form.Group>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.itemName}
              onChange={this.handleNameChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              value={this.state.size}
              onChange={this.handleSizeChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={this.state.handlePriceChange}
              onChange={this.handlePriceChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Condition</Form.Label>
            <Form.Control
              type="text"
              value={this.state.condition}
              onChange={this.handleConditionChange}
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
