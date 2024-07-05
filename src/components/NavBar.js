import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <Nav.Link><i class="fa-solid fa-house"></i> Home</Nav.Link>
                    <Nav.Link><i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In</Nav.Link>
                    <Nav.Link><i class="fa-solid fa-user-plus"></i> Sign Up</Nav.Link>
                    <NavDropdown title="Information" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Getting Married In Italy</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Getting Married In The UK</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Getting Married In Spain</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Getting Married In Greece</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Choosing Your Location</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Budget Friendly Tips</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
  )
};

export default NavBar