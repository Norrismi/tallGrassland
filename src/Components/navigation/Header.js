import React from "./node_modules/react";
import "./Header.css";
import { Link } from "./node_modules/react-router-dom";
import { Navbar, Nav } from "./node_modules/react-bootstrap";

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
