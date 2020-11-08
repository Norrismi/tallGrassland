import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Navbar, Nav } from "react-bootstrap";
import SignedInLinks from "../SignedInLinks/SignedInLinks";
import SignedOutLinks from "../SignOutLinks/SignedOutLinks";



const Header = (props, {properties, cart}) => {
 
  const {auth} = props
  //console.log(auth)

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

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
            {auth.isLoaded && links}         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};


const mapStateToProps = (state) => {

  return {
    cart: state.firestore.ordered.cart,
    auth: state.firebase.auth,
  
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "cart" }])
)(Header);


