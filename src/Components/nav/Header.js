import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

//import { auth } from "../../index";

const Header = () => {
  //   const [{ basket, user }] = useStateValue();

  //   const logout = () => {
  //     if (user) {
  //       auth.signOut();
  //     }
  //   };

  return (
    <nav className="App sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        position="sticky"
      >
        <Navbar.Brand href="/" className="header__link">
          Tall Grassland
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto "></Nav>
          <Nav className="header__nav__container">
            <SignedInLinks/>
            <SignedOutLinks/>

            <Link to="/sign-in">
              <li className="header__link p-2">Sign in</li>
            </Link>

            <Link to="/sign-up">
              <li className="header__link p-2">Sign up</li>
            </Link>


            <Link to="/checkout">
              <li className="header__link p-2">Check Out</li>
            </Link>

            <Link to="/">
              <li className="header__link p-2">Home</li>
            </Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;
