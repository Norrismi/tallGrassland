import React, { Component } from "react";
import "./contactForm.css";
import { userCommentTwo } from "../../../../store/actions/submissionAction";
import { connect } from "react-redux";

class ContactFormTwo extends Component {
  state = {
    wantToOwn: "",
    select: "",
    name: "",
    email: "",
    comment: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      wantToOwn: "",
      select: "",
      name: "",
      email: "",
      comment: "",
    });
    this.props.userCommentTwo(this.state);
  };

  render() {
    let states = [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Minor Outlying Islands",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "U.S. Virgin Islands",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ];

    return (
      <form className="contact p-4" onSubmit={this.handleSubmit}>
        <h3 className="text-center m-4">Stay Updated</h3>
        <div className="form-group">
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
            {states && states.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            id="howDidYouFindUs"
            name="select"
            value={this.state.select}
            onChange={this.handleChange}
          >
            <option style={{ display: "none" }}> How did you find us?</option>
            <option>Criagslist</option>
            <option>Facebook</option>
            <option>Google</option>
            <option>Landwatch</option>
            <option>Zillow</option>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userCommentTwo: (comment) => dispatch(userCommentTwo(comment)),
  };
};

const mapStateToProps = (state) => {
  return {
    // auth: state.firebase.auth,
    // authError: state.auth.authError,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormTwo);
