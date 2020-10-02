import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ListingCheckout from "./listingChckout/ListingCheckout";
import CheckoutForm from "./checkoutForm/checkoutForm";

const Checkout = (props) => {
  const { cart } = props;
  //console.log(cart);

  return (
    <div>
      <div className="checkoutPage__container w-50 d-flex col">
        {cart && cart.length ? (
          <div className=" d-flex row justify-content-center">
            <h4 className=" m-3">
              Here are your items ready for checkout.
            </h4>
            <ListingCheckout cart={cart} />
            <CheckoutForm cart={cart}/>
          </div>
        ) : (
          <h4 className="col  m-3">
            You have not selected any items. <br />
            Add Items to your cart before checkout.
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
