import React, { Component } from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";

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

    componentDidMount() {
        this.grabAllBottoms();
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
                {this.state.bottoms.map((listings) => {
                  return (
                    <tr>
                      <td>{listings.itemName}</td>
                      <td>{listings.price}</td>
                      <td>{listings.description}</td>
                      <td>{listings.zipcode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )
    }
}
