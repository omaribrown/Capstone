import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Tops from './components/Tops'
import Home from './components/Home'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Bottoms from './components/Bottoms'
import ShoesEtc from './components/ShoesEtc'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Footer from './components/Footer'
import Share from './components/Share'
import { NavDropdown } from 'react-bootstrap';
import Manage from './components/Manage'

function App() {
  return (
    <Router>
      <div>
        <Navbar variant='dark' fixed='top`'>
          <Navbar.Brand href='/'>Aristotle's Closet</Navbar.Brand>
          <Nav className='mr-auto'>
            <NavDropdown title='Shop' id='collapsible-nav-dropdown'>
              <NavDropdown.Item href='/tops'>Tops</NavDropdown.Item>
              <NavDropdown.Item href='/bottoms'>Bottoms</NavDropdown.Item>
              <NavDropdown.Item href='/shoesetc'>Shoes & Accessories</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='justify-content-end'>
            <Nav.Link href='/list'>List Something</Nav.Link>
            <Nav.Link href='/manage'>Manage Listings</Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#">Test User</a>
            </Navbar.Text>
          </Nav>
        </Navbar>

        <Switch>
          <Route path='/shoesetc'>
            <ShoesEtc />
          </Route>
          <Route path='/bottoms'>
            <Bottoms />
          </Route>
          <Route path='/list'>
            <List />
          </Route>
          <Route path='/manage'>
            <Manage />
          </Route>
          <Route path='/tops'>
            <Tops />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
              {/* <Share /> */}

      <Footer />
    </Router>       
  );
}

export default App;
