import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import ProfilePicture from "./ProfilePic";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
  
    const { expanded, setExpanded, ref } = useClickOutsideToggle();
  
    const handleSignOut = async () => {
      try {
        await axios.post("dj-rest-auth/logout/");
        setCurrentUser(null);
        removeTokenTimestamp();
      } catch (err) {
        console.log(err);
      }
    };

    const addListingIcon = (
        <NavLink to="/posts/create" activeClassName={styles.Active}>
            <i className="fa-solid fa-user-plus"></i> Add Listing
        </NavLink> 
    )
    const loggedInLinksDisplay = <>
        <NavLink to="/feed" activeClassName={styles.Active}>
            <i className="fas-fa-stream"></i> Following
        </NavLink>
        <NavLink to="/loved" activeClassName={styles.Active}>
            <i className="fas-fa-heart"></i> Loved
        </NavLink>
        <NavLink to="/" onClick={handleSignOut}>
            <i className="fas-fa-sign-out-alt"></i> Sign Out
        </NavLink>
        <NavLink to={`/profiles/${currentUser?.profile_id}`}>
            <ProfilePicture src={currentUser?.profile_image} text="Profile" height={40} />
        </NavLink>
    </>;
    const loggedOutLinksDisplay = (
        <>
            <NavLink to="/signin" activeClassName={styles.Active}>
                        <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
                    </NavLink>
                    <NavLink to="/signup" activeClassName={styles.Active}>
                        <i className="fa-solid fa-user-plus"></i> Sign Up
                    </NavLink>
                    <NavDropdown title="Information" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to="/gettingmarriedinitaly">
                                Getting Married In Italy
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/gettingmarriedintheuk">
                                Getting Married In The UK
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/gettingmarriedinspain">
                                Getting Married In Spain
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/gettingmarriedingreece">
                                Getting Married In Greece
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <NavLink to="/choosingyourlocation">
                                Choosing Your Location
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/budgetfriendlytips">
                                Budget Friendly Tips
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
        </>
    );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/" activeClassName={styles.Active}>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45" />
                </Navbar.Brand>
            </NavLink>
            {currentUser && addListingIcon}
            <Navbar.Toggle
                ref={ref} 
                onClick={() => setExpanded(!expanded)} 
                aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <NavLink to="/" exact activeClassName={styles.Active}>
                        <i className="fa-solid fa-house"></i> Home
                    </NavLink>
                    {currentUser ? loggedInLinksDisplay : loggedOutLinksDisplay}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
};

export default NavBar