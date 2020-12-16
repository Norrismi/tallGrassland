import React from "react";
import './SignedInLinks.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { signOut } from "../../../store/actions/authActions";
import { FaShoppingCart } from "react-icons/fa";


const SignedInLinks = (props) => {

  const { cart, email } = props


  return (

    <div className="signed_in_links  ">


      <li className="text-white" to='/'> Hello,  {email && email}</li>
      <Link className="header__link cart-container" to={'/checkout'}>
        <div className="header__checkout-number">{(cart?.length)}</div>
        <FaShoppingCart className="header__checkout-cart"/>
      </Link>


      <Link to="/faq" className="header__link">FAQ</Link>
      <Link className="header__link" to="/">Home</Link>
      <Link className="header__link" to='/sign_out' onClick={props.signOut}> Log Out</Link>
    </div>

  );
};

const mapStateToProps = (state) => {


  return {


    cart: state.firestore.ordered.cart,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

//export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(

    [{ collection: "cart" }])
)(SignedInLinks);
