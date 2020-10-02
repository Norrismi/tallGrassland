import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { paymentSubmission } from "../../../store/actions/paymentActions";
import { connect } from "react-redux";
import "./checkoutForm.css";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import axios from '../../../utils';

const CheckoutForm = ({ cart }) => {
  //console.log(cart[0].property.price)

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true)

  const { price, title } = cart[0].property;
  const product = { title, price };
  const stripePrice = Number(price) * 100;


  useEffect(() => {
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/checkout/create?total=${stripePrice}`
        })
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [cart])


  console.log('The Secret >>>>>', clientSecret)



  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true)


    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card: elements.getElement(CardElement),
        }
    }).then(({paymentIntent}) => {
        setSucceeded(true)
        setError(null)
        setProcessing(false)

        // history.replace('/orders') >>>>>> Navigation to new page
    })

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    // });
    // if (!error) {
    //   console.log(paymentMethod);
    // } else {
    //   console.error(error);
    // }
  };

  const handleChange = (error) => {
    setDisabled(error.empty);
    setError(error.error ? error.error.message : "");
  };

  // const notifyError = () => toast("Error!");
  // const notifySuccess = () => toast("Success, payment sent!");

  return (
    <form onSubmit={handleSubmit} style={{ width: "400px" }}>
      <CardElement onChange={handleChange} />
      <button type="submit" disabled={processing || disabled || succeeded}>
        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    paymentSubmission: (paymentDetails) =>
      dispatch(paymentSubmission(paymentDetails)),
    // completeCheckout: (paymentComplete) =>
    //   dispatch(completeCheckout(paymentComplete)),
  };
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    //cart: state.firestore.ordered.cart,
    property: state.firestore.ordered.cart.property,
  };
};

//export default connect(null, mapDispatchToProps)(checkoutForm);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "cart" }])
)(CheckoutForm);
