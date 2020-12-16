import React, { Component } from "react";
import "./AuthForm.css";
 import { connect } from "react-redux";
 import { Redirect } from "react-router-dom";
 import { signUp } from "../../store/actions/authActions";



class SignUp extends Component {
  state = {
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ password: "", email: "", firstName: "", lastName: "" });

     this.props.signUp(this.state);
  };

  render() {

    const { auth, authError } = this.props;

     if (auth.uid) return <Redirect to="/" />;

    return (
      <div>
  
        <div className="auth__container">
          <div className="auth__card">
            <form className="auth__card-fields" onSubmit={this.handleSubmit}>
              <h5 className="auth__title">Sign Up</h5>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
              </div>
              <br />

              <div>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />
              </div>
              <br />
              <div>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="abc@email.com"
                  required
                />
              </div>
              <br />
              <div>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                  required
                />
              </div>

              <div className='auth__error-container'>

              {authError ?   <p className="auth__error mt-3">{authError}</p> : null}
              </div>

              <br />

              <div className="auth__btn-container">
                <button className="auth__btn" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
