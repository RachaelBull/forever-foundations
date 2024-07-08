import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" height="45" />
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <NavLink to="/"><i className="fa-solid fa-house"></i> Home</NavLink>
                    <NavLink to="/signin"><i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In</NavLink>
                    <NavLink to="/signup"><i className="fa-solid fa-user-plus"></i> Sign Up</NavLink>
                    <NavDropdown title="Information" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to="/gettingmarriedinitaly">Getting Married In Italy</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/gettingmarriedintheuk">Getting Married In The UK</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/gettingmarriedinspain">Getting Married In Spain</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/gettingmarriedingreece">Getting Married In Greece</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <NavLink to="/choosingyourlocation">Choosing Your Location</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/budgetfriendlytips">Budget Friendly Tips</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
};

export default NavBar