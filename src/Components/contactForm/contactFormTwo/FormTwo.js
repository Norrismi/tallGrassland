import React, { Component } from "react";
import "./FormTwo.css";
import { userCommentTwo } from "../../../store/actions/submissionActions";
import { connect } from "react-redux";
import {states} from '../../../utils'
import {socialMedia} from '../../../utils'

class ContactFormTwo extends Component {
  state = {
    wantToOwn: "",
    howFindUs: "",
    name: "",
    email: "",
    comment: "",
    disabled: true
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });

    if(event.target.value){
      this.setState({ disabled: false})
    }else{
      this.setState({disabled: true})
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      wantToOwn: "",
      howFindUs: "",
      name: "",
      email: "",
      comment: "",
    });
    this.props.userCommentTwo(this.state);
  };

  render() {
    

    return (
      <div className="contact__two-container ">

     
      <form className="contact__two p-4" onSubmit={this.handleSubmit}>
        <h3 className="contact__two-title text-center m-4">Stay Updated</h3>
        <div className="form-group">
          <select
            className="form-control"
            id="whereDoYouWantToOwnLand"
            name="wantToOwn"
            value={this.state.wantToOwn}
            onChange={this.handleChange}
          >
            <option style={{ display: "none" }}>
           
              Desired land location? 
            </option>
            {states && states.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Your Name"
            aria-describedby="nameInput"
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
        <div className="form-group">
          <textarea
            className="form-control"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="Leave us a message"
            aria-describedby="commentInput"
            rows="3"
          ></textarea>
        </div>

        <button 
        type="submit" 
        className="btn btn-success btn-sm " 
        disabled={this.state.disabled}>
          Submit
        </button>
      </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userCommentTwo: (comment) => dispatch(userCommentTwo(comment)),
  };
};

export default connect(null, mapDispatchToProps)(ContactFormTwo);
