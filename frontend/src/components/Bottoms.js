import React, { Component } from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from 'react-bootstrap/Button'

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
                      <td><Button variant='danger' id={ listings.id } onClick={ (e) => this.deleteBottom(e.target.id) }>delete</Button><Button variant='primary'>edit</Button></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )
    }
}
