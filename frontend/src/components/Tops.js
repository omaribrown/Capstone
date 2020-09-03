import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
import axios from "axios";
import "../styles/tops.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import trash from '../styles/assets/trash.png'
import edit from '../styles/assets/edit.png'

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
    } catch (e) {
      console.error(e, e.message);
    }
  };

  deleteTop = (id) => {
      axios.delete(`http://localhost:8080/tops/` + id)
      .then(res => {
          if (res.data != null) {
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
              {
                  this.state.tops.length === 0 ? 
                  <tr>
                      <td>Sorry! No Tops are available at this time! If you'd like to list a top click <a href="/list">her</a></td>
                  </tr> :
              
            this.state.tops.map((listings) => {
              return (
                <tr>
                  <td>{listings.id}</td>
                  <td>{listings.itemName}</td>
                  <td>{listings.price}</td>
                  <td>{listings.zipcode}</td>
                  <td>{listings.description}</td>
                  <td><Button variant='danger' id={ listings.id } onClick={ (e) => this.deleteTop(e.target.id) }><img src={trash} alt='delete listing'/></Button><Button variant='primary'><img src={edit} alt='edit listing'/></Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
