import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import axios from 'axios'

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
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Size</th>
              <th>Condition</th>
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
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
