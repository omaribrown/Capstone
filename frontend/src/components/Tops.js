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

  grabAllTops = async () => {
    try {
      const res = await axios.get("http://localhost:8080/tops");
      this.setState({ tops: res.data });
      console.log(res.data);
    } catch (e) {
      console.error(e, e.message);
    }
  };

//   deleteTop = async (id) => {
//       try {
//           const res = await axios.delete(`http://localhost:8080/tops/` + id)
//           const secondRes = await axios.get("http://localhost:8080/tops");
//         this.setState({ tops: res.data });
//       } catch(e) {
//           console.error(e, e.message)
//       }
//   }


  deleteTop = (id) => {
      axios.delete(`http://localhost:8080/tops/` + id)
      .then(res => {
          if (res.data != null) {
            //   alert("item deleted");
              this.setState({ 
                  tops: this.state.tops.filter( tops => tops.id !== id)
            })
            this.grabAllTops();
          }
      }) 
  }

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
                  <td>{listings.zipcode}</td>
                  <td>{listings.description}</td>
                  <td><Button variant='danger' id={ listings.id } onClick={ (e) => this.deleteTop(e.target.id) }>delete</Button><Button variant='primary'>edit</Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
