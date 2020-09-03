import React, { Component } from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from 'react-bootstrap/Button'

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

    deleteShoesetc = (id) => {
      axios.delete(`http://localhost:8080/shoesetc/` + id)
      .then(res => {
          if (res.data != null) {
              this.setState({ 
                  tops: this.state.shoesetc.filter( shoesetc => shoesetc.id !== id)
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
            <div className="bottoms-div">
            <Table className="bottoms-listings" striped bordered hover>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Zipcode</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.shoesEtc.map((listings) => {
                  return (
                    <tr>
                      <td>{listings.itemName}</td>
                      <td>{listings.price}</td>
                      <td>{listings.zipcode}</td>
                      <td>{listings.description}</td>
                      <td><Button variant='danger' id={ listings.id } onClick={ (e) => this.deleteShoesetc(e.target.id) }>delete</Button><Button variant='primary'>edit</Button></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )
    }
}
