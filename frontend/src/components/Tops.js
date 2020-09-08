import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../styles/tops.css";
import trash from "../styles/assets/trash.png";
import edit from "../styles/assets/edit.png";
import Card from "react-bootstrap/Card";

export default class Tops extends Component {
  constructor() {
    super();

    this.state = {
      tops: [],
    };
  }

  grabAllTops = async () => {
    try {
      const res = await axios.get("http://localhost:8080/tops");
      this.setState({ tops: res.data });
    } catch (e) {
      console.error(e, e.message);
    }
  };

  deleteTop = (id) => {
    axios.delete(`http://localhost:8080/tops/` + id).then((res) => {
      if (res.data != null) {
        this.setState({
          tops: this.state.tops.filter((tops) => tops.id !== id),
        });
        this.grabAllTops();
      }
    });
  };

  createSampleTops = async () => {
      try {
        const starterTops = await axios.post(  `http://localhost:8080/tops`, [ 
                {
                    "itemName": "Sample Item",
                    "price": "10",
                    "zipcode": "30303",
                    "description": "New"
                }]
        )
        const getTops = await axios.get(`http://localhost:8080/tops`)
      } catch(e) {
          console.error(e, e.message)
      }
  }

  componentDidMount() {
    // this.createSampleTops();
    this.grabAllTops();
  }

  render() {
    return (
      <div className="tops">
        <h1 className='header'>Tops</h1>
        <div className='tops-div'>
        {
          this.state.tops.map((listings) => {
            return (
              <Card
                bg="info"
                text="white"
                style={{ width: "18rem" }}
                className="mb-2 cards"
              >
                <Card.Header>Tops</Card.Header>
                <Card.Body>
                  <Card.Title>{listings.itemName}</Card.Title>
                  <Card.Text>Info: {listings.description}</Card.Text>
                  <Card.Footer variant="info">
                    <Card.Text><h4>${listings.price}</h4></Card.Text>
                    <Card.Text>Zipcode: {listings.zipcode}</Card.Text>
                  </Card.Footer>
                </Card.Body>
              </Card>
            );
          })
        }
        
        </div>
        <div className='button-group'>
        <Button className='button-group-items' variant='warning' onClick={this.createSampleItem}>Generate Sample Listing</Button>
        <Button className='button-group-items' variant='warning' href='/list'>Create Your Own Listing</Button>
        </div>
      </div>
    );
  }
}
