import React, { Component } from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import '../styles/shoesetc.css'

export default class ShoesEtc extends Component {
    constructor() {
        super()

        this.state = {
            shoesEtc: []
        }
    }

    grabAllShoesEtc = async () => {
        try {
            const res = await axios.get("http://localhost:8080/shoesetc")
            this.setState({ shoesEtc: res.data })
        } catch(e) {
            console.error(e, e.message);
        }
    };
    createSampleItem = async (e) => {
      try {
        const starterTops = await axios.post(  `http://localhost:8080/shoesetc`, 
                {
                    "itemName": "Sample Item",
                    "price": "10",
                    "zipcode": "30303",
                    "description": "New"
                }
        )
        this.grabAllShoesEtc()
      } catch(e) {
          console.error(e, e.message)
      }
  }

    deleteShoesetc = (id) => {
      axios.delete(`http://localhost:8080/shoesetc/` + id)
      .then(res => {
          if (res.data != null) {
              this.setState({ 
                  shoesEtc: this.state.shoesetc.filter( shoesetc => shoesetc.id !== id)
            })
            this.grabAllShoesEtc();
          }
      }) 
  }

    componentDidMount() {
        this.grabAllShoesEtc();
    }


    render() {
        return (
            <div className="shoesetc">
        <h1 className='page-header'>Shoes & Accessories</h1>
        <div className='shoesetc-div'>
        {
          this.state.shoesEtc.map((listings) => {
            return (
              <Card
                bg="info"
                text="white"
                style={{ width: "18rem" }}
                className="mb-2 cards"
              >
                <Card.Header>Shoes & Accessories</Card.Header>
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
