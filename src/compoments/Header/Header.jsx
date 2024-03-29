import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container fluid className='head-container'>
      <Row className="top-section justify-content-center align-items-center">
        <Col md={6} className="text-start">
          <div className="info">
            <p>Email: coolshoes@email.com</p>
            <p>Phone: +022 766181</p>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <div className="social-icons">
            <p>
              <em>Find us: </em>
              <a href="https://www.facebook.com/coolshoes" target="_blank" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30px" width="30px"   >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/coolshoes" target="_blank" title="Instagram" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30px" width="30px">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Navbar  expand="lg" className="navbar">
          <Navbar.Brand as={Link} to="/">
            <em><strong>Cool Shoes</strong></em>
          </Navbar.Brand>
          <div className="header-container">
            <Form inline="true" className="search-form">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button  className="custom-button">Search</Button>
            </Form>
          </div>
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/popular">Popular</Nav.Link>
            <Nav.Link as={Link} to="/basket">
              <FontAwesomeIcon icon={faBasketShopping} />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Header;
