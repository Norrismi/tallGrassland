import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import {removeCurrentListing} from '../../../store/actions/propertyActions'
import {pendingListing} from '../../../store/actions/propertyActions'
import { connect } from "react-redux";
import "./checkoutForm.css";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import axios from "../../../utils";

const CheckoutForm = ({ cart, removeListing, markPending }) => {
  
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  
  const { price, title } = cart[0].property;
  const product = { title, price };
  const stripePrice = Math.round(Number(price) * 100);
  //console.log(cart[0].id)
  const id = cart[0].id
  const propertyID = cart[0].propertyID





  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/checkout/create?total=${stripePrice}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  //console.log("The Secret >>>>>", clientSecret);




  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {


        setSucceeded(true);
        setError(null);
        setProcessing(false);
        removeListing(id)
        markPending(propertyID)
        history.replace('/success')
      });
  };





  const handleChange = (error) => {
    setDisabled(error.empty);
    setError(error.error ? error.error.message : "");
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "400px" }}>
      <CardElement onChange={handleChange} />

      <button disabled={processing || disabled || succeeded}>
        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
      </button>

      {error && <div>{error}</div>}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeListing: (id) => dispatch(removeCurrentListing(id)),
  markPending: (propertyID) => dispatch(pendingListing(propertyID))
 
});
// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     //cart: state.firestore.ordered.cart,
//     //property: state.firestore.ordered.cart.property,
//   };
// };



export default compose(
  connect(null, mapDispatchToProps),
  firestoreConnect([{ collection: "cart" }])
)(CheckoutForm);
