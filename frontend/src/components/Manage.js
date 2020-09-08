import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "../styles/manage.css";

export default class Manage extends Component {
  constructor() {
    super();
    this.state = {
      tops: [],
      bottoms: [],
      shoesEtc: [],
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

  deleteTop = (id) => {
    axios.delete(`http://localhost:8080/tops/` + id).then((res) => {
      if (res.data != null) {
        //   alert("item deleted");
        this.setState({
          tops: this.state.tops.filter((tops) => tops.id !== id),
        });
        this.grabAllTops();
      }
    });
  };

  grabAllBottoms = async () => {
    try {
      const res = await axios.get("http://localhost:8080/bottoms");
      this.setState({ bottoms: res.data });
    } catch (e) {
      console.error(e, e.message);
    }
  };
  deleteBottom = (id) => {
    axios.delete(`http://localhost:8080/bottoms/` + id).then((res) => {
      if (res.data != null) {
        this.setState({
          tops: this.state.bottoms.filter((bottoms) => bottoms.id !== id),
        });
        this.grabAllBottoms();
      }
    });
  };

  grabAllShoesEtc = async () => {
    try {
      const res = await axios.get("http://localhost:8080/shoesetc");
      this.setState({ shoesEtc: res.data });
    } catch (e) {
      console.error(e, e.message);
    }
  };

  deleteShoesetc = (id) => {
    axios.delete(`http://localhost:8080/shoesetc/` + id).then((res) => {
      if (res.data != null) {
        this.setState({
          shoesEtc: this.state.shoesetc.filter(
            (shoesetc) => shoesetc.id !== id
          ),
        });
        this.grabAllShoesEtc();
      }
    });
  };

  componentDidMount() {
    this.grabAllTops();
    this.grabAllBottoms();
    this.grabAllShoesEtc();
  }

  render() {
    return (
      <div className="manage-div">
        <div className="tops-table">
          <h1 className="table-header">Tops</h1>
          <Table striped bordered hover>
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
                    <td>
                      <Button
                        variant="warning"
                        id={listings.id}
                        onClick={(e) => this.deleteTop(e.target.id)}
                      >
                        Delete
                      </Button>
                      <Button variant="primary">edit</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="bottoms-table">
          <h1 className="table-header">Bottoms</h1>
          <Table striped bordered hover>
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
              {this.state.bottoms.map((listings) => {
                return (
                  <tr>
                    <td>{listings.id}</td>
                    <td>{listings.itemName}</td>
                    <td>{listings.price}</td>
                    <td>{listings.zipcode}</td>
                    <td>{listings.description}</td>
                    <td>
                      <Button
                        variant="warning"
                        id={listings.id}
                        onClick={(e) => this.deleteBottom(e.target.id)}
                      >
                        Delete
                      </Button>
                      <Button variant="primary">edit</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="shoesetc-table">
          <h1 className="table-header">Shoes & Accessories</h1>
          <Table striped bordered hover>
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
              {this.state.shoesEtc.map((listings) => {
                return (
                  <tr>
                    <td>{listings.id}</td>
                    <td>{listings.itemName}</td>
                    <td>{listings.price}</td>
                    <td>{listings.zipcode}</td>
                    <td>{listings.description}</td>
                    <td>
                      <Button
                        variant="warning"
                        id={listings.id}
                        onClick={(e) => this.deleteShoesetc(e.target.id)}
                      >
                        Delete
                      </Button>
                      <Button variant="primary">edit</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
