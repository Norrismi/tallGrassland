import React, { Component } from "react";
import "./AuthForm.css";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import TopNavControl from '../nav/topNavControl/TopNavControl'

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
     console.log(this.props)
    const { authError, auth } = this.props;
  

    if (auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <TopNavControl/>
        <div className="auth__container">
          <div className="auth__card">
            <form onSubmit={this.handleSubmit}>
              <h5 className="auth__title">Login</h5>

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

                <div>
                  {authError ? <p className="center">{authError}</p> : null}
                </div>
              </div>

              <br />
              <div className="auth-btn-container">
                <button className="auth-sub" type="submit">
                  Login
                </button>
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
