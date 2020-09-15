import React from "react";
import "./Header.css";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import SignedInLinks from "../SignedInLinks/SignedInLinks";
import SignedOutLinks from "../SignOutLinks/SignedOutLinks";
import { FaShoppingCart } from "react-icons/fa";


//import { auth } from "../../index";

const Header = ({properties, cart}) => {

  //console.log(props.properties)
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
            <SignedInLinks />
            <SignedOutLinks />

            {/* <Link to="/signin">
              <li className="header__link p-2">Sign in</li>
            </Link>

            <Link to="/signup">
              <li className="header__link p-2">Sign up</li>
            </Link> */}


 {/* to={"/property/" + property.id} */}
            <Link to={'/checkout'}>
              <li className="header__link p-2">
              <div className="header__checkout__number">{(cart?.length)}</div>
                <FaShoppingCart />
              </li>
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



const mapStateToProps = (state) => {
  // console.log(state);
  return {
    cart: state.firestore.ordered.cart,
  
    
    
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "cart" }])
)(Header);


