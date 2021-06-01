import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Navbar, Nav } from "react-bootstrap";
import SignedInLinks from "../SignedInLinks/SignedInLinks";
import SignedOutLinks from "../SignOutLinks/SignedOutLinks";



const Header = (props, { properties, cart, profile }) => {

  const { auth } = props
  const { email } = props.profile

  //console.log(props.profile)


  const links = auth.uid ? <SignedInLinks email={email} /> : <SignedOutLinks />;

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

  //  console.log(state)

  return {
    cart: state.firestore.ordered.cart,
    auth: state.firebase.auth,
    profile: state.firebase.profile

  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "cart" }])
)(Header);


