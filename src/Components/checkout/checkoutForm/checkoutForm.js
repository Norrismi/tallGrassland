import React, { Component } from "react";
import { paymentSubmission } from "../../../store/actions/paymentActions";
import { connect } from "react-redux";
import "./checkoutForm.css";
import StripeCheckout from "react-stripe-checkout";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class checkoutForm extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    exp: "",
    cvc: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      name: "",
      email: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      exp: "",
      cvc: "",
    });
    this.props.paymentSubmission(this.state);
  };

  render(cart) {
    //console.log(this.props.cart[0].property.price);

    const { price, title } = this.props.cart[0].property;
    const product = { title, price };
    const stripePrice = Number(price).toFixed(2) * 100;

    // const notifyError = () => toast("Error!");
    // const notifySuccess = () => toast("Success, payment sent!");

    const handleToken = async (token, addresses) => {
      //console.log({ token, addresses });
      const response = await axios.post("http://localhost:8000/checkout", {
        token,
        product,
      });

      const { status } = response.data;
      if (status === "success") {
        return () => toast("Success, payment sent!");
      } else {
        return () => toast("Error!");
      }
    };

    return (
      <div>
        <StripeCheckout
          stripeKey="pk_test_JGPju7lamDwFKbqHzTgS7VJF004NgvW8xK"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={stripePrice}
          name={title}
        />
      </div>

      //   <form className="checkoutForm p-4" onSubmit={this.handleSubmit}>
      //     <div className="form-group">
      //       <label>Name</label>
      //       <input
      //         name="name"
      //         value={this.state.name}
      //         onChange={this.handleChange}
      //         className="form-control"
      //         placeholder="Your Name"
      //         aria-describedby="nameInput"
      //         required
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label>Email address</label>
      //       <input
      //         type="email"
      //         name="email"
      //         value={this.state.email}
      //         onChange={this.handleChange}
      //         className="form-control"
      //         aria-describedby="emailInput"
      //         placeholder="Enter email"
      //         required
      //       />
      //       <small id="emailHelp" className="form-text text-muted">
      //         We'll never share your email with anyone else.
      //       </small>
      //     </div>

      //     <div class="form-group">
      //       <label for="inputAddress">Address</label>
      //       <input
      //         type="text"
      //         name="address"
      //         value={this.state.address}
      //         onChange={this.handleChange}
      //         class="form-control"
      //         id="inputAddress"
      //         placeholder="1234 Main St"
      //       />
      //     </div>
      //     <div class="form-group">
      //       <label>Address 2</label>
      //       <input
      //         type="text"
      //         name="address2"
      //         value={this.state.address2}
      //         onChange={this.handleChange}
      //         class="form-control"
      //         id="inputAddress2"
      //         placeholder="Apartment, studio, or floor"
      //       />
      //     </div>
      //     <div class="form-row">
      //       <div class="form-group col-md-6">
      //         <label>City</label>
      //         <input
      //           type="text"
      //           name="city"
      //           value={this.state.city}
      //           onChange={this.handleChange}
      //           class="form-control"
      //           id="inputCity"
      //         />
      //       </div>
      //       <div class="form-group col-md-4">
      //         <label>State</label>
      //         <input
      //           type="text"
      //           name="state"
      //           value={this.state.state}
      //           onChange={this.handleChange}
      //           class="form-control"
      //           id="state"
      //         />
      //       </div>
      //       <div class="form-group col-md-2">
      //         <label>Zip</label>
      //         <input
      //           type="text"
      //           name="zip"
      //           value={this.state.zip}
      //           onChange={this.handleChange}
      //           class="form-control"
      //           id="inputZip"
      //         />
      //       </div>
      //     </div>

      //     <div className=" mb-3">
      //       <label>Credit card number</label>
      //       <input
      //         type="text"
      //         name="cardNumber"
      //         value={this.state.cardNumber}
      //         onChange={this.handleChange}
      //         className="form-control"
      //         id="cc-number"
      //         placeholder=""
      //         required
      //       />
      //       <div className="invalid-feedback">Credit card number is required</div>
      //     </div>
      //     <div className="row">
      //       <div className="col mb-3">
      //         <label>Expiration</label>
      //         <input
      //           type="text"
      //           name="exp"
      //           value={this.state.exp}
      //           onChange={this.handleChange}
      //           className="form-control"
      //           id="cc-exp"
      //           placeholder=""
      //           required
      //         />
      //         <div className="invalid-feedback">Expiration date required</div>
      //       </div>
      //       <div className="col mb-3">
      //         <label>CVC</label>
      //         <input
      //           type="text"
      //           name="cvc"
      //           value={this.state.cvc}
      //           onChange={this.handleChange}
      //           className="form-control"
      //           id="cc-cvc"
      //           placeholder=""
      //           required
      //         />
      //         <div className="invalid-feedback">Security code required</div>
      //       </div>
      //     </div>

      //     <button type="submit" className="btn btn-primary">
      //       Submit
      //     </button>
      //   </form>
    );
  }
}

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
)(checkoutForm);
