import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      style={{ 
        background: 'linear-gradient(90deg, #4a90e2, #50e3c2)', 
        padding: '10px 20px' 
      }}
    >
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link className="navbar-brand" to="/">
          Book Library
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: 'auto' }}>
            <Nav.Link as={Link} to="/" style={{ color: 'black', marginRight: '15px' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/my-library" style={{ color: 'black' }}>
              My Library
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

