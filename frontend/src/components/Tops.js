import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
import axios from "axios";
import "../styles/tops.css";

export default class Tops extends Component {
  constructor() {
    super();

    this.state = {
      tops: [],
      
    };
  }

//   deleteTop = async (itemId) => {
//       try {
//         //   const res = await axios.delete(`http://localhost:8080/tops/${itemId}`)
        
//           const secondRes = await axios.get("http://localhost:8080/tops")
//           this.setState({ deleteId: itemId })
//           console.log(this.state.deleteId)
//       } catch(e) {
//           console.error(e, e.message)
//       }
//   }

  grabAllTops = async () => {
    try {
      const res = await axios.get("http://localhost:8080/tops");
      this.setState({ tops: res.data });
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
      <div className="tops-div">
        <Table className="listings-table" striped bordered hover>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Zipcode</th>
              <th>Description</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tops.map((listings) => {
              return (
                <tr>
                  <td>{listings.id}</td>
                  <td>{listings.itemName}</td>
                  <td>{listings.price}</td>
                  <td>{listings.size}</td>
                  <td>{listings.condition}</td>
                  <td><Button variant='danger'>delete</Button><Button variant='primary'>edit</Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
