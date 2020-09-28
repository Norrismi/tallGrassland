import React, { Component } from "react";
import { completeCheckout } from "../../../store/actions/paymentActions";
import { connect } from "react-redux";
import "./checkoutForm.css";

class checkoutForm extends Component {
  state = {
    name: "",
    email: "",
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

    const {exp, cardNumber, cvc} = this.state

    const split_exp = exp.value.split('-')

    const payment = {
        number: cardNumber.value,
        exp_month: split_exp[1],
        exp_year: split_exp[0],
        cvc: cvc.value
    }

    //Add in Address Filed in form and come back


    this.setState({
      name: "",
      email: "",
      cardNumber: "",
      exp: "",
      cvc: "",
    });
    this.props.paymentSubmission(this.state);
  };

  render() {
    return (
      <form className="checkoutForm p-4" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Your Name"
            aria-describedby="nameInput"
            required
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            className="form-control"
            aria-describedby="emailInput"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className=" mb-3">
          <label>Credit card number</label>
          <input
            type="text"
            name="cardNumber"
            value={this.state.cardNumber}
            onChange={this.handleChange}
            className="form-control"
            id="cc-number"
            placeholder=""
            required
          />
          <div className="invalid-feedback">Credit card number is required</div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label>Expiration</label>
            <input
              type="text"
              name="exp"
              value={this.state.exp}
              onChange={this.handleChange}
              className="form-control"
              id="cc-exp"
              placeholder=""
              required
            />
            <div className="invalid-feedback">Expiration date required</div>
          </div>
          <div className="col mb-3">
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              value={this.state.cvc}
              onChange={this.handleChange}
              className="form-control"
              id="cc-cvc"
              placeholder=""
              required
            />
            <div className="invalid-feedback">Security code required</div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //paymentSubmission: (paymentDetails) => dispatch(paymentSubmission(paymentDetails)),
    completeCheckout: (paymentComplete) => dispatch(completeCheckout(paymentComplete)),
  };
};

export default connect(null, mapDispatchToProps)(checkoutForm);
