import React, { Component } from "react";
import "./AuthForm.css";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";


class SignIn extends Component {
  state = {
    password: "",
    email: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ password: "", email: "" });

    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    // console.log(users);

    if (auth.uid) return <Redirect to="/" />;


    return (
      <div>
        <div className="auth__container">
          <div className="auth__card">
            <form className='auth__card-fields' onSubmit={this.handleSubmit}>
              <h5 className="auth__title">Sign In</h5>

              <div>
                <input
                  id="auth-input"
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
                  id="auth-input"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="auth__error-container ">

                {authError &&
                  <p className="auth__error mt-3">{authError}</p>
                }
              </div>

              <br />
              <div className="auth__btn-container">
                <button className="auth__btn" type="submit">
                  Login
                </button>
              </div>

              <div className="mt-3">
                *You must sign in before reserving property.
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => {
      dispatch(signIn(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
