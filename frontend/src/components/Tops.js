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

  deleteTop = async () => {
      try {
          const res = await axios.delete(`http://localhost:8080/tops/${}`)
          const secondRes = await axios.get("http://localhost:8080/tops")
      } catch(e) {
          console.error(e, e.message)
      }
  }

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
              <th>Item Name</th>
              <th>Price</th>
              <th>Size</th>
              <th>Condition</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tops.map((listings) => {
              return (
                <tr>
                  <td>{listings.itemName}</td>
                  <td>{listings.price}</td>
                  <td>{listings.size}</td>
                  <td>{listings.condition}</td>
                  <td><Button id={listings.id} variant='danger' onClick={this.deleteTop}>delete</Button><Button variant='primary'>edit</Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
