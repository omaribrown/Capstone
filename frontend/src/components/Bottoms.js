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
    createSampleItem = async (e) => {
      try {
        const starterTops = await axios.post(  `http://localhost:8080/bottoms`, 
                {
                    "itemName": "Sample Item",
                    "price": "10",
                    "zipcode": "30303",
                    "description": "New"
                }
        )
        this.grabAllBottoms()
      } catch(e) {
          console.error(e, e.message)
      }
  }

    componentDidMount() {
        this.grabAllBottoms();
    }


    render() {
        return (
            <div className="bottoms">
        <h1 className='page-header'>Bottoms</h1>
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
        <div className='button-group'>
        <Button className='button-group-items' variant='warning' onClick={ (e) => this.createSampleItem()}>Generate Sample Listing</Button>
        <Button className='button-group-items' variant='warning' href='/list'>Create Your Own Listing</Button>
        </div>
          </div>
        )
    }
}
