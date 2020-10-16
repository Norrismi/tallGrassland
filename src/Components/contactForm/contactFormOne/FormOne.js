import React, { Component } from "react";
import "./FormOne.css";
import { userCommentOne } from "../../../store/actions/submissionActions";
import { connect } from "react-redux";
import {states} from '../../../utils'
import {socialMedia} from '../../../utils'

class FormOne extends Component {
  state = {
    wantToOwn: "",
    howFindUs: "",
    name: "",
    email: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      wantToOwn: "",
      howFindUs: "",
      name: "",
      email: "",
    });
    this.props.userCommentOne(this.state);
  };

  render() {
  

    return (
      <form className="contact__one p-4" onSubmit={this.handleSubmit}>
        <h4 className="contact__one-title text-center mb-4">
          Let us help you find your perfect property!
        </h4>

        <div className="contact__one-container form-row ">
          <div className="form-group col-4">
            <select
              className="form-control"
              id="whereDoYouWantToOwnLand"
              name="wantToOwn"
              value={this.state.wantToOwn}
              onChange={this.handleChange}
            >
              <option style={{ display: "none" }}>
                Where do you want to own land?
              </option>
              {states &&
                states.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div className="form-group col-3">
            <select
              className="form-control"
              id="howDidYouFindUs"
              name="howFindUs"
              value={this.state.howFindUs}
              onChange={this.handleChange}
            >
              <option style={{ display: "none" }}> How did you find us?</option>
              {socialMedia && socialMedia.map((item) => <option key={item}>{item}</option> )}
            </select>
          </div>
          <div className="form-group col">
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Your Name"
              aria-describedby="nameInput"
           
            />
          </div>
          <div className="form-group col">
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              aria-describedby="emailInput"
              placeholder="Enter email"
            
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
        </div>
        <div className="contact__one-button-container">
          <button type="submit" className="btn btn-success btn-sm">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userCommentOne: (comment) => dispatch(userCommentOne(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormOne);
