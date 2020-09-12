import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ListingCheckout from './listingChckout/ListingCheckout'

const Checkout = (props) => {
  // console.log(props.cart);

  const { cart } = props;
  

  return (
    <div>
        <ListingCheckout cart={cart} />
    
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    //cart: state.firestore.data.cart,
    cart: state.firestore.ordered.cart,
  
    
    
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "cart" }])
)(Checkout);
