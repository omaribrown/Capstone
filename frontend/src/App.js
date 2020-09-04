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

// ANCHOR ADD MANAGE BUTTON THAT SHOWS EDIT/DELETE BUTTONS
// ANCHOR THEN ADD SIGNED IN AS TO NAVBAR


function App() {
  return (
    <Router>
      <div>
        <Navbar bg='dark' variant='dark' fixed='top`'>
          <Navbar.Brand href='/'>Aristotle's Closet</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/tops'>Tops</Nav.Link>
            <Nav.Link href='/bottoms'>Bottoms</Nav.Link>
            <Nav.Link href='/shoesetc'>Shoes & Accessories</Nav.Link>
          </Nav>
          <Nav className='justify-content-end'>
            <Nav.Link href='/'>Manage Listings</Nav.Link>
            <Nav.Link href='/list'>List Something</Nav.Link>
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
