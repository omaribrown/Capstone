import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Tops from './components/Tops'
import Home from './components/Home'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navbar bg='dark' variant='dark' fixed='top'>
          <Navbar.Brand to='/'>Aristotle's Closet</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/list'>List Something</Nav.Link>
            <Nav.Link href='/tops'>Tops</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
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
    </Router>
  );
}

export default App;
