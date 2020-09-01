import React, { Component } from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";

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
                  <th>Description</th>
                  <th>Zipcode</th>
                </tr>
              </thead>
              <tbody>
                {this.state.shoesEtc.map((listings) => {
                  return (
                    <tr>
                      <td>{listings.itemName}</td>
                      <td>{listings.price}</td>
                      <td>{listings.size}</td>
                      <td>{listings.condition}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )
    }
}