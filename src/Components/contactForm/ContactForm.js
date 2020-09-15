import React, { Component } from "react";
import "./contactForm.css";

// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
//import { signUp } from "../../store/actions/authActions";

class ContactForm extends Component {
  state = {
    email: "",
    name: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", name: "" });

    this.props.signUp(this.state);
  };

  render() {
    //let { formErrors } = this.state;

   // const { auth, authError } = this.props;

    //if (auth.uid) return <Redirect to="/" />;

    return (
      <form className='contact p-3'>
     

        
        <div className="form-group">
          <label >Password</label>
          <input
          
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input
            type='email'
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label >Example textarea</label>
          <textarea
            className="form-control"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            id="exampleFormControlTextarea1"
            placeholder="Leave us a message"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
  
      </form>

      // {/* <div>
      //         <div className="auth-container">
      //           <div className="auth-form">
      //             <form onSubmit={this.handleSubmit}>
      //               <h5 className="auth-title">Stay Updated</h5>

      //               <div>
      //                 <input
      //                   type="text"
      //                   name="name"
      //                   value={this.state.name}
      //                   onChange={this.handleChange}
      //                   placeholder="Your Name"
      //                   required
      //                 />
      //               </div>
      //               <br />
      //               <div>
      //                 <input
      //                   type="email"
      //                   name="email"
      //                   value={this.state.email}
      //                   onChange={this.handleChange}
      //                   placeholder="abc@email.com"
      //                   required
      //                 />
      //               </div>

      //               {authError ?   <p>{authError}</p> : null}

      //               <br />

      //               <div className="auth-btn-container">
      //                 <button className="auth-sub" type="submit">
      //                   Sign Up
      //                 </button>
      //               </div>
      //             </form>
      //           </div>
      //         </div>
      //       </div> */}
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signUp: (newUser) => dispatch(signUp(newUser)),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth,
//     authError: state.auth.authError,
//   };
// };

export default //connect(mapStateToProps, mapDispatchToProps)

ContactForm;
