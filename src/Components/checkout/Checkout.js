import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ListingCheckout from './listingChckout/ListingCheckout'

const Checkout = (props) => {
  
  const { cart } = props;
  console.log(cart);
  

  return (
    <div>
      <div className='w-50'>

         {cart && cart.length? (
        <h4 className='col  m-3'>Here are your items ready for checkout.</h4>
      ) : (
        <h4 className='col  m-3'>You have not selected any items. <br/>
          Add Items to your cart before checkout.</h4>
      )}
      </div>
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
