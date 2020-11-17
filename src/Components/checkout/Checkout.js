import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ListingCheckout from "./listingChckout/ListingCheckout";
import CheckoutForm from "./checkoutForm/checkoutForm";
import "./checkout.css";

const Checkout = ({cart}) => {


  return (
    <div className="d-flex justify-content-center min-vh-100">
      <div className="checkoutPage">
        {cart && cart.length ? (
          <div className="checkoutPage__container">
            <h3 className="checkoutPage__title">
              <div id="title" className="mt-5">
                This is your selected property ready for checkout.
              </div>
            </h3>
            <div className="mb-4">
              <ListingCheckout cart={cart} />
              <CheckoutForm cart={cart} />
            </div>
          </div>
        ) : (
          <h4 className="checkoutPage__title-no-items">
            <div id="title">You have not selected any items.</div>
            <div id="title">Add Items to your cart before checkout.</div>
          </h4>
        )}
      </div>
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
