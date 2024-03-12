
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavLink } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import './header.css'
import { Link } from 'react-router-dom';

function Header(){

  return(
    <Navbar bg="light" expand="lg" className="navbar">
    <Navbar.Brand
       href="#home">
      <img
        src={logo}
        height="30"
        width="30"
        className="d-inline-block align-top"
        alt="Logo"
      />
    </Navbar.Brand>
    <div className="header-container">
      <Form  inline={`${true}` }className="search-form">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
    <Nav className="nav-links">
      <Nav.Link as={ Link } to="/about">About</Nav.Link>
      <Nav.Link as={ Link } to="/blog">Blog</Nav.Link>
      <Nav.Link as={ Link } to="/popular">Popular</Nav.Link>
      <Nav.Link as={ Link } to="/basket">
        <FontAwesomeIcon icon={faBasketShopping} /> 
      </Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default Header