import React, { Component } from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import '../styles/bottoms.css'

export default class Bottoms extends Component {
    constructor() {
        super()

        this.state = {
            bottoms: []
        }
    }

    grabAllBottoms = async () => {
        try {
            const res = await axios.get("http://localhost:8080/bottoms")
            this.setState({ bottoms: res.data })
        } catch(e) {
            console.error(e, e.message);
        }
    };

    deleteBottom = (id) => {
        axios.delete(`http://localhost:8080/bottoms/` + id)
        .then(res => {
            if (res.data != null) {
                this.setState({ 
                    tops: this.state.bottoms.filter( bottoms => bottoms.id !== id)
              })
              this.grabAllBottoms();
            }
        }) 
    }

    componentDidMount() {
        this.grabAllBottoms();
    }


    render() {
        return (
            <div className="bottoms">
        <h1 className='header'>Bottoms</h1>
        <div className='bottoms-div'>
        {
          this.state.bottoms.map((listings) => {
            return (
              <Card
                bg="info"
                text="white"
                style={{ width: "18rem" }}
                className="mb-2 cards"
              >
                <Card.Header>Bottoms</Card.Header>
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
          </div>
        )
    }
}
