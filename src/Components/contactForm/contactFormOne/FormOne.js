import React, { Component } from "react";
import "./FormOne.css";
import { userCommentOne } from "../../../store/actions/submissionActions";
import { connect } from "react-redux";

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
      <form className="contact__one p-4" onSubmit={this.handleSubmit}>
        <h4 className="text-center mb-4">
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
              <option>Criagslist</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>Landwatch</option>
              <option>Zillow</option>
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
              required
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
              required
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userCommentOne: (comment) => dispatch(userCommentOne(comment)),
  };
};

export default connect(null, mapDispatchToProps)(FormOne);
