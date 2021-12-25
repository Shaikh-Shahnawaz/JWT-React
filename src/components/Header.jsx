import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = ({}) => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!localStorage.getItem('token') ? (
                <>
                  <Nav.Link href="#home">
                    <Link to="/">Signup</Link>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Link to="/login">Login</Link>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link href="#link">
                  <Link onClick={logout} to="/login">
                    Logout
                  </Link>
                </Nav.Link>
              )}
              <Nav.Link href="#link">
                {' '}
                <Link to="/home">Home</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
