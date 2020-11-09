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

    <div className="signed_in_links d-flex flex-row ">
      <li className=" p-3 text-white" to='/'> Hello,  {email && email}
      </li>


      <Link className="header__link p-2 mr-5" to={'/checkout'}>
        <div className="header__checkout__number">{(cart?.length)}</div>
        <FaShoppingCart />
      </Link>


      <Link className="header__link p-3" to='/sign_out' onClick={props.signOut}> Log Out</Link>
      <Link className="header__link p-3" to="/">Home</Link>
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
